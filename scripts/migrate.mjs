import { readFile } from "node:fs/promises";
import pg from "pg";
import { getMigrations } from "better-auth/db/migration";
import { makeAuth } from "../apps/api/src/auth.mjs";
const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL ?? "postgresql://creuza_local@127.0.0.1:55440/creuza_local" });
try { const auth = makeAuth(pool, {baseURL:"http://localhost:4300",webOrigin:"http://localhost:4310",secret:"LOCAL-ONLY-CHANGE-THIS-SECRET-2026-ABCDEF"}, async()=>{});
  await (await getMigrations(auth.options)).runMigrations();
  await pool.query(await readFile(new URL("../migrations/001_trips.sql", import.meta.url), "utf8"));
  console.log("Migrazioni applicate");
} finally { await pool.end(); }
