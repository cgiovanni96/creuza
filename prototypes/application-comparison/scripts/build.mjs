import { spawnSync } from "node:child_process";
import { mkdirSync, writeFileSync, readdirSync, statSync, readFileSync, existsSync } from "node:fs";
import { gzipSync } from "node:zlib";
import path from "node:path";
import { fileURLToPath } from "node:url";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
mkdirSync(path.join(root, ".local"), { recursive: true });
function files(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => entry.isDirectory() ? files(path.join(directory, entry.name)) : [path.join(directory, entry.name)]);
}
const results = [];
for (const name of ["start", "spa"]) {
  const cwd = path.join(root, "apps", name);
  const begin = performance.now();
  const processResult = spawnSync(process.execPath, [path.join(root, "node_modules/vite/bin/vite.js"), "build"], { cwd, encoding: "utf8", windowsHide: true, maxBuffer: 12 * 1024 * 1024 });
  writeFileSync(path.join(root, ".local", "build-" + name + ".log"), (processResult.stdout ?? "") + (processResult.stderr ?? ""));
  console.log(processResult.stdout ?? "");
  console.error(processResult.stderr ?? "");
  if (processResult.status !== 0) throw new Error(name + " build failed; see .local/build-" + name + ".log");
  const client = [path.join(cwd, "dist/client"), path.join(cwd, ".output/public"), path.join(cwd, "dist")].find(existsSync);
  const emitted = files(client);
  const js = emitted.filter((file) => file.endsWith(".js"));
  results.push({ variant: name, buildMs: Math.round(performance.now() - begin), output: path.relative(root, client), emittedFiles: emitted.length,
    clientBytes: emitted.reduce((sum, file) => sum + statSync(file).size, 0),
    emittedJsBytes: js.reduce((sum, file) => sum + statSync(file).size, 0),
    emittedJsGzipBytes: js.reduce((sum, file) => sum + gzipSync(readFileSync(file)).length, 0) });
}
const report = { at: new Date().toISOString(), node: process.version, note: "One sequential build per variant. Aggregate emitted assets, not initial-page network transfer or a benchmark.", results };
writeFileSync(path.join(root, ".local/build-report.json"), JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
