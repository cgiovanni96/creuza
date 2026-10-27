import { getMigrations } from "better-auth/db/migration";
import { auth } from "./auth";
import { pool } from "./db";
import { fixture } from "./fixture";

export async function initialize() {
  const migrations = await getMigrations(auth.options);
  await migrations.runMigrations();
  await pool.query([
    "CREATE TABLE IF NOT EXISTS prototype_trips (id text PRIMARY KEY, content jsonb NOT NULL);",
    "CREATE TABLE IF NOT EXISTS prototype_participants (id text PRIMARY KEY, trip_id text NOT NULL, name text NOT NULL, email text, account_id text, role text, accepted boolean NOT NULL DEFAULT false, archived boolean NOT NULL DEFAULT false, UNIQUE(trip_id,email));",
    "CREATE TABLE IF NOT EXISTS prototype_invitations (token text PRIMARY KEY, participant_id text NOT NULL REFERENCES prototype_participants(id), role text NOT NULL, accepted boolean NOT NULL DEFAULT false);",
    "ALTER TABLE prototype_invitations ADD COLUMN IF NOT EXISTS revoked boolean NOT NULL DEFAULT false;",
    "CREATE TABLE IF NOT EXISTS prototype_notifications (id text PRIMARY KEY, account_id text NOT NULL, message text NOT NULL);",
    "CREATE TABLE IF NOT EXISTS prototype_history (id bigserial PRIMARY KEY, trip_id text NOT NULL, account_id text NOT NULL, previous jsonb NOT NULL, changed_at timestamptz NOT NULL DEFAULT now());"
  ].join("\n"));
  await pool.query("INSERT INTO prototype_trips(id, content) VALUES ('peru', $1) ON CONFLICT DO NOTHING", [JSON.stringify(fixture)]);
  let owner = (await pool.query('SELECT id FROM "user" WHERE email=$1', ["owner@creuza.test"])).rows[0];
  if (!owner) {
    await auth.api.signUpEmail({ body: { name: "Viaggiatore demo", email: "owner@creuza.test", password: "PeruPrototype2026!" } });
    owner = (await pool.query('SELECT id FROM "user" WHERE email=$1', ["owner@creuza.test"])).rows[0];
    await pool.query('UPDATE "user" SET "emailVerified"=true WHERE id=$1', [owner.id]);
  }
  await pool.query(
    "INSERT INTO prototype_participants(id,trip_id,name,email,account_id,role,accepted) VALUES ('owner-participant','peru','Viaggiatore demo','owner@creuza.test',$1,'Owner',true) ON CONFLICT(id) DO UPDATE SET account_id=$1",
    [owner.id]
  );
}

