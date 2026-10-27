# Workers runtime probe — findings

Date: 27 October 2026. Decision: [Validare Workers con auth, PostgreSQL e storage](https://linear.app/giocosta/issue/NAS-75/validare-workers-con-auth-postgresql-e-storage). Sources are this probe's code, lockfile and the observed run; this is not a deployment benchmark.

## Verdict

The tested path is compatible with **local workerd**. This removes a concrete runtime-compatibility uncertainty without building the full Creuza backend. It does **not** establish that all authentication paths fit the Workers Free CPU allowance or that real providers are configured correctly. Workers/Hono and Neon remain preferred candidates, not newly adopted by this experiment.

## Observed

Eleven checks passed using node scripts/probe.mjs:

1. Worker starts in workerd.
2. Anonymous data access denied.
3. OpenAPI generated from the Hono route schema.
4. Magic-link signup, verification and real session cookie with PostgreSQL.
5. Authenticated database read.
6. Database write independently read back from PostgreSQL by the Node runner.
7. Private file write/read through local R2 binding.
8. Anonymous file access denied.
9. Viewer reads but cannot write.
10. Membership revocation blocks an existing authenticated session.
11. Sign-out invalidates the session.

The dry-run bundle succeeded: **2,753.44 KiB uncompressed; 474.36 KiB gzip**. This is output size for this minimal probe, not final application size, startup time or request CPU. No upload or cloud deployment occurred.

Versions: Node 24.8.0; Wrangler 4.153.0; workerd 1.20261023.1; Better Auth 1.7.13; Hono 4.13.14; pg 8.23.1; zod-openapi 1.6.3. Compatibility date 2026-10-27; node compatibility is enabled by default for this date according to current Cloudflare documentation. PostgreSQL is the existing local version 17 scratch installation, not Neon.

Windows environment note: sandboxed loopback calls reported no response even when PostgreSQL was ready. The successful run used the execution approval mechanism for local loopback/runtime access; this was an environment restriction, not evidence of a Workers/PostgreSQL incompatibility. pnpm required approval of the esbuild and workerd install scripts.

## Still unverified

- Workers Free CPU limit on cold/warm magic-link, session and data requests. Local wall time cannot be substituted for cloud CPU time.
- Connection/TLS/pooling and the selected EU Neon service.
- Actual R2 access and EU jurisdiction; this run used emulation and a tiny synthetic PDF, not a 20 MB upload or format conversion.
- Google OAuth, same-email identity convergence, Resend and the owned email domain.
- Hosting the Start SPA output and its browser-to-API integration on Cloudflare.
- Production load, availability, security hardening and actual billing behaviour.

## Next decision

Keep the issue open. To complete the requested target validation, a separately authorized, tightly bounded trial in the user's Cloudflare/Neon accounts is needed. Use temporary isolated resources, synthetic records, restricted access and simulated email; measure actual request CPU before recommending final adoption of the free runtime. Do not deploy this local-only probe unchanged or provision resources based only on this report.

## Official references consulted

- [Node compatibility](https://developers.cloudflare.com/workers/runtime-apis/nodejs/): current compatibility-date behaviour; importability does not guarantee every Node API is functional.
- [Workers/PostgreSQL](https://developers.cloudflare.com/workers/tutorials/postgres/): PostgreSQL driver integration and connection options.
- [Workers limits](https://developers.cloudflare.com/workers/platform/limits/): Workers Free request CPU limit currently 10 ms; waiting for network is distinct from CPU work.
- [Wrangler harness API](https://developers.cloudflare.com/workers/wrangler/api/): local workerd harness and binding emulation.
- [Better Auth installation](https://github.com/better-auth/better-auth/blob/main/docs/content/docs/installation.mdx): Worker handler integration and async context support.
- [Magic links](https://better-auth.com/docs/plugins/magic-link): real plugin flow with synthetic local capture instead of email delivery.
- [Database/migrations](https://better-auth.com/docs/concepts/database): programmatic migration for the built-in PostgreSQL adapter.
