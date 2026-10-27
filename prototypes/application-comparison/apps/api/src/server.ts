import { serve } from "@hono/node-server";
import { OpenAPIHono, createRoute, z } from "@hono/zod-openapi";
import { Scalar } from "@scalar/hono-api-reference";
import { cors } from "hono/cors";
import { auth, captureMail, mail } from "./auth";
import { pool } from "./db";
import { initialize } from "./init";
import type { Trip } from "./fixture";

await initialize();
const app = new OpenAPIHono();
app.use("*", cors({
  origin: ["http://localhost:4310", "http://localhost:4320", "http://127.0.0.1:4310", "http://127.0.0.1:4320"],
  credentials: true, allowHeaders: ["Content-Type"], allowMethods: ["GET", "POST", "PATCH", "OPTIONS"]
}));
app.on(["GET", "POST"], "/api/auth/*", (c) => auth.handler(c.req.raw));
app.get("/api/health", (c) => c.json({ ok: true, prototype: true, database: "isolated PostgreSQL", google: "not configured; no live OAuth test" }));
app.get("/__prototype/mail", (c) => c.json(mail));
app.get("/api/me", async (c) => {
  const session = await auth.api.getSession({ headers: c.req.raw.headers });
  return c.json({ user: session?.user ?? null });
});
app.get("/api/notifications", async (c) => {
  const session = await auth.api.getSession({ headers: c.req.raw.headers });
  if (!session) return c.json({ error: "Accedi prima di continuare" }, 401);
  return c.json((await pool.query("SELECT id,message FROM prototype_notifications WHERE account_id=$1", [session.user.id])).rows);
});

async function membership(headers: Headers) {
  const session = await auth.api.getSession({ headers });
  if (!session) return null;
  await pool.query(
    "UPDATE prototype_participants SET account_id=$1 WHERE lower(email)=lower($2) AND account_id IS NULL",
    [session.user.id, session.user.email]
  );
  const member = (await pool.query(
    "SELECT * FROM prototype_participants WHERE trip_id='peru' AND account_id=$1 AND accepted=true AND archived=false AND role IS NOT NULL",
    [session.user.id]
  )).rows[0];
  return member ? { ...member, user: session.user } : null;
}
const json = (schema: z.ZodType) => ({ content: { "application/json": { schema } }, description: "Risposta JSON" });
const error = z.object({ error: z.string() });
const Item = z.object({ id: z.string(), title: z.string(), kind: z.string(), time: z.string(), group: z.string(), notes: z.string(), booking: z.string(), place: z.string() });
const Idea = z.object({ id: z.string(), title: z.string(), notes: z.string(), place: z.string() });
const TripSchema = z.object({
  id: z.string(), name: z.string(), dates: z.string(), currency: z.string(), homeCurrency: z.string(),
  days: z.array(z.object({ date: z.string(), label: z.string(), places: z.string(), summary: z.string(), items: z.array(Item) })),
  ideas: z.array(Idea),
  moneyExample: z.object({ originalAmount: z.string(), currency: z.string(), unitsPerEuro: z.string(), homeAmount: z.string() })
});
app.openapi(createRoute({
  method: "get", path: "/api/trips/peru",
  responses: { 200: json(z.object({ trip: TripSchema, role: z.string() })), 403: json(error) }
}), async (c) => {
  const member = await membership(c.req.raw.headers);
  if (!member) return c.json({ error: "Accesso al viaggio non autorizzato" }, 403);
  const row = (await pool.query("SELECT content FROM prototype_trips WHERE id='peru'")).rows[0];
  return c.json({ trip: row.content, role: member.role }, 200);
});

const Change = z.object({
  action: z.enum(["edit", "schedule", "moveBack"]),
  itemId: z.string(), title: z.string().min(1).optional(), notes: z.string().optional(),
  date: z.string().optional(), time: z.string().optional(),
  kind: z.enum(["activity", "transfer", "stay"]).optional(),
  group: z.enum(["timed", "all-day", "undecided"]).optional()
});
app.openapi(createRoute({
  method: "post", path: "/api/trips/peru/items",
  request: { body: { required: true, content: { "application/json": { schema: Change } } } },
  responses: { 200: json(z.object({ ok: z.boolean(), itemId: z.string() })), 400: json(error), 403: json(error) }
}), async (c) => {
  const member = await membership(c.req.raw.headers);
  if (!member || member.role === "Viewer") return c.json({ error: "Serve un ruolo di modifica" }, 403);
  const change = c.req.valid("json");
  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    const result = await client.query("SELECT content FROM prototype_trips WHERE id='peru' FOR UPDATE");
    const trip = result.rows[0].content as Trip;
    const previous = JSON.stringify(trip);
    let found = false;
    let changedId = change.itemId;
    if (change.action === "schedule") {
      const idea = trip.ideas.find((item) => item.id === change.itemId);
      const day = trip.days.find((item) => item.date === change.date);
      if (idea && day) {
        changedId = crypto.randomUUID();
        day.items.push({ ...idea, id: changedId, kind: change.kind ?? "activity", time: change.time ?? "", group: change.group ?? (change.time ? "timed" : "undecided"), booking: "" });
        trip.ideas = trip.ideas.filter((item) => item.id !== idea.id);
        found = true;
      }
    } else {
      for (const day of trip.days) {
        const index = day.items.findIndex((item) => item.id === change.itemId);
        if (index < 0) continue;
        const item = day.items[index];
        if (change.action === "moveBack") {
          trip.ideas.push({ id: item.id, title: item.title, notes: item.notes, place: item.place });
          day.items.splice(index, 1);
        } else {
          if (change.title !== undefined) item.title = change.title;
          if (change.notes !== undefined) item.notes = change.notes;
        }
        found = true;
        break;
      }
    }
    if (!found) { await client.query("ROLLBACK"); return c.json({ error: "Elemento o giorno campione non trovato" }, 400); }
    await client.query("INSERT INTO prototype_history(trip_id,account_id,previous) VALUES ('peru',$1,$2)", [member.account_id, previous]);
    await client.query("UPDATE prototype_trips SET content=$1 WHERE id='peru'", [JSON.stringify(trip)]);
    await client.query("COMMIT");
    return c.json({ ok: true, itemId: changedId }, 200);
  } catch (exception) {
    await client.query("ROLLBACK");
    throw exception;
  } finally { client.release(); }
});

app.openapi(createRoute({
  method: "post", path: "/api/invitations",
  request: { body: { required: true, content: { "application/json": { schema: z.object({ email: z.email(), role: z.enum(["Editor", "Viewer"]) }) } } } },
  responses: { 200: json(z.object({ token: z.string(), participantId: z.string(), accountLinked: z.boolean() })), 400: json(error), 403: json(error) }
}), async (c) => {
  const member = await membership(c.req.raw.headers);
  if (member?.role !== "Owner") return c.json({ error: "Solo Owner può invitare" }, 403);
  const body = c.req.valid("json"), email = body.email.toLowerCase();
  if (email === member.user.email.toLowerCase()) return c.json({ error: "Owner è già membro: usare un trasferimento esplicito per cambiare proprietà" }, 400);
  const account = (await pool.query('SELECT id FROM "user" WHERE lower(email)=$1', [email])).rows[0];
  const participant = (await pool.query(
    "INSERT INTO prototype_participants(id,trip_id,name,email,account_id) VALUES ($1,'peru',$2,$3,$4) ON CONFLICT(trip_id,email) DO UPDATE SET account_id=COALESCE(prototype_participants.account_id,excluded.account_id) RETURNING id",
    [crypto.randomUUID(), email.split("@")[0], email, account?.id ?? null]
  )).rows[0];
  const token = crypto.randomUUID();
  await pool.query("INSERT INTO prototype_invitations(token,participant_id,role) VALUES ($1,$2,$3)", [token, participant.id, body.role]);
  const frontend = c.req.header("origin") ?? "http://localhost:4310";
  captureMail("invitation", email, "Invito al viaggio Perù", frontend + "/?invite=" + token);
  if (account) await pool.query("INSERT INTO prototype_notifications(id,account_id,message) VALUES ($1,$2,$3)", [crypto.randomUUID(), account.id, "Sei stato invitato al viaggio Perù. Accetta dalla mail locale."]);
  return c.json({ token, participantId: participant.id, accountLinked: Boolean(account) }, 200);
});
app.openapi(createRoute({
  method: "post", path: "/api/invitations/accept",
  request: { body: { required: true, content: { "application/json": { schema: z.object({ token: z.string() }) } } } },
  responses: { 200: json(z.object({ participantId: z.string(), role: z.string() })), 403: json(error) }
}), async (c) => {
  const session = await auth.api.getSession({ headers: c.req.raw.headers });
  if (!session || !session.user.emailVerified) return c.json({ error: "Accedi con email verificata" }, 403);
  const token = c.req.valid("json").token;
  const candidate = (await pool.query("SELECT participant_id FROM prototype_invitations WHERE token=$1", [token])).rows[0];
  if (!candidate) return c.json({ error: "Invito non valido" }, 403);
  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    const participant = (await client.query("SELECT * FROM prototype_participants WHERE id=$1 FOR UPDATE", [candidate.participant_id])).rows[0];
    const invitation = (await client.query("SELECT * FROM prototype_invitations WHERE token=$1 FOR UPDATE", [token])).rows[0];
    if (!participant || !invitation || invitation.accepted || invitation.revoked || participant.email.toLowerCase() !== session.user.email.toLowerCase()) {
      await client.query("ROLLBACK");
      return c.json({ error: "Invito usato, revocato o non valido per questo account" }, 403);
    }
    await client.query("UPDATE prototype_participants SET account_id=$1, role=$2, accepted=true, archived=false WHERE id=$3", [session.user.id, invitation.role, invitation.participant_id]);
    await client.query("UPDATE prototype_invitations SET accepted=true WHERE token=$1", [token]);
    await client.query("COMMIT");
    return c.json({ participantId: invitation.participant_id, role: invitation.role }, 200);
  } catch (exception) {
    await client.query("ROLLBACK");
    throw exception;
  } finally { client.release(); }
});
app.openapi(createRoute({
  method: "post", path: "/api/participants/revoke",
  request: { body: { required: true, content: { "application/json": { schema: z.object({ participantId: z.string() }) } } } },
  responses: { 200: json(z.object({ ok: z.boolean() })), 403: json(error) }
}), async (c) => {
  const member = await membership(c.req.raw.headers);
  if (member?.role !== "Owner") return c.json({ error: "Solo Owner può revocare" }, 403);
  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    const revoked = await client.query("UPDATE prototype_participants SET accepted=false,role=NULL WHERE id=$1 AND role IS DISTINCT FROM 'Owner' RETURNING id", [c.req.valid("json").participantId]);
    if (revoked.rowCount) await client.query("UPDATE prototype_invitations SET revoked=true WHERE participant_id=$1", [revoked.rows[0].id]);
    await client.query("COMMIT");
  } catch (exception) {
    await client.query("ROLLBACK"); throw exception;
  } finally { client.release(); }
  return c.json({ ok: true }, 200);
});
app.get("/api/history", async (c) => {
  const member = await membership(c.req.raw.headers);
  if (!member) return c.json({ error: "Non autorizzato" }, 403);
  return c.json((await pool.query("SELECT id,changed_at,previous FROM prototype_history WHERE trip_id='peru' ORDER BY id DESC LIMIT 10")).rows);
});
app.doc("/api/openapi.json", { openapi: "3.0.0", info: { title: "Creuza — API del prototipo", version: "0.1.0" } });
app.get("/api/reference", Scalar({ url: "/api/openapi.json" }));
app.onError((exception, c) => { console.error(exception); return c.json({ error: "Errore del prototipo; vedere il terminale API" }, 500); });
serve({ fetch: app.fetch, port: 4300, hostname: "127.0.0.1" });
console.log("Prototype API http://localhost:4300 | Scalar /api/reference | local mailbox /__prototype/mail");
