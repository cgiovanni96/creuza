import { existsSync, mkdirSync, openSync, closeSync } from "node:fs";
import { execFileSync, spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const local = path.join(root, ".local");
const data = path.join(local, "postgres-host");
const bin = process.env.PROTOTYPE_PG_BIN ?? (process.platform === "win32" ? "C:/Program Files/PostgreSQL/17/bin" : "");
const exe = (name) => bin ? path.join(bin, name + (process.platform === "win32" ? ".exe" : "")) : name;
const run = (name, args) => execFileSync(exe(name), args, { windowsHide: true, stdio: "pipe", encoding: "utf8" });
mkdirSync(local, { recursive: true });
const action = process.argv[2] ?? "start";
if (action === "stop") {
  if (existsSync(path.join(data, "postmaster.pid"))) console.log(run("pg_ctl", ["-D", data, "stop", "-m", "fast", "-w"]));
  else console.log("The isolated PostgreSQL cluster is not running.");
} else {
  if (!existsSync(path.join(data, "PG_VERSION"))) {
    console.log("Initializing prototype-only PostgreSQL under " + data);
    console.log(run("initdb", ["-D", data, "--username=creuza_prototype", "--auth=trust", "--no-locale", "--encoding=UTF8"]));
  }
  let running = false;
  try { run("pg_ctl", ["-D", data, "status"]); running = true; } catch {}
  if (!running) {
    const output = openSync(path.join(local, "postgres-host.stdout.log"), "a");
    const errors = openSync(path.join(local, "postgres-host.stderr.log"), "a");
    const server = spawn(exe("postgres"), ["-D", data, "-h", "127.0.0.1", "-p", "55439"], { detached: true, windowsHide: true, stdio: ["ignore", output, errors] });
    server.unref();
    closeSync(output); closeSync(errors);
    let ready = false;
    for (let attempt = 0; attempt < 40; attempt++) {
      try { run("pg_isready", ["-h", "127.0.0.1", "-p", "55439", "-t", "1"]); ready = true; break; } catch {}
      await new Promise((resolve) => setTimeout(resolve, 250));
    }
    if (!ready) throw new Error("Prototype PostgreSQL did not become ready; see .local/postgres-host.stderr.log");
  }
  execFileSync(process.execPath, ["scripts/create-database.mjs"], { cwd: root, windowsHide: true, stdio: "inherit" });
  console.log("Isolated database ready at 127.0.0.1:55439/creuza_comparison");
}
