# Creuza — specifica corrente

Consolidata il 27 ottobre 2026. Stato: **perimetro MVP sufficiente per l’uso personale iniziale, approvato in Q131**; implementazione e verifiche tecniche ancora da completare. Decisioni e provenienza: [DECISIONS.md](DECISIONS.md). Terminologia: [GLOSSARY.md](../../GLOSSARY.md).

## 1. Scopo e confini

Creuza è uno spazio di viaggio pensato principalmente per Giovanni e una piccola cerchia di compagni. Sostituisce il precedente flusso Notion con una UX specifica per raccogliere ispirazione, pianificare giornate, conservare prenotazioni/documenti e gestire spese condivise. Il viaggio in Perù è il riferimento di accettazione.

La pianificazione avviene soprattutto su desktop; la progettazione è mobile-first e tutte le capacità MVP sono utilizzabili e curate anche su telefono. Web responsive nell’MVP, installabilità e offline in V1. Interfaccia italiana; traduzione inglese successiva. Contenuti inseriti dall’utente in qualunque lingua.

Il catalogo sufficiente dell’MVP è: viaggi, Idee personali e gruppi, Idee del viaggio, Programma, prenotazioni e pass, documenti, spese e saldi, Partecipanti e accessi, mappe/ricerca luoghi, autenticazione e configurazione della connessione AI. Task strutturati, estrazione ricevute, suggerimenti AI e offline appartengono alla V1. V2 resta non specificata; condivisione della connessione AI dopo V2. Dettaglio in [ROADMAP.md](ROADMAP.md).

L’MVP è il contesto di validazione tecnica e di prodotto: le verifiche di runtime, mappe, file e connessione AI si svolgono durante gli incrementi applicativi, sui percorsi completi pertinenti. Non sono prerequisiti per chiudere la specifica né richiedono PoC separati prima dell’implementazione. L’agente decide e documenta le scelte tecniche/architetturali secondarie entro i vincoli approvati (N07). Le capacità V1 restano nella loro versione.

## 2. Viaggi e calendario — Q12, Q24–Q28, Q56–Q57

- Creazione dal solo nome; date e destinazioni possono essere ancora sconosciute.
- Date inclusive dall’inizio della partenza al ritorno a casa. Il ritorno notturno può estendere il viaggio al giorno d’arrivo.
- Giorni derivati dalle date, senza obbligo di record persistenti per ogni giorno; metadati persistiti quando necessari.
- Stato automatico: Draft con date mancanti, Upcoming prima dell’inizio, In progress nell’intervallo inclusivo, Completed dopo. Cancelled selezionabile manualmente.
- Override manuale attivo finché rimosso. Fuso di riferimento inizialmente quello domestico dell’account, modificabile per viaggio.
- Modificare le date del viaggio conserva date degli elementi e note giornaliere. I contenuti fuori intervallo restano accessibili e vengono segnalati; lo spostamento dei piani è esplicito.
- Eventi presentati sotto la data locale in cui avvengono. Partenza e arrivo di un trasferimento possono avere fusi diversi; la durata effettiva segue gli istanti.

## 3. Idee — Q13–Q23, Q83–Q87, Q105–Q109

- Idea personale indipendente dal viaggio; gruppi nominati privati. Una stessa Idea appartiene a più gruppi senza essere duplicata.
- Le mie Idee mostra tutte le Idee, con filtri e accessi rapidi ai gruppi.
- Crea viaggio da gruppo pre-seleziona tutte le Idee e consente esclusioni; nome richiesto, date facoltative.
- Le Idee selezionate diventano copie non programmate nel viaggio; originali personali conservati e riutilizzabili. Modifiche personali e del viaggio indipendenti.
- Idee personali e gruppi visibili al proprietario. Le copie nel viaggio sono leggibili dai membri autorizzati; Owner ed Editor le gestiscono, Viewer legge.
- Programmare richiede conferma del tipo attività, trasferimento o alloggio e collocazione nel calendario. I dati utili sono conservati.
- Una Idea del viaggio può generare più elementi, collegati all’origine ma modificabili indipendentemente tra loro e rispetto all’Idea.
- Il pannello Idee contiene solo le non programmate. Il contenuto programmato si trova nel Programma; non sono previsti filtri Planned/All nel pannello.
- Eliminare l’ultimo elemento derivato non fa riapparire automaticamente l’Idea.
- Sposta nelle Idee agisce sul singolo elemento selezionato, preservandone titolo, note e posizione correnti; gli altri elementi restano programmati.
- Idee è una schermata separata sia desktop sia mobile. Dopo la programmazione si resta in Idee, con conferma e azione Vedi nel Programma.

## 4. Programma e UX — Q6–Q8, Q25–Q27, Q88–Q91, Q100–Q106

Attività, trasferimenti e alloggi condividono una base comune, con dettagli distinti per tipologia. Piani incompleti ammessi; orario facoltativo e stato Orario da definire distinto da Tutto il giorno.

Il Programma è un itinerario continuo con giornate espandibili. Più giorni possono rimanere aperti. Il riepilogo compatto è generato dai dati strutturati: data, luoghi rilevanti, attività principali, trasferimenti, pernottamento e problemi di prenotazione. Non richiede AI.

- Elementi con orario in ordine cronologico; gruppi Tutto il giorno e Orario da definire ordinabili manualmente.
- Un elemento multigiorno resta unico, con apparizioni pertinenti nei vari giorni: partenza/arrivo, check-in, notti e checkout.
- Check-in 10 ottobre, checkout 13 ottobre: tre notti, il 10, 11 e 12.
- Sovrapposizioni ammesse con avviso non bloccante; l’alloggio non confligge automaticamente con attività diurne.
- Eliminazione nel cestino del viaggio; Owner ed Editor possono ripristinare. Documenti, prenotazioni e registrazioni finanziarie indipendenti restano; eliminare un elemento non cancella una prenotazione.

Navigazione mobile: Programma, Idee, Prenotazioni, Spese, Altro; Mappa sotto Altro. Dettagli fullscreen mobile con ritorno allo stesso giorno e posizione di scorrimento; pannello contestuale desktop con Programma visibile.

## 5. Prenotazioni e pass — Q29–Q31, Q98–Q99, Q138–Q140

Prenotazioni registrate manualmente da acquisti esterni: fornitore, riferimento di conferma, stato, link e documenti. Acquisto in-app e importazione automatica email fuori MVP.

Prenotazioni autonome dagli elementi: una prenotazione può coprire più elementi e un elemento avere più prenotazioni. Un pass può esistere prima delle visite, con validità facoltativa e condizioni testuali; successivamente si collega alle attività coperte. Conteggio ingressi e scansione biglietti fuori MVP.

Cancellare una prenotazione conserva il piano e segnala il bisogno di attenzione. Modifiche di date/orari aggiornano automaticamente gli elementi collegati **quando la corrispondenza è univoca**, secondo Q138–Q140:

| Caso | Comportamento |
| --- | --- |
| Data/orario preciso, campo del Programma ancora uguale al precedente valore prenotato | Aggiornare automaticamente quel campo pertinente; bus 09:00 → 10:00 aggiorna il trasferimento ancora alle 09:00 |
| Campo del Programma modificato indipendentemente, ad esempio alle 09:30 | Conservare il valore manuale e proporre l’allineamento; nessuna sovrascrittura automatica |
| Check-in/check-out dell’alloggio con campi ancora allineati | Applicare lo stesso criterio ai campi pertinenti, preservando quelli modificati indipendentemente |
| Periodo di validità del pass modificato | Conservare date/orari delle visite; segnalare quelle fuori dalla nuova validità |
| Più prenotazioni collegate con indicazioni temporali in conflitto | Conservare il Programma e segnalare l’ambiguità; scelta esplicita della prenotazione pertinente |
| Biglietto andata/ritorno senza associazione chiara alla tratta | Conservare il Programma e richiedere di chiarire la tratta; riprendere l’aggiornamento automatico dopo la risoluzione |

La validità di un pass è un intervallo d’uso, non un orario da applicare a tutte le attività. L’ultima prenotazione modificata non prevale automaticamente sulle altre. La sincronizzazione riguarda i campi temporali pertinenti, preservando l’indipendenza degli altri contenuti.

## 6. Utenti, Partecipanti e accessi — Q42–Q52, Q61, Q96–Q97, Q116

Un Partecipante è una persona coinvolta nel viaggio, anche senza account. Non è soltanto un soggetto finanziario: future assegnazioni di task o bagagli possono riferirsi a lui, con coordinamento esterno se privo di accesso. Le assegnazioni bagagli non hanno una release assegnata.

Un account ottiene accesso tramite ruolo accettato. Creare o collegare un Partecipante non concede da solo accesso.

| Operazione | Owner | Editor | Viewer |
| --- | --- | --- | --- |
| Leggere tutto il viaggio, documenti e finanze inclusi | Sì | Sì | Sì |
| Gestire contenuti del viaggio, Idee e registrazioni finanziarie | Sì | Sì | No |
| Aggiungere/modificare identità/archiviare Partecipanti | Sì | No | No |
| Invitare, gestire membri/ruoli, revocare accesso | Sì | No | No |
| Trasferire proprietà, gestire impostazioni sensibili | Sì | No | No |
| Ripristinare o eliminare definitivamente un viaggio | Sì | No | No |
| Eliminare definitivamente un documento | Sì | No | No |

Un solo Owner per viaggio. Il creatore è automaticamente Owner e Partecipante collegato al suo account. Trasferimento solo a membro accettato: diventa unico Owner, il precedente diventa Editor. L’Owner trasferisce prima di lasciare.

Aggiunta di Partecipante con nome ed email opzionale distinta dall’invito. Invito possibile dal record già esistente, preservando storico:
- Email di account esistente: Partecipante collegato subito, email e notifica in-app; ruolo ancora pendente.
- Email senza account: Partecipante con email senza collegamento, solo invito email.
- Registrazione con email verificata corrispondente collega il record esistente. Accettazione autenticata dell’invito attiva il ruolo.
- Rifiuto, scadenza o ritiro invito preservano Partecipante e storico.
- Revoca blocca subito l’accesso online e conserva partecipazione.
- Rimozione con storico archivia il Partecipante e revoca l’accesso; esclusione dai default per nuove spese, ma regolazioni residue ancora registrabili.

Autenticazione Google OAuth e magic link con Better Auth. Stessa email verificata → stesso account; email diverse separate, fusione account fuori MVP. Email/password è una decisione superata. Notifiche MVP limitate agli inviti e ai loro esiti, con email/in-app dove pertinente; notifiche generali di modifica, promemoria e push rinviati.

## 7. Spese, pagamenti e saldi — Q32–Q41, Q73, Q92–Q95, Q133–Q137

Concetti distinti: spesa, quota di costo, pagamento al fornitore, rimborso dal fornitore, regolazione tra partecipanti. Nessun trasferimento reale di denaro in Creuza.

- Pagatori e beneficiari indipendenti; più pagatori e pagamenti parziali.
- Costo previsto indicativo distinto dal costo effettivo. Un pagamento che supera la previsione è ammesso. Durante gli acconti mostrare previsto e pagato finora; con l’azione esplicita Segna come saldata il totale dei pagamenti determina il consuntivo e prevale sulla previsione, che resta consultabile. Esempio: previsto EUR 100, acconto EUR 30, saldo EUR 80 → costo effettivo EUR 110. I rimborsi riducono il costo netto secondo le regole già approvate. La chiusura riguarda il fornitore, non le regolazioni fra Partecipanti.
- Quote uguali, importi fissi o percentuali. I totali quadrano prima del salvataggio; resti deterministici, visibili e modificabili mantenendo la quadratura.
- Quando cambia il costo effettivo, quote uguali e percentuali si ricalcolano automaticamente. Gli importi fissi non sono scalati automaticamente: segnalare la differenza e richiedere quote aggiornate e quadrate prima di Segna come saldata, senza bloccare la registrazione dei pagamenti. Esempio previsto EUR 100 / effettivo EUR 110: uguali → EUR 55 ciascuno; 40%/60% → EUR 44/EUR 66; fissi EUR 40/EUR 60 → EUR 10 da attribuire esplicitamente.
- Importi decimali esatti. Valuta domestica sempre EUR e valuta del viaggio configurata; spesa inseribile in una delle due.
- Visualizzazione commutabile senza modificare transazioni o cambi originali; EUR come base comune dei saldi.
- Cambio predefinito manuale per viaggio, override sulla spesa. Modifiche al default valgono per nuove registrazioni; modifiche a un cambio già applicato sono correzioni esplicite.
- MVP: un cambio unico per spesa, condiviso da pagamenti e rimborsi; Q136 mantiene questa semplificazione rispetto alla proposta di tassi per singolo pagamento. La sua correzione resta un’azione esplicita con storico e ricalcolo, secondo Q35/Q73. Le regolazioni accettano EUR o valuta viaggio con proprio cambio. Maggiore flessibilità dei pagamenti è solo un’ipotesi futura, senza release assegnata.
- Costo completo, quote finali e debito residuo al fornitore visibili separatamente. I saldi fra partecipanti seguono solo la porzione già pagata, distribuita secondo le quote.
- Il rimborso registra chi riceve il denaro e a chi si riduce il costo; default dalla ripartizione originale, modificabile per beneficiari specifici.
- Rimborsi del fornitore complessivi limitati a quanto effettivamente pagato per la spesa, meno i rimborsi già ricevuti. Esempio: pagati EUR 30, già rimborsati EUR 10 → ulteriori rimborsi massimi EUR 20. Le regolazioni tra Partecipanti non incrementano tale limite.
- Owner/Editor possono correggere o eliminare logicamente registrazioni anche dopo regolazioni. Storico visibile, regolazioni precedenti conservate salvo correzione esplicita, saldi ricalcolati.

Casi di accettazione già approvati:
1. EUR 10 / tre persone → EUR 3,34 + 3,33 + 3,33; anche le quote convertite quadrano al totale convertito.
2. Costo EUR 100, metà ciascuno, anticipo EUR 30 pagato da A → B deve EUR 15 ad A; EUR 70 ancora al fornitore.
3. Costo PEN 120 a 4 PEN/EUR, metà ciascuno. A paga PEN 40; B regola EUR 5. Poi B paga PEN 80 al fornitore → A deve EUR 10 a B.
4. A paga PEN 120 a 4 PEN/EUR, B regola EUR 15. Rimborso PEN 40 ad A: beneficio metà ciascuno → A deve EUR 5 a B; beneficio tutto a B → A deve EUR 10.
5. Debito EUR 15, regolazione PEN 60 a 5 PEN/EUR → estinti EUR 12, residuo EUR 3; PEN 75 estinguerebbero EUR 15.

Q133 rifiuta il tetto basato sulla previsione; non implica l’adozione automatica di un credito verso il fornitore. Q134 definisce il limite dei rimborsi, Q135 la chiusura esplicita, Q136 il cambio unico nell’MVP e Q137 l’aggiornamento delle quote sul consuntivo. Il ramo finanziario residuo L06 è definito per il perimetro discusso; nuovi casi non coperti vanno segnalati prima di introdurre comportamenti ulteriori.

## 8. Documenti e cancellazione — Q53–Q55, Q71–Q72, Q88, Q124–Q125

Libreria privata unica per viaggio, file collegabile a più prenotazioni, elementi e spese. Metadati nel DB, oggetti privati in storage; accesso autorizzato nel backend.

PDF, JPEG, PNG, WebP e HEIC/HEIF, incluse foto da telefono. Anteprima compatibile mobile/desktop e originale scaricabile; soluzione HEIC/HEIF da verificare. Limite 20 MB per file mostrato prima dell’upload, rifiuto chiaro oltre limite senza modifica automatica.

Scollegare rimuove solo il collegamento. Eliminare dalla libreria porta nel cestino recuperabile; eliminazione definitiva solo Owner. Cestino applicativo e backup sono concetti distinti.

Solo Owner elimina un viaggio, lo ripristina o lo cancella definitivamente. Nel cestino gli altri membri perdono accesso online; ripristino conserva contenuti e appartenenze. Nessun termine di spurgo automatico MVP. Eliminazione definitiva cancella dati e file del viaggio ma preserva account, Idee/gruppi personali e impostazioni AI personali. Copie offline invalidate alla riconnessione.

## 9. Mappe — Q58–Q60, Q121–Q123, N04

Google Maps + Places. Ricerca di città, attrazioni e luoghi specifici come hotel, ristoranti e punti d’incontro; punto manuale sulla mappa e note libere quando il luogo è approssimativo.

Mappa dei luoghi del Programma, ordine e filtro per giorno; Idee non programmate geolocalizzate come gruppo distinto, con visibilità controllabile. Idee senza posizione restano nel pannello. Apertura app esterna per indicazioni; routing e tempi di percorrenza integrati rinviati.

Contenuti personali distinti dai dati restituiti da Google. Conservare il riferimento al luogo; schede Google online e nessuna copia permanente dei nomi/indirizzi/dettagli forniti da Google. La gestione conforme dei dati e l’interazione mobile restano da verificare nell’integrazione.

## 10. AI — Q62–Q65, Q126–Q129, N05

MVP: ogni utente configura, aggiorna, rimuove e testa la propria connessione; credenziali gestite nel backend e utilizzabili da quell’utente. TanStack AI come livello d’integrazione. Preferenza di usare la quota personale OpenCode Go; compatibilità per questi usi, modello e capacità ancora da verificare.

V1: estrazione ricevute e suggerimenti d’itinerario da Idee selezionate. Risultati in bozza, nessuna modifica del viaggio senza approvazione.

Prima dell’invio mostrare quali dati saranno condivisi:
- Ricevuta: file selezionato e contesto necessario, ad esempio valute.
- Itinerario: Idee selezionate, date e preferenze indicate.
- Altri documenti, spese e contatti dei Partecipanti esclusi.

Quota esaurita: fermare le richieste e mostrare il limite; nessun fallback automatico a crediti a pagamento o altro provider. Nuovo tentativo esplicito. Condivisione delle connessioni dopo V2.

## 11. Offline V1 — Q66–Q70, Q123

Per viaggio e dispositivo: toggle download persistente in sola lettura, con dati essenziali di Programma, Idee del viaggio, prenotazioni, spese, saldi e Partecipanti. Allegati e mappe esclusi; ricerca luoghi, indicazioni e AI richiedono rete.

Toggle ON scarica e aggiorna automaticamente mentre l’app è aperta, alla riapertura online e riconnessione; mostrare lo stato/aggiornamento della copia. Refresh ad app completamente chiusa rinviato. Dati leggibili dopo chiusura/riapertura offline.

Toggle OFF rimuove la copia su quel dispositivo e ferma il refresh, mantenendo l’accesso online. Logout rimuove i dati scaricati. Alla riconnessione verificare l’accesso prima del refresh e rimuovere copie revocate. Una revoca non può essere rilevata da un dispositivo ancora offline.

Disponibili offline i contenuti personali, inclusi titoli/note e indicazioni testuali inseriti autonomamente. I dettagli dei luoghi forniti da Google restano online; il riferimento al luogo può essere conservato.

## 12. Qualità, operatività e completamento — Q77–Q82, Q118, Q130–Q131

- Scenario iniziale 2–10 utenti, modifiche contemporanee occasionali; nessun limite applicativo implicito.
- Ultimo salvataggio prevale per modifiche concorrenti, con storico recuperabile.
- Preferenza servizi gestiti ed economia iniziale: target iniziale EUR 0–10/mese, poi preferenza esplicita per opzioni gratuite. Nessuna autorizzazione automatica a spendere.
- Preferenza UE per hosting, DB e file; non promessa di localizzazione UE per tutti i fornitori.
- Backup pianificati e test di restore esplicitamente rinviati. Cestini e storico non costituiscono backup.
- Obiettivo WCAG 2.2 AA sui percorsi principali; controlli automatici e prove manuali.
- Test prioritari su iPhone/Safari, Android/Chrome e browser desktop; unit, integrazione API, contract e pochi E2E critici.
- Trunk-based, PR obbligatorie, tag release; dev/staging automatici, produzione da tag.
- Prestazioni, disponibilità e retention dello storico non hanno soglie numeriche approvate.

Il perimetro è sufficiente secondo Q131; la sua implementazione è completata solo quando requisiti pertinenti e verifiche passano e le dipendenze aperte interessate sono risolte. Il prototipo locale non è l’applicazione di produzione. Le scelte tecniche/architetturali secondarie entro i vincoli concordati sono delegate, da verificare e documentare durante l’MVP. Modifiche di prodotto o dei vincoli fondamentali richiedono una decisione dell’utente. La baseline di definizione può chiudersi con verifiche tecniche esplicite ancora da eseguire nell’implementazione (N07).
