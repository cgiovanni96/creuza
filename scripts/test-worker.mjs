import assert from "node:assert/strict";
import { createTestHarness } from "wrangler";
process.env.WRANGLER_SEND_METRICS = "false";
const origin = "http://localhost:4330";
const server = createTestHarness({ workers: [{ configPath: "tests/worker/wrangler.jsonc" }] });
try {
 await server.listen();
 const worker = server.getWorker(), env = await worker.getEnv();
 const request = (url, options) => worker.fetch(new URL(url, origin).href, options);
 const post = (body, cookie) => ({ method: "POST", headers: { origin, "content-type": "application/json", ...(cookie ? { cookie } : {}) }, body: JSON.stringify(body) });
 async function login(email) {
   const response = await request("/api/auth/sign-in/magic-link", post({ email, callbackURL: "/" }));
   assert.equal(response.status, 200, await response.clone().text());
   const message = await env.TEST_MAIL.get(email); assert.ok(message);
   const verified = await request(await message.text(), { redirect: "manual" });
   const cookies = verified.headers.getSetCookie().map(x => x.split(";")[0]).join("; ");
   assert.match(cookies, /session_token/); return cookies;
 }
 assert.equal((await request("/api/trips")).status, 401);
 const owner = await login(`worker-owner-${crypto.randomUUID()}@creuza.test`);
 const created = await request("/api/trips", post({ name: "Viaggio workerd" }, owner));
 assert.equal(created.status, 201, await created.clone().text()); const trip = await created.json();
 const list = await request("/api/trips", { headers: { cookie: owner } });
 assert.ok((await list.json()).some(x => x.id === trip.id));
 assert.equal((await request(`/api/trips/${trip.id}`, { headers: { cookie: owner } })).status, 200);
 const stranger = await login(`worker-other-${crypto.randomUUID()}@creuza.test`);
 assert.equal((await request(`/api/trips/${trip.id}`, { headers: { cookie: stranger } })).status, 404);
 assert.deepEqual(await (await request("/api/trips", { headers: { cookie: stranger } })).json(), []);
 assert.ok((await (await request("/api/openapi.json")).json()).paths["/api/trips"].post);
 assert.equal((await request("/api/auth/sign-out", post({}, owner))).status, 200);
 assert.equal((await request("/api/trips", { headers: { cookie: owner } })).status, 401);
 console.log("PASS workerd: magic link, sessione, viaggio PostgreSQL, isolamento, OpenAPI e logout");
} finally { await server.close(); }
