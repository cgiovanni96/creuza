import { betterAuth } from "better-auth";
import { magicLink } from "better-auth/plugins";
export function makeAuth(database, config, capture) {
  return betterAuth({ appName: "Creuza", baseURL: config.baseURL, secret: config.secret, database,
    trustedOrigins: [config.webOrigin], emailAndPassword: { enabled: false },
    plugins: [magicLink({ sendMagicLink: capture })], telemetry: { enabled: false } });
}
