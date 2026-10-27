# Application comparison findings

Local comparison completed on 26 October 2026. All implementation and findings are confined to this disposable prototype directory; no specification or provider decision has been saved elsewhere.

## Result

TanStack Start is viable as Creuza's preferred application candidate for the tested slice. Both variants support the same responsive itinerary and Better Auth workflow through a separate OpenAPI backend. No framework blocker was found in this slice.

The Start variant uses SPA mode. This establishes compatibility with the proposed boundary, but does not establish an advantage from Start's SSR, server functions, or server-side authentication. Those features and the deployment runtime remain separate decisions. The router-only SPA remains a working baseline.

## Running comparison

- [TanStack Start](http://localhost:4310/trip/peru?view=program)
- [Vite + TanStack Router SPA](http://localhost:4320/trip/peru?view=program)
- [Generated business API documentation](http://localhost:4300/api/reference)

Both applications use the same UI package, synthetic Peru fixture, Hono API, and prototype PostgreSQL database. Sign in with `owner@creuza.test` / `PeruPrototype2026!`. These credentials are for disposable local data only.

The local mailbox captures verification, password-reset and invitation messages in memory; no real email is sent. PostgreSQL 17 runs in the isolated `.local/postgres-host` cluster on loopback port 55439. Docker was unavailable during setup, so the prototype uses the installed native PostgreSQL binaries. Run and stop instructions are in [README.md](README.md).

## Verification

The final automated run passed 66 named scenario checks, 33 through each application's proxy. These cover:

- Sign-in, registration, verification enforcement and password reset using synthetic accounts and locally captured messages.
- Pending and wrong-email invitation rejection; acceptance preserving the Participant record; existing-account notification; Editor and Viewer permissions.
- Owner self-demotion protection, revocation preserving participation history, single-use invitation tokens, rejection of stale tokens after revocation, and explicit reinvitation.
- Itinerary updates, retained history snapshots, decimal-string transport and generated business OpenAPI paths.
- Direct requests to nested application URLs during local development.

Both production builds and the shared TypeScript check passed. Start's SPA shell prerender completed. The final machine-readable results are in ignored local files `.local/verification.json` and `.local/build-report.json`.

Browser smoke checks exercised both frontends, including sign-in, separate Ideas navigation, scheduling while remaining on Ideas, navigation to the new itinerary item, and explicit movement back to Ideas. Responsive checks at 390 × 844 and desktop width 1280 confirmed mobile full-screen details and a desktop contextual side panel. Closing mobile details preserved the observed scroll position. These are desktop-browser viewport checks, not physical iPhone/Safari or Android/Chrome testing.

## Build observations

Environment: Node 24.8.0, pnpm 11.7.0. Exact dependency versions are pinned in the manifest and lockfile, including Start 1.169.4, Router 1.170.46, Vite 8.3.5, React 19.3.1, Mantine 9.7.4 and Better Auth 1.7.13.

| Observation | TanStack Start | Router-only SPA |
| --- | ---: | ---: |
| One local build | 1,887 ms | 625 ms |
| Emitted client files | 7 | 3 |
| Aggregate emitted JavaScript | 571,221 bytes | 524,860 bytes |
| Aggregate JavaScript after gzip | 178,040 bytes | 161,779 bytes |

These are single sequential builds with installed dependencies and local caches. Aggregate emitted JavaScript is not initial-page transfer, and these observations are not a speed benchmark. Both builds emitted the default large-chunk advisory; route-level loading and production performance have not been assessed.

## Practical limits and remaining decisions

- Live Google OAuth, real email delivery and production authentication hardening have not been tested.
- Cloud Node/Workers deployments, production route rewrites, EU hosting, operating cost and backup/restore remain unvalidated. This prototype establishes no infrastructure budget or reliability promise.
- Offline bundles and installability belong to the later V1 work and are absent here.
- The expense view verifies the API representation, not the complete financial ledger or settlement calculations.
- Day summaries are fixture text. Full reservation synchronization, private personal Ideas, multi-occurrence Idea lineage, document storage, map behavior, ordering controls and history recovery UI are outside this framework comparison.
- Both applications share one database and localhost session cookies. Edits and sign-out in one can therefore affect the other; this is intentional local comparison behavior.

The evidence supports retaining TanStack Start as the preferred candidate and keeping this SPA baseline available. It does not yet settle the backend runtime, production providers, or whether to adopt Start-specific server features.
