import pg from "pg";
const admin = new pg.Pool({ connectionString: "postgresql://creuza_prototype@127.0.0.1:55439/postgres" });
try {
  const exists = await admin.query("SELECT 1 FROM pg_database WHERE datname='creuza_comparison'");
  if (!exists.rowCount) await admin.query("CREATE DATABASE creuza_comparison");
} finally { await admin.end(); }
