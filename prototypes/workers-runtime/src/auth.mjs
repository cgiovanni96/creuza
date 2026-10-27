// Disposable, synthetic, local-only authentication configuration. Never deploy.
import { betterAuth } from "better-auth";
import { magicLink } from "better-auth/plugins";

export const origin = "http://localhost:4330";
export function makeAuth(database, capture = async () => {}) {
  return betterAuth({
    appName: "Creuza local runtime probe",
    baseURL: origin,
    secret: "SYNTHETIC-LOCAL-PROBE-NOT-A-PRODUCTION-SECRET-2026",
    database,
    trustedOrigins: [origin],
    emailAndPassword: { enabled: false },
    plugins: [magicLink({ sendMagicLink: capture })],
    telemetry: { enabled: false },
  });
}
