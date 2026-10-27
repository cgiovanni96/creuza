# Creuza — specifica e mappa delle decisioni

Aggiornata il **27 ottobre 2026**. La discussione Wayfinder ha approvato in Q131 un perimetro MVP sufficiente all’uso personale iniziale. La definizione della specifica è completata con N07: queste sono le basi per pianificare e costruire l’MVP. La validazione tecnica avverrà nei percorsi applicativi durante l’implementazione; non è già dimostrata.

## Leggere secondo il lavoro

| Documento | Quando leggerlo |
| --- | --- |
| [SPEC.md](SPEC.md) | Requisiti, comportamento e permessi |
| [DECISIONS.md](DECISIONS.md) | Provenienza delle scelte, risposte fino a Q140 e decisioni sostituite |
| [ARCHITECTURE.md](ARCHITECTURE.md) | Stack, confini tecnici e stato delle prove |
| [ROADMAP.md](ROADMAP.md) | Scope MVP/V1/futuro e ordine proposto del lavoro |
| [Piano MVP approvato](../planning/MVP_IMPLEMENTATION_PLAN.md) | 22 incrementi approvati in Q141, link ai ticket e dipendenze |
| [GAPS_AND_CONSISTENCY.md](GAPS_AND_CONSISTENCY.md) | Questioni aperte e relative dipendenze |
| [AGENTS.md](AGENTS.md) | Regole di manutenzione e autonomia |
| [GLOSSARY.md](../../GLOSSARY.md) | Significato canonico dei termini del dominio |
| [WAYFINDER_INTERVIEW.md](sources/WAYFINDER_INTERVIEW.md) | Testo delle domande/risposte quando occorre verificare una fonte |
| [Baseline del 25 ottobre](history/2026-10-25-baseline.md) | Solo ricostruzione storica, non istruzioni correnti |

## Stato

L’utente colloca le verifiche tecniche nell’implementazione MVP e delega le scelte tecniche/architetturali secondarie entro i vincoli (N07). La mappa di definizione è chiusa; i ticket di validazione restano nel backlog implementativo.

- Scopo e scope MVP definiti, con confini V1 e futuro espliciti.
- Q141 approva granularità e dipendenze dei 22 incrementi, ora pubblicati su Linear; implementazione da avviare.
- Regole finanziarie residue e corrispondenze prenotazione–Programma definite in Q133–Q140; implementazione e verifiche da eseguire.
- TanStack Start, Mantine, Better Auth, Google/magic link, Google Maps + Places, R2 UE e Resend scelti.
- Workers + Hono e Neon Free UE sono la direzione preferita; 11 controlli locali passati in workerd, con prova cloud/CPU ancora aperta. Evidenze in [Workers runtime probe](../../prototypes/workers-runtime/FINDINGS.md).
- TanStack AI scelto; OpenCode Go preferito, con idoneità/capacità ancora da verificare.
- Applicazione responsive MVP; task, AI funzionale, PWA/offline in V1.
- Backup pianificati e restore testing esplicitamente rinviati.
- Nessun elenco completo della V2 ricostruito.

## Fonti e autorità

D01–D38 provengono dalla baseline originale e sono conservate con la loro storia. Q1–Q141 e N01–N07 registrano la discussione successiva nella chat Creuza - Wayfinder. Le domande iniziali e le risposte brevi sono state recuperate dalla cronologia, non dedotte soltanto dai riassunti.

Requisiti correnti in SPEC, ragioni/provenienza in DECISIONS, stack in ARCHITECTURE, release in ROADMAP. Linear è il registro dei ticket e la mappa del lavoro aperto; [TRACKER.md](TRACKER.md) raccoglie i collegamenti. Evitare specifiche concorrenti: i documenti Linear rimandano a questa baseline e indicano il loro ruolo di riepilogo.

Dal 27 ottobre l’utente autorizza la persistenza in file e Linear. Dopo ogni nuova decisione aggiornare subito il documento pertinente e il registro, indicando se sostituisce una decisione precedente. Istruzioni per gli agenti nella root e in docs/agents continuano ad applicarsi.
