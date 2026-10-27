# Creuza — architettura corrente

Consolidata il 27 ottobre 2026. Requisiti: [SPEC.md](SPEC.md). Provenienza/storia: [DECISIONS.md](DECISIONS.md). Le scelte indicate come preferite e le prove pianificate non sono deployment già verificati.

## 1. Stack e stato

N07 colloca la verifica delle integrazioni nell’implementazione dell’MVP, usando i percorsi applicativi. Gli stati sotto descrivono evidenze e direzione iniziale, non gate di PoC prima della chiusura della specifica. Le scelte tecniche/architetturali secondarie entro i vincoli sono delegate all’agente, da motivare e verificare durante il lavoro.


| Area | Decisione corrente | Stato |
| --- | --- | --- |
| Applicazione | TanStack Start, React/TypeScript, Mantine | Scelto dopo confronto; SPA mode punto di partenza verificato localmente |
| API | Backend separato, Hono, OpenAPI generata, Scalar, client leggero | Confine confermato; integrazione target da validare |
| Runtime/hosting | Cloudflare Workers + asset statici, preferenza quote gratuite | Direzione preferita; compatibilità locale workerd verificata, prova cloud/CPU aperta |
| Identità | Better Auth nel Worker; Google OAuth + magic link | Scelto; OAuth/email reali da configurare e verificare |
| Dati | PostgreSQL, Neon Free in regione UE | Provider candidato preferito; configurazione target da verificare |
| File | R2 privato in giurisdizione UE, confine S3-compatible | Scelto |
| Email | Resend Free con dominio/sottodominio posseduto | Scelto |
| Mappe | Google Maps + Places | Scelto; prova ricerca eseguita, integrazione UI completa aperta |
| AI | TanStack AI, connessioni personali backend | Scelto; OpenCode Go preferito ma idoneità/capacità aperte |
| Repository | pnpm, Turborepo, apps/packages | Confermato |
| Contratti/test | Unit, API integration, contract, pochi E2E | Confermato |
| Consegna | PR, trunk-based, tag; dev/staging automatici, produzione da tag | Confermato; configurazione da realizzare |

Provider gratuiti sono una preferenza entro quote e condizioni da ricontrollare al deploy, non una garanzia di costo zero né autorizzazione a upgrade. L’uso personale non rende Google Maps privo di requisiti di billing/configurazione. Regioni UE dei servizi scelti non equivalgono a tutto il trattamento confinato in UE.

## 2. Confini

UI TanStack Start/Mantine → client leggero → API Hono/OpenAPI → PostgreSQL e storage privato. Better Auth gestisce autenticazione; Partecipanti, inviti al viaggio, ruoli e autorizzazioni sono dominio Creuza. Una sessione autenticata non dimostra autorizzazione a un viaggio.

API/documentazione hanno un’unica fonte contrattuale generata. L’applicazione può usare le capacità server di Start quando utili senza eliminare implicitamente il confine API approvato.

Il backend custodisce credenziali AI e autorizza accesso ai file. I secret non appartengono al client, ai log, all’archivio dell’intervista o al bundle offline. Le chiavi browser di mappe richiedono restrizioni appropriate; la chiave demo usata in discussione non viene salvata.

## 3. Dati e concorrenza

- Giorni derivati; eventuali note/metadati riferiti alle date e conservati quando cambiano i confini del viaggio.
- Base comune itinerary_item e dettagli per attività, trasferimento e alloggio. Date locali, timezone IANA e istanti dove appropriati.
- Idee personali, appartenenze a gruppi, copie del viaggio e derivazioni nel Programma preservano i confini d’editing indipendente.
- Prenotazioni autonome con collegamenti molti-a-molti. Criterio Q99 precisato da Q138–Q140: aggiornare i campi temporali ancora allineati, preservare modifiche indipendenti, trattare la validità dei pass come vincolo e risolvere fonti/tratte ambigue prima dell’automazione. Tabella in SPEC §5; nessuna precedenza automatica per ultima modifica della prenotazione.
- Account, Partecipante e appartenenza/ruolo distinti. Collegare un account non concede accesso; invito accettato necessario.
- Decimali esatti per importi e cambi anche lungo API/client. EUR base dei saldi; dati originali e tassi conservati, algoritmo conforme agli esempi approvati.
- Q133 distingue costo previsto indicativo e costo effettivo prevalente; la previsione non limita i pagamenti. Preservare il confronto tra i due valori. Q135 definisce una chiusura esplicita al fornitore e il consuntivo dai pagamenti; Q136 mantiene un cambio unico per spesa nell’MVP, condiviso da pagamenti/rimborsi, senza tassi per singolo pagamento. Q134 limita i rimborsi fornitore al pagato residuo dei rimborsi precedenti. Q137 ricalcola quote uguali/percentuali e richiede la revisione esplicita degli importi fissi prima della chiusura, mantenendo registrabili i pagamenti.
- Ultimo salvataggio prevale con storico recuperabile. Questa scelta non autorizza a perdere lo storico delle correzioni finanziarie o a fondere automaticamente modifiche indipendenti.

ORM, mapping SQL, nomi pacchetti e librerie di supporto sono dettagli delegati entro questi vincoli. Non creare pacchetti vuoti per aderire a una struttura teorica.

## 4. File e ciclo di vita

Metadati in PostgreSQL e oggetti privati R2; i collegamenti non duplicano il file. Autorizzare upload e download secondo il contesto del viaggio. Applicare il limite originale di 20 MB e validare i formati previsti; HEIC/HEIF richiede una prova di anteprima compatibile.

Scollegamento, cestino e definitiva seguono SPEC §8. L’eliminazione definitiva deve gestire DB e oggetti senza eliminare dati personali indipendenti. Gli strumenti di consistenza e l’elaborazione differita sono dettagli esecutivi; eventuali nuove politiche di retention richiedono decisione.

## 5. Identità ed email

Google e magic link convergono sullo stesso account per la stessa email verificata. Ruoli/inviti del viaggio restano separati dal collegamento di credenziali di login. Conservare il Partecipante esistente quando un invito viene accettato o un account viene collegato.

Resend su dominio proprio per messaggi italiani di accesso/invito; ambiente di test isolato con invii simulati. Configurare credenziali reali non implica permesso di inviare email reali non richieste o acquistare piani.

## 6. Mappe e dati Google

La scelta Google è confermata; ricerca di venue specifiche e UI mobile devono essere validate separatamente. Place ID come riferimento persistente; i dati di Google non diventano una copia personale permanente. Le schede Google richiedono rete; contenuti scritti autonomamente disponibili nel bundle.

Al momento dell’integrazione verificare termini applicabili EEA, attribuzioni, cache per tipo di dato, visualizzazione dei risultati e restrizioni chiavi. L’approvazione di Google non costituisce una verifica già conclusa di ogni dettaglio di conservazione.

Evidenza raccolta in chat: dieci ricerche Google Places con nove corrispondenze nominali chiare e un alloggio plausibile non confermato; il confronto MapTiler aveva cinque risultati riconoscibili, due ambigui, tre mancanti. Campione esplorativo del viaggio, non garanzia generale di copertura né prototipo cartografico end-to-end. La prova non è stata rieseguita durante questo consolidamento.

## 7. AI e offline

MVP AI: gestione/test connessione personale. V1: estrazione ricevute e proposte d’itinerario come bozze. TanStack AI per orchestrazione/adapter; Go preferito per usare la quota personale. La presenza di un harness non risolve da sola l’idoneità di Go per traffico di viaggio: verificarla prima di stabilizzare quell’integrazione.

Riepilogo dati prima dell’invio, selezione limitata e stop a quota esaurita come SPEC §10. API/modello, immagini e output strutturati da verificare; nessun modello selezionato implicitamente.

Offline V1: PWA e copia locale persistente in sola lettura, per viaggio/dispositivo, senza allegati/mappe; comportamenti in SPEC §11. Formato, persistenza, service worker e sincronizzazione in lettura da scegliere e provare sui browser target. Non implementare implicitamente scrittura offline o refresh ad app completamente chiusa.

## 8. Evidenze e verifiche da integrare nell’MVP

Il confronto applicativo approvato è in [application-comparison](../../prototypes/application-comparison/README.md) e [FINDINGS](../../prototypes/application-comparison/FINDINGS.md). È una prova locale Start/SPA con dati sintetici, non un backend completo né una validazione Workers. Le metriche e i comandi del prototipo appartengono ai suoi file.

Da verificare negli incrementi MVP: runtime Workers/auth/DB/file (M01 e deploy), integrazione Google UI e dati (M08), HEIC/HEIF nel flusso allegati (M07), connessione/idoneità Go nelle impostazioni AI (M08). Non costituiscono blocchi della fase di definizione. Le capacità AI funzionali rimangono V1. Dettagli in [GAPS_AND_CONSISTENCY.md](GAPS_AND_CONSISTENCY.md).

Il 27 ottobre è stato eseguito il [probe Workers](../../prototypes/workers-runtime/FINDINGS.md): 11 controlli passati in workerd con Better Auth magic link/sessioni, guardia sintetica di permessi/revoca, PostgreSQL locale e R2 emulato; OpenAPI generata e bundle dry-run riuscito (474,36 KiB gzip). È evidenza di compatibilità locale, non misura CPU o prova Neon/R2 cloud, Google OAuth, Resend o hosting del frontend. Workers e Neon restano preferiti; nessuna nuova adozione definitiva. Codice sul branch locale non pubblicato codex/workers-runtime-probe, commit 25f485201c7d9a637de3f9b482d72f4dfb8760c0.

Il supporto agli accessi per il deploy MVP è tracciato in [Predisporre gli accessi cloud per il deploy dell’MVP](https://linear.app/giocosta/issue/NAS-81/predisporre-gli-accessi-cloud-per-il-deploy-dellmvp). Il probe locale non è deploy-ready e non va pubblicato invariato. Nessun servizio cloud è stato creato durante la prova locale.

Q132 rinvia esplicitamente la prova cloud: per ora soltanto locale, proseguendo sulle regole di dominio. N07 ricolloca il lavoro nella realizzazione dell’MVP: verificare il target quando si implementa/deploya il percorso pertinente. Q132 conserva il rinvio del provisioning attuale; non impone una fase preliminare di trial separato.

Backup pianificati e restore testing rinviati da Q118. Nessun impegno numerico di SLA, RPO o performance. Configurazione CI, migrazioni e deploy da definire entro flusso release approvato.
