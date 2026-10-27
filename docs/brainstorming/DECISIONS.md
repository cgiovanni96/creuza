# Creuza — decision log e ADR aperti

Registro delle decisioni. Consolidamento corrente: **27 ottobre 2026**. D01–D38 conservano la baseline iniziale; Q1–Q140 e N01–N07 registrano la successiva intervista. Lo stato corrente deriva dall’ultima decisione esplicita pertinente. Le formulazioni originali sono in [fonti dell’intervista](sources/WAYFINDER_INTERVIEW.md); la baseline precedente è nell’[archivio storico](history/2026-10-25-baseline.md).

## 1. Regole del registro

Le risposte effettivamente inviate dall’utente sono decisioni esplicite. Un’opzione consigliata o preselezionata, senza invio, non vale come risposta. Le risposte successive precisano quelle precedenti nei punti indicati; il resto resta valido. Le sei decisioni finali sono D33–D38.

**Confermato** indica un vincolo adottato. **Aperto esplicito** indica una decisione approvata di rinviare una scelta, non l'approvazione di uno dei candidati. Gli ADR aperti non hanno esito predefinito.

Le scelte tecniche secondarie assunte dall’agente per delega N07 vanno registrate come decisioni delegate, con motivazione ed evidenza, distinguendole dalle risposte esplicite dell’utente.

## 2. Decisioni iniziali — S1

| ID | Fonte | Decisione | Stato / collocazione |
| --- | --- | --- | --- |
| D01 | S1.1 | MVP con piccoli aggiustamenti tecnici, senza nuove feature | Confermato; catalogo completo non recuperato |
| D02 | S1.2 | Account per Editor, partecipanti senza account per le spese | Confermato; inviti non definiti dalla risposta |
| D03 | S1.3 | Owner, Editor e Viewer; partecipanti finanziari separati | Confermato |
| D04 | S1.4 | Attività, trasferimenti, alloggi e prenotazioni distinti ma collegati | Confermato; precisato da D31 e D34 |
| D05 | S1.5 | Stato del viaggio automatico in base alle date, con override manuale | Confermato; precisato da D22 |
| D06 | S1.6 | Ambiente iniziale di esecuzione backend da decidere dopo PoC comparativo | Aperto esplicito; ADR A01 |
| D07 | S1.7 | PostgreSQL; scelta del provider rimandata | Motore confermato; provider aperto, ADR A02 |
| D08 | S1.8 | Mantine come libreria UI | Confermato |
| D09 | S1.9 | Stack mappe da scegliere dopo prototipo comparativo | Aperto esplicito; ADR A03 |
| D10 | S1.10 | OpenAPI generata dal backend, Scalar e client leggero | Confermato |
| D11 | S1.11 | Storage compatibile S3 indipendente dal provider | Confermato |
| D12 | S1.12 | Monorepo pnpm + Turborepo + apps/packages | Confermato |
| D13 | S1.13 | Trunk-based, PR obbligatorie, tag per release | Confermato |
| D14 | S1.14 | Dev e staging automatici, produzione da tag | Confermato |
| D15 | S1.15 | Unit, API integration, contract e pochi E2E critici | Confermato |
| D16 | S1.16 | Interfaccia AI minima e secret backend nell'MVP; AI funzionale da V1 | Confermato |
| D17 | S1.17 | Condivisione della connessione AI dopo V2 | Confermato; versione esatta non fissata |
| D18 | S1.18 | Consultazione offline in sola lettura con bundle persistente | Confermato; collocazione precisata da D21 |
| D19 | S1.19 | Mantenere le feature della roadmap, rendendo flessibili le minor | Confermato; elenco originario non recuperato |
| D20 | S1.20 | Spec principale e file separati per architettura, roadmap e regole agenti | Confermato; attuato dal pacchetto |

## 3. Precisazioni di dominio — S2

| ID | Fonte | Decisione | Stato / collocazione |
| --- | --- | --- | --- |
| D21 | S2.1 | Bundle offline persistente in V1, con architettura predisposta nell'MVP | Confermato; precisa D18 |
| D22 | S2.2 | Stato automatico + override persistente finché rimosso | Confermato; precisa D05 |
| D23 | S2.3 | Timezone IANA per attività; date locali e istanti UTC dove appropriato | Confermato |
| D24 | S2.4 | Viaggio → giorni → elementi; destinazioni come attributi | Confermato; precisato da D33 |
| D25 | S2.5 | Viewer autenticato, senza permessi di modifica | Confermato |
| D26 | S2.6 | Utenti e partecipanti finanziari distinti, con collegamento opzionale all'account | Confermato |
| D27 | S2.7 | Editor modificano il viaggio, non ruoli, proprietà o impostazioni sensibili | Confermato |
| D28 | S2.8 | Soft delete dove serve + cancellazione definitiva controllata | Confermato; ambito e regole da definire |
| D29 | S2.9 | Decimali esatti, valuta originale, conversione e tasso registrato | Confermato |
| D30 | S2.10 | Ripartizioni MVP: quote uguali, importi fissi, percentuali | Confermato |
| D31 | S2.11 | Prenotazione autonoma, collegabile ad attività, alloggi e trasferimenti | Confermato |
| D32 | S2.12 | Allegati MVP: metadati DB, object storage privato, accesso autorizzato | Confermato |

## 4. Ultime sei decisioni — S3, ribadite da S4

| ID | Fonte | Decisione | Stato / effetto |
| --- | --- | --- | --- |
| D33 | S3.1 | Giorni derivati dalle date; metadati persistiti solo quando necessari | Confermato; il livello logico giorno non impone righe persistenti |
| D34 | S3.2 | Entità comune `itinerary_item` con dettagli specifici per tipologia | Confermato; mantiene i tipi distinti di D04 |
| D35 | S3.3 | Spese, quote, pagamenti e rimborsi distinti; supporto a più pagatori | Confermato; non specifica ancora l'intero calcolo dei saldi |
| D36 | S3.4 | Estrazione AI ricevute in V1; inserimento manuale nell'MVP | Confermato; coerente con D16 |
| D37 | S3.5 | Specifica MVP a livello requisiti e architettura; dettagli tecnici delegati all'agente | Confermato |
| D38 | S3.6 | Agente autonomo nell'implementazione; approvazione per decisioni prodotto/architettura | Precisato da N07: scelte tecniche/architetturali secondarie delegate entro i vincoli, cambi di prodotto/fondamentali all’utente |

## 5. Decisioni dell’intervista Wayfinder

Ogni riferimento porta al testo recuperato della domanda e della risposta. «Sì» vale per la proposta effettivamente accettata; risposte alternative, chiarimenti e decisioni successive prevalgono.

| Fonte | Risoluzione / stato corrente |
| --- | --- |
| [Q1](sources/WAYFINDER_INTERVIEW.md#q1) | Specifica MVP dettagliata, confini V1 e registro esplicito del futuro. |
| [Q2](sources/WAYFINDER_INTERVIEW.md#q2) | Uso prevalentemente personale; sostituire Notion con UX su misura. |
| [Q3](sources/WAYFINDER_INTERVIEW.md#q3) | Problema principale: compromessi e interfaccia generica di Notion. |
| [Q4](sources/WAYFINDER_INTERVIEW.md#q4) | Viaggio in Perù come riferimento concreto. |
| [Q5](sources/WAYFINDER_INTERVIEW.md#q5) | Pianificazione soprattutto desktop; funzionalità complete e ottimizzate anche mobile-first. |
| [Q6](sources/WAYFINDER_INTERVIEW.md#q6) | Programma giornaliero centrale e vista complessiva sugli stessi dati. |
| [Q7](sources/WAYFINDER_INTERVIEW.md#q7) | Piani incompleti ammessi, progressivamente arricchibili. |
| [Q8](sources/WAYFINDER_INTERVIEW.md#q8) | Prenotazioni, preparazione e piani indecisi distinti. |
| [Q9](sources/WAYFINDER_INTERVIEW.md#q9) | Checklist e task strutturati rinviati alla V1; la proposta di checklist MVP non è adottata. |
| [Q10](sources/WAYFINDER_INTERVIEW.md#q10) | Mappa per comprendere geografia e luoghi del viaggio, anche per giorno. |
| [Q11](sources/WAYFINDER_INTERVIEW.md#q11) | Inventario iniziale accettato; integrato da Idee e precisato fino a Q131. |
| [Q12](sources/WAYFINDER_INTERVIEW.md#q12) | Viaggio creabile dal solo nome, senza date o destinazioni. |
| [Q13](sources/WAYFINDER_INTERVIEW.md#q13) | Raccolta di piani non programmati per viaggio. |
| [Q14](sources/WAYFINDER_INTERVIEW.md#q14) | Idee personali indipendenti dai viaggi. |
| [Q15](sources/WAYFINDER_INTERVIEW.md#q15) | Idee nell’MVP: personali, poi associate al viaggio, poi programmabili. |
| [Q16](sources/WAYFINDER_INTERVIEW.md#q16) | Un’Idea deve poter diventare un elemento del Programma. |
| [Q17](sources/WAYFINDER_INTERVIEW.md#q17) | Gruppi di Idee → viaggio con Idee non programmate; generazione AI esclusa dall’MVP. |
| [Q18](sources/WAYFINDER_INTERVIEW.md#q18) | Idea personale conservata e riutilizzabile in più viaggi. |
| [Q19](sources/WAYFINDER_INTERVIEW.md#q19) | Conferma della tipologia attività/alloggio/trasferimento durante la programmazione. |
| [Q20](sources/WAYFINDER_INTERVIEW.md#q20) | Gruppi nominati e creazione viaggio da gruppo inclusi nell’MVP. |
| [Q21](sources/WAYFINDER_INTERVIEW.md#q21) | Idee e gruppi personali privati; copie del viaggio leggibili dai membri autorizzati. |
| [Q22](sources/WAYFINDER_INTERVIEW.md#q22) | Owner/Editor gestiscono le Idee del viaggio; Viewer legge. |
| [Q23](sources/WAYFINDER_INTERVIEW.md#q23) | Versioni personali e del viaggio indipendenti; risposta inizialmente vuota, poi sì esplicito. |
| [Q24](sources/WAYFINDER_INTERVIEW.md#q24) | Date del viaggio inclusive, dall’inizio della partenza al ritorno a casa. |
| [Q25](sources/WAYFINDER_INTERVIEW.md#q25) | Orario facoltativo; «da definire» distinto da «tutto il giorno». |
| [Q26](sources/WAYFINDER_INTERVIEW.md#q26) | Un solo elemento può comparire su più giorni, incluse partenza/arrivo e pernottamenti. |
| [Q27](sources/WAYFINDER_INTERVIEW.md#q27) | Date e orari locali per ciascun evento; durata effettiva dagli istanti. |
| [Q28](sources/WAYFINDER_INTERVIEW.md#q28) | Cambio intervallo del viaggio conserva date degli elementi e note; fuori intervallo accessibili e segnalati. |
| [Q29](sources/WAYFINDER_INTERVIEW.md#q29) | Prenotazioni manuali esterne con fornitore, riferimento, stato, link e documenti; acquisto/import automatico esclusi dall’MVP. |
| [Q30](sources/WAYFINDER_INTERVIEW.md#q30) | Prenotazioni ed elementi collegabili molti-a-molti; incluso pass turistico. |
| [Q31](sources/WAYFINDER_INTERVIEW.md#q31) | Cancellare una prenotazione conserva il piano e segnala il bisogno di attenzione. |
| [Q32](sources/WAYFINDER_INTERVIEW.md#q32) | Pagatori e beneficiari indipendenti, con più pagatori. |
| [Q33](sources/WAYFINDER_INTERVIEW.md#q33) | Rimborsi del fornitore distinti dalle regolazioni tra partecipanti; trasferimenti reali esterni. |
| [Q34](sources/WAYFINDER_INTERVIEW.md#q34) | EUR domestico fisso + valuta del viaggio; inserimento in una delle due e visualizzazione commutabile. |
| [Q35](sources/WAYFINDER_INTERVIEW.md#q35) | Cambio predefinito manuale per viaggio e override per spesa; default modificato vale per nuovi inserimenti. |
| [Q36](sources/WAYFINDER_INTERVIEW.md#q36) | EUR come base comune dei saldi; la risposta «26» riferita alla valuta è stata chiarita come Q36. |
| [Q37](sources/WAYFINDER_INTERVIEW.md#q37) | Regolazioni registrabili in EUR o valuta viaggio, con proprio cambio conservato. |
| [Q38](sources/WAYFINDER_INTERVIEW.md#q38) | Ripartizioni e conversioni quadrano esattamente; resti deterministici, visibili e modificabili. |
| [Q39](sources/WAYFINDER_INTERVIEW.md#q39) | Pagamenti parziali nell’MVP; costo totale e residuo al fornitore distinti. |
| [Q40](sources/WAYFINDER_INTERVIEW.md#q40) | Saldi tra partecipanti seguono la porzione pagata, distribuita secondo le quote. |
| [Q41](sources/WAYFINDER_INTERVIEW.md#q41) | Rimborso fornitore: destinatario e beneficiari distinti; default dalle quote originali, modificabile; regolazioni conservate. |
| [Q42](sources/WAYFINDER_INTERVIEW.md#q42) | Un solo Owner controlla inviti, membri, ruoli, proprietà e cancellazione del viaggio. |
| [Q43](sources/WAYFINDER_INTERVIEW.md#q43) | Membri autorizzati, Viewer incluso, leggono tutto il viaggio e le finanze nell’MVP. |
| [Q44](sources/WAYFINDER_INTERVIEW.md#q44) | Invito email crea subito Partecipante; account esistente → email + notifica e collegamento; altrimenti solo email. |
| [Q45](sources/WAYFINDER_INTERVIEW.md#q45) | Partecipante generale, non soltanto finanziario; account facoltativo, accesso dopo accettazione. Assegnazioni future anche senza account. |
| [Q46](sources/WAYFINDER_INTERVIEW.md#q46) | Registrazione con email verificata corrispondente collega il Partecipante esistente; accesso richiede accettazione. |
| [Q47](sources/WAYFINDER_INTERVIEW.md#q47) | Rifiuto, scadenza o ritiro invito preservano Partecipante e storico. |
| [Q48](sources/WAYFINDER_INTERVIEW.md#q48) | Solo Owner aggiunge Partecipanti; aggiunta nominativa distinta dall’invito. |
| [Q49](sources/WAYFINDER_INTERVIEW.md#q49) | Revoca immediata online; Partecipante e storico conservati. |
| [Q50](sources/WAYFINDER_INTERVIEW.md#q50) | Solo Owner modifica identità o rimuove Partecipanti. |
| [Q51](sources/WAYFINDER_INTERVIEW.md#q51) | Rimozione con storico → archiviazione e revoca; esclusione dai nuovi default, regolazioni residue consentite. |
| [Q52](sources/WAYFINDER_INTERVIEW.md#q52) | Proprietà trasferibile a membro accettato; precedente Owner diventa Editor; trasferire prima di lasciare. |
| [Q53](sources/WAYFINDER_INTERVIEW.md#q53) | Unica libreria documenti del viaggio; file riutilizzabile con più collegamenti. |
| [Q54](sources/WAYFINDER_INTERVIEW.md#q54) | PDF e immagini comuni incluse foto; formati precisati da Q125. |
| [Q55](sources/WAYFINDER_INTERVIEW.md#q55) | Scollegare non elimina; eliminazione in cestino recuperabile; definitiva solo Owner. |
| [Q56](sources/WAYFINDER_INTERVIEW.md#q56) | Draft senza date, Upcoming prima, In progress nell’intervallo inclusivo, Completed dopo; Cancelled manuale e override persistente. |
| [Q57](sources/WAYFINDER_INTERVIEW.md#q57) | Fuso di riferimento dallo home time zone dell’account, modificabile per viaggio. |
| [Q58](sources/WAYFINDER_INTERVIEW.md#q58) | Ricerca luoghi, punto sulla mappa e note libere per luoghi approssimativi. |
| [Q59](sources/WAYFINDER_INTERVIEW.md#q59) | Luoghi, ordine e giorno selezionato; indicazioni esterne; routing e tempi integrati rinviati. |
| [Q60](sources/WAYFINDER_INTERVIEW.md#q60) | Idee non programmate con posizione visibili e distinguibili sulla mappa; gruppi attivabili/disattivabili. |
| [Q61](sources/WAYFINDER_INTERVIEW.md#q61) | Notifiche MVP limitate a inviti ed esiti; email e in-app pertinenti. Promemoria, modifiche generali e push rinviati. |
| [Q62](sources/WAYFINDER_INTERVIEW.md#q62) | Ogni utente fornisce le proprie credenziali AI, conservate nel backend. |
| [Q63](sources/WAYFINDER_INTERVIEW.md#q63) | MVP: configurare, aggiornare, rimuovere e testare la connessione; funzioni AI dalla V1. |
| [Q64](sources/WAYFINDER_INTERVIEW.md#q64) | V1: estrazione ricevute e suggerimenti itinerario da gruppo di Idee. |
| [Q65](sources/WAYFINDER_INTERVIEW.md#q65) | Risultati AI come bozze da approvare prima di modificare dati. |
| [Q66](sources/WAYFINDER_INTERVIEW.md#q66) | V1 offline: soli dati essenziali del viaggio, allegati rinviati. |
| [Q67](sources/WAYFINDER_INTERVIEW.md#q67) | Toggle download per viaggio; abilitato → aggiornamento automatico con connessione. |
| [Q68](sources/WAYFINDER_INTERVIEW.md#q68) | Copia fino a rimozione/logout; controllo accesso e rimozione per revoca alla riconnessione. |
| [Q69](sources/WAYFINDER_INTERVIEW.md#q69) | Aggiornamento mentre app aperta, alla riapertura e riconnessione; app completamente chiusa fuori scope iniziale. |
| [Q70](sources/WAYFINDER_INTERVIEW.md#q70) | Toggle OFF rimuove copia dal dispositivo e interrompe refresh; accesso online invariato. |
| [Q71](sources/WAYFINDER_INTERVIEW.md#q71) | Viaggio nel cestino recuperabile; solo Owner ripristina/elimina definitivamente; altri membri perdono accesso online; nessuna scadenza automatica MVP. |
| [Q72](sources/WAYFINDER_INTERVIEW.md#q72) | Eliminazione definitiva cancella dati/file del viaggio, preserva Idee/gruppi personali, account e impostazioni AI. |
| [Q73](sources/WAYFINDER_INTERVIEW.md#q73) | Owner/Editor correggono o eliminano logicamente registrazioni finanziarie anche dopo regolazioni; storico e regolazioni conservati, saldi ricalcolati. |
| [Q74](sources/WAYFINDER_INTERVIEW.md#q74) | Web responsive MVP; installabilità e offline V1; native fuori scope corrente. |
| [Q75](sources/WAYFINDER_INTERVIEW.md#q75) | Prima scelta email/password + Google, successivamente sostituita da Google + magic link (N02). |
| [Q76](sources/WAYFINDER_INTERVIEW.md#q76) | Interfaccia italiana MVP; inglese successivo; contenuti liberi in qualunque lingua. |
| [Q77](sources/WAYFINDER_INTERVIEW.md#q77) | Preferenza di budget iniziale €0–10/mese, poi richiesta di alternativa gratuita; target, non autorizzazione di spesa. |
| [Q78](sources/WAYFINDER_INTERVIEW.md#q78) | Scenario 2–10 utenti regolari, occasionali modifiche contemporanee; non limite applicativo. |
| [Q79](sources/WAYFINDER_INTERVIEW.md#q79) | Preferenza UE per hosting, DB e file; altri provider da valutare separatamente. |
| [Q80](sources/WAYFINDER_INTERVIEW.md#q80) | Test prioritari iPhone/Safari, Android/Chrome e desktop. |
| [Q81](sources/WAYFINDER_INTERVIEW.md#q81) | Ultimo salvataggio prevale, con storico recuperabile; riconciliazione preventiva proposta non adottata. |
| [Q82](sources/WAYFINDER_INTERVIEW.md#q82) | Backup giornaliero e restore inizialmente richiesti, poi esplicitamente rinviati da Q118. |
| [Q83](sources/WAYFINDER_INTERVIEW.md#q83) | Una Idea del viaggio può generare più elementi collegati. |
| [Q84](sources/WAYFINDER_INTERVIEW.md#q84) | Pannello Idee solo non programmate; contenuti programmati accessibili nel Programma; filtri Planned/All proposti non adottati. |
| [Q85](sources/WAYFINDER_INTERVIEW.md#q85) | Rimuovere l’ultimo elemento non riporta automaticamente l’Idea tra le non programmate. |
| [Q86](sources/WAYFINDER_INTERVIEW.md#q86) | Modifiche a ciascun elemento indipendenti dagli altri e dalle Idee di origine. |
| [Q87](sources/WAYFINDER_INTERVIEW.md#q87) | «Sposta nelle Idee» riguarda solo l’elemento selezionato, con contenuto corrente preservato. |
| [Q88](sources/WAYFINDER_INTERVIEW.md#q88) | Elemento eliminato nel cestino recuperabile; Owner/Editor ripristinano; prenotazioni, documenti e finanze indipendenti restano. |
| [Q89](sources/WAYFINDER_INTERVIEW.md#q89) | Notti alloggio: checkout escluso; check-in 10 / checkout 13 = tre notti. |
| [Q90](sources/WAYFINDER_INTERVIEW.md#q90) | Sovrapposizioni consentite con avviso; pernottamento non conflitto automatico con attività diurne. |
| [Q91](sources/WAYFINDER_INTERVIEW.md#q91) | Elementi con orario cronologici; gruppi Tutto il giorno e Orario da definire ordinabili manualmente. |
| [Q92](sources/WAYFINDER_INTERVIEW.md#q92) | Valuta/cambio della spesa per pagamenti e rimborsi, cambio proprio per regolazioni. Q136 mantiene il cambio unico nell’MVP e rifiuta la proposta di tassi per pagamento. |
| [Q93](sources/WAYFINDER_INTERVIEW.md#q93) | Confermato esempio pagamenti PEN 40/80, cambio 4 PEN/EUR e regolazione intermedia EUR 5. |
| [Q94](sources/WAYFINDER_INTERVIEW.md#q94) | Confermato esempio rimborso PEN 40 dopo regolazione: destinatario e allocazione beneficio determinano EUR 5 o EUR 10 dovuti. |
| [Q95](sources/WAYFINDER_INTERVIEW.md#q95) | Regolazione PEN 60 a 5 PEN/EUR estingue EUR 12 di EUR 15: residuo EUR 3. |
| [Q96](sources/WAYFINDER_INTERVIEW.md#q96) | Creatore viaggio automaticamente Owner e Partecipante collegato al proprio account. |
| [Q97](sources/WAYFINDER_INTERVIEW.md#q97) | Invito da Partecipante nominativo esistente arricchisce lo stesso record, preservando storico. |
| [Q98](sources/WAYFINDER_INTERVIEW.md#q98) | Pass con validità opzionale, condizioni e attività collegate anche prima della programmazione; conteggio ingressi/scansione fuori MVP. |
| [Q99](sources/WAYFINDER_INTERVIEW.md#q99) | Modifiche prenotazione aggiornano automaticamente gli elementi quando la corrispondenza è univoca; criterio precisato da Q138–Q140. |
| [Q100](sources/WAYFINDER_INTERVIEW.md#q100) | Itinerario continuo a riepiloghi giornalieri espandibili, non singola giornata isolata. |
| [Q101](sources/WAYFINDER_INTERVIEW.md#q101) | Mobile: Programma, Idee, Prenotazioni, Spese, Altro; mappa sotto Altro. |
| [Q102](sources/WAYFINDER_INTERVIEW.md#q102) | Dettagli fullscreen mobile con ritorno al contesto; pannello laterale desktop. |
| [Q103](sources/WAYFINDER_INTERVIEW.md#q103) | Riepiloghi compatti automatici da dati strutturati: data, luoghi, attività, trasferimenti, notte, problemi prenotazioni; non AI. |
| [Q104](sources/WAYFINDER_INTERVIEW.md#q104) | Più giornate espandibili contemporaneamente. |
| [Q105](sources/WAYFINDER_INTERVIEW.md#q105) | Idee su schermata separata sia desktop sia mobile; pannello Idee accanto al Programma non adottato. |
| [Q106](sources/WAYFINDER_INTERVIEW.md#q106) | Dopo programmazione si resta in Idee, con conferma e «Vedi nel Programma». |
| [Q107](sources/WAYFINDER_INTERVIEW.md#q107) | Idea personale in più gruppi senza duplicazione; copie viaggio indipendenti. |
| [Q108](sources/WAYFINDER_INTERVIEW.md#q108) | Le mie Idee: tutte le Idee con filtri e accessi rapidi ai gruppi. |
| [Q109](sources/WAYFINDER_INTERVIEW.md#q109) | Crea viaggio da gruppo: tutte pre-selezionate, esclusioni consentite, nome obbligatorio e date facoltative. |
| [Q110](sources/WAYFINDER_INTERVIEW.md#q110) | TanStack Start candidato preferito rispetto a SPA; poi scelto esplicitamente dopo confronto (N01). |
| [Q111](sources/WAYFINDER_INTERVIEW.md#q111) | Better Auth lead; confronto documentale con Neon Auth richiesto e successivamente risolto a favore di Better Auth (N03). |
| [Q112](sources/WAYFINDER_INTERVIEW.md#q112) | Autorizzato prototipo isolato locale Start/SPA con API, DB e email di test; non provisioning né invio reale. |
| [Q113](sources/WAYFINDER_INTERVIEW.md#q113) | Non autorizzato un backend completo per il confronto; analisi mirata per contenere uso. |
| [Q114](sources/WAYFINDER_INTERVIEW.md#q114) | Preferire servizi gestiti; VPS come ripiego. |
| [Q115](sources/WAYFINDER_INTERVIEW.md#q115) | Dominio esistente disponibile per email. |
| [Q116](sources/WAYFINDER_INTERVIEW.md#q116) | Google e magic link con stessa email verificata → stesso account; email diverse separate, merge fuori MVP. |
| [Q117](sources/WAYFINDER_INTERVIEW.md#q117) | Neon Free in regione UE candidato PostgreSQL preferito. |
| [Q118](sources/WAYFINDER_INTERVIEW.md#q118) | Backup pianificati e test di ripristino rinviati; proposta sette giornalieri/quattro settimanali non adottata. |
| [Q119](sources/WAYFINDER_INTERVIEW.md#q119) | R2 privato con giurisdizione UE scelto; confine S3-compatible conservato. |
| [Q120](sources/WAYFINDER_INTERVIEW.md#q120) | Resend Free su dominio o sottodominio proprio scelto; quote da ricontrollare prima del deploy. |
| [Q121](sources/WAYFINDER_INTERVIEW.md#q121) | Ricerca MVP anche di hotel, ristoranti, musei e punti d’incontro specifici. |
| [Q122](sources/WAYFINDER_INTERVIEW.md#q122) | MapTiler Free non adottato; richiesta confronto Google, poi scelta esplicita Google Maps + Places (N04). |
| [Q123](sources/WAYFINDER_INTERVIEW.md#q123) | Offline solo contenuti personali; schede/dettagli Google online; riferimento al luogo conservato, non copia permanente dei contenuti Google. |
| [Q124](sources/WAYFINDER_INTERVIEW.md#q124) | Limite 20 MB/file, visibile prima dell’upload; rifiuto chiaro senza modifica automatica. |
| [Q125](sources/WAYFINDER_INTERVIEW.md#q125) | HEIC/HEIF MVP con anteprima compatibile e originale scaricabile; conversione da validare. |
| [Q126](sources/WAYFINDER_INTERVIEW.md#q126) | Preferenza OpenCode, non ancora scelta di un provider API generico. |
| [Q127](sources/WAYFINDER_INTERVIEW.md#q127) | Precisazione: consumare la quota personale OpenCode Go; compatibilità per funzioni di viaggio da verificare. |
| [Q128](sources/WAYFINDER_INTERVIEW.md#q128) | Quota esaurita → fermare richieste; nessun fallback automatico a pagamento/provider diverso; nuovo tentativo esplicito. |
| [Q129](sources/WAYFINDER_INTERVIEW.md#q129) | Inviare solo dati necessari selezionati con riepilogo preventivo; escludere altri documenti, spese e contatti. |
| [Q130](sources/WAYFINDER_INTERVIEW.md#q130) | Obiettivo WCAG 2.2 AA per percorsi principali, verifiche automatiche e manuali. |
| [Q131](sources/WAYFINDER_INTERVIEW.md#q131) | Perimetro MVP ricostruito sufficiente per l’uso personale iniziale; non ricostruisce retroattivamente l’intera V2. |
| [Q132](sources/WAYFINDER_INTERVIEW.md#q132) | Prova cloud rinviata: per ora solo locale, proseguire con le regole di dominio. Nessuna autorizzazione a provisioning o adozione definitiva; conservare le evidenze locali. |
| [Q133](sources/WAYFINDER_INTERVIEW.md#q133) | Rifiutato il tetto dei pagamenti alla previsione: costo previsto indicativo, costo effettivo dal saldo prevalente. Chiusura e cambio precisati poi da Q135–Q136. Nessun credito verso il fornitore adottato per inferenza. |
| [Q134](sources/WAYFINDER_INTERVIEW.md#q134) | Rimborsi fornitore complessivi entro quanto effettivamente pagato per la spesa, dedotti quelli già ricevuti; regolazioni tra Partecipanti separate. |
| [Q135](sources/WAYFINDER_INTERVIEW.md#q135) | Chiusura esplicita Segna come saldata riferita al fornitore; totale dei pagamenti determina il costo effettivo, previsione conservata e regolazioni tra Partecipanti distinte. |
| [Q136](sources/WAYFINDER_INTERVIEW.md#q136) | MVP: mantenere un cambio unico per spesa, non tassi per pagamento. Maggiore flessibilità solo futura da valutare, senza release o necessità confermata. |
| [Q137](sources/WAYFINDER_INTERVIEW.md#q137) | Cambio del consuntivo: quote uguali/percentuali ricalcolate automaticamente; importi fissi da rivedere esplicitamente prima della chiusura, senza bloccare i pagamenti. |
| [Q138](sources/WAYFINDER_INTERVIEW.md#q138) | Aggiornare automaticamente solo i campi temporali ancora allineati ai vecchi valori prenotati; conservare modifiche manuali e proporre allineamento. |
| [Q139](sources/WAYFINDER_INTERVIEW.md#q139) | Validità del pass: avvisi sulle visite fuori validità, senza riprogrammazione automatica. |
| [Q140](sources/WAYFINDER_INTERVIEW.md#q140) | Fonti temporali discordanti o tratta non chiara: mantenere Programma, segnalare e richiedere scelta/associazione; automazione dopo la risoluzione. |

## 6. Decisioni fuori numerazione

| ID | Decisione e provenienza |
| --- | --- |
| N01 | L’utente: «let's go with tanstack start», dopo il confronto locale. TanStack Start scelto; Mantine e API OpenAPI separata conservate. SPA mode è il punto di partenza verificato nel prototipo. |
| N02 | L’utente richiede alternativa gratuita e propone Cloudflare + Google OAuth + magic link; il successivo «proceed» e Q115–Q117 precisano questa direzione. Sostituisce email/password di Q75; compatibilità runtime ancora da verificare. |
| N03 | L’utente: «I like better auth», dopo il confronto con Neon Auth. Better Auth nel Worker scelto; ruoli, inviti e Partecipanti restano dominio Creuza. |
| N04 | L’utente: «direi di confermare google visto l'uso personale che ne farei». Google Maps + Places scelto dopo confronto e test di copertura; non implica completamento del prototipo UI cartografico. |
| N05 | L’utente: «I will be using tanstack ai…». TanStack AI scelto come livello d’integrazione; OpenCode Go preferito, con idoneità d’uso e modelli ancora da verificare. |
| N06 | Il 27 ottobre l’utente autorizza modifiche ai file e creazione issue. Supera il precedente vincolo chat-only; resta necessaria approvazione per nuove decisioni di prodotto/architettura, secondo D38. |
| N07 | L’utente colloca le verifiche tecniche nell’implementazione MVP, nei percorsi dell’applicazione, e delega scelte tecniche/architetturali secondarie entro i vincoli. La definizione non attende PoC separati o fattibilità già provata; scope delle release e Q132 restano validi. |

Le risposte non numerate e i loro turni sono nell’[archivio dell’intervista](sources/WAYFINDER_INTERVIEW.md#decisioni-esplicite-fuori-numerazione).

## 7. Stato corrente delle schede architetturali

Queste sono schede di decisione: i dettagli delle prove e le questioni aperte sono in [ARCHITECTURE.md](ARCHITECTURE.md) e [GAPS_AND_CONSISTENCY.md](GAPS_AND_CONSISTENCY.md). Gli identificativi A01–A06 sono mantenuti per continuità; non fingono ADR eseguiti o prove completate.

| Scheda | Stato e decisione corrente | Verifica residua |
| --- | --- | --- |
| A01 — Runtime backend | Cloudflare Workers + Hono direzione preferita per partire entro quote gratuite; servizi gestiti preferiti, VPS ripiego. Q113 esclude la costruzione di un backend completo per il confronto. | Prova minima mirata di runtime, auth, DB, file e limiti; non ancora eseguita sul deployment target. |
| A02 — PostgreSQL | Motore confermato; Neon Free in regione UE candidato preferito (Q117). | Provisioning/configurazione e compatibilità col runtime; nessuna promessa di backup gestito, essendo Q118 prevalente. |
| A03 — Mappe | Google Maps + Places scelto (N04), scartando l’adozione proposta di MapTiler. Ricerca e scope definiti da Q58–Q60/Q121. | Integrazione UI mobile/desktop, corretta gestione dei dati Google e setup produzione. Test di ricerca non equivale al prototipo UI completo. |
| A04 — Applicazione e identità | TanStack Start + Mantine, API separata Hono/OpenAPI; Better Auth; Google OAuth e magic link (N01–N03). | Confronto Start/SPA locale completato; deploy Worker/OAuth reale da verificare. |
| A05 — AI | Connessioni personali backend nell’MVP; TanStack AI scelto, Go preferito (N05). Funzioni da V1; bozze, minimizzazione dati e stop a quota esaurita. | Idoneità Go per richieste non di coding, connessione reale, modello/API, immagini e output richiesti. |
| A06 — Offline | Comportamento V1 definito da Q66–Q70/Q123: core dati, toggle, refresh app aperta, revoca alla riconnessione, contenuti Google online. | Persistenza/PWA e prova su browser target da implementare e validare in V1. |

## 8. Decisioni sostituite e regole di aggiornamento

- Q75 email/password è sostituita da N02: Google + magic link.
- Q82 backup giornalieri/restore è superata da Q118: pianificazione rinviata. Nessuna retention proposta è stata adottata.
- Q84 filtri Planned/All, Q81 riconciliazione preventiva, Q99 aggiornamento solo manuale e Q122 MapTiler erano proposte non accettate.
- Il confronto Node/Workers completo non è stato svolto. Il confronto Start/SPA non ne dimostra la riuscita.
- Q131 chiude la sufficienza del perimetro MVP iniziale, non la completezza storica di V2.

Dopo una risposta: aggiornare la risoluzione pertinente, i documenti correnti interessati e l’issue decisionale. Conservare fonte e stato precedente. Proposte, limiti commerciali citati e prove pianificate devono restare distinguibili dalle approvazioni e dai risultati osservati.

## 9. Evidenze successive al consolidamento

Il 27 ottobre, su «ok, procedi», è stata avviata [Validare Workers con auth, PostgreSQL e storage](https://linear.app/giocosta/issue/NAS-75/validare-workers-con-auth-postgresql-e-storage). Il [probe locale](../../prototypes/workers-runtime/FINDINGS.md) ha superato 11 controlli workerd e la generazione del bundle dry-run; dati sintetici, PostgreSQL locale separato e R2 emulato, nessun deploy.

È un risultato sperimentale, non una nuova decisione di adozione o una prova delle quote CPU/cloud. Rimangono aperti il ticket e il prerequisito [Predisporre gli accessi cloud per il deploy dell’MVP](https://linear.app/giocosta/issue/NAS-81/predisporre-gli-accessi-cloud-per-il-deploy-dellmvp). Branch locale non pubblicato codex/workers-runtime-probe, commit 25f485201c7d9a637de3f9b482d72f4dfb8760c0.

[Q132](sources/WAYFINDER_INTERVIEW.md#q132) è risolta con rinvio esplicito: «Per ora solo locale; proseguiamo con le regole di dominio». Il prerequisito cloud resta differito, senza provisioning; il ticket runtime torna in backlog e conserva l’evidenza locale. SPEC e stato preferito dello stack restano invariati.

## 10. Precisazioni finanziarie successive

[Precisare limiti finanziari e quadratura dei casi residui](https://linear.app/giocosta/issue/NAS-79/precisare-limiti-finanziari-e-quadratura-dei-casi-residui) è risolto per il perimetro discusso. Q133 distingue previsione e costo effettivo, rifiutando il limite proposto; Q134 approva il tetto dei rimborsi al pagato residuo. Q135 approva la chiusura esplicita e Q136 conserva il cambio unico per spesa. Q137 definisce l’aggiornamento delle quote sul consuntivo.

[Q135](sources/WAYFINDER_INTERVIEW.md#q135) è confermata. La proposta consigliata in [Q136](sources/WAYFINDER_INTERVIEW.md#q136), cambio per pagamento, è rifiutata per semplicità MVP: resta un solo cambio per spesa. Non assegnare automaticamente la flessibilità ulteriore a V1 o V2.

[Q137](sources/WAYFINDER_INTERVIEW.md#q137) confermata: quote uguali/percentuali ricalcolate; importi fissi rivisti esplicitamente prima della chiusura, con registrazione dei pagamenti consentita. Il caso EUR 100 → EUR 110 è conservato in SPEC §7. Validazioni e algoritmo deterministico di quadratura entro le regole approvate restano dettagli implementativi delegati; non sono nuove feature.

## 11. Prenotazioni — corrispondenze definite

[Definire quando una prenotazione aggiorna il Programma senza ambiguità](https://linear.app/giocosta/issue/NAS-80/definire-quando-una-prenotazione-aggiorna-il-programma-senza-ambiguita) è risolto con le tre conferme Q138–Q140: aggiornamento dei campi ancora allineati, protezione delle modifiche indipendenti, validità del pass come vincolo e gestione esplicita delle ambiguità. Tabella dei casi in SPEC §5. Non è adottata una precedenza automatica dell’ultima prenotazione modificata; nessuna implementazione è ancora dichiarata verificata.



## 12. Validazione nell’MVP e autonomia — N07

L’utente il 27 ottobre 2026: «farei le verifiche tecniche in fase di implementazione dell'MVP, e' proprio fatto per capire se il prodotto e' viable, gia' in un'applicazione completa, ed e' un contesto in cui poter prendere ancora alcune scelte tecniche/architetturali secondarie.».

Esito: verifiche tecniche trasferite agli incrementi dell’MVP e svolte nei percorsi applicativi reali; nessun PoC separato obbligatorio prima della chiusura della specifica. La fattibilità resta da dimostrare durante il lavoro. Scelte tecniche e architetturali secondarie delegate entro requisiti e vincoli; l’agente sceglie, verifica e registra motivo/esito. Cambi di prodotto o dei vincoli fondamentali restano decisioni dell’utente.

Le issue di runtime, mappe, HEIC/HEIF e Go diventano attività di implementazione aperte fuori dalla mappa, con storia/evidenze conservate. Il supporto agli accessi cloud si considera al deploy; Q132 non diventa un’autorizzazione al provisioning. AI funzionale e offline restano V1, backup rinviati.

Risoluzione: [Integrare la validazione tecnica nell’MVP e delegare le scelte secondarie](https://linear.app/giocosta/issue/NAS-82/integrare-la-validazione-tecnica-nellmvp-e-delegare-le-scelte). Fonte verbatim: [N07](sources/WAYFINDER_INTERVIEW.md#n07). La mappa di definizione è completata secondo questo confine; il prodotto non è ancora implementato o validato.

## 13. Piano implementativo approvato — Q141

Il [piano MVP](../planning/MVP_IMPLEMENTATION_PLAN.md) comprende 22 ticket verticali, 18 nuovi e quattro riusi, più il supporto accessi già presente. [Q141](sources/WAYFINDER_INTERVIEW.md#q141), 27 ottobre 2026: «Approvo granularità e dipendenze (Consigliato)». Approvate granularità e dipendenze; pubblicati i 22 incrementi con relazioni native su Linear, etichetta ready-for-agent, più NAS-81 come supporto ready-for-human. Quattro issue riutilizzate conservano storia/evidenze; la mappa NAS-64 resta completata. Prima frontiera: [Accedere via magic link e creare il primo viaggio](https://linear.app/giocosta/issue/NAS-75/accedere-via-magic-link-e-creare-il-primo-viaggio). Il piano non aggiunge feature o anticipa la V1; Q132 conserva il rinvio del provisioning.
