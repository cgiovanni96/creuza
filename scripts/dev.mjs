import { spawn, execFileSync } from "node:child_process";
import path from "node:path";
execFileSync(process.execPath,["scripts/postgres.mjs","start"],{stdio:"inherit",windowsHide:true});
execFileSync(process.execPath,["scripts/migrate.mjs"],{stdio:"inherit",windowsHide:true});
const children=[]; let stopping=false;
function launch(label,args,cwd=process.cwd()){const c=spawn(process.execPath,args,{cwd,stdio:"inherit",windowsHide:true});children.push(c);c.on("exit",code=>{if(!stopping){console.error(label+" terminato: "+code); stop(); process.exitCode=code||1;}});}
function stop(){stopping=true;for(const c of children)c.kill();}
process.on("SIGINT",stop);process.on("SIGTERM",stop);
launch("api",["apps/api/src/server.mjs"]);launch("web",[path.resolve("node_modules/vite/bin/vite.js")],path.resolve("apps/web"));
console.log("Creuza: http://localhost:4310 - PostgreSQL separato: pnpm db:stop per arrestarlo");
