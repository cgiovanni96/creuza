# Creuza application comparison — disposable local prototype

Question: does TanStack Start improve the agreed Creuza interaction and authentication workflow compared with a router-only SPA?

The two applications deliberately use the same Mantine UI, TanStack Router, synthetic three-day Peru fixture, PostgreSQL database, and Hono/Better Auth API. The Start candidate uses SPA mode. This isolates the application framework comparison; it does not evaluate Start SSR/server functions or select the eventual hosting runtime.

See [FINDINGS.md](FINDINGS.md) for the completed checks, measured build observations and remaining decisions.

## Run

From this directory:

    pnpm install
    pnpm dev

Open [TanStack Start](http://localhost:4310) and [router-only SPA](http://localhost:4320).

The launcher creates a prototype-only PostgreSQL cluster in .local/postgres-host, listening only on 127.0.0.1:55439. On this Windows machine it uses the installed PostgreSQL 17 binaries. Override PROTOTYPE_PG_BIN on another machine. It does not connect to existing user databases. Authentication uses local-only trust within that isolated cluster; never expose or deploy this setup.

The API is at http://localhost:4300. [Scalar](http://localhost:4300/api/reference) presents the schema generated from the business API route definitions. The local mailbox captures verification, reset, and invitation URLs. No SMTP service or external email recipient is contacted.

Demo login:

    owner@creuza.test
    PeruPrototype2026!

To stop the applications, stop the launcher. To also stop the prototype database:

    pnpm services:stop

## Compare

1. Sign in as the demo Owner in each application.
2. Expand multiple days, open an item, edit its title/notes, and close details.
3. Check the desktop side panel and the mobile full-screen detail view.
4. Open Ideas as a separate screen. Schedule an Idea, stay on Ideas, and use “Vedi nel Programma”.
5. Create a demo invitation. Open its link from Posta locale, register a different synthetic account, verify its email locally, and accept.
6. Use the verification script for pending, mismatched, revoked, Editor and Viewer authorization cases.

## Checks

With the applications running:

    pnpm verify
    pnpm build
    pnpm check

Reports and build logs are written to .local. Build measurements are one sequential build per candidate, not a performance benchmark. Aggregate emitted JavaScript is not the initial-page download size.

## Scope and limits

- Real Better Auth email/password sessions, verification, local mail capture and trip-level authorization are exercised.
- Google is intentionally not simulated as a successful login. Live OAuth needs separate application credentials and consent.
- The UI shares one backend for a fair comparison. Start-specific server-route authentication/SSR is not yet evaluated.
- The financial view checks decimal-string transport, not the full ledger.
- Only unbooked sample items offer “Move back to Ideas”; preserving booking relationships requires the later complete domain implementation.
- History snapshots are retained; recovery UI is not implemented.
- The sample summaries are fixture text, not the final generated-summary algorithm.
- Native device browsers, offline persistence, deployment, storage, backups, broad registration protections and production hardening remain outside this prototype.
- All source changes are confined to prototypes/application-comparison. Existing brainstorming and agent configuration documents are untouched.

## Primary references

- [TanStack Start SPA mode](https://tanstack.com/start/latest/docs/framework/react/guide/spa-mode)
- [TanStack Start minimal setup](https://tanstack.com/start/latest/docs/framework/react/build-from-scratch)
- [Mantine with Start](https://mantine.dev/guides/tanstack-start/)
- [Better Auth PostgreSQL](https://better-auth.com/docs/adapters/postgresql)
- [Better Auth migration API](https://better-auth.com/docs/concepts/database)
- [Hono OpenAPI](https://hono.dev/examples/zod-openapi)
