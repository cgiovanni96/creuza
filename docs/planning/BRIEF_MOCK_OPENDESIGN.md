# Creuza — brief per il mock in OpenDesign

Data: 27 ottobre 2026. **Brief di lavoro, non nuova specifica né decisione di prodotto.** Le proposte visuali, i dati e le soluzioni di interazione non già fissate sono ipotesi da discutere. In caso di conflitto prevalgono [SPEC](../brainstorming/SPEC.md), [ROADMAP](../brainstorming/ROADMAP.md) e [GLOSSARY](../../GLOSSARY.md). Provenienza delle scelte: [DECISIONS](../brainstorming/DECISIONS.md).

## Obiettivo

Creare un mock navigabile dell’MVP di Creuza per valutare comprensibilità, gerarchia delle informazioni e fluidità dei percorsi prima dell’implementazione. Creuza è uno spazio privato per organizzare un viaggio con pochi compagni: raccogliere Idee, costruire un Programma, conservare prenotazioni e documenti e capire le spese condivise. Il Perù è lo scenario di riferimento.

Il mock usa dati inventati, interazioni simulate e nessun servizio reale. Non è una prova di fattibilità tecnica o accessibilità completa e non è automaticamente codice di produzione. Rendere riconoscibili le parti cliccabili e indicare quelle simulate o ancora non esplorate. Se una regola manca, proporre una soluzione visibile e annotarla come ipotesi, senza inventare un requisito definitivo.

## Destinatari e contesto d’uso

Giovanni e una piccola cerchia di compagni pianificano soprattutto su desktop e consultano o modificano anche da telefono. Interfaccia in italiano; contenuti inseriti liberamente dagli utenti. Progettare mobile-first e mostrare esplicitamente entrambe le viste, mobile e desktop. Curare leggibilità, contrasto, etichette, focus e dimensioni dei controlli touch; l’obiettivo approvato per i percorsi principali è WCAG 2.2 AA, da verificare nell’applicazione.

## Vincoli già approvati

- Un viaggio si crea con il solo nome; date e destinazioni possono mancare. Giorni inclusivi dalla partenza al ritorno. Contenuti rimasti fuori intervallo dopo un cambio date restano accessibili e segnalati.
- Il **Programma** è un itinerario continuo con giornate espandibili, anche più di una aperta. Ogni riepilogo deriva dai dati, senza AI. Attività, trasferimenti e alloggi possono essere incompleti; distinguere «Orario da definire» da «Tutto il giorno». Sovrapposizioni consentite con avviso non bloccante.
- Un elemento multigiorno resta unico, rappresentato nei giorni pertinenti. Un alloggio con check-in il 10 e checkout il 13 ha tre notti: 10, 11 e 12.
- **Idee** è una schermata separata su desktop e mobile. Contiene le Idee del viaggio non programmate. Dopo aver programmato si resta in Idee, con conferma e azione «Vedi nel Programma». Un’Idea può generare più elementi indipendenti; la copia nel viaggio è indipendente dall’Idea personale. Per riportare un elemento nelle Idee serve un’azione esplicita.
- Navigazione mobile nel viaggio: **Programma, Idee, Prenotazioni, Spese, Altro**; Mappa sotto Altro. I dettagli si aprono fullscreen su mobile e ritornano allo stesso giorno e posizione di scorrimento; su desktop sono in un pannello contestuale con Programma visibile. Il layout desktop preciso è da esplorare.
- Le prenotazioni sono autonome dagli elementi del Programma e collegabili molti-a-molti; un pass può coprire più visite. Una prenotazione cancellata non elimina il piano e richiede attenzione. Per modifiche temporali applicare i criteri di SPEC §5, senza sovrascrivere modifiche indipendenti o scegliere automaticamente fra fonti ambigue.
- Un Partecipante può non avere un account. Aggiungerlo non concede accesso; occorre un invito accettato. Owner ed Editor gestiscono i contenuti; Viewer legge. Solo Owner gestisce Partecipanti, inviti e ruoli. Mostrare in almeno uno scenario la distinzione.
- Nelle spese distinguere costo previsto, pagamenti al fornitore, costo effettivo, quote e regolazioni fra Partecipanti. Il costo effettivo viene determinato dai pagamenti quando si sceglie esplicitamente «Segna come saldata»; la previsione rimane consultabile. Mostrare separatamente il residuo al fornitore e i saldi fra Partecipanti. EUR è la valuta domestica; il viaggio può avere una seconda valuta. Nessun pagamento reale avviene in Creuza.
- Documenti in una libreria unica del viaggio, collegabili a più contenuti; scollegare non significa eliminare. Mostrare prima del caricamento il limite di 20 MB. Mappa con luoghi del Programma, filtro per giorno e Idee geolocalizzate come gruppo distinguibile; indicazioni aperte in un’app esterna.
- L’MVP comprende configurazione e test della connessione AI personale, non suggerimenti d’itinerario o estrazione ricevute. Task strutturati, installabilità e offline sono in V1. Non rappresentarli come funzioni disponibili nell’MVP. Login previsto con Google o magic link.

## Scenari e dati simulati

Tutti i nomi, date, importi e prenotazioni seguenti sono esempi inventati, non dati reali o decisioni sul viaggio.

**Viaggio vuoto.** «Nuovo viaggio» viene creato con il solo nome. Mostrare come aggiungere date e destinazioni in seguito e come si presenta un Programma senza giorni definiti.

**Perù.** Viaggio dimostrativo 7–16 ottobre 2027, valuta viaggio PEN, cambio di esempio 4 PEN per 1 EUR. Partecipanti: Giovanni, Owner; Marta, Partecipante senza account. Il ruolo e lo stato di accesso di Marta non devono essere dedotti dalla sua partecipazione.

**Idee.** Idea personale «Esplorare Cusco», presente nei gruppi «Perù» e «Sud America». Una copia nel viaggio può generare «Passeggiata nel centro» e «Mercato locale» in giorni diversi. Mostrare l’Idea non programmata, la scelta del tipo e del giorno, la conferma e il ritorno al Programma; per la dimostrazione della seconda derivazione usare uno stato coerente con la specifica senza reintrodurre l’Idea nel pannello delle non programmate. Le due attività mantengono dettagli indipendenti.

**Programma.** Il 10 ottobre: trasferimento diurno, visita con orario da definire e check-in a Cusco. Alloggio dal 10 al 13 ottobre, con checkout il 13. Il 12 ottobre: attività «Tutto il giorno» e due attività con orari sovrapposti, segnalate senza bloccarle. Un giorno successivo contiene un trasferimento notturno. Mostrare riepilogo compatto, giornate aperte, dettaglio, note e ritorno al contesto.

**Prenotazioni e documenti.** Un pass turistico con validità 10–13 ottobre è collegato a due visite; un PDF dimostrativo è collegato al pass e riutilizzato per una visita. Mostrare la relazione senza duplicare il file. Simulare inoltre una prenotazione cancellata e il relativo avviso sul piano conservato; una modifica ambigua richiede scelta esplicita.

**Spese.** Alloggio previsto EUR 100, ripartito in parti uguali fra Giovanni e Marta; Giovanni ha pagato EUR 30 al fornitore. Mostrare previsto EUR 100, pagato EUR 30, residuo previsto al fornitore EUR 70 e saldo Marta → Giovanni EUR 15. In uno stato successivo si registra un ulteriore pagamento EUR 80 e si segna la spesa saldata: costo effettivo EUR 110, previsione EUR 100 ancora visibile e quote uguali EUR 55 ciascuno. Supponendo che Giovanni abbia effettuato entrambi i pagamenti e nessuna regolazione, Marta deve EUR 55 a Giovanni. Il mock non deve confondere il saldo al fornitore con quello tra persone.

## Percorsi prioritari da rendere esplorabili

1. Accedere con una schermata simulata, creare un viaggio dal solo nome e osservare lo stato vuoto.
2. Aprire Idee personali e gruppi, copiare un’Idea nel viaggio e programmarla; usare la conferma per raggiungere il Programma.
3. Scorrere il Programma del Perù, aprire più giornate, consultare un dettaglio e tornare alla posizione precedente su mobile; confrontare il pannello desktop.
4. Consultare un pass, le visite collegate e il documento condiviso; riconoscere una prenotazione cancellata e una modifica che richiede attenzione.
5. Registrare l’acconto dell’alloggio, leggere i due tipi di residuo, aggiungere il pagamento finale e chiudere esplicitamente la spesa.
6. Aggiungere un Partecipante senza account e vedere che l’accesso richiede un invito; confrontare almeno uno stato in sola lettura Viewer.

Per dare una visione dell’intero MVP, rappresentare anche i punti di accesso a mappa, documenti, cestino e impostazioni della connessione AI; approfondirli in una successiva iterazione se necessario. La presenza di un punto di accesso non equivale alla validazione del percorso completo.

## Direzione visiva e stati

Non esiste nei documenti consultati una palette, un’identità visiva o una tipografia approvata. Proporre una direzione iniziale coerente con uno strumento personale per viaggi, calmo e leggibile, evitando di trattarla come definitiva. La scelta tecnica per l’app è React/TypeScript con Mantine; il mock può esplorare l’aspetto senza richiedere integrazioni o riprodurre componenti di produzione. Etichette e gerarchie devono sostenere dati densi su desktop e controlli comodi su telefono.

Mostrare almeno: stato vuoto, dati incompleti, conferma dopo programmazione, avviso di sovrapposizione, prenotazione cancellata, ambiguità da risolvere, caricamento documento oltre limite e vista Viewer. Le informazioni non devono dipendere dal solo colore. Usare contenuti realistici senza fotografie o mappe che lascino intendere integrazioni attive.

## Cosa valutare

- Si capisce subito dove trovare il piano, cosa è ancora da definire e come tornare al punto lasciato?
- Sono chiare le differenze fra Idea personale, Idea del viaggio ed elemento programmato? La schermata Idee evita di suggerire che le copie siano sincronizzate?
- Si comprende che un pass può coprire più visite e che prenotazione e Programma sono indipendenti?
- Si distinguono costo previsto, pagato, residuo al fornitore e saldi tra persone, prima e dopo la chiusura?
- È chiaro che un Partecipante senza account non ha automaticamente accesso e che il Viewer non modifica?
- Su telefono e desktop le azioni principali, gli avvisi e i dettagli restano leggibili e raggiungibili?

## Consegna e revisione

Consegnare un prototipo navigabile con vista mobile e desktop, dati simulati e un breve elenco di schermate e interazioni effettivamente realizzate. Accompagnarlo con un elenco di ipotesi visuali e di interazione, dubbi incontrati, punti non coperti e possibili conflitti con la specifica. Non dichiarare validate integrazioni reali, correttezza finanziaria completa o accessibilità completa sulla sola base del mock.

Raccogliere osservazioni durante la prova dei percorsi. Le modifiche alle regole di dominio, allo scope o ai vincoli fondamentali richiedono una decisione dell’utente; una volta approvate, registrarle nei documenti pertinenti e nella relativa issue Linear secondo [AGENTS](../brainstorming/AGENTS.md). Le proposte visive non approvate restano ipotesi.

## Prompt di avvio per OpenDesign

> Crea un mock navigabile di Creuza seguendo questo brief e i documenti collegati, con dati simulati in italiano. Mostra prima i percorsi prioritari e versioni mobile e desktop. Rispetta le regole approvate e i confini MVP; non introdurre funzionalità V1 come disponibili. Tratta la direzione visiva e i dettagli non specificati come proposte da valutare. Indica quali interazioni sono simulate, cosa manca e quali dubbi emergono. Non collegare servizi reali né usare dati personali.
