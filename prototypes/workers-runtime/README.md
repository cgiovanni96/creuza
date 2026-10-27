# Creuza — disposable Workers runtime probe

Question: can the chosen Hono/Better Auth/PostgreSQL/file path execute inside workerd, rather than only Node.js? This local experiment answers runtime compatibility, not cloud performance or the whole backend. Related decision: [Validare Workers con auth, PostgreSQL e storage](https://linear.app/giocosta/issue/NAS-75/validare-workers-con-auth-postgresql-e-storage).

## Run locally

From this directory, after installing dependencies with pnpm install and approving only esbuild/workerd builds if prompted:

    node scripts/probe.mjs

The existing application-comparison scratch PostgreSQL cluster is started on 127.0.0.1:55439 if necessary. The experiment uses a separate database named creuza_workers_probe; it does not connect to existing user databases or change the comparison database's tables. PostgreSQL 17 binaries are expected as in the previous prototype; PROTOTYPE_PG_BIN can select another installation.

The Wrangler harness starts workerd and local R2 emulation, dispatches synthetic requests and closes the runtime. The PostgreSQL cluster remains available for the other prototype; stop it explicitly when finished:

    node ../application-comparison/scripts/postgres.mjs stop

Results are written to ignored .local/result.json. They contain check names and provenance, not cookies or magic links. On a fresh database Better Auth may report missing tables immediately before the setup migration creates them; the subsequent runtime checks determine success.

To generate the local bundle without deployment:

    node scripts/bundle.mjs

## Scope

- Real Better Auth magic-link creation, verification, sessions and sign-out in workerd against the scratch PostgreSQL database.
- Synthetic membership guard for read/write/revocation, not the complete Participant/invitation model.
- Hono route-based OpenAPI generation and one database read/write path.
- A small file written/read through local R2, guarded by the synthetic session/membership rule.
- Request-scoped PostgreSQL pools, closed using waitUntil; credentials and data are synthetic and local-only.

This prototype has no real email delivery, no Google OAuth, no Neon connection, no cloud R2 bucket, no frontend integration, no production hardening and no CPU-budget measurement. It is not deployment-ready: origin, database connection and auth secret are deliberately local. Never deploy it as an application.

See [FINDINGS.md](FINDINGS.md) for observations, versions and the remaining decision.
