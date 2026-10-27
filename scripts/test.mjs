import assert from "node:assert/strict";
import pg from "pg";
const api="http://localhost:4300", origin="http://localhost:4310";
const post=(body,cookie)=>({method:"POST",headers:{origin,"content-type":"application/json",...(cookie?{cookie}:{})},body:JSON.stringify(body)});
const request=(path,options)=>fetch(api+path,options);
async function login(email){
 const r=await request("/api/auth/sign-in/magic-link",post({email,callbackURL:origin+"/"})); assert.equal(r.status,200,await r.clone().text());
 const mail=await (await request("/__local/mail")).json(); const item=mail.findLast(x=>x.email===email); assert.ok(item);
 const v=await fetch(item.url,{redirect:"manual"}); const cookie=v.headers.getSetCookie().map(x=>x.split(";")[0]).join("; "); assert.match(cookie,/session_token/); return cookie;
}
assert.equal((await request("/api/trips")).status,401);
const owner=await login("owner-"+crypto.randomUUID()+"@creuza.test");
const invalid=await request("/api/trips",post({name:"   "},owner));
assert.equal(invalid.status,400); assert.deepEqual(await invalid.json(),{error:"Dati non validi"});
const created=await request("/api/trips",post({name:"Peru sintetico"},owner)); assert.equal(created.status,201,await created.clone().text()); const trip=await created.json();
assert.ok((await (await request("/api/trips",{headers:{cookie:owner}})).json()).some(x=>x.id===trip.id));
assert.equal((await request("/api/trips/"+trip.id,{headers:{cookie:owner}})).status,200);
const outsider=await login("other-"+crypto.randomUUID()+"@creuza.test");
assert.equal((await request("/api/trips/"+trip.id,{headers:{cookie:outsider}})).status,404);
assert.equal((await (await request("/api/trips",{headers:{cookie:outsider}})).json()).length,0);
const db=new pg.Pool({connectionString:"postgresql://creuza_local@127.0.0.1:55440/creuza_local"});
try {const {rows}=await db.query("SELECT m.role,p.account_id AS participant_account,m.account_id FROM memberships m JOIN participants p ON p.id=m.participant_id WHERE m.trip_id=$1",[trip.id]);assert.equal(rows.length,1);assert.equal(rows[0].role,"Owner");assert.equal(rows[0].account_id,rows[0].participant_account);} finally {await db.end();}
const schema=await (await request("/api/openapi.json")).json();assert.ok(schema.paths["/api/trips"].post);
assert.equal((await request("/api/auth/sign-out",post({},owner))).status,200);
assert.equal((await request("/api/trips",{headers:{cookie:owner}})).status,401);
console.log("PASS: magic link, sessione, creazione, appartenenza, isolamento, OpenAPI e logout");
