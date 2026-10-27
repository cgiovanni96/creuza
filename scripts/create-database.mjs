import pg from "pg";
const admin = new pg.Pool({ connectionString: "postgresql://creuza_local@127.0.0.1:55440/postgres" });
try { if (!(await admin.query("SELECT 1 FROM pg_database WHERE datname='creuza_local'")).rowCount) await admin.query("CREATE DATABASE creuza_local"); } finally { await admin.end(); }
