// One-shot local experiment, not a production test suite or deployment script.
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { Pool } from "pg";
import { getMigrations } from "better-auth/db/migration";
import { createTestHarness } from "wrangler";
import { makeAuth, origin } from "../src/auth.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
process.chdir(root);
process.env.WRANGLER_SEND_METRICS = "false";
const clusterScript = path.resolve(root, "../application-comparison/scripts/postgres.mjs");
execFileSync(process.execPath, [clusterScript, "start"], { windowsHide: true, stdio: "inherit" });
const admin = new Pool({ connectionString: "postgresql://creuza_prototype@127.0.0.1:55439/postgres" });
const exists = await admin.query("SELECT 1 FROM pg_database WHERE datname='creuza_workers_probe'");
if (!exists.rowCount) await admin.query("CREATE DATABASE creuza_workers_probe");
await admin.end();
const db = new Pool({ connectionString: "postgresql://creuza_prototype@127.0.0.1:55439/creuza_workers_probe" });
const { runMigrations } = await getMigrations(makeAuth(db).options);
await runMigrations();
await db.query("CREATE TABLE IF NOT EXISTS probe_trip(id text PRIMARY KEY,title text NOT NULL)");
await db.query("CREATE TABLE IF NOT EXISTS probe_members(email text PRIMARY KEY,role text NOT NULL)");
await db.query("INSERT INTO probe_trip VALUES('peru','Peru synthetic') ON CONFLICT(id) DO UPDATE SET title=EXCLUDED.title");
await db.query("INSERT INTO probe_members VALUES('owner@creuza.test','Owner'),('viewer@creuza.test','Viewer') ON CONFLICT(email) DO UPDATE SET role=EXCLUDED.role");

const server = createTestHarness({ workers: [{ configPath: "wrangler.jsonc" }] });
const observations = [];
const note = (name) => { observations.push(name); console.log("PASS " + name); };
try {
  await server.listen();
  const worker = server.getWorker();
  const env = await worker.getEnv();
  const request = (url, options) => worker.fetch(new URL(url, origin).href, options);
  const jsonPost = (body, cookie) => ({ method: "POST", headers: { origin, "content-type": "application/json", ...(cookie ? { cookie } : {}) }, body: JSON.stringify(body) });
  async function login(email) {
    const sent = await request("/api/auth/sign-in/magic-link", jsonPost({ email, name: "Synthetic traveler", callbackURL: "/" }));
    assert.equal(sent.status, 200, await sent.clone().text());
    const captured = await env.DOCUMENTS.get("__mail/" + email);
    assert.ok(captured, "Local mailbox must capture the magic link");
    const verified = await request(await captured.text(), { redirect: "manual" });
    const cookies = verified.headers.getSetCookie().map((v) => v.split(";")[0]).join("; ");
    assert.ok(cookies.includes("session_token"), "Magic link must issue a real session cookie");
    return cookies;
  }
  assert.equal((await request("/health")).status, 200); note("Worker starts in workerd");
  assert.equal((await request("/probe/trip")).status, 401); note("Anonymous access denied");
  const schema = await (await request("/openapi.json")).json();
  assert.ok(schema.paths["/probe/trip"].post); note("OpenAPI generated from Hono route schema");
  const owner = await login("owner@creuza.test"); note("Magic-link signup and session in workerd/PostgreSQL");
  assert.equal((await request("/probe/trip", { headers: { cookie: owner } })).status, 200); note("Authenticated database read");
  const saved = await request("/probe/trip", jsonPost({ title: "Cusco updated in workerd" }, owner));
  assert.equal(saved.status, 200, await saved.clone().text());
  assert.equal((await saved.json()).title, "Cusco updated in workerd");
  assert.equal((await db.query("SELECT title FROM probe_trip WHERE id='peru'")).rows[0].title, "Cusco updated in workerd"); note("Worker database write persisted and independently read back");
  const pdf = "%PDF-1.7\nSynthetic local probe\n%%EOF";
  assert.equal((await request("/probe/file", { method: "POST", headers: { cookie: owner, origin }, body: pdf })).status, 200);
  assert.equal(await (await request("/probe/file", { headers: { cookie: owner } })).text(), pdf); note("Private file write/read through local R2 binding");
  assert.equal((await request("/probe/file")).status, 401); note("Anonymous private-file access denied");
  const viewer = await login("viewer@creuza.test");
  assert.equal((await request("/probe/trip", { headers: { cookie: viewer } })).status, 200);
  assert.equal((await request("/probe/trip", jsonPost({ title: "Must not change" }, viewer))).status, 403); note("Viewer can read but cannot write");
  await db.query("DELETE FROM probe_members WHERE email='viewer@creuza.test'");
  assert.equal((await request("/probe/trip", { headers: { cookie: viewer } })).status, 403); note("Revocation applies despite an existing auth session");
  const signedOut = await request("/api/auth/sign-out", jsonPost({}, owner));
  assert.equal(signedOut.status, 200);
  assert.equal((await request("/probe/trip", { headers: { cookie: owner } })).status, 401); note("Sign-out invalidates the session");
  mkdirSync(".local", { recursive: true });
  writeFileSync(".local/result.json", JSON.stringify({ at: new Date().toISOString(), node: process.version, checks: observations, cloudVerified: false, cpuBudgetVerified: false, neonVerified: false, googleOAuthVerified: false, resendVerified: false }, null, 2));
  console.log("Local runtime probe complete; cloud limits and actual providers remain unverified.");
} finally {
  await server.close();
  await db.end();
}
