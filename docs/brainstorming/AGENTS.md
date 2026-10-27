# Creuza — manutenzione della specifica e implementazione

## Fonti

Prima di pianificare o implementare leggere [README.md](README.md), poi le sezioni pertinenti di [SPEC.md](SPEC.md). Per la provenienza o una decisione sostituita leggere [DECISIONS.md](DECISIONS.md); raggiungere le [fonti dell’intervista](sources/WAYFINDER_INTERVIEW.md) solo quando serve il testo originale.

- Per dati, API, identità, storage, AI, mappe, offline o deploy: [ARCHITECTURE.md](ARCHITECTURE.md).
- Per perimetro di versione o sequenza del lavoro: [ROADMAP.md](ROADMAP.md).
- Per parti non definite o verifiche residue: [GAPS_AND_CONSISTENCY.md](GAPS_AND_CONSISTENCY.md) e [TRACKER.md](TRACKER.md).
- Per termini del dominio: [GLOSSARY.md](../../GLOSSARY.md); per tracker e triage: istruzioni root e docs/agents.

Il perimetro MVP è sufficiente secondo Q131. Le questioni residue bloccano solo le parti dipendenti; la V2 rimane non specificata. L’archivio storico conserva formulazioni superate, non istruzioni correnti.

## Autonomia e approvazione

L’utente autorizza dal 27 ottobre 2026 la modifica dei file e la creazione/aggiornamento delle issue. Questa autorizzazione supera il vincolo chat-only; non adotta automaticamente nuove scelte di prodotto o architettura.

N07 delega anche le scelte tecniche e architetturali secondarie entro i vincoli approvati: scegliere la soluzione, integrarla nei percorsi MVP, verificarla e registrarne motivo/esito. L’MVP è il contesto di validazione; PoC separati non sono un requisito per chiudere la specifica. Distinguere le decisioni delegate dalle risposte esplicite dell’utente.

Cambi di scope/versione, regole di dominio, costi/accessi o vincoli architetturali fondamentali restano decisioni dell’utente. Per le scelte secondarie coerenti con la baseline, procedere autonomamente e documentare; consultare l’utente quando l’evidenza richiede di cambiare quei vincoli.

Workers/Neon e Go conservano lo stato indicato in ARCHITECTURE. Il confronto locale Start/SPA e le ricerche Places non chiudono le prove runtime o UI. L’utente ha escluso la generazione di un backend completo solo per il confronto.

## Registrare ogni decisione

Dopo una risposta approvata, prima di nuove domande o implementazione dipendente:
1. Aggiornare DECISIONS con fonte, esito e decisioni sostituite.
2. Aggiornare SPEC, ARCHITECTURE o ROADMAP soltanto dove cambia la fonte pertinente; aggiornare GAPS.
3. Registrare la risoluzione sull’issue pertinente e mantenere la copia di consultazione Linear coerente se cambia SPEC. La mappa iniziale è completata con N07; le validazioni sono nel backlog implementativo.
4. Per la domanda successiva usare il prossimo numero libero: **Q142**. Q141 approva granularità e dipendenze del [piano MVP](../planning/MVP_IMPLEMENTATION_PLAN.md); per ticket e frontiera consultare Linear tramite [TRACKER.md](TRACKER.md). La specifica fino a Q140 e N07 rimane approvata. Q132 dispone solo locale per ora: cloud rinviato, non riproporlo automaticamente. Aggiungere la nuova fonte alla traccia, senza rinumerare le precedenti.

SPEC è la fonte del comportamento, ARCHITECTURE dello stack, ROADMAP delle versioni, DECISIONS della provenienza e Linear dei ticket. Tenere distinguibili proposte, scelte, preferenze e prove completate.

## Incrementi e consegna

Associare l’incremento a requisiti/versione e dipendenze; implementare le sole parti determinate. Verificare con unit, API integration, contract e pochi E2E pertinenti, più controlli accessibilità automatici/manuali sui percorsi principali. Riportare verifiche non eseguite.

Usare PR nel flusso trunk-based, tag release, dev/staging automatici e produzione da tag quando il deploy è configurato. Una predisposizione o un PoC resta tale; dichiarare completata una funzione quando soddisfa il comportamento approvato e le verifiche pertinenti. I backup pianificati e i test di ripristino restano rinviati da Q118.
