# Creuza — stato delle lacune e coerenza

Consolidamento del 27 ottobre 2026. [Decisioni](DECISIONS.md), [specifica](SPEC.md), [mappa e ticket](TRACKER.md). Le questioni aperte sono conservate, non coperte da supposizioni.

## 1. Fonti recuperate e limiti

La baseline D01–D38 è preservata nell’[archivio del 25 ottobre](history/2026-10-25-baseline.md). Le domande Q1–Q131 e le risposte sono state recuperate dalla cronologia della chat Creuza - Wayfinder e salvate in [WAYFINDER_INTERVIEW.md](sources/WAYFINDER_INTERVIEW.md), con riferimenti ai turni.

Le successive risposte Q132–Q140 sono registrate nelle stesse fonti: cloud rinviato, rami finanziario e aggiornamento prenotazioni risolti. Restano le verifiche tecniche esplicite, non nuove domande di dominio dedotte automaticamente. Q141 approva granularità e dipendenze dei 22 incrementi MVP, ora pubblicati con relazioni native; [piano e link](../planning/MVP_IMPLEMENTATION_PLAN.md).

Sono stati ricostruiti i primi sì associandoli alle domande originali; non si presume che tutte le raccomandazioni fossero approvate. Q36 era indicata dall’utente come «26» ma il testo riguardava la valuta domestica: chiarimento registrato nella chat e nelle fonti. Q83–Q84 sono risposte testuali, non card strutturate. Q110 e Q118 hanno varianti; le ultime risposte prevalgono.

La precedente baseline dichiarava incompleto l’inventario. **Q131 approva ora la sufficienza del perimetro MVP iniziale**: la lacuna non blocca più quel controllo. Non significa recupero integrale della roadmap originaria o definizione della V2.

Il consolidamento iniziale non aveva rieseguito prototipi. La successiva prova locale Workers del 27 ottobre è registrata sotto; non certifica integrazioni cloud. Le informazioni commerciali emerse in chat sono datate: ricontrollarle al momento dell’uso.

## 2. Stato delle lacune storiche

| ID | Stato corrente | Residuo / dipendenza |
| --- | --- | --- |
| L01 — Catalogo | Sufficienza MVP chiusa da Q131, confini V1 definiti | Origine completa V2 non recuperata; futuro ancora aperto |
| L02 — Piattaforma e campi base | Web/Start/Mantine, creazione viaggio dal nome, scope mappe e UX definiti | Verifiche target; campi e validazioni per i flussi non ancora dettagliati vanno precisati quando necessari |
| L03 — Accessi | Partecipanti, ruoli, inviti, visibilità completa, revoca, trasferimento e archiviazione definiti | Nessun blocco generico sugli accessi; configurazione reale e casi limite d’identità da verificare nell’incremento |
| L04 — Calendario | Stati/fuso, intervalli inclusivi, cambi date conservativi, tempi locali, più giorni/notti definiti | Nessuna regola di eliminazione o spostamento implicito da introdurre |
| L05 — Programma/prenotazioni | Tipi, collegamenti, ordine, tempi, pass/cancellazione e criteri Q138–Q140 definiti | [Definire quando una prenotazione aggiorna il Programma senza ambiguità](https://linear.app/giocosta/issue/NAS-80/definire-quando-una-prenotazione-aggiorna-il-programma-senza-ambiguita) risolto; implementazione e verifiche da eseguire |
| L06 — Finanze | Definita per il perimetro discusso: due valute, saldi sul pagato, previsto/effettivo, rimborsi/regolazioni, chiusura, cambio unico e quote sul consuntivo Q137 | [Precisare limiti finanziari e quadratura dei casi residui](https://linear.app/giocosta/issue/NAS-79/precisare-limiti-finanziari-e-quadratura-dei-casi-residui) risolto; implementazione e verifiche da eseguire |
| L07 — File/cancellazione | Libreria/collegamenti, formati, limite, cestini, poteri Owner definiti | HEIC/HEIF: [Consultare anteprime HEIC e HEIF mantenendo l’originale](https://linear.app/giocosta/issue/NAS-77/consultare-anteprime-heic-e-heif-mantenendo-loriginale) |
| L08 — AI | Titolarità, gestione MVP, V1, bozze, dati inviati e stop quota definiti | Go/API/modelli: [Gestire e testare la connessione AI personale](https://linear.app/giocosta/issue/NAS-78/gestire-e-testare-la-connessione-ai-personale) |
| L09 — Offline | Contenuti, toggle, refresh, logout/revoca e separazione Google definiti | Implementazione PWA/persistenza e prova browser in V1 |
| L10 — Qualità/operatività | Uso iniziale, budget preferito, UE, browser, concorrenza, accessibilità definiti | Runtime [Accedere via magic link e creare il primo viaggio](https://linear.app/giocosta/issue/NAS-75/accedere-via-magic-link-e-creare-il-primo-viaggio); Google [Usare Google Maps e Places nel viaggio](https://linear.app/giocosta/issue/NAS-76/usare-google-maps-e-places-nel-viaggio); soglie prestazioni/storico non fissate; backup/restore rinviati |

## 3. Verifiche da eseguire nell’implementazione MVP

N07 trasferisce queste verifiche nei percorsi dell’MVP, senza bloccare la chiusura della specifica. Le issue restano aperte come attività di implementazione: non attestano prove già concluse. Le scelte tecniche/architetturali secondarie entro i vincoli vengono prese e documentate durante il lavoro.

| Attività di implementazione | Cosa verificare | Nel percorso |
| --- | --- | --- |
| [Accedere via magic link e creare il primo viaggio](https://linear.app/giocosta/issue/NAS-75/accedere-via-magic-link-e-creare-il-primo-viaggio) | Runtime/auth/DB/file e limiti nell’app integrata | S01 e consegna S22 autorizzata |
| [Usare Google Maps e Places nel viaggio](https://linear.app/giocosta/issue/NAS-76/usare-google-maps-e-places-nel-viaggio) | UI/ricerca su browser target, attribuzioni e gestione dati | S19: Programma/Idee e mappa |
| [Consultare anteprime HEIC e HEIF mantenendo l’originale](https://linear.app/giocosta/issue/NAS-77/consultare-anteprime-heic-e-heif-mantenendo-loriginale) | Anteprima HEIC/HEIF, originale e limite con risorse/costi compatibili | S17: upload/libreria/download |
| [Gestire e testare la connessione AI personale](https://linear.app/giocosta/issue/NAS-78/gestire-e-testare-la-connessione-ai-personale) | Connessione e idoneità Go con credenziali backend | S20: configurazione/test; funzioni AI restano V1 |

I ticket sono ora fuori dalla mappa di definizione e conservano lo stato aperto e le evidenze pregresse. Il probe workerd con 11 controlli resta una prova locale; la validazione del target si svolge nell’MVP. Il task di accessi cloud riguarda il deploy e conserva il rinvio Q132: non blocca l’avvio locale, la chiusura della specifica o le parti indipendenti. Requisiti e criteri di accettazione restano validi; un esito tecnico negativo si affronta nel percorso implementativo e si documentano le scelte secondarie entro i vincoli (N07).

## 4. Conflitti risolti

| Prima proposta/decisione | Stato corrente e fonte |
| --- | --- |
| Checklist semplice nell’MVP | Task strutturati V1, Q9 |
| Partecipante solo finanziario | Persona del viaggio anche per assegnazioni future, Q45 |
| Planned/All nel pannello Idee | Solo non programmate, Q84 |
| Ritorno automatico alle Idee | Solo azione esplicita sul singolo elemento, Q85/Q87 |
| Riconciliazione preventiva dei conflitti | Ultimo salvataggio con storico recuperabile, Q81 |
| Tempi prenotazione applicati solo manualmente | Automatici sui campi allineati; modifiche indipendenti e ambiguità preservate secondo Q138–Q140 |
| Email/password + Google | Google + magic link, N02/Q116 |
| MapLibre/MapTiler proposto | Google Maps + Places scelto, N04 |
| Backup giornalieri/restore | Pianificazione rinviata, Q118; nessuna retention approvata |
| Dati Google nel bundle | Solo contenuti personali; schede Google online, Q123 |
| Tutto soltanto in chat | Persistenza autorizzata il 27 ottobre, N06 |

## 5. Evidenze disponibili e loro portata

- Confronto locale applicativo Start/SPA: artefatti in prototypes/application-comparison; non dimostra compatibilità Workers.
- [Probe locale Workers](../../prototypes/workers-runtime/FINDINGS.md): 11 controlli passati in workerd, PostgreSQL locale e R2 emulato. Bundle gzip 474,36 KiB. CPU cloud, Neon, R2 reale, OAuth Google, Resend e hosting frontend non verificati; nessuna adozione definitiva implicita.
- Ricerche reali su dieci luoghi del Perù: evidenza limitata di copertura, non garanzia generale né prototipo completo della mappa.
- Confronto Better Auth / Neon Auth documentale: scelta Better Auth, non deploy auth completato.
- Documentazione Go/TanStack: accesso tecnico via API/harness, non conferma automatica di idoneità per ogni uso.

## 6. Non ancora specificato

Dettaglio dei task strutturati, campi delle bozze AI e gestione risultati incompleti, implementazione offline V1, contenuto V2 e release esatta delle assegnazioni bagagli. Routing interno, reminder, push, allegati offline e scrittura offline non sono impliciti nell’MVP o nella V1.

Obiettivi numerici di prestazione/disponibilità e retention dello storico non sono stati adottati. Non trasformarli in promesse per inferenza. Se necessari a una parte concreta, presentare la relativa proposta e registrare la decisione.
