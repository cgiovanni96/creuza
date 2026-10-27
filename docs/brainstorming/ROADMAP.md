# Creuza — roadmap corrente

Consolidata il 27 ottobre 2026. Scope approvato in Q131 e [DECISIONS.md](DECISIONS.md). Nessuna scadenza o stima concordata. La suddivisione operativa e le dipendenze sono approvate in Q141; i confini di prodotto restano quelli concordati.

## 1. Versioni

| Versione | Contenuto confermato |
| --- | --- |
| MVP | Web responsive italiano, viaggi/Programma, Idee personali e gruppi/copie, prenotazioni/pass, documenti, finanze e saldi, Partecipanti/accessi/inviti, mappe, login Google/magic link, gestione/test connessione AI |
| V1 | Task strutturati; estrazione ricevute; suggerimenti itinerario da Idee; installabilità e copia offline persistente in sola lettura |
| V2 | Perimetro non specificato; non dichiararla vuota e non assegnarle automaticamente feature rinviate |
| Dopo V2 | Condivisione della connessione AI; versione esatta non fissata |

Assegnazioni bagagli, reminder, push, routing integrato, allegati offline, scrittura offline e altre estensioni non hanno una release approvata. Promemoria e scadenze dei task non sono impliciti nella collocazione V1.

## 2. Direzione iniziale e verifiche negli incrementi

N07 approva l’MVP come contesto di validazione della fattibilità, nell’applicazione integrata. Queste verifiche appartengono al lavoro di implementazione: non sono prerequisiti di PoC per chiudere la specifica. Le scelte tecniche/architetturali secondarie entro i vincoli sono delegate e documentate mentre emergono.

| ID | Stato / risultato |
| --- | --- |
| P01 — Perimetro | Sufficiente per uso iniziale approvato Q131; storia originaria V2 resta incompleta |
| P02 — Applicazione e identità | TanStack Start e Better Auth scelti; Google + magic link sostituiscono password |
| P03 — Runtime | Workers + Hono preferiti; probe locale workerd completato con 11 controlli. Verifica target/CPU nel percorso S01 e alla consegna S22; provisioning attuale ancora rinviato da Q132. Non è autorizzato generare un backend completo per il confronto |
| P04 — Database | Neon Free UE direzione iniziale, configurazione e connessioni da validare in S01 e nel deploy autorizzato |
| P05 — Mappe | Google scelto; validazione della UX nel flusso S19, senza prototipo separato obbligatorio |
| P06 — Dominio | Regole discusse definite fino a Q140, inclusi rami finanziario e sincronizzazione prenotazioni; nuovi casi non coperti da segnalare quando emergono |
| P07 — AI/offline | Scope e comportamenti definiti; connessione Go da verificare in S20; funzioni AI e offline da implementare in V1 |

La copia in [sources](sources/WAYFINDER_INTERVIEW.md) conserva domande/risposte; l’[archivio](history/2026-10-25-baseline.md) conserva la baseline precedente.

## 3. Piano MVP approvato

La scomposizione operativa in 22 incrementi verticali è nel [piano MVP](../planning/MVP_IMPLEMENTATION_PLAN.md), approvato in Q141 e pubblicato su Linear. Mantiene i confini di questo documento; non introduce una nuova versione di prodotto. Il piano sostituisce la precedente sequenza indicativa M01–M09 con dipendenze native fra ticket.

| Gruppo di lavoro | Incrementi | Risultato |
| --- | --- | --- |
| Primo viaggio personale | S01, S03–S05 | Accesso locale, viaggio e Programma utilizzabili |
| Idee e collaborazione | S06–S10 | Ispirazione, programmazione e compagni con accessi corretti |
| Costi e prenotazioni | S11–S15 | Pianificazione prenotata e contabilità condivisa |
| Documenti | S16–S18 | Libreria privata, foto da telefono e riuso dei file |
| Integrazioni personali | S02, S19–S20 | Login provider, mappe e impostazioni AI dentro l’app |
| Recupero e consegna | S21–S22 | Cestini/storico, percorso completo e release verificata |

I gruppi non sono blocchi aggiuntivi. La prima frontiera è [Accedere via magic link e creare il primo viaggio](https://linear.app/giocosta/issue/NAS-75/accedere-via-magic-link-e-creare-il-primo-viaggio), avviabile localmente. Seguire poi le dipendenze native su Linear, fonte dello stato effettivo. H01 riguarda gli accessi esterni/deploy di S22 e conserva il rinvio Q132.

Nessun incremento anticipa funzionalità AI, task o offline V1. Per le prove automatiche seguire unit, integrazione API, contract e pochi E2E significativi; accessibilità con controlli automatici e manuali.

## 4. Accettazione per i percorsi principali

- Raccogliere Idee personali, inserirle in gruppi, creare un viaggio e programmare più elementi da una stessa Idea, preservando l’originale.
- Pianificare il Perù con soggiorni su più notti, trasferimenti notturni/tra fusi, attività senza orario, giornate sintetiche espandibili e avvisi di sovrapposizione.
- Registrare un pass per più visite, riutilizzare il PDF, cambiare/cancellare prenotazioni preservando il piano.
- Aggiungere un Partecipante senza account, registrare spese, invitarlo e collegarlo senza perdere storico; verificare permessi e revoca.
- Riprodurre i cinque casi finanziari di SPEC §7 con cambi e regolazioni conservati dopo correzioni.
- Scollegare/ripristinare file o elementi e gestire cestino viaggio secondo permessi.
- Trovare luoghi e aprire indicazioni esterne; tutte le funzioni disponibili su mobile e desktop.
- Configurare/testare/rimuovere credenziali AI backend nell’MVP, senza dichiarare funzionanti le capacità V1.

## 5. V1 e lavoro futuro

Prima dei task strutturati precisare campi, assegnazioni e comportamenti, senza includere automaticamente reminder/automazioni. Prima dell’AI funzionale validare idoneità Go, modello e capacità; definire le bozze di ricevuta e itinerario entro minimizzazione e revisione umana approvate. Prima dell’offline scegliere e provare persistenza/PWA e flussi di revoca sui browser target.

Il lavoro V1 non blocca gli incrementi MVP indipendenti. Backup pianificati/restore restano rinviati, non assegnati automaticamente a una release.

Q136 conserva il cambio unico nell’MVP: tassi distinti per singolo pagamento sono un’ipotesi futura da valutare se utile, non una feature assegnata alla V1/V2.

## 6. Governo

File modificabili e issue autorizzate dal 27 ottobre (N06). Aggiornare le decisioni appena approvate e collegare le questioni aperte in Linear. Scelte tecniche/architetturali secondarie entro i vincoli delegate all’agente, con motivazione e verifica nell’MVP (N07). Cambi di prodotto o dei vincoli fondamentali restano decisioni dell’utente. Non considerare un PoC una scelta definitiva senza approvazione o una feature consegnata.
