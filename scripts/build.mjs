import { execFileSync } from "node:child_process";
import path from "node:path";
execFileSync(process.execPath,[path.resolve("node_modules/vite/bin/vite.js"),"build"],{cwd:path.resolve("apps/web"),stdio:"inherit",windowsHide:true});
