// Local workerd probe, not Creuza's backend. See README before running.
import { OpenAPIHono, createRoute, z } from "@hono/zod-openapi";
import { Pool } from "pg";
import { makeAuth } from "./auth.mjs";

const app = new OpenAPIHono();
app.get("/health", (c) => c.json({ runtime: "workerd", synthetic: true }));
app.use("*", async (c, next) => {
  const pool = new Pool({ connectionString: c.env.DATABASE_URL, max: 1 });
  c.set("pool", pool);
  c.set("auth", makeAuth(pool, async ({ email, url }) => {
    // Local R2 emulation is a test mailbox. No network email is sent.
    await c.env.DOCUMENTS.put("__mail/" + email, url);
  }));
  try { await next(); }
  finally { c.executionCtx.waitUntil(pool.end()); }
});
app.on(["POST", "GET"], "/api/auth/*", (c) => c.get("auth").handler(c.req.raw));
app.use("/probe/*", async (c, next) => {
  const session = await c.get("auth").api.getSession({ headers: c.req.raw.headers });
  if (!session) return c.json({ error: "Unauthenticated" }, 401);
  const { rows } = await c.get("pool").query(
    "SELECT role FROM probe_members WHERE email=$1", [session.user.email]
  );
  if (!rows.length) return c.json({ error: "Not a member" }, 403);
  if (c.req.method !== "GET" && rows[0].role !== "Owner") {
    return c.json({ error: "Read only" }, 403);
  }
  await next();
});

const Trip = z.object({ id: z.string(), title: z.string() }).openapi("ProbeTrip");
const error = { description: "Access denied" };
app.openapi(createRoute({
  method: "get", path: "/probe/trip",
  responses: { 200: { description: "Synthetic trip", content: { "application/json": { schema: Trip } } }, 401: error, 403: error },
}), async (c) => {
  const { rows } = await c.get("pool").query("SELECT id,title FROM probe_trip WHERE id='peru'");
  return c.json(rows[0]);
});
app.openapi(createRoute({
  method: "post", path: "/probe/trip",
  request: { body: { content: { "application/json": { schema: z.object({ title: z.string().min(1) }) } } } },
  responses: { 200: { description: "Saved", content: { "application/json": { schema: Trip } } }, 401: error, 403: error },
}), async (c) => {
  const { title } = c.req.valid("json");
  const { rows } = await c.get("pool").query(
    "UPDATE probe_trip SET title=$1 WHERE id='peru' RETURNING id,title", [title]
  );
  return c.json(rows[0]);
});
app.post("/probe/file", async (c) => {
  const data = await c.req.arrayBuffer();
  if (data.byteLength > 20 * 1024 * 1024) return c.json({ error: "Too large" }, 413);
  await c.env.DOCUMENTS.put("peru/sample.pdf", data);
  return c.json({ stored: data.byteLength });
});
app.get("/probe/file", async (c) => {
  const file = await c.env.DOCUMENTS.get("peru/sample.pdf");
  if (!file) return c.notFound();
  return new Response(file.body, { headers: { "content-type": "application/pdf" } });
});
app.doc("/openapi.json", { openapi: "3.0.0", info: { title: "Creuza disposable runtime probe", version: "0.0.0" } });
export default app;
