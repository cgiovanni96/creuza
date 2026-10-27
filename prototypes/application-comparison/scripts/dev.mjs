import { spawn, execFileSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
execFileSync(process.execPath, ["scripts/postgres.mjs", "start"], { cwd: root, stdio: "inherit", windowsHide: true });
const children = [];
function launch(label, args, cwd = root) {
  const child = spawn(process.execPath, args, { cwd, windowsHide: true, stdio: ["ignore", "pipe", "pipe"] });
  for (const stream of [child.stdout, child.stderr]) stream.on("data", (chunk) => process.stdout.write("[" + label + "] " + chunk));
  child.on("exit", (code) => { if (code && !stopping) { console.error(label + " exited: " + code); stop(); process.exitCode = code; } });
  children.push(child);
  return child;
}
let stopping = false;
function stop() { stopping = true; for (const child of children) child.kill(); }
process.on("SIGINT", stop);
process.on("SIGTERM", stop);
launch("api", [path.join(root, "node_modules/tsx/dist/cli.mjs"), "apps/api/src/server.ts"]);
for (let attempt = 0; attempt < 100; attempt++) {
  try { const response = await fetch("http://127.0.0.1:4300/api/health"); if (response.ok) break; } catch {}
  if (attempt === 99) { stop(); throw new Error("Prototype API did not start. See logs above."); }
  await new Promise((resolve) => setTimeout(resolve, 300));
}
launch("start", [path.join(root, "node_modules/vite/bin/vite.js")], path.join(root, "apps/start"));
launch("spa", [path.join(root, "node_modules/vite/bin/vite.js")], path.join(root, "apps/spa"));
console.log("\nTanStack Start: http://localhost:4310\nRouter-only SPA: http://localhost:4320\nAPI + Scalar: http://localhost:4300/api/reference\nOnly synthetic local data. Stop PostgreSQL separately with pnpm services:stop.\n");
