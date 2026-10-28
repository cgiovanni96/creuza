import { OpenAPIHono, createRoute, z } from "@hono/zod-openapi";
import { Scalar } from "@scalar/hono-api-reference";
export function createApp({ pool, auth, mailbox }) {
 const app = new OpenAPIHono({ defaultHook: (result, c) => {
   if (!result.success) return c.json({ error: "Dati non validi" }, 400);
 } });
 app.on(["GET","POST"], "/api/auth/*", c => auth.handler(c.req.raw));
 if (mailbox) {
   app.get("/__local/mail", c => c.json(mailbox));
   app.get("/__local/inbox", c => {
     const escape = value => value.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;");
     return c.html(`<!doctype html><html lang="it"><meta charset="utf-8"><title>Posta locale Creuza</title><h1>Posta locale</h1><p>Solo sviluppo: nessuna email viene inviata.</p><ul>${mailbox.map(m=>`<li>${escape(m.email)}: <a href="${escape(m.url)}">Accedi</a></li>`).join("")}</ul></html>`);
   });
 }
 app.get("/api/me", async c => c.json({user:(await auth.api.getSession({headers:c.req.raw.headers}))?.user ?? null}));
 const Trip = z.object({id:z.string(),name:z.string()}).openapi("Trip");
 const ErrorSchema = z.object({error:z.string()});
 const json = schema => ({description:"Risposta JSON",content:{"application/json":{schema}}});
 const security = {401:json(ErrorSchema)};
 app.openapi(createRoute({method:"get",path:"/api/trips",responses:{200:json(z.array(Trip)),...security}}), async c => {
   const session = await auth.api.getSession({headers:c.req.raw.headers});
   if (!session) return c.json({error:"Accedi per continuare"},401);
   const {rows} = await pool.query("SELECT t.id,t.name FROM trips t JOIN memberships m ON m.trip_id=t.id WHERE m.account_id=$1 ORDER BY t.created_at DESC",[session.user.id]);
   return c.json(rows,200);
 });
 app.openapi(createRoute({method:"post",path:"/api/trips",request:{body:{required:true,content:{"application/json":{schema:z.object({name:z.string().trim().min(1).max(200)})}}}},responses:{201:json(Trip),400:json(ErrorSchema),...security}}), async c => {
   const session = await auth.api.getSession({headers:c.req.raw.headers});
   if (!session) return c.json({error:"Accedi per continuare"},401);
   const id=crypto.randomUUID(), participant=crypto.randomUUID(), name=c.req.valid("json").name;
   const client=await pool.connect();
   try { await client.query("BEGIN"); await client.query("INSERT INTO trips(id,name) VALUES($1,$2)",[id,name]);
     await client.query("INSERT INTO participants(id,trip_id,account_id,name) VALUES($1,$2,$3,$4)",[participant,id,session.user.id,session.user.name || session.user.email]);
     await client.query("INSERT INTO memberships(trip_id,account_id,participant_id,role) VALUES($1,$2,$3,'Owner')",[id,session.user.id,participant]);
     await client.query("COMMIT"); return c.json({id,name},201);
   } catch(e) { await client.query("ROLLBACK"); throw e; } finally { client.release(); }
 });
 app.openapi(createRoute({method:"get",path:"/api/trips/{id}",request:{params:z.object({id:z.string()})},responses:{200:json(Trip),404:json(ErrorSchema),...security}}),async c=>{
   const session=await auth.api.getSession({headers:c.req.raw.headers});
   if(!session) return c.json({error:"Accedi per continuare"},401);
   const {rows}=await pool.query("SELECT t.id,t.name FROM trips t JOIN memberships m ON m.trip_id=t.id WHERE t.id=$1 AND m.account_id=$2",[c.req.valid("param").id,session.user.id]);
   if(!rows.length) return c.json({error:"Viaggio non trovato"},404);
   return c.json(rows[0],200);
 });
 app.doc("/api/openapi.json",{openapi:"3.0.0",info:{title:"Creuza API",version:"0.1.0"}});
 app.get("/api/reference",Scalar({url:"/api/openapi.json"}));
 return app;
}
