import { execFileSync } from "node:child_process";
execFileSync(process.execPath, ["node_modules/wrangler/bin/wrangler.js", "deploy", "--dry-run", "--outdir", ".local/bundle"], {
  windowsHide: true,
  env: { ...process.env, WRANGLER_SEND_METRICS: "false" },
  stdio: "inherit",
});
