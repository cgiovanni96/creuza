# Creuza — primo percorso locale

Questa applicazione è distinta dai prototipi. S01 è in lavorazione: vedere NAS-75 per lo stato e le verifiche residue. Nessuna risorsa cloud è stata creata.

## Avvio locale

Servono Node 24, pnpm 11.7 e PostgreSQL 17 (binaries `initdb`, `postgres`, `pg_ctl`, `pg_isready`). Su Windows il percorso predefinito è `C:/Program Files/PostgreSQL/17/bin`; altrove specificare `CREUZA_PG_BIN` se i programmi non sono nel PATH.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Aprire http://localhost:4310, inserire un indirizzo sintetico e aprire la posta locale indicata nella schermata. Il link Better Auth crea una sessione; non viene inviata alcuna email. Creare un viaggio dal nome e aprire il suo Programma. La posta è in memoria e si perde al riavvio; i dati sono conservati nel cluster locale `.local/postgres-host`, sulla porta 55440, separato dai prototipi e da database esistenti. L'accesso al cluster usa trust locale: non esporlo in rete o usare dati reali. Arrestare le applicazioni con Ctrl+C e PostgreSQL con `pnpm db:stop`.

API locale: http://localhost:4300/api/reference; OpenAPI: http://localhost:4300/api/openapi.json. La documentazione descrive le rotte di dominio; gli endpoint Better Auth sono gestiti dalla libreria separatamente.

## Verifiche

Con l'app avviata: `pnpm test`. Con il database locale avviato e migrato: `pnpm test:worker` esercita la stessa API in workerd con una casella R2 emulata, confinata al test. `pnpm build` e `pnpm check` verificano build e tipi (la generazione delle route avviene all'avvio o nella build). I test creano account e viaggi sintetici nel database locale, senza pulirlo automaticamente.

## Scelte e limiti

La creazione scrive viaggio, Partecipante e membership Owner nella stessa transazione. L'accesso a ogni viaggio è verificato sul backend, indipendentemente dalla sessione. Le migrazioni Better Auth sono applicate con la sua API e lo schema di dominio con SQL idempotente. Il backend Hono è condiviso tra server locale e entrypoint Workers; quest'ultimo richiede configurazione di database e secret e disabilita la consegna email finché non viene integrata in S02. Il bundle Workers è stato verificato con dry-run e il percorso autenticato è passato in workerd locale con PostgreSQL e posta emulata; Neon, CPU/quote e deploy cloud non sono stati verificati. Questa configurazione non è pronta per la produzione.

I controlli locali includono schermate a 375 pixel e desktop, focus e navigazione da tastiera, etichette, landmark e assenza di overflow orizzontale sulle schermate principali. Non costituiscono un audit WCAG completo né prove su dispositivi fisici.
