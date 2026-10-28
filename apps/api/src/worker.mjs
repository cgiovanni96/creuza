import pg from "pg";
import { makeAuth } from "./auth.mjs";
import { createApp } from "./app.mjs";

// The delivery adapter is supplied by the runtime. No mailbox endpoint exists here.
export function createWorker(deliver) {
 return { async fetch(request, env, ctx) {
   const pool = new pg.Pool({ connectionString: env.DATABASE_URL, max: 1 });
   const auth = makeAuth(pool, { baseURL: env.AUTH_BASE_URL, webOrigin: env.WEB_ORIGIN, secret: env.AUTH_SECRET },
     message => deliver(message, env));
   try { return await createApp({ pool, auth }).fetch(request, env, ctx); }
   finally { ctx.waitUntil(pool.end()); }
 }};
}
// Cloud delivery is intentionally disabled until the Resend integration in S02.
export default createWorker(async () => { throw new Error("Email delivery is not configured"); });
