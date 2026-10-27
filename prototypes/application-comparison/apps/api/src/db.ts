import pg from "pg";
export const databaseUrl = process.env.DATABASE_URL ?? "postgresql://creuza_prototype@127.0.0.1:55439/creuza_comparison";
export const pool = new pg.Pool({ connectionString: databaseUrl });
