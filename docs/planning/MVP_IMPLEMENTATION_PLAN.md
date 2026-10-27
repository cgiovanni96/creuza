# Creuza — piano di implementazione MVP

Data: 27 ottobre 2026. **Granularità e dipendenze approvate in Q141; ticket pubblicati su Linear.** Il piano comprende 22 incrementi: 18 nuove issue e quattro riusi, più il supporto umano H01 già esistente. Stato e frontiera correnti sono gestiti su Linear. La pubblicazione non dichiara implementazione o provisioning eseguiti.

Fonti: [SPEC](../brainstorming/SPEC.md), [ARCHITECTURE](../brainstorming/ARCHITECTURE.md), [ROADMAP](../brainstorming/ROADMAP.md), [decisioni](../brainstorming/DECISIONS.md), [glossario](../../GLOSSARY.md). [Specifica di consultazione Linear](https://linear.app/giocosta/document/creuza-specifica-mvp-e-confini-v1-597368dd466a).

## 1. Impostazione

- 22 ticket verticali: ogni risultato attraversa dati, API, interfaccia e verifiche pertinenti. Nessun ticket solo per tutte le tabelle, tutte le API o tutta la UI.
- Il repository contiene documenti e prototipi, non ancora un’applicazione stabile. S01 include lo scaffold necessario al primo percorso; non propone un prefactoring fittizio del prodotto né promuove automaticamente il vecchio login password del prototipo.
- Riutilizzate quattro issue esistenti per S01/S17/S19/S20; H01 conserva il supporto umano agli accessi. Storia ed evidenze delle issue sono conservate nei commenti.
- Nessuna scadenza, stima o minor release inventata. Le dipendenze esprimono capacità necessarie, non un ordine rigido fra rami indipendenti.
- Le verifiche tecniche appartengono al flusso applicativo secondo N07. Accessi, credenziali e cloud si coordinano quando servono: non bloccano la progettazione o il primo percorso locale. I risultati reali non vanno dichiarati verificati con soli mock.
- Le modifiche includono lo storico richiesto dal dominio; S21 porta il recupero generale nella UI. Le correzioni finanziarie hanno già il proprio percorso completo in S13.
- Ogni ticket usa contratti generati, autorizzazione backend e UX italiana responsive; verifiche proporzionate al rischio, con particolare cura per importi, date/fusi, isolamento e ruoli. I gate di release complessivi sono S22.

## 2. Incrementi approvati e link Linear

| Ticket | Risultato | Dipende da |
| --- | --- | --- |
| S01 — [Accedere via magic link e creare il primo viaggio](https://linear.app/giocosta/issue/NAS-75/accedere-via-magic-link-e-creare-il-primo-viaggio) | Avviare Creuza localmente, autenticarsi e creare/riprendere un viaggio personale persistente con Programma inizialmente vuoto. | Nessuno |
| S02 — [Accedere con Google e magic link sulla stessa identità](https://linear.app/giocosta/issue/NAS-84/accedere-con-google-e-magic-link-sulla-stessa-identita) | Usare le due modalità di accesso mantenendo account, viaggi e Partecipante coerenti. | S01 |
| S03 — [Definire date, stato e calendario del viaggio](https://linear.app/giocosta/issue/NAS-85/definire-date-stato-e-calendario-del-viaggio) | Passare da viaggio senza date a calendario, con stato automatico e override persistente. | S01 |
| S04 — [Organizzare attività nel Programma giornaliero](https://linear.app/giocosta/issue/NAS-86/organizzare-attivita-nel-programma-giornaliero) | Creare e modificare attività, scorrere i riepiloghi e aprire più giornate e dettagli. | S03 |
| S05 — [Pianificare trasferimenti e soggiorni su più giorni](https://linear.app/giocosta/issue/NAS-87/pianificare-trasferimenti-e-soggiorni-su-piu-giorni) | Inserire un bus notturno, un volo tra fusi e un alloggio con notti e checkout corretti. | S04 |
| S06 — [Raccogliere Idee personali e organizzarle in gruppi](https://linear.app/giocosta/issue/NAS-88/raccogliere-idee-personali-e-organizzarle-in-gruppi) | Salvare ispirazione privata, riusarla in più gruppi e ritrovarla con filtri. | S01 |
| S07 — [Creare un viaggio da un gruppo e gestire le Idee del viaggio](https://linear.app/giocosta/issue/NAS-89/creare-un-viaggio-da-un-gruppo-e-gestire-le-idee-del-viaggio) | Selezionare Idee di un gruppo, creare un viaggio e lavorare sulle copie non programmate. | S06 |
| S08 — [Programmare Idee e riportare un elemento nelle Idee](https://linear.app/giocosta/issue/NAS-90/programmare-idee-e-riportare-un-elemento-nelle-idee) | Trasformare un’Idea in più elementi indipendenti e riportare il solo elemento selezionato tra le non programmate. | S05, S07 |
| S09 — [Gestire Partecipanti e invitare Editor o Viewer](https://linear.app/giocosta/issue/NAS-91/gestire-partecipanti-e-invitare-editor-o-viewer) | Aggiungere una persona senza account, invitarla e attivare il suo accesso dopo accettazione. | S01 |
| S10 — [Revocare accessi, archiviare persone e trasferire proprietà](https://linear.app/giocosta/issue/NAS-92/revocare-accessi-archiviare-persone-e-trasferire-proprieta) | Cambiare la partecipazione e la proprietà preservando contenuti e storico del viaggio. | S09 |
| S11 — [Registrare spese previste e ripartizioni](https://linear.app/giocosta/issue/NAS-93/registrare-spese-previste-e-ripartizioni) | Inserire manualmente una spesa in EUR o valuta viaggio e attribuirne il costo ai Partecipanti. | S09 |
| S12 — [Registrare pagamenti e chiudere il costo effettivo](https://linear.app/giocosta/issue/NAS-94/registrare-pagamenti-e-chiudere-il-costo-effettivo) | Gestire acconti di più pagatori, vedere i saldi sul pagato e chiudere la spesa al fornitore. | S11 |
| S13 — [Regolare saldi, registrare rimborsi e correggere le finanze](https://linear.app/giocosta/issue/NAS-95/regolare-saldi-registrare-rimborsi-e-correggere-le-finanze) | Registrare regolazioni e rimborsi del fornitore e correggere registrazioni mantenendo lo storico. | S10, S12 |
| S14 — [Registrare prenotazioni e pass collegati al Programma](https://linear.app/giocosta/issue/NAS-96/registrare-prenotazioni-e-pass-collegati-al-programma) | Conservare prenotazioni esterne, pass e collegamenti a più attività, trasferimenti e alloggi. | S05 |
| S15 — [Aggiornare il Programma dalle prenotazioni senza sovrascritture](https://linear.app/giocosta/issue/NAS-97/aggiornare-il-programma-dalle-prenotazioni-senza-sovrascritture) | Applicare automaticamente cambi temporali univoci e risolvere modifiche indipendenti e ambiguità. | S14 |
| S16 — [Caricare e consultare documenti privati del viaggio](https://linear.app/giocosta/issue/NAS-98/caricare-e-consultare-documenti-privati-del-viaggio) | Caricare PDF e immagini comuni, consultarli nella libreria e scaricare gli originali con accesso autorizzato. | S01 |
| S17 — [Consultare anteprime HEIC e HEIF mantenendo l’originale](https://linear.app/giocosta/issue/NAS-77/consultare-anteprime-heic-e-heif-mantenendo-loriginale) | Usare foto da telefono nel normale flusso documenti, verificando conversione e risorse dell’MVP. | S16 |
| S18 — [Riutilizzare e scollegare documenti nei contenuti del viaggio](https://linear.app/giocosta/issue/NAS-99/riutilizzare-e-scollegare-documenti-nei-contenuti-del-viaggio) | Collegare uno stesso file a prenotazioni, elementi e spese, mantenendolo una sola volta nella libreria. | S11, S14, S16 |
| S19 — [Usare Google Maps e Places nel viaggio](https://linear.app/giocosta/issue/NAS-76/usare-google-maps-e-places-nel-viaggio) | Trovare luoghi, assegnarli a Idee/elementi e leggere il viaggio sulla mappa. | S08 |
| S20 — [Gestire e testare la connessione AI personale](https://linear.app/giocosta/issue/NAS-78/gestire-e-testare-la-connessione-ai-personale) | Configurare, aggiornare, rimuovere e testare la connessione personale tramite TanStack AI. | S01 |
| S21 — [Recuperare contenuti e gestire il cestino del viaggio](https://linear.app/giocosta/issue/NAS-100/recuperare-contenuti-e-gestire-il-cestino-del-viaggio) | Ripristinare contenuti e viaggi, eliminare definitivamente secondo permessi e recuperare valori precedenti. | S08, S13, S15, S17, S18, S20 |
| S22 — [Usare l’MVP completo e consegnare una release verificata](https://linear.app/giocosta/issue/NAS-101/usare-lmvp-completo-e-consegnare-una-release-verificata) | Percorrere il viaggio Perù nell’app integrata e validare il target di rilascio quando autorizzato. | S02, S19, S21 |

## 3. Raggruppamenti di lavoro

| Gruppo di lavoro | Ticket | Esito |
| --- | --- | --- |
| Primo viaggio personale | S01, S03–S05 | Accesso locale, viaggio e Programma utilizzabili |
| Idee e collaborazione | S06–S10 | Ispirazione, programmazione e compagni con accessi corretti |
| Costi e prenotazioni | S11–S15 | Pianificazione prenotata e contabilità condivisa |
| Documenti | S16–S18 | Libreria privata, foto da telefono e riuso dei file |
| Integrazioni personali | S02, S19–S20 | Login provider, mappe e impostazioni AI dentro l’app |
| Recupero e consegna | S21–S22 | Cestini/storico, percorso completo e release verificata |

Questi gruppi non sono dipendenze aggiuntive. Dopo S01 possono avanzare in parallelo calendario, Idee personali, Partecipanti, documenti e impostazioni AI. S22 dipende dai tre rami terminali S02/S19/S21, che coprono transitivamente tutte le slice.

## 4. Schede degli incrementi

### S01 — Accedere via magic link e creare il primo viaggio

**Issue:** [NAS-75 — Accedere via magic link e creare il primo viaggio](https://linear.app/giocosta/issue/NAS-75/accedere-via-magic-link-e-creare-il-primo-viaggio). Stato e dipendenze correnti in Linear.

**Riutilizzo:** issue esistente aggiornata in Q141; storia ed evidenze conservate nei commenti.

**Dipende da:** nessuno, primo ticket avviabile localmente.

**Risultato:** Avviare Creuza localmente, autenticarsi e creare/riprendere un viaggio personale persistente con Programma inizialmente vuoto.

**Criteri di accettazione:**

- [ ] Applicazione stabile distinta dai prototipi, con avvio locale riproducibile, migrazioni e dati sintetici isolati.
- [ ] Magic link e sessione reali di Better Auth; consegna catturata localmente in sviluppo, senza inviare email a persone.
- [ ] Creazione dal solo nome, lista dei propri viaggi e apertura del Programma; dati conservati dopo riavvio.
- [ ] Creatore unico Owner e Partecipante collegato; account estraneo senza accesso al viaggio.
- [ ] Percorso UI/API/PostgreSQL completo, contratto OpenAPI generato e consultabile; prove pertinenti di sessione, persistenza e autorizzazione.
- [ ] Direzione Workers/Neon integrata nel codice applicativo; distinguere esecuzione locale e cloud. Le prove target/CPU reali confluiscono in S22.

**Riferimenti alla specifica:** §1, §2, §6, §12; Q12/Q74/Q96; N07.

### S02 — Accedere con Google e magic link sulla stessa identità

**Issue:** [NAS-84 — Accedere con Google e magic link sulla stessa identità](https://linear.app/giocosta/issue/NAS-84/accedere-con-google-e-magic-link-sulla-stessa-identita). Stato e dipendenze correnti in Linear.

**Dipende da:** S01 — Accedere via magic link e creare il primo viaggio.

**Risultato:** Usare le due modalità di accesso mantenendo account, viaggi e Partecipante coerenti.

**Criteri di accettazione:**

- [ ] UI italiana con Google e magic link, logout e gestione leggibile di link non validi/errori di accesso.
- [ ] Stessa email verificata converge sullo stesso account; email diverse restano distinte e non introducono un merge account.
- [ ] Sessioni e identità verificate dal backend; gli inviti pendenti non concedono accesso per semplice login.
- [ ] Integrazione email del login con Resend e dominio approvato, configurabile con cattura locale in sviluppo.
- [ ] Prove automatiche dei casi identità/sessione con provider controllati; esito dei test reali Google/Resend dichiarato separatamente.
- [ ] Credenziali e dominio si coordinano tramite H01; il percorso reale con provider autorizzati è verificato anche in S22.

**Riferimenti alla specifica:** §6, §12; Q75 superata/N02, Q116.

### S03 — Definire date, stato e calendario del viaggio

**Issue:** [NAS-85 — Definire date, stato e calendario del viaggio](https://linear.app/giocosta/issue/NAS-85/definire-date-stato-e-calendario-del-viaggio). Stato e dipendenze correnti in Linear.

**Dipende da:** S01 — Accedere via magic link e creare il primo viaggio.

**Risultato:** Passare da viaggio senza date a calendario, con stato automatico e override persistente.

**Criteri di accettazione:**

- [ ] Date inclusive partenza–ritorno, inizialmente assenti; giorni derivati senza record obbligatori per ogni giorno.
- [ ] Draft/Upcoming/In progress/Completed e Cancelled manuale, con override persistente finché rimosso.
- [ ] Fuso di riferimento inizialmente domestico e modificabile per viaggio, distinto dai fusi degli elementi.
- [ ] Cambio intervallo conserva note/metadati; elementi fuori intervallo restano accessibili e segnalati quando presenti.
- [ ] UI e API gestiscono creazione/correzione intervallo; verifiche di confini e transizioni locali.

**Riferimenti alla specifica:** §2; Q12/Q24/Q28/Q56–Q57.

### S04 — Organizzare attività nel Programma giornaliero

**Issue:** [NAS-86 — Organizzare attività nel Programma giornaliero](https://linear.app/giocosta/issue/NAS-86/organizzare-attivita-nel-programma-giornaliero). Stato e dipendenze correnti in Linear.

**Dipende da:** S03 — Definire date, stato e calendario del viaggio.

**Risultato:** Creare e modificare attività, scorrere i riepiloghi e aprire più giornate e dettagli.

**Criteri di accettazione:**

- [ ] Itinerario continuo con riepiloghi compatti generati dai dati strutturati e più giorni espandibili.
- [ ] Attività con orario, Tutto il giorno o Orario da definire; cronologia dei temporizzati e ordine manuale degli altri gruppi.
- [ ] Dettagli fullscreen mobile e pannello contestuale desktop; ritorno a giorno/scroll corretti.
- [ ] Sovrapposizioni temporali consentite con avviso; date esterne all’intervallo gestite senza perdita dati.
- [ ] Modifiche persistenti con storico necessario al recupero, ultimo salvataggio prevalente; UI di recupero generale in S21.
- [ ] Test pertinenti del percorso giorno/attività, ordine e autorizzazione, con controllo mobile/desktop.

**Riferimenti alla specifica:** §4; Q25/Q90–Q91/Q100–Q104.

### S05 — Pianificare trasferimenti e soggiorni su più giorni

**Issue:** [NAS-87 — Pianificare trasferimenti e soggiorni su più giorni](https://linear.app/giocosta/issue/NAS-87/pianificare-trasferimenti-e-soggiorni-su-piu-giorni). Stato e dipendenze correnti in Linear.

**Dipende da:** S04 — Organizzare attività nel Programma giornaliero.

**Risultato:** Inserire un bus notturno, un volo tra fusi e un alloggio con notti e checkout corretti.

**Criteri di accettazione:**

- [ ] Attività, trasferimento e alloggio con base comune e dettagli tipizzati, piani incompleti ammessi.
- [ ] Partenza e arrivo con date/orari/fusi locali pertinenti; durata effettiva dagli istanti.
- [ ] Un solo elemento su più giorni: partenza/arrivo e check-in/notti/checkout, senza duplicazioni di identità.
- [ ] Check-in il 10 e checkout il 13 produce tre notti; alloggio non conflitto automatico con attività diurne.
- [ ] Modifica di un elemento aggiorna tutte le sue apparizioni; riepiloghi del Programma coerenti.

**Riferimenti alla specifica:** §2, §4; D23/D34, Q26–Q27/Q89–Q90.

### S06 — Raccogliere Idee personali e organizzarle in gruppi

**Issue:** [NAS-88 — Raccogliere Idee personali e organizzarle in gruppi](https://linear.app/giocosta/issue/NAS-88/raccogliere-idee-personali-e-organizzarle-in-gruppi). Stato e dipendenze correnti in Linear.

**Dipende da:** S01 — Accedere via magic link e creare il primo viaggio.

**Risultato:** Salvare ispirazione privata, riusarla in più gruppi e ritrovarla con filtri.

**Criteri di accettazione:**

- [ ] Creazione/arricchimento Idea personale con contenuto previsto, accessibile soltanto al proprietario.
- [ ] Gruppi nominati; una stessa Idea in più gruppi senza duplicare il record personale.
- [ ] Le mie Idee mostra tutte le Idee con filtri e accesso ai gruppi; Idee non raggruppate raggiungibili.
- [ ] Modifica della Idea personale visibile nei suoi gruppi, con isolamento rispetto alle altre persone e future copie di viaggio.
- [ ] Percorso UI/API/DB verificato con almeno due account e appartenenze multiple.

**Riferimenti alla specifica:** §3; Q14–Q23/Q107–Q108.

### S07 — Creare un viaggio da un gruppo e gestire le Idee del viaggio

**Issue:** [NAS-89 — Creare un viaggio da un gruppo e gestire le Idee del viaggio](https://linear.app/giocosta/issue/NAS-89/creare-un-viaggio-da-un-gruppo-e-gestire-le-idee-del-viaggio). Stato e dipendenze correnti in Linear.

**Dipende da:** S06 — Raccogliere Idee personali e organizzarle in gruppi.

**Risultato:** Selezionare Idee di un gruppo, creare un viaggio e lavorare sulle copie non programmate.

**Criteri di accettazione:**

- [ ] Crea viaggio pre-seleziona il gruppo, consente esclusioni, richiede nome e lascia date facoltative.
- [ ] Idee selezionate copiate nel viaggio e originali personali conservati e riutilizzabili.
- [ ] Modifiche personali e del viaggio indipendenti; nessun overwrite implicito dell’originale.
- [ ] Schermata Idee del viaggio separata su mobile e desktop; permessi Owner/Editor/Viewer coerenti.
- [ ] Accesso alle copie dipende dall’accesso al viaggio, senza esporre gruppi o altre Idee personali.

**Riferimenti alla specifica:** §3; Q17–Q23/Q109.

### S08 — Programmare Idee e riportare un elemento nelle Idee

**Issue:** [NAS-90 — Programmare Idee e riportare un elemento nelle Idee](https://linear.app/giocosta/issue/NAS-90/programmare-idee-e-riportare-un-elemento-nelle-idee). Stato e dipendenze correnti in Linear.

**Dipende da:** S05 — Pianificare trasferimenti e soggiorni su più giorni; S07 — Creare un viaggio da un gruppo e gestire le Idee del viaggio.

**Risultato:** Trasformare un’Idea in più elementi indipendenti e riportare il solo elemento selezionato tra le non programmate.

**Criteri di accettazione:**

- [ ] Conferma del tipo attività/trasferimento/alloggio e collocazione, preservando i dati utili.
- [ ] Più elementi da una Idea, con collegamento all’origine e modifiche indipendenti.
- [ ] Pannello Idee solo non programmate; dopo programmazione si resta in Idee con Vedi nel Programma.
- [ ] Sposta nelle Idee conserva contenuto corrente del singolo elemento; altri elementi restano programmati.
- [ ] Eliminare l’ultimo derivato non fa riapparire automaticamente l’Idea; cancellazione e ritorno esplicito distinti.
- [ ] Navigazione e stato delle liste coerenti dopo ricaricamento e nelle viste mobile/desktop.

**Riferimenti alla specifica:** §3, §4; Q19/Q83–Q88/Q105–Q106.

### S09 — Gestire Partecipanti e invitare Editor o Viewer

**Issue:** [NAS-91 — Gestire Partecipanti e invitare Editor o Viewer](https://linear.app/giocosta/issue/NAS-91/gestire-partecipanti-e-invitare-editor-o-viewer). Stato e dipendenze correnti in Linear.

**Dipende da:** S01 — Accedere via magic link e creare il primo viaggio.

**Risultato:** Aggiungere una persona senza account, invitarla e attivare il suo accesso dopo accettazione.

**Criteri di accettazione:**

- [ ] Solo Owner crea/modifica Partecipanti, anche con solo nome; aggiunta distinta dall’invito.
- [ ] Invito arricchisce il record esistente preservandone identità, senza duplicare la persona.
- [ ] Account esistente: collegamento, email e notifica; email non registrata: invito email e collegamento successivo verificato.
- [ ] Accesso pendente fino ad accettazione autenticata con email corrispondente; rifiuto/ritiro/scadenza preservano Partecipante.
- [ ] Owner/Editor/Viewer applicati nel backend; tutti i membri leggono l’intero viaggio, Viewer non modifica.
- [ ] Notifiche limitate a inviti/esiti; trasporto locale verificabile, consegna reale con configurazione di S02/H01.

**Riferimenti alla specifica:** §6; Q42–Q50/Q61/Q96–Q97.

### S10 — Revocare accessi, archiviare persone e trasferire proprietà

**Issue:** [NAS-92 — Revocare accessi, archiviare persone e trasferire proprietà](https://linear.app/giocosta/issue/NAS-92/revocare-accessi-archiviare-persone-e-trasferire-proprieta). Stato e dipendenze correnti in Linear.

**Dipende da:** S09 — Gestire Partecipanti e invitare Editor o Viewer.

**Risultato:** Cambiare la partecipazione e la proprietà preservando contenuti e storico del viaggio.

**Criteri di accettazione:**

- [ ] Solo Owner gestisce identità, archiviazione, inviti e ruoli; Editor usa i Partecipanti esistenti nei contenuti.
- [ ] Revoca blocca subito accesso online senza eliminare Partecipante o storico.
- [ ] Archiviazione con record preesistenti conserva storia e rimuove dai default delle nuove spese; supporto verificato anche in S13.
- [ ] Un solo Owner; trasferimento a membro accettato, precedente Owner Editor, trasferimento necessario prima di lasciare.
- [ ] Viewer/Editor non possono aggirare le regole tramite API; prove di sessioni preesistenti dopo revoca.

**Riferimenti alla specifica:** §6; Q49–Q52.

### S11 — Registrare spese previste e ripartizioni

**Issue:** [NAS-93 — Registrare spese previste e ripartizioni](https://linear.app/giocosta/issue/NAS-93/registrare-spese-previste-e-ripartizioni). Stato e dipendenze correnti in Linear.

**Dipende da:** S09 — Gestire Partecipanti e invitare Editor o Viewer.

**Risultato:** Inserire manualmente una spesa in EUR o valuta viaggio e attribuirne il costo ai Partecipanti.

**Criteri di accettazione:**

- [ ] Valuta domestica EUR, valuta viaggio e default cambio manuale con override della spesa.
- [ ] Costo previsto conservato; quote uguali, importi fissi e percentuali con quadratura esatta.
- [ ] Pagatori e beneficiari modellati distintamente; importi decimali esatti anche attraverso API e UI.
- [ ] Vista commutabile tra le due valute senza riscrivere importi originali/cambi; EUR base dei saldi.
- [ ] Resto deterministico visibile e aggiustabile, mantenendo quadratura; test delle tre ripartizioni.
- [ ] Nessuna estrazione AI o trasferimento reale di denaro.

**Riferimenti alla specifica:** §7; Q32–Q38/Q133.

### S12 — Registrare pagamenti e chiudere il costo effettivo

**Issue:** [NAS-94 — Registrare pagamenti e chiudere il costo effettivo](https://linear.app/giocosta/issue/NAS-94/registrare-pagamenti-e-chiudere-il-costo-effettivo). Stato e dipendenze correnti in Linear.

**Dipende da:** S11 — Registrare spese previste e ripartizioni.

**Risultato:** Gestire acconti di più pagatori, vedere i saldi sul pagato e chiudere la spesa al fornitore.

**Criteri di accettazione:**

- [ ] Pagamenti parziali/multipli distinti da quote e residuo al fornitore; importi sopra previsione ammessi.
- [ ] Un cambio unico per spesa nell’MVP, condiviso da pagamenti/rimborsi; correzioni esplicite, non tassi per pagamento.
- [ ] Durante gli acconti mostrare previsto e pagato; Segna come saldata determina consuntivo e conserva previsione.
- [ ] Quote uguali/percentuali ricalcolate sul consuntivo; fissi da aggiornare prima della chiusura, pagamenti comunque registrabili.
- [ ] Saldi tra persone basati sulla porzione pagata; caso EUR 100, anticipo 30, metà ciascuno → EUR 15 dovuti.
- [ ] Caso previsto 100, acconto 30, saldo 80 → consuntivo 110 con ripartizioni secondo Q137.

**Riferimenti alla specifica:** §7; Q39–Q40/Q92/Q133/Q135–Q137.

### S13 — Regolare saldi, registrare rimborsi e correggere le finanze

**Issue:** [NAS-95 — Regolare saldi, registrare rimborsi e correggere le finanze](https://linear.app/giocosta/issue/NAS-95/regolare-saldi-registrare-rimborsi-e-correggere-le-finanze). Stato e dipendenze correnti in Linear.

**Dipende da:** S10 — Revocare accessi, archiviare persone e trasferire proprietà; S12 — Registrare pagamenti e chiudere il costo effettivo.

**Risultato:** Registrare regolazioni e rimborsi del fornitore e correggere registrazioni mantenendo lo storico.

**Criteri di accettazione:**

- [ ] Regolazione tra Partecipanti in EUR o valuta viaggio con proprio cambio; nessun movimento reale nell’app.
- [ ] Rimborso fornitore distingue destinatario e beneficiari, default dalla ripartizione originale e modifica esplicita.
- [ ] Totale rimborsi entro pagato meno rimborsi già ricevuti; regolazioni separate dal limite.
- [ ] Correzioni/soft delete da Owner/Editor con storico visibile, regolazioni precedenti conservate e saldi ricalcolati.
- [ ] Partecipanti archiviati mantengono saldi/storia e consentono regolazioni residue.
- [ ] Riprodurre i casi approvati di pagamenti PEN 40/80 con regolazione intermedia, refund PEN 40 e regolazione con tasso diverso.

**Riferimenti alla specifica:** §7; Q33/Q37/Q41/Q51/Q73/Q93–Q95/Q134.

### S14 — Registrare prenotazioni e pass collegati al Programma

**Issue:** [NAS-96 — Registrare prenotazioni e pass collegati al Programma](https://linear.app/giocosta/issue/NAS-96/registrare-prenotazioni-e-pass-collegati-al-programma). Stato e dipendenze correnti in Linear.

**Dipende da:** S05 — Pianificare trasferimenti e soggiorni su più giorni.

**Risultato:** Conservare prenotazioni esterne, pass e collegamenti a più attività, trasferimenti e alloggi.

**Criteri di accettazione:**

- [ ] Inserimento manuale di fornitore, riferimento, stato, link e dati pertinenti; nessun acquisto/import email automatico.
- [ ] Prenotazioni autonome con relazioni molti-a-molti verso elementi del Programma.
- [ ] Pass anche prima delle visite con validità facoltativa e condizioni testuali; ingressi/scansione fuori MVP.
- [ ] Cancellazione conserva il piano e segnala attenzione; non elimina elementi collegati.
- [ ] Viste e dettagli permettono di ritrovare prenotazioni/pass e collegamenti; documenti riutilizzabili aggiunti da S18.

**Riferimenti alla specifica:** §5; Q29–Q31/Q98.

### S15 — Aggiornare il Programma dalle prenotazioni senza sovrascritture

**Issue:** [NAS-97 — Aggiornare il Programma dalle prenotazioni senza sovrascritture](https://linear.app/giocosta/issue/NAS-97/aggiornare-il-programma-dalle-prenotazioni-senza-sovrascritture). Stato e dipendenze correnti in Linear.

**Dipende da:** S14 — Registrare prenotazioni e pass collegati al Programma.

**Risultato:** Applicare automaticamente cambi temporali univoci e risolvere modifiche indipendenti e ambiguità.

**Criteri di accettazione:**

- [ ] Solo campi temporali ancora allineati ai vecchi valori prenotati aggiornati automaticamente.
- [ ] Modifiche manuali conservate e proposta di allineamento; applicazione ai campi pertinenti di soggiorni e trasferimenti.
- [ ] Validità pass genera avvisi fuori validità senza spostare attività.
- [ ] Prenotazioni discordanti o tratta andata/ritorno non chiara preservano il Programma; scelta esplicita prima dell’automazione.
- [ ] Nessuna precedenza automatica per ultima prenotazione modificata; storico e proiezioni giornaliere coerenti.

**Riferimenti alla specifica:** §5; Q99/Q138–Q140.

### S16 — Caricare e consultare documenti privati del viaggio

**Issue:** [NAS-98 — Caricare e consultare documenti privati del viaggio](https://linear.app/giocosta/issue/NAS-98/caricare-e-consultare-documenti-privati-del-viaggio). Stato e dipendenze correnti in Linear.

**Dipende da:** S01 — Accedere via magic link e creare il primo viaggio.

**Risultato:** Caricare PDF e immagini comuni, consultarli nella libreria e scaricare gli originali con accesso autorizzato.

**Criteri di accettazione:**

- [ ] Libreria privata unica per viaggio, metadati DB e file nello storage privato; R2 emulato utilizzabile in sviluppo.
- [ ] PDF/JPEG/PNG/WebP con consultazione/anteprima pertinente e originale scaricabile.
- [ ] 20 MB per file comunicati prima dell’upload; rifiuto chiaro oltre limite senza modifica automatica.
- [ ] Verificare autorizzazione sia ai metadati sia ai contenuti; una chiave storage conosciuta non concede accesso.
- [ ] Percorso upload → libreria → download completo, con esiti di errore leggibili su mobile e desktop.

**Riferimenti alla specifica:** §8; Q53–Q55/Q124.

### S17 — Consultare anteprime HEIC e HEIF mantenendo l’originale

**Issue:** [NAS-77 — Consultare anteprime HEIC e HEIF mantenendo l’originale](https://linear.app/giocosta/issue/NAS-77/consultare-anteprime-heic-e-heif-mantenendo-loriginale). Stato e dipendenze correnti in Linear.

**Riutilizzo:** issue esistente aggiornata in Q141; storia ed evidenze conservate nei commenti.

**Dipende da:** S16 — Caricare e consultare documenti privati del viaggio.

**Risultato:** Usare foto da telefono nel normale flusso documenti, verificando conversione e risorse dell’MVP.

**Criteri di accettazione:**

- [ ] Upload HEIC/HEIF entro 20 MB, anteprima visualizzabile su mobile/desktop, originale scaricabile.
- [ ] Orientamento corretto e accesso privato a originale/derivati.
- [ ] Scelta tecnica secondaria presa e documentata durante l’implementazione nel flusso reale.
- [ ] Valutare CPU/memoria/tempi e costi senza introdurre piani a pagamento o nuovi confini non concordati.
- [ ] Campioni sintetici/autorizzati e risultato riproducibile; nessun PoC separato richiesto come gate.

**Riferimenti alla specifica:** §8; Q54/Q125; N07.

### S18 — Riutilizzare e scollegare documenti nei contenuti del viaggio

**Issue:** [NAS-99 — Riutilizzare e scollegare documenti nei contenuti del viaggio](https://linear.app/giocosta/issue/NAS-99/riutilizzare-e-scollegare-documenti-nei-contenuti-del-viaggio). Stato e dipendenze correnti in Linear.

**Dipende da:** S11 — Registrare spese previste e ripartizioni; S14 — Registrare prenotazioni e pass collegati al Programma; S16 — Caricare e consultare documenti privati del viaggio.

**Risultato:** Collegare uno stesso file a prenotazioni, elementi e spese, mantenendolo una sola volta nella libreria.

**Criteri di accettazione:**

- [ ] File unico con più collegamenti nel medesimo viaggio, incluso pass PDF associato a più visite.
- [ ] Raggiungibile da libreria e dettagli pertinenti; nessuna duplicazione del contenuto per ogni collegamento.
- [ ] Scollegamento elimina solo il link e conserva file/altri collegamenti.
- [ ] Autorizzazione contestuale e isolamento tra viaggi anche nelle operazioni di collegamento.
- [ ] Flusso riuso/scollegamento verificato sulle tre categorie di contenuto.

**Riferimenti alla specifica:** §8; Q53/Q55.

### S19 — Usare Google Maps e Places nel viaggio

**Issue:** [NAS-76 — Usare Google Maps e Places nel viaggio](https://linear.app/giocosta/issue/NAS-76/usare-google-maps-e-places-nel-viaggio). Stato e dipendenze correnti in Linear.

**Riutilizzo:** issue esistente aggiornata in Q141; storia ed evidenze conservate nei commenti.

**Dipende da:** S08 — Programmare Idee e riportare un elemento nelle Idee.

**Risultato:** Trovare luoghi, assegnarli a Idee/elementi e leggere il viaggio sulla mappa.

**Criteri di accettazione:**

- [ ] Ricerca città/venue specifiche, selezione punto e note libere quando la posizione è approssimativa.
- [ ] Luoghi del Programma, ordine e giorno; Idee non programmate come gruppo distinto con visibilità controllabile.
- [ ] Apertura indicazioni esterne; nessun routing o stima interna dei tempi aggiunti.
- [ ] Dati personali distinti dai contenuti Google; riferimenti ai luoghi, schede online e conservazione/attribuzioni conformi all’integrazione.
- [ ] Verifica nell’app mobile Safari/Chrome e desktop con credenziali autorizzate, collegando i risultati al viaggio Perù.
- [ ] Configurazione esterna coordinata tramite H01; la mancanza di accessi non blocca gli altri incrementi.

**Riferimenti alla specifica:** §9; Q58–Q60/Q121/Q123; N04/N07.

### S20 — Gestire e testare la connessione AI personale

**Issue:** [NAS-78 — Gestire e testare la connessione AI personale](https://linear.app/giocosta/issue/NAS-78/gestire-e-testare-la-connessione-ai-personale). Stato e dipendenze correnti in Linear.

**Riutilizzo:** issue esistente aggiornata in Q141; storia ed evidenze conservate nei commenti.

**Dipende da:** S01 — Accedere via magic link e creare il primo viaggio.

**Risultato:** Configurare, aggiornare, rimuovere e testare la connessione personale tramite TanStack AI.

**Criteri di accettazione:**

- [ ] Credenziali custodite nel backend e utilizzabili dall’utente proprietario, con esiti di test leggibili.
- [ ] OpenCode Go candidato preferito, idoneità del piano/protocollo verificata durante l’integrazione e documentata.
- [ ] Test minimo con dati sintetici e riepilogo dei dati inviati; nessuna funzione ricevute/itinerari anticipata dalla V1.
- [ ] Quota esaurita ferma le richieste; nessun fallback automatico a pagamento o altro provider.
- [ ] Rimozione/aggiornamento effettivi e isolamento fra account; nessuna condivisione connessione.
- [ ] Capacità dei modelli necessarie alla V1 da valutare quando pertinenti, non gate autonomo della pianificazione MVP.

**Riferimenti alla specifica:** §10; Q62–Q65/Q126–Q129; N05/N07.

### S21 — Recuperare contenuti e gestire il cestino del viaggio

**Issue:** [NAS-100 — Recuperare contenuti e gestire il cestino del viaggio](https://linear.app/giocosta/issue/NAS-100/recuperare-contenuti-e-gestire-il-cestino-del-viaggio). Stato e dipendenze correnti in Linear.

**Dipende da:** S08 — Programmare Idee e riportare un elemento nelle Idee; S13 — Regolare saldi, registrare rimborsi e correggere le finanze; S15 — Aggiornare il Programma dalle prenotazioni senza sovrascritture; S17 — Consultare anteprime HEIC e HEIF mantenendo l’originale; S18 — Riutilizzare e scollegare documenti nei contenuti del viaggio; S20 — Gestire e testare la connessione AI personale.

**Risultato:** Ripristinare contenuti e viaggi, eliminare definitivamente secondo permessi e recuperare valori precedenti.

**Criteri di accettazione:**

- [ ] Elementi e documenti eliminati logicamente recuperabili; eliminare un elemento conserva prenotazioni/file/finanze indipendenti.
- [ ] Documenti: scollegamento distinto dal cestino, definitiva Owner-only con gestione coerente di originali/anteprime.
- [ ] Viaggio nel cestino Owner-only per restore/definitiva; altri membri senza accesso online; nessuno spurgo automatico MVP.
- [ ] Ripristino mantiene contenuti e appartenenze; definitiva elimina dati/file del viaggio e preserva Idee/gruppi personali, account e impostazioni AI.
- [ ] Ultimo salvataggio prevalente con storico recuperabile; correzioni finanziarie mantengono regole e regolazioni registrate.
- [ ] Casi reali con collegamenti e persone archiviate, test di permessi e integrità referenziale; nessuna promessa di backup/restore infrastrutturale.

**Riferimenti alla specifica:** §4, §6–§8, §12; Q51/Q55/Q71–Q73/Q81/Q88.

### S22 — Usare l’MVP completo e consegnare una release verificata

**Issue:** [NAS-101 — Usare l’MVP completo e consegnare una release verificata](https://linear.app/giocosta/issue/NAS-101/usare-lmvp-completo-e-consegnare-una-release-verificata). Stato e dipendenze correnti in Linear.

**Dipende da:** S02 — Accedere con Google e magic link sulla stessa identità; S19 — Usare Google Maps e Places nel viaggio; S21 — Recuperare contenuti e gestire il cestino del viaggio.

**Risultato:** Percorrere il viaggio Perù nell’app integrata e validare il target di rilascio quando autorizzato.

**Criteri di accettazione:**

- [ ] Percorso accesso → viaggio → Idee → Programma → prenotazioni/documenti → spese/saldi completato con ruoli coerenti.
- [ ] Verifiche mirate unit/API/contract e pochi E2E critici; browser iPhone/Safari, Android/Chrome e desktop.
- [ ] Obiettivo WCAG 2.2 AA sui percorsi principali: controlli automatici e prove manuali, risultati documentati.
- [ ] Provider reali Google OAuth, email, mappe, PostgreSQL/storage e limiti CPU/quote verificati nel deploy autorizzato, distinguendo evidenze locali.
- [ ] Flusso PR/trunk-based, dev/staging automatici e produzione da tag configurati e verificati quando gli accessi sono disponibili.
- [ ] Vincoli di costo, regione, autorizzazione e credenziali rispettati; problemi tecnici e scelte secondarie registrati.
- [ ] Installabilità/offline, task e AI funzionale restano V1; backup pianificati ancora rinviati.
- [ ] H01 serve alla parte esterna/deploy: nessun provisioning o invio reale dedotto dalla sola approvazione del piano.

**Riferimenti alla specifica:** §1–§12; D13–D15, Q80/Q130; N07.

## 5. H01 — supporto agli accessi esterni

Supporto tracciato in [Predisporre gli accessi cloud per il deploy dell’MVP](https://linear.app/giocosta/issue/NAS-81/predisporre-gli-accessi-cloud-per-il-deploy-dellmvp). Attività umana di supporto, non una slice di funzionalità: coordinare account/credenziali autorizzati per Cloudflare, Neon, R2, Google OAuth/Maps e Resend/dominio, con checklist per servizio quando necessario.

Q132 conserva il rinvio del provisioning attuale. Il piano non autorizza acquisti, attivazione fatturazione, upgrade o invii a persone. Le configurazioni esterne si eseguono solo quando richieste nel percorso di implementazione/deploy, con dati e accessi appropriati.

Dipendenza corretta secondo Q141: H01 non blocca più S01; blocca S22 per la parte esterna/deploy. Per S02/S19/S20 coordinare le sole credenziali pertinenti quando necessarie: la mancata configurazione di un altro provider non deve bloccare il lavoro locale. Se manca un input reale, dichiararlo e lasciare aperta la relativa verifica.

## 6. Pubblicazione

Q141, 27 ottobre 2026: «Approvo granularità e dipendenze (Consigliato)»; [fonte](../brainstorming/sources/WAYFINDER_INTERVIEW.md#q141).

- Pubblicate 18 nuove issue e aggiornate le quattro previste; H01 conserva NAS-81 come supporto umano. La mappa di definizione NAS-64 resta completata e non è parent dell’implementazione.
- Relazioni native verificate su tutte le issue; H01 blocca soltanto la consegna esterna S22, lasciando avviabile il primo percorso locale.
- I 22 ticket implementativi hanno etichetta ready-for-agent; H01 ready-for-human. Le etichette descrivono readiness, non autorizzazione al provisioning.
- Linear è la fonte dello stato effettivo; questo documento conserva il piano approvato e l’indice con i link, senza un secondo backlog locale.

## 7. Prima frontiera

Il primo percorso da implementare è [Accedere via magic link e creare il primo viaggio](https://linear.app/giocosta/issue/NAS-75/accedere-via-magic-link-e-creare-il-primo-viaggio), avviabile localmente. I rami successivi seguono le dipendenze native. Nessuna funzione è dichiarata completata dalla pubblicazione del piano.

