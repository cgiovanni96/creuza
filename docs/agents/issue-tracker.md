# Issue tracker: Linear

Linear is the issue tracker for this repository. GitHub hosts the code.

- Repository: https://github.com/cgiovanni96/creuza
- Linear project: [Creuza](https://linear.app/giocosta/project/creuza-b9bd424c5204)
- Project identifier: `P-NAS-10`
- Project UUID: `6c032dd0-93a6-4dc3-93e0-96284dc9ddcf`
- Team: `Personal` (key `NAS`, UUID `5d465580-d1af-46e1-98f0-4f051c8ec91c`)

## Fetching work

Use the connected Linear tools to fetch the referenced issue by its identifier or URL. Read its description, comments, and relevant linked documents. Scope searches and issue lists to the Creuza project under Personal; team membership alone does not identify Creuza work.

## Publishing work

When a skill says to publish to the issue tracker, create or update an issue in the Creuza project under Personal. Write one issue per implementation ticket, with its scope, acceptance criteria, and relevant spec or repository links in the description. Link related issues and record dependencies through Linear's issue relationships.

When a skill produces a spec for the tracker, store it in a Linear document attached to Creuza, and link implementation issues to it. Existing repository documentation remains a valid reference; include links when relevant.

Record ticket discussion in Linear issue comments. Use the label mapping in `triage-labels.md` for triage roles; labels are separate from Linear workflow statuses. Use the team's existing workflow statuses when changing implementation progress.

Use Linear as the source of truth for tickets. GitHub Issues and local `.scratch/` files are not this repo's issue tracker. If Linear is unavailable, report the access problem and retain any draft locally until it can be published to Linear.

## Wayfinding operations

The initial specification map is complete under N07. Technical validations are open implementation activities outside that map, to run in the relevant MVP paths. A completed definition map does not mean the application is implemented or technically validated.

For decision planning, use the parent issue [Definire la specifica di Creuza](https://linear.app/giocosta/issue/NAS-64/definire-la-specifica-di-creuza), labelled `wayfinder:map`. Query its open children within the Creuza project to find the frontier; open, unassigned children whose blockers are closed are available.

Decision children carry exactly one type label: `wayfinder:grilling`, `wayfinder:research`, `wayfinder:prototype`, or `wayfinder:task`. These decision tickets use wayfinder labels rather than implementation triage labels. Root triage guidance continues to apply when using a triage role on implementation issues.

Claim a decision by assigning it to the developer driving the map before working on it. Use native Linear parent and blocking relationships; create issues before wiring dependencies. The initial remaining decisions have no artificial ordering dependency.

On resolution, add a resolution comment with the approved answer, source and evidence, complete the child, and add a title-wrapped link and one-line gist to the map’s Decisions so far. The map is an index; details live in the child resolution and authoritative repository documents. Keep its open frontier in child queries, not a duplicated task list in the map body.

The consultation document [Creuza — specifica MVP e confini V1](https://linear.app/giocosta/document/creuza-specifica-mvp-e-confini-v1-597368dd466a) mirrors the dated repository specification. Current behavior lives in `docs/brainstorming/SPEC.md`, provenance in `DECISIONS.md`; update the document when SPEC changes. Local files have not been published merely because a Linear link exists.
