import assert from "node:assert/strict";
import { mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const results = [];
function client(origin) {
  let cookie = "";
  return {
    async request(url, body, method) {
      const response = await fetch(url.startsWith("http") ? url : origin + url, {
        method: method ?? (body === undefined ? "GET" : "POST"),
        headers: { Origin: origin, ...(body === undefined ? {} : { "Content-Type": "application/json" }), ...(cookie ? { Cookie: cookie } : {}) },
        ...(body === undefined ? {} : { body: JSON.stringify(body) }), redirect: "manual"
      });
      const cookies = response.headers.getSetCookie();
      if (cookies.length) cookie = cookies.map((value) => value.split(";")[0]).join("; ");
      const text = await response.text();
      let data; try { data = JSON.parse(text); } catch { data = text; }
      return { status: response.status, data, location: response.headers.get("location") };
    }
  };
}
async function must(request, expected, message) {
  const response = await request;
  assert.equal(response.status, expected, message + ": " + JSON.stringify(response.data));
  results.push(message);
  return response.data;
}
for (const [label, origin] of [["start", "http://localhost:4310"], ["spa", "http://localhost:4320"]]) {
  const owner = client(origin);
  const guest = client(origin);
  const email = label + "-" + Date.now() + "@creuza.test";
  const password = "LocalPrototype2026!";
  await must(owner.request("/api/auth/sign-in/email", { email: "owner@creuza.test", password: "PeruPrototype2026!" }), 200, label + ": owner sign-in through frontend proxy");
  await must(owner.request("/api/invitations", { email: "owner@creuza.test", role: "Viewer" }), 400, label + ": invitation cannot demote the sole Owner");
  const invitation = await must(owner.request("/api/invitations", { email, role: "Editor" }), 200, label + ": invitation creates participant before account");
  assert.equal(invitation.accountLinked, false);
  await must(guest.request("/api/auth/sign-up/email", { name: "Invitato demo", email, password, callbackURL: origin + "/?invite=" + invitation.token }), 200, label + ": email/password signup");
  await must(guest.request("/api/auth/sign-in/email", { email, password }), 403, label + ": unverified email cannot sign in");
  const outbox = (await owner.request("/__prototype/mail")).data;
  const verification = [...outbox].reverse().find((item) => item.to === email && item.type === "verification");
  assert.ok(verification, "Verification message captured locally");
  const verifyResponse = await guest.request(verification.url);
  assert.ok([200, 302, 303].includes(verifyResponse.status), JSON.stringify(verifyResponse));
  results.push(label + ": verification link accepted");
  await must(guest.request("/api/auth/sign-in/email", { email, password }), 200, label + ": verified sign-in succeeds");
  await must(guest.request("/api/trips/peru"), 403, label + ": pending invitation has no trip access");
  await must(owner.request("/api/invitations/accept", { token: invitation.token }), 403, label + ": another email cannot accept invitation");
  const accepted = await must(guest.request("/api/invitations/accept", { token: invitation.token }), 200, label + ": matching verified identity accepts invitation");
  assert.equal(accepted.participantId, invitation.participantId);
  results.push(label + ": invitation preserves participant identity");
  await must(guest.request("/api/invitations/accept", { token: invitation.token }), 403, label + ": accepted invitation cannot be replayed");
  const state = await must(guest.request("/api/trips/peru"), 200, label + ": accepted Editor can read itinerary");
  assert.equal(state.role, "Editor");
  assert.equal(state.trip.moneyExample.originalAmount, "120.00");
  assert.equal(state.trip.moneyExample.unitsPerEuro, "4.000000");
  results.push(label + ": decimal strings survive PostgreSQL/API round trip");
  const title = state.trip.days[1].items.find((item) => item.id === "machu").title;
  await must(guest.request("/api/trips/peru/items", { action: "edit", itemId: "machu", title: title + " · prova" }), 200, label + ": accepted Editor can edit");
  const history = await must(guest.request("/api/history"), 200, label + ": previous state retained in history");
  assert.ok(history.length > 0);
  await must(guest.request("/api/trips/peru/items", { action: "edit", itemId: "machu", title }), 200, label + ": fixture title restored through normal edit");
  await must(owner.request("/api/participants/revoke", { participantId: accepted.participantId }), 200, label + ": Owner revokes trip access");
  await must(guest.request("/api/trips/peru"), 403, label + ": valid auth session cannot bypass revoked membership");
  await must(guest.request("/api/invitations/accept", { token: invitation.token }), 403, label + ": stale invitation cannot restore revoked access");
  const stillSignedIn = await must(guest.request("/api/me"), 200, label + ": account remains signed in after membership revocation");
  assert.equal(stillSignedIn.user.email, email);
  const existing = await must(owner.request("/api/invitations", { email, role: "Viewer" }), 200, label + ": invite existing account as Viewer");
  assert.equal(existing.participantId, invitation.participantId);
  assert.equal(existing.accountLinked, true);
  const notifications = await must(guest.request("/api/notifications"), 200, label + ": existing account gets in-app invitation");
  assert.ok(notifications.length > 0);
  await must(guest.request("/api/invitations/accept", { token: existing.token }), 200, label + ": Viewer invitation accepted");
  const viewerState = await must(guest.request("/api/trips/peru"), 200, label + ": re-invited member has Viewer role");
  assert.equal(viewerState.role, "Viewer");
  await must(guest.request("/api/trips/peru/items", { action: "edit", itemId: "machu", title: "Forbidden change" }), 403, label + ": Viewer cannot edit");
  await must(guest.request("/api/auth/request-password-reset", { email, redirectTo: origin + "/?reset=1" }), 200, label + ": password reset captured locally");
  const resetMail = [...(await owner.request("/__prototype/mail")).data].reverse().find((item) => item.to === email && item.type === "reset");
  assert.ok(resetMail, "Reset email captured");
  const resetRedirect = await guest.request(resetMail.url);
  assert.ok(resetRedirect.location, "Reset callback redirect exists");
  const token = new URL(resetRedirect.location, origin).searchParams.get("token");
  assert.ok(token, "Reset callback contains a token");
  const changedPassword = "ChangedLocalPrototype2026!";
  await must(guest.request("/api/auth/reset-password", { token, newPassword: changedPassword }), 200, label + ": reset token changes synthetic account password");
  const oldPasswordAttempt = await guest.request("/api/auth/sign-in/email", { email, password });
  assert.ok(oldPasswordAttempt.status >= 400, "Old password must fail after reset");
  results.push(label + ": old password rejected after reset");
  await must(guest.request("/api/auth/sign-in/email", { email, password: changedPassword }), 200, label + ": new password accepted after reset");
  const schema = await must(owner.request("/api/openapi.json"), 200, label + ": generated OpenAPI reachable through frontend proxy");
  assert.ok(schema.paths["/api/trips/peru/items"].post.requestBody);
  assert.ok(schema.paths["/api/invitations/accept"]);
  results.push(label + ": business routes appear in generated contract");
  const html = await owner.request("/trip/peru?view=ideas");
  assert.equal(html.status, 200, label + ": direct nested route reload");
  results.push(label + ": direct nested application route resolves");
}
const report = { at: new Date().toISOString(), node: process.version, checks: results.length, results,
  unverified: ["Live Google OAuth", "Real email delivery", "Cloud runtimes and production rewrites", "iPhone/Safari and Android/Chrome on physical devices", "V1 offline persistence", "Complete financial ledger", "Production backup and document restore"] };
mkdirSync(path.join(root, ".local"), { recursive: true });
writeFileSync(path.join(root, ".local/verification.json"), JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
