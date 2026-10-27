export const fixture = {
  id: "peru",
  name: "Perù",
  dates: "7–24 ottobre 2026",
  currency: "PEN",
  homeCurrency: "EUR",
  days: [
    { date: "2026-10-20", label: "20 ottobre", places: "Ollantaytambo → Aguas Calientes",
      summary: "Treno e pernottamento ad Aguas Calientes",
      items: [
        { id: "train", title: "Treno per Aguas Calientes", kind: "transfer", time: "", group: "undecided", notes: "Orario ancora da confermare. Dato dimostrativo.", booking: "Biglietti del treno", place: "Ollantaytambo → Aguas Calientes" },
        { id: "stay", title: "Pernottamento ad Aguas Calientes", kind: "stay", time: "", group: "all-day", notes: "Soggiorno dimostrativo: check-in il 20, checkout il 21.", booking: "Prenotazione alloggio", place: "Aguas Calientes" }
      ]
    },
    { date: "2026-10-21", label: "21 ottobre", places: "Machu Picchu → Cusco",
      summary: "Ingresso a Machu Picchu · rientro a Cusco",
      items: [
        { id: "machu", title: "Visita a Machu Picchu", kind: "activity", time: "12:00", group: "timed", notes: "Percorso 2. Dati fittizi ispirati al viaggio di riferimento; nessun documento personale.", booking: "Biglietto di ingresso · confermato", place: "Machu Picchu" },
        { id: "return", title: "Rientro a Cusco", kind: "transfer", time: "", group: "undecided", notes: "Definire l'orario del trasferimento.", booking: "", place: "Aguas Calientes → Cusco" }
      ]
    },
    { date: "2026-10-22", label: "22 ottobre", places: "Cusco → Lima",
      summary: "Volo per Lima · pomeriggio in città",
      items: [
        { id: "flight", title: "Volo Cusco–Lima", kind: "transfer", time: "11:55", group: "timed", notes: "Arrivo alle 13:35. Biglietto dimostrativo.", booking: "Volo · confermato", place: "Cusco → Lima" },
        { id: "lima", title: "Esplorare Lima", kind: "activity", time: "", group: "undecided", notes: "Passeggiata senza un orario definito.", booking: "", place: "Lima" }
      ]
    }
  ],
  ideas: [
    { id: "market", title: "Mercati di Cusco", notes: "Un'idea ancora da pianificare.", place: "Cusco" },
    { id: "lima-food", title: "Cucina peruviana a Lima", notes: "Conservare i link e scegliere una giornata.", place: "Lima" }
  ],
  moneyExample: { originalAmount: "120.00", currency: "PEN", unitsPerEuro: "4.000000", homeAmount: "30.00" }
};
export type Trip = typeof fixture;
export type ItineraryItem = Trip["days"][number]["items"][number];
