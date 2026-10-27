import { betterAuth } from "better-auth";
import { pool } from "./db";
export const mail: Array<{ id: string; type: string; to: string; subject: string; url: string; at: string }> = [];
export function captureMail(type: string, to: string, subject: string, url: string) {
  mail.push({ id: crypto.randomUUID(), type, to, subject, url, at: new Date().toISOString() });
}
export const auth = betterAuth({
  appName: "Creuza — prototipo locale",
  baseURL: "http://localhost:4300",
  secret: "LOCAL-PROTOTYPE-ONLY-NOT-FOR-PRODUCTION-2026",
  database: pool,
  trustedOrigins: ["http://localhost:4300", "http://localhost:4310", "http://localhost:4320", "http://127.0.0.1:4310", "http://127.0.0.1:4320"],
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    sendResetPassword: async ({ user, url }) => { captureMail("reset", user.email, "Reimposta password", url); }
  },
  emailVerification: {
    sendOnSignUp: true,
    autoSignInAfterVerification: false,
    sendVerificationEmail: async ({ user, url }) => { captureMail("verification", user.email, "Verifica email", url); }
  }
});
