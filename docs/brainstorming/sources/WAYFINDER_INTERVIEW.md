# Creuza — fonti dell’intervista Wayfinder

Recuperato il 27 ottobre 2026 dalla chat «Creuza - Wayfinder», ID `01a173d0-3a1f-7423-862c-1861c71dda20`, tramite la cronologia dell’app. Contiene le domande Q1–Q131, le varianti e le risposte umane. I turni sono identificatori di provenienza; non sono link web.

Questo è un archivio delle evidenze, non la specifica corrente. Una proposta contenuta in una domanda non è automaticamente approvata: leggere la risposta, le precisazioni successive e [DECISIONS.md](../DECISIONS.md). Sono escluse credenziali e output degli strumenti. Dopo il recupero Q1–Q131 si aggiungono qui le nuove domande: Q132 ha rinviato la prova cloud.

## Q1

### Domanda

Fonte: turno `01a173ea-2b26-7d70-a2d6-94e09cdb176b`.

❓ **Q1 — Specification scope:** Shall we aim for **a detailed MVP specification, a clear V1 boundary, and an explicit register of unresolved later-version scope**, preserving every existing version commitment?

➡️ **Recommended: yes.** This gives us a concrete stopping point without requiring every future feature to be fully designed.


### Risposta

Fonte: turno `01a173ee-43eb-70b0-b1b1-65bc1c81b7bc`.

yes

## Q2

### Domanda

Fonte: turno `01a173ea-2b26-7d70-a2d6-94e09cdb176b`.

❓ **Q2 — Product purpose:** Is this a suitable starting definition?

> Creuza helps independent travelers organize a trip, individually or with travel companions, by keeping the itinerary, reservations, documents, and shared expenses together through planning and travel.

➡️ **Recommended: use this as our working hypothesis**, then sharpen it with one real example. In your answer, describe the trip or planning situation you most want Creuza to improve, and what is frustrating about handling it today. The audience and value proposition here are proposals; the documents do not establish them.

The [grilling skill](C:/Users/cgiov/.codex/plugins/cache/mattpocock/mattpocock-skills/1.3.1/skills/productivity/grilling/SKILL.md) says, “The decisions are the user’s: put each to them and wait.” Your answers will determine the next questions; all results will remain in this chat.

### Risposta

Fonte: turno `01a173ee-43eb-70b0-b1b1-65bc1c81b7bc`.

yes. I want to create an application, which will be mostly self-used, that improves the UX of managing my futures traveling. In the past, I used notion to do so, but I want a more custom experience for my necessities.

## Q3

### Domanda

Fonte: turno `01a173ee-43eb-70b0-b1b1-65bc1c81b7bc`.

❓ **Q3 — Main friction:** What are the two or three most frustrating things about managing trips in Notion?

For example: repeatedly entering information, navigating between pages, arranging days, finding reservations while traveling, or keeping expenses connected to the trip. These are prompts, not assumed requirements.

➡️ **Recommended:** prioritize the recurring friction in your actual workflow. A short “when I do X, I have to Y, but I want Z” example is ideal.


### Risposta

Fonte: turno `01a173f4-7f3c-7b22-bcb1-0c901eb3a264`.

it's just that it's not specialized for traveling, so I have to make a lot of compromise and the UI is not perfect for it. I want a better UI/UX specifically for this.

## Q4

### Domanda

Fonte: turno `01a173ee-43eb-70b0-b1b1-65bc1c81b7bc`.

❓ **Q4 — Reference trip:** Shall we use one real, representative trip as our reference throughout specification work?

➡️ **Recommended: yes.** Describe a recent or upcoming trip: approximate duration, whether you travel alone or with others, whether it includes multiple destinations, and how you currently organize it. We’ll use it to test proposed behavior against something concrete.


### Risposta

Fonte: turno `01a173f4-7f3c-7b22-bcb1-0c901eb3a264`.

this is my latest travel, in peru: https://giovannicosta.notion.site/Per-26-38647485657480d88640eac91b3ab961?pvs=74

## Q5

### Domanda

Fonte: turno `01a173ee-43eb-70b0-b1b1-65bc1c81b7bc`.

❓ **Q5 — Devices and context:** Should we optimize for **comfortable planning on desktop and quick consultation or updates on your phone while traveling**?

➡️ **Recommended: yes**, with both using the same trip information. This establishes a usage priority; the application platform and technical approach remain open. Mention if most of your planning also happens on your phone.

### Risposta

Fonte: turno `01a173f4-7f3c-7b22-bcb1-0c901eb3a264`.

the largest part of the planning will be done on desktop for sure, but I want the UI/UX to be thought as mobile-first, so everything should be available and optimize both on mobile and desktop

## Q6

### Domanda

Fonte: turno `01a173f4-7f3c-7b22-bcb1-0c901eb3a264`.

❓ **Q6 — Core trip experience:** Should the **day-by-day itinerary** be the main workspace, with a whole-trip overview showing the same underlying information?

For Peru, you could scan the route and overnight stays, then open a day for activities, transfers, accommodation, and related reservations. Editing information would update every relevant view.

➡️ **Recommended: yes.** The precise layouts can be explored later through prototypes.


### Risposta

Fonte: turno `01a173f7-7f24-71b3-8678-bd2c12a7fc8a`.

yes

## Q7

### Domanda

Fonte: turno `01a173f4-7f3c-7b22-bcb1-0c901eb3a264`.

❓ **Q7 — Planning before everything is known:** Should Creuza let you capture incomplete plans and progressively organize them?

Your Peru page includes flexible days, undecided accommodation, and activities whose timing depends on circumstances. A possible workflow is to enter a short idea or note, then add dates, times, locations, and booking details as they become known.

➡️ **Recommended: yes.** We would subsequently define which fields each item requires and when. How you usually start a trip—rough route, booked flights, list of places, or something else—would help shape this.


### Risposta

Fonte: turno `01a173f7-7f24-71b3-8678-bd2c12a7fc8a`.

yes

## Q8

### Domanda

Fonte: turno `01a173f4-7f3c-7b22-bcb1-0c901eb3a264`.

❓ **Q8 — Bookings and preparation:** Should we distinguish **reservation status**, **general preparation tasks**, and **undecided plans** in the experience?

For example:

- A booked bus has its reservation and ticket.
- Buying an eSIM is a preparation task.
- Choosing where to stay is an unresolved planning choice.

➡️ **Recommended: yes to distinguishing them.** Reservation status would belong with the reservation; general tasks and undecided plans would have suitable places in the trip. A dedicated task feature is a proposal whose release scope we still need to reconcile with the original inventory.

Everything remains in this chat; no files or Linear records were changed.

### Risposta

Fonte: turno `01a173f7-7f24-71b3-8678-bd2c12a7fc8a`.

yes

## Q9

### Domanda

Fonte: turno `01a173f7-7f24-71b3-8678-bd2c12a7fc8a`.

❓ **Q9 — Preparation tasks in the MVP:** Should the first release include a simple trip checklist for things such as buying an eSIM, arranging insurance, or checking entry requirements?

➡️ **Recommended: yes**, with a description and completion state. This would explicitly place the preparation-task feature we just discussed in the MVP. Reminders, deadlines, and automation would remain separate scope decisions.


### Risposta

Fonte: turno `01a173f9-f81c-7073-bbb3-9581bbc7e70b`.

it's okay to leave for v1 with the more structured tasks

## Q10

### Domanda

Fonte: turno `01a173f7-7f24-71b3-8678-bd2c12a7fc8a`.

❓ **Q10 — Purpose of maps:** Should the MVP map help you **understand the geography of your planned trip**, showing itinerary locations and letting you focus on a particular day?

For Peru, this would help you see how the places around Cusco relate to the daily itinerary.

➡️ **Recommended: yes.** This defines the initial purpose; we still need to decide location entry, place search, and any route or travel-time capabilities before comparing map providers.


### Risposta

Fonte: turno `01a173f9-f81c-7073-bbb3-9581bbc7e70b`.

yes

## Q11

### Domanda

Fonte: turno `01a173f7-7f24-71b3-8678-bd2c12a7fc8a`.

❓ **Q11 — Missing capabilities:** Does this capture the application’s essential functional areas, or is something important from your original vision missing?

- Trips and daily itineraries, including incomplete plans and notes.
- Activities, transfers, accommodation, and linked reservations.
- Documents and attachments.
- Preparation tasks.
- Maps.
- Collaboration and access roles.
- Expenses, shares, payments, and refunds.
- The already agreed AI and offline progression.

➡️ **Recommended:** use this as the working inventory and add anything you consider missing now. Its release boundaries remain subject to the existing decisions: manual receipts and minimal AI setup in the MVP; functional AI, receipt extraction, and persistent read-only offline access in V1.

This inventory check matters because the brainstorming documents explicitly say the original feature list was only partially recovered. Your answer will help us reconcile that gap.

### Risposta

Fonte: turno `01a173f9-f81c-7073-bbb3-9581bbc7e70b`.

ok

## Q12

### Domanda

Fonte: turno `01a173f9-f81c-7073-bbb3-9581bbc7e70b`.

❓ **Q12 — Creating a trip:** Should you be able to create a trip with just a name, leaving dates and destinations unspecified?

For example, “Japan next spring” could exist before you have flights, exact dates, or a route. Once dates are supplied, the daily itinerary becomes available.

➡️ **Recommended: yes.** Dates should become necessary when a particular operation needs them, rather than at trip creation.


### Risposta

Fonte: turno `01a173fb-6f79-7c70-9f59-2b0cb4e5136e`.

yes, to add Idee (which is one of the features)

## Q13

### Domanda

Fonte: turno `01a173f9-f81c-7073-bbb3-9581bbc7e70b`.

❓ **Q13 — Unscheduled ideas:** Should each trip have a place to collect activities, places, accommodation options, or transfers that have not yet been assigned to a day?

For Peru, you could collect an excursion or a place to visit, add notes and links, then place it into the itinerary later.

➡️ **Recommended: yes.** Scheduling an idea should preserve its information, and you should be able to return it to the unscheduled collection. These are travel plans; the structured preparation tasks remain V1.

Both proposals build on the incomplete-planning experience you approved. Everything remains in this chat.

### Risposta

Fonte: turno `01a173fb-6f79-7c70-9f59-2b0cb4e5136e`.

yes

## Q14

### Domanda

Fonte: turno `01a173fb-6f79-7c70-9f59-2b0cb4e5136e`.

❓ **Q14 — What is an “Idea” in Creuza?**

Which model matches your intention?

- **A — Independent travel ideas:** a collection of possible destinations or future trips, before creating an actual trip.
- **B — Trips in an idea stage:** “Japan next spring” is already a trip, with details progressively added.
- **C — Ideas within a trip:** places, activities, or other possibilities collected for a particular trip.

➡️ **Recommended: A**, alongside the undated trips and unscheduled itinerary items already approved. It gives inspiration a place before you commit to planning a trip. If you mean a combination, describe it.

Everything remains in this chat.

### Risposta

Fonte: turno `01a173fc-6ceb-7662-85d9-d8703a1e1438`.

A

## Q15

### Domanda

Fonte: turno `01a173fc-6ceb-7662-85d9-d8703a1e1438`.

❓ **Q15 — Release scope:** Should **Idee be available in the MVP**?

➡️ **Recommended: yes**, as a simple way to collect inspiration and start planning a trip. More elaborate organization can be considered separately.


### Risposta 1

Fonte: turno `01a173fe-a42c-7560-8c0c-03369776d69b`.

yes. Idee can be independent from trips and associated to a user (like the cities, attractions, etc a user would like to visit in the future), then can be associated to a trip (but still not planned in the itinerary), and finally can be move to the itinerary of the trip.

### Risposta 2

Fonte: turno `01a17400-b02a-77f1-a21c-94676e4c406b`.

yes. Idee can be independent from trips and associated to a user (like the cities, attractions, etc a user would like to visit in the future), then can be associated to a trip (but still not planned in the itinerary), and finally can be move to the itinerary of the trip.

## Q16

### Domanda

Fonte: turno `01a173fc-6ceb-7662-85d9-d8703a1e1438`.

❓ **Q16 — Idea content:** Should an Idea start with just a title, with optional notes, links, and locations?

For example, “Japan during autumn” could contain a few places, useful articles, and your reasons for wanting to go, without dates or a complete itinerary.

➡️ **Recommended: yes.** Capture should be quick, and you should be able to enrich the Idea later.


### Risposta

Fonte: turno `01a17400-b02a-77f1-a21c-94676e4c406b`.

as I said, it should be something that then can be moved up as an element in the itineray

## Q17

### Domanda

Fonte: turno `01a173fc-6ceb-7662-85d9-d8703a1e1438`.

❓ **Q17 — From inspiration to planning:** Should you be able to **create a trip from an Idea**, carrying across its relevant information while preserving the original Idea?

➡️ **Recommended: yes.** The resulting trip can begin without dates. The original inspiration remains available; we would define precisely how its content carries across before implementation.

### Risposta

Fonte: turno `01a17400-b02a-77f1-a21c-94676e4c406b`.

let's say we can group ideas, and from a group create a trip with those ideas in the trip -> ideas panel. We can think, in the MVP or later, that the AI can recommend a itineray based on this group of ideas. I don't think this should be in the MVP

## Q18

### Domanda

Fonte: turno `01a17400-b02a-77f1-a21c-94676e4c406b`.

❓ **Q18 — Keeping and reusing Ideas:** When an Idea is associated with a trip or scheduled, should it remain in your personal collection and be reusable for other trips?

➡️ **Recommended: yes.** The personal Idea preserves the inspiration; each trip holds its own planning details, such as dates, times, and reservations.


### Risposta

Fonte: turno `01a17402-4085-73d1-94ee-8279c19225da`.

yes

## Q19

### Domanda

Fonte: turno `01a17400-b02a-77f1-a21c-94676e4c406b`.

❓ **Q19 — Becoming an itinerary element:** Should you choose or confirm the element type when scheduling an Idea?

For example, an attraction becomes an activity, a hotel becomes accommodation, and a bus journey becomes a transfer. A city can remain location context or become an activity such as “Explore Cusco,” depending on your intention.

➡️ **Recommended: yes.** Ideas can start loosely defined, then gain the appropriate structure when scheduled. This preserves the confirmed itinerary types.


### Risposta

Fonte: turno `01a17402-4085-73d1-94ee-8279c19225da`.

yes

## Q20

### Domanda

Fonte: turno `01a17400-b02a-77f1-a21c-94676e4c406b`.

❓ **Q20 — Grouping in the MVP:** Should the MVP include **named groups of Ideas and creating a trip from a selected group**?

➡️ **Recommended: yes**, with those Ideas appearing unscheduled in the new trip’s Ideas panel. AI itinerary generation would be a separate future capability.

These are proposed behaviors; everything remains in this chat.

### Risposta

Fonte: turno `01a17402-4085-73d1-94ee-8279c19225da`.

yes

## Q21

### Domanda

Fonte: turno `01a17402-4085-73d1-94ee-8279c19225da`.

❓ **Q21 — Visibility:** Should personal Ideas and groups be visible only to their owner, while Ideas added to a trip become visible to that trip’s authorized members?

➡️ **Recommended: yes.** Sharing an Idea with a trip exposes the content added to that trip. Your other personal Ideas and groups stay private.


### Risposta

Fonte: turno `01a17407-0fe5-7382-9438-64d4734fdd23`.

yes

## Q22

### Domanda

Fonte: turno `01a17402-4085-73d1-94ee-8279c19225da`.

❓ **Q22 — Collaboration:** Should Owners and Editors be able to add, edit, remove, and schedule Ideas within the trip, while Viewers can read them?

➡️ **Recommended: yes**, consistent with the existing roles. Those permissions apply to the trip’s content; the original personal Idea remains under its owner’s control.


### Risposta

Fonte: turno `01a17407-0fe5-7382-9438-64d4734fdd23`.

yesyes

## Q23

### Domanda — variante 1

Fonte: turno `01a17402-4085-73d1-94ee-8279c19225da`.

❓ **Q23 — Independent changes:** Should edits to a trip’s Idea affect only that trip, with changes to the personal Idea also remaining independent?

For example, you save “Visit Cusco,” add it to a Peru trip, and adapt its notes for that journey. Later, you enrich the personal Idea for a return visit.

➡️ **Recommended: yes.** Neither set of edits should silently overwrite the other. This defines the behavior; the storage mechanism remains an implementation detail.

### Domanda — variante 2

Fonte: turno `01a17407-0fe5-7382-9438-64d4734fdd23`.

❓ **Q23 — Independent edits:** Should personal and trip versions evolve independently?

Example:

1. You save a personal Idea: “Visit Cusco.”
2. You add it to a Peru trip.
3. An Editor changes its trip notes.
4. Your personal Idea remains unchanged.
5. Later edits to the personal Idea also leave the trip unchanged.

➡️ **Recommended: yes.** The link preserves where the Idea came from, while edits stay within their respective contexts.

### Risposta 1

Fonte: turno `01a17407-0fe5-7382-9438-64d4734fdd23`.



### Risposta 2

Fonte: turno `01a17407-8a0b-7df2-bc45-b17160a65446`.

yes

## Q24

### Domanda

Fonte: turno `01a17407-8a0b-7df2-bc45-b17160a65446`.

❓ **Q24 — Trip boundaries:** Should the trip’s dates include the entire journey, from departure through arrival home, with both dates included?

Your [Peru page](https://giovannicosta.notion.site/Per-26-38647485657480d88640eac91b3ab961) lists 7–23 October in its properties, while the overview also includes 24 October in Milan. This exposes a useful distinction between the last day at the destination and the end of the journey.

➡️ **Recommended: yes.** An overnight return journey can extend the trip through the arrival date.


### Risposta

Fonte: turno `01a1740a-15fb-7313-8bd5-efc99ac38be8`.

yes

## Q25

### Domanda

Fonte: turno `01a17407-8a0b-7df2-bc45-b17160a65446`.

❓ **Q25 — Items without a time:** Once an item is assigned to a day, should its time remain optional, with **“time not decided” distinct from “all day”**?

For example, “Explore Arequipa” might have no fixed time, while an excursion could explicitly occupy the whole day.

➡️ **Recommended: yes.** You should be able to organize a day before committing to exact times.


### Risposta

Fonte: turno `01a1740a-15fb-7313-8bd5-efc99ac38be8`.

yes

## Q26

### Domanda

Fonte: turno `01a17407-8a0b-7df2-bc45-b17160a65446`.

❓ **Q26 — Items spanning days:** Should one item appear on every relevant day while remaining a single item?

For example, the Nazca–Arequipa night bus would show its departure on one day and arrival on the next. Accommodation could show check-in, intervening nights, and checkout across its stay.

➡️ **Recommended: yes.** Editing that transfer or stay updates its appearances throughout the itinerary.

These are proposed time behaviors. Time-zone grouping and what happens when trip dates change remain open.

### Risposta

Fonte: turno `01a1740a-15fb-7313-8bd5-efc99ac38be8`.

yes

## Q27

### Domanda

Fonte: turno `01a1740a-15fb-7313-8bd5-efc99ac38be8`.

❓ **Q27 — Local dates across time zones:** Should each part of the itinerary appear under the local date where it happens?

For a flight from Milan to Lima, departure uses Milan’s local date and time, while arrival uses Lima’s. Each appears on its corresponding itinerary day, with the time zones shown where useful.

➡️ **Recommended: yes.** This extends the confirmed time-zone handling to daily presentation. Actual elapsed duration uses the underlying instants, so a time-zone change does not distort it.


### Risposta

Fonte: turno `01a1740c-162b-74d1-bd8d-f08d74b3884a`.

yes

## Q28

### Domanda

Fonte: turno `01a1740a-15fb-7313-8bd5-efc99ac38be8`.

❓ **Q28 — Changing trip dates:** Should changing the trip’s date range preserve the existing dates of scheduled items?

For example, shortening Peru by one day would leave an already-booked flight at its original date. Items outside the new range would remain accessible and clearly flagged for you to resolve.

➡️ **Recommended: yes.** Changing the range updates the trip boundaries. Rescheduling individual plans is an explicit action, and existing items or day notes are preserved.

A separate “shift the whole itinerary” action could be considered later; it is not included in this proposal.

### Risposta

Fonte: turno `01a1740c-162b-74d1-bd8d-f08d74b3884a`.

yes

## Q29

### Domanda

Fonte: turno `01a1740c-162b-74d1-bd8d-f08d74b3884a`.

❓ **Q29 — Reservation workflow:** Should the MVP let you manually record reservations made through external providers, including provider, confirmation reference, status, links, and attached documents?

For Peru, you could record a bus reservation and attach its ticket to the relevant transfer.

➡️ **Recommended: yes.** Booking purchases and automatic email imports would remain outside this MVP workflow.


### Risposta

Fonte: turno `01a1740d-a48c-7e83-ad29-e91b0b3a98fa`.

yes

## Q30

### Domanda

Fonte: turno `01a1740c-162b-74d1-bd8d-f08d74b3884a`.

❓ **Q30 — Reservation relationships:** Should one reservation be able to cover several itinerary items, and one itinerary item have several reservations?

Examples: one return-ticket reservation covers two transfers; one activity has separate ticket reservations for different participants.

➡️ **Recommended: yes.** This supports real booking arrangements while keeping reservations distinct from activities, accommodation, and transfers.


### Risposta

Fonte: turno `01a1740d-a48c-7e83-ad29-e91b0b3a98fa`.

yes, like in peru we add a turistic tickets that covered the entry of multiple locations

## Q31

### Domanda

Fonte: turno `01a1740c-162b-74d1-bd8d-f08d74b3884a`.

❓ **Q31 — Cancellation behavior:** Should cancelling a reservation preserve the linked itinerary items and clearly show that their booking needs attention?

For example, a cancelled hotel reservation would leave the planned stay in your itinerary so you can arrange a replacement.

➡️ **Recommended: yes.** You would explicitly decide whether to replace the booking, change the plan, or remove the itinerary item. Cancelling the reservation would not silently delete the plan.

### Risposta

Fonte: turno `01a1740d-a48c-7e83-ad29-e91b0b3a98fa`.

yes

## Q32

### Domanda

Fonte: turno `01a1740d-a48c-7e83-ad29-e91b0b3a98fa`.

❓ **Q32 — Who paid versus who shares the cost:** Should each expense independently identify its payers and the participants who bear its cost?

For example, you pay for a tourist pass covering two travelers, while a separate purchase is entirely personal. An expense could also have multiple payers.

➡️ **Recommended: yes.** Select the participants involved in each expense, then apply the already-approved equal, fixed-amount, or percentage split.


### Risposta

Fonte: turno `01a17422-fff8-7fa0-878b-5eabfc0a6a19`.

yes

## Q33

### Domanda

Fonte: turno `01a1740d-a48c-7e83-ad29-e91b0b3a98fa`.

❓ **Q33 — Refunds versus settling balances:** Should Creuza distinguish these two operations?

- **Supplier refund:** a provider returns money for an expense, such as a cancelled excursion.
- **Participant settlement:** one traveler pays another to settle their shared-expense balance.

➡️ **Recommended: yes**, with both recorded separately. This proposes support for both meanings within the financial scope. Creuza would track the transactions; actual money transfers happen externally.


### Risposta

Fonte: turno `01a17422-fff8-7fa0-878b-5eabfc0a6a19`.

yes

## Q34

### Domanda

Fonte: turno `01a1740d-a48c-7e83-ad29-e91b0b3a98fa`.

❓ **Q34 — Reporting currency:** Should each trip have one reporting currency for totals and participant balances, while preserving every expense’s original currency and applied exchange rate?

For Peru, you could enter an expense in Peruvian soles while viewing the trip totals in euros.

➡️ **Recommended: yes.** The exchange-rate source and rules for changing an applied rate remain separate decisions.

### Risposta

Fonte: turno `01a17422-fff8-7fa0-878b-5eabfc0a6a19`.

I think a trip should have associated two currencies: the "home" one (should alway be euro) and the "trip" one (for peru, it was PEN). when  registering an expense, the user should be able to select and store if they are putting an expense in the home or trip currency. The UI should then be able to switch between which currency the expenses are shown in.

## Q35

### Domanda

Fonte: turno `01a17422-fff8-7fa0-878b-5eabfc0a6a19`.

❓ **Q35 — Exchange-rate entry:** For the MVP, should you set a default exchange rate for the trip, with the option to override it for an individual expense?

For example, you could use a general EUR–PEN rate, then enter the actual rate used for a particular card payment or cash exchange. Each expense retains the rate applied to it.

➡️ **Recommended: yes**, using manual rates initially. Changing the trip default would affect subsequent entries; correcting an existing expense’s rate would be an explicit edit. Automatic rate lookup would remain a future scope decision.


### Risposta

Fonte: turno `01a17429-0df6-7ea1-93a5-b71810003edf`.

yes

## Q36

### Domanda

Fonte: turno `01a17422-fff8-7fa0-878b-5eabfc0a6a19`.

❓ **Q36 — Basis for balances:** Should **EUR be the common basis for calculating participant balances**, while allowing the expense views and balance summaries to display either currency?

For example, a PEN expense is converted using its recorded rate when calculating each participant’s balance. Switching the display currency changes the presentation, while preserving the recorded transactions and their rates.

➡️ **Recommended: yes.** This gives mixed-currency expenses a consistent basis for calculating who owes whom. We would then define how settlements made in PEN reduce those balances.

### Risposta

Fonte: turno `01a17429-0df6-7ea1-93a5-b71810003edf`.

yes, the home currency should be the common basis for balances

Nota di ricostruzione: La risposta riporta «26»; il testo riguarda Q36. La correzione è stata esplicitata nel turno successivo della chat.

## Q37

### Domanda

Fonte: turno `01a17429-0df6-7ea1-93a5-b71810003edf`.

❓ **Q37 — Settlement currency:** Should a participant settlement be recordable in either EUR or the trip currency, with its own stored exchange rate?

For example, someone repays you in PEN. Creuza records the actual PEN amount and uses that settlement’s rate to determine how much EUR debt it clears.

➡️ **Recommended: yes**, using the same default-and-override rate behavior as expenses.


### Risposta

Fonte: turno `01a17431-e722-76a0-84e9-991aa5835931`.

yes

## Q38

### Domanda

Fonte: turno `01a17429-0df6-7ea1-93a5-b71810003edf`.

❓ **Q38 — Rounding:** Should splits always reconcile exactly with the expense total, distributing any remaining cents deterministically?

For example, €10 split equally among three people becomes €3.34, €3.33, and €3.33. The allocation would be visible and adjustable while preserving the total. Converted shares would likewise reconcile with the converted EUR total.

➡️ **Recommended: yes.** Fixed-amount and percentage splits must also reconcile before saving.


### Risposta

Fonte: turno `01a17431-e722-76a0-84e9-991aa5835931`.

yes

## Q39

### Domanda

Fonte: turno `01a17429-0df6-7ea1-93a5-b71810003edf`.

❓ **Q39 — Partial payments:** Should the MVP support expenses that have only been partly paid?

For example, a €100 accommodation expense has a €30 deposit paid by you, with €70 still owed to the provider.

➡️ **Recommended: yes.** Keep the full cost, payments made, and outstanding provider amount distinct. If accepted, we’ll explicitly define how partially paid expenses affect participant balances; that rule remains open.

### Risposta

Fonte: turno `01a17431-e722-76a0-84e9-991aa5835931`.

yes

## Q40

### Domanda

Fonte: turno `01a17431-e722-76a0-84e9-991aa5835931`.

❓ **Q40 — Balances while an expense is partly paid:** Should participant balances reflect only the portion already paid, distributed according to the expense’s split?

Example:

- Accommodation costs **€100**, split equally between you and another traveler.
- You pay a **€30 deposit**.
- The other traveler currently owes you **€15**.
- **€70 remains unpaid to the provider**, tracked separately.
- Once you pay the remaining €70, the other traveler’s total obligation to you becomes €50, less any settlements already recorded.

➡️ **Recommended: yes.** The full cost and each person’s eventual share remain visible, while reimbursement balances follow actual payments.


### Risposta

Fonte: turno `01a17436-7378-7f83-a46a-a6c570bb0156`.

yes

## Q41

### Domanda

Fonte: turno `01a17431-e722-76a0-84e9-991aa5835931`.

❓ **Q41 — Supplier refunds:** Should a refund separately record **who receives the money** and **whose share of the cost is reduced**?

Example: you paid a €100 expense shared equally. The supplier returns €20 to you. If that refund benefits both travelers equally, the net cost becomes €80 and each person’s share becomes €40. Any participant settlements already made remain recorded, and the outstanding balances are recalculated.

➡️ **Recommended: yes.** Default the refund allocation to the original expense split, with an explicit adjustment when it benefits only particular participants. Preserve the original expense and payment history.

### Risposta

Fonte: turno `01a17436-7378-7f83-a46a-a6c570bb0156`.

yes

## Q42

### Domanda

Fonte: turno `01a17436-7378-7f83-a46a-a6c570bb0156`.

❓ **Q42 — Owner authority:** Should each trip have exactly one Owner, who controls invitations, membership, roles, ownership transfer, and deletion of the trip?

➡️ **Recommended: yes.** Editors manage trip content within the existing restrictions. We would define the ownership-transfer and deletion safeguards separately.


### Risposta

Fonte: turno `01a17439-bd56-7572-8d28-f5761dc21327`.

yes

## Q43

### Domanda

Fonte: turno `01a17436-7378-7f83-a46a-a6c570bb0156`.

❓ **Q43 — Visibility within a trip:** Should every authorized trip member—including Viewers—be able to read the complete trip, including reservations, attachments, expenses, and participant balances?

➡️ **Recommended: yes for the MVP.** This provides a consistent trip-level access model. An expense allocated entirely to one participant would still be visible to the trip’s members. Personal Ideas remain private until their content is added to a trip, as already agreed.


### Risposta

Fonte: turno `01a17439-bd56-7572-8d28-f5761dc21327`.

yes for mvp

## Q44

### Domanda

Fonte: turno `01a17436-7378-7f83-a46a-a6c570bb0156`.

❓ **Q44 — Invitations:** Should the Owner invite people by email, assigning Editor or Viewer access, with the invitation accepted through an authenticated account?

➡️ **Recommended: yes.** Invitations can remain pending until accepted. Acceptance should verify that the account belongs to the invited email address. Financial participants can still exist without an account, as already confirmed.

The authentication provider and technical implementation remain open; this question defines the user-facing invitation behavior.

### Risposta

Fonte: turno `01a17439-bd56-7572-8d28-f5761dc21327`.

user inputs an email. if the email is already associated to an account, the system should both send an email and a notification to the account, with the ability to agree to the invitation. If the email is not associated to an email, the system should only send an invitation email. Both should be added as partecipant, but only the first is connected to an accountId

## Q45

### Domanda

Fonte: turno `01a17439-bd56-7572-8d28-f5761dc21327`.

❓ **Q45 — Participant creation versus trip access:** By “participant,” do you mean that inviting someone immediately creates their **financial participant record**, while their Editor or Viewer access remains pending until they accept?

➡️ **Recommended: yes.** This means:

- You can include the person in expenses before they accept.
- Linking an existing account identifies the participant.
- Acceptance activates the assigned trip role.
- A pending invitation grants no access to private trip content.

This preserves your proposed automatic participant creation and the already-confirmed separation between financial participation and trip access.

### Risposta

Fonte: turno `01a1743e-b70e-7090-88c1-76978133b240`.

yes, but the participant is not only for the financial aspect. A task; something to add in the bag; etc could be assigned to a participant (in the future). this even if the participant does not have an account (it's implied that the will be comunication out of the application)

## Q46

### Domanda

Fonte: turno `01a1743e-b70e-7090-88c1-76978133b240`.

❓ **Q46 — Linking an account later:** When an invited person registers with the verified email used for their participant record, should Creuza link that account to the existing Participant?

➡️ **Recommended: yes.** Preserve their expenses and assignments without creating a duplicate person. Accepting the invitation remains the explicit action that activates their Editor or Viewer access.


### Risposta

Fonte: turno `01a17728-af3b-7e61-8daf-a0477d3fceaf`.

yes

## Q47

### Domanda

Fonte: turno `01a1743e-b70e-7090-88c1-76978133b240`.

❓ **Q47 — Declined or withdrawn invitations:** Should the Participant remain in the trip when an invitation is declined, expires, or is withdrawn?

➡️ **Recommended: yes.** Their recorded participation, expenses, and assignments remain intact; the invitation no longer provides a route to access. Removing a Participant from the trip would be a separate operation with rules for preserving existing records.

Everything remains in this chat.

### Risposta

Fonte: turno `01a17728-af3b-7e61-8daf-a0477d3fceaf`.

yes

## Q48

### Domanda

Fonte: turno `01a17728-af3b-7e61-8daf-a0477d3fceaf`.

Q48 — Should Owners and Editors be able to add a Participant with just a name and an optional email, without automatically sending an invitation? Only the Owner would grant application access through a separate invitation.
- Yes — participant creation and access invitations are separate (Recommended)
- Only the Owner can add participants
- Every participant needs an email; inviting remains separate

### Risposta

Fonte: turno `01a1772a-00be-7361-8516-1d8764eadef6`.

Only the Owner can add participants

## Q49

### Domanda

Fonte: turno `01a17728-af3b-7e61-8daf-a0477d3fceaf`.

Q49 — When the Owner revokes an accepted member’s access, should Creuza immediately block their online access while preserving their Participant record, expenses, and assignments? Previously downloaded offline data remains a separate V1 policy decision.
- Yes — revoke online access and preserve participation history (Recommended)
- Revoking access should also remove them from active participation

### Risposta

Fonte: turno `01a1772a-00be-7361-8516-1d8764eadef6`.

Yes — revoke online access and preserve participation history (Recommended)

## Q50

### Domanda — variante 1

Fonte: turno `01a1772a-00be-7361-8516-1d8764eadef6`.

Q50 — Should editing a Participant’s identity details and removing them from the trip also be Owner-only? Editors would still use existing Participants when recording expenses and other trip content.
- Yes — only the Owner manages participant records (Recommended)
- Editors can edit participant details; only the Owner can remove them
- Editors can edit and remove participants too

### Domanda — variante 2

Fonte: turno `01a1772a-00be-7361-8516-1d8764eadef6`.

Q50–Q52 are in the question components, covering participant permissions, removal, and ownership transfer. Everything remains in this chat.

### Domanda — variante 3

Fonte: turno `01a17739-8da6-79d0-a679-89dce9a2df12`.

Q50–Q52 are confirmed. Q53–Q55 cover the **document library, supported file types, and file deletion behavior**.

All decisions remain in this chat; no files or Linear records have changed.

### Risposta

Fonte: turno `01a17739-8da6-79d0-a679-89dce9a2df12`.

Yes — only the Owner manages participant records (Recommended)

## Q51

### Domanda

Fonte: turno `01a1772a-00be-7361-8516-1d8764eadef6`.

Q51 — When the Owner removes a Participant with existing records, should Creuza archive them, revoke any trip access, and preserve their expenses, balances, and history? They would be excluded from new expense defaults, but outstanding settlements could still be recorded.
- Yes — archive, revoke access, and preserve existing records (Recommended)
- Block removal until their balance is settled
- Keep them active and allow access revocation only

### Risposta

Fonte: turno `01a17739-8da6-79d0-a679-89dce9a2df12`.

Yes — archive, revoke access, and preserve existing records (Recommended)

## Q52

### Domanda

Fonte: turno `01a1772a-00be-7361-8516-1d8764eadef6`.

Q52 — Should ownership transfer require an accepted trip member, make that person the sole Owner, and change the former Owner to Editor? The current Owner must transfer ownership before leaving the trip.
- Yes — transfer to an accepted member; former Owner becomes Editor (Recommended)
- Use that flow, but the former Owner becomes Viewer
- Use that flow, but let the former Owner choose Editor, Viewer, or leave

### Risposta

Fonte: turno `01a17739-8da6-79d0-a679-89dce9a2df12`.

Yes — transfer to an accepted member; former Owner becomes Editor (Recommended)

## Q53

### Domanda — variante 1

Fonte: turno `01a17739-8da6-79d0-a679-89dce9a2df12`.

Q53 — Should each trip have a document library, where one uploaded file can be linked to several reservations, itinerary items, or expenses? For example, a tourist-pass PDF could appear alongside every activity it covers.
- Yes — one trip library with reusable file links (Recommended)
- Keep files attached separately to individual records

### Domanda — variante 2

Fonte: turno `01a17742-2192-7b91-a248-3d945a48b571`.

Q53–Q55 are confirmed. Q56–Q57 now cover **trip statuses and the time-zone rule for automatic transitions**.

Exact file formats and upload limits remain open. Everything stays in this chat.

### Risposta

Fonte: turno `01a17742-2192-7b91-a248-3d945a48b571`.

Yes — one trip library with reusable file links (Recommended)

## Q54

### Domanda

Fonte: turno `01a17739-8da6-79d0-a679-89dce9a2df12`.

Q54 — Which file types should the MVP support? Exact image formats and upload-size limits would be specified separately.
- PDFs and common image formats, including phone photos (Recommended)
- PDFs, images, and office documents
- Allow any file type

### Risposta

Fonte: turno `01a17742-2192-7b91-a248-3d945a48b571`.

PDFs and common image formats, including phone photos (Recommended)

## Q55

### Domanda

Fonte: turno `01a17739-8da6-79d0-a679-89dce9a2df12`.

Q55 — Should removing a file from a reservation, itinerary item, or expense only remove that link? Deleting it from the trip library would instead move it to a recoverable trash area; permanent deletion would be Owner-only.
- Yes — separate unlinking, recoverable deletion, and Owner-only permanent deletion (Recommended)
- Allow unlinking only in the MVP; add file deletion later
- Use recoverable deletion, but let Editors permanently delete files too

### Risposta

Fonte: turno `01a17742-2192-7b91-a248-3d945a48b571`.

Yes — separate unlinking, recoverable deletion, and Owner-only permanent deletion (Recommended)

## Q56

### Domanda

Fonte: turno `01a17742-2192-7b91-a248-3d945a48b571`.

Q56 — Should trips use these statuses: Draft when dates are missing, Upcoming before the start date, In progress during the inclusive date range, and Completed afterward, plus a manually selected Cancelled status? Your already-approved manual override would remain active until removed.
- Use these statuses, including manual Cancelled (Recommended)
- Use the four automatic statuses; leave Cancelled out
- Use different statuses — I’ll describe them

### Risposta

Fonte: turno `01a1774a-9652-7ab1-bd81-a9839f72952f`.

Use these statuses, including manual Cancelled (Recommended)

## Q57

### Domanda

Fonte: turno `01a17742-2192-7b91-a248-3d945a48b571`.

Q57 — Should automatic trip status use a stable reference time zone, defaulting to your account’s home time zone and editable per trip? Itinerary departures, arrivals, and activities would still display in their own local time zones, as agreed.
- Use the account’s home time zone by default, editable per trip (Recommended)
- Default to the first destination’s time zone, editable per trip
- Use the current device’s time zone dynamically

### Risposta

Fonte: turno `01a1774a-9652-7ab1-bd81-a9839f72952f`.

Use the account’s home time zone by default, editable per trip (Recommended)

## Q58

### Domanda — variante 1

Fonte: turno `01a1774a-9652-7ab1-bd81-a9839f72952f`.

Q58 — How should users locate places in the MVP? My recommendation is place search plus selecting a point on the map, with optional free-text location notes when an Idea or plan is still approximate.
- Place search, map-point selection, and free-text notes (Recommended)
- Place search and free-text notes; no map-point selection
- Manual map-point selection and notes; add place search later

### Domanda — variante 2

Fonte: turno `01a1774c-f445-7792-b31e-020773a78477`.

Q58–Q60 are confirmed. Q61–Q62 cover **MVP notifications and AI credential ownership**.

The major open branches now include AI setup, V1 offline boundaries, deletion rules, and operational requirements. All decisions remain in this chat.

### Risposta

Fonte: turno `01a1774c-f445-7792-b31e-020773a78477`.

Place search, map-point selection, and free-text notes (Recommended)

## Q59

### Domanda

Fonte: turno `01a1774a-9652-7ab1-bd81-a9839f72952f`.

Q59 — Should the MVP map show itinerary locations, their order, and the selected day, with an action to open a location in an external maps app for directions? Built-in route calculation and travel-time estimates would be deferred.
- Locations and day views, plus external directions; routing later (Recommended)
- Also include built-in route calculation and travel-time estimates in the MVP

### Risposta

Fonte: turno `01a1774c-f445-7792-b31e-020773a78477`.

Locations and day views, plus external directions; routing later (Recommended)

## Q60

### Domanda

Fonte: turno `01a1774a-9652-7ab1-bd81-a9839f72952f`.

Q60 — Should a trip’s map also show unscheduled trip Ideas that have a location, visually distinguished from scheduled itinerary items, with controls to show or hide either group? Ideas without a mapped location would remain accessible in the Ideas panel.
- Show scheduled items and unscheduled trip Ideas as distinct groups (Recommended)
- Show only scheduled itinerary items on the trip map

### Risposta

Fonte: turno `01a1774c-f445-7792-b31e-020773a78477`.

Show scheduled items and unscheduled trip Ideas as distinct groups (Recommended)

## Q61

### Domanda — variante 1

Fonte: turno `01a1774c-f445-7792-b31e-020773a78477`.

Q61 — Should MVP notifications cover invitations and their outcomes only, using in-app notifications and email where relevant? Notifications for general trip edits, reminders, and mobile push would remain outside the MVP.
- Invitations and their outcomes only (Recommended)
- Also notify members about general trip activity in the MVP

### Domanda — variante 2

Fonte: turno `01a17751-14fe-77a0-b798-5cf5be053348`.

Q61–Q62 are confirmed. Q63–Q65 cover **MVP connection setup, V1 AI scope, and review before applying AI output**.

Provider selection remains open; no files or Linear records have changed.

### Risposta

Fonte: turno `01a17751-14fe-77a0-b798-5cf5be053348`.

Invitations and their outcomes only (Recommended)

## Q62

### Domanda

Fonte: turno `01a1774c-f445-7792-b31e-020773a78477`.

Q62 — Who should supply the AI credentials? The confirmed requirement is to keep secrets in the backend; the provider has not been selected. For a personal tool, I recommend each user configuring their own connection, usable by that user, with connection sharing still deferred until after V2.
- Each user supplies their own AI credentials, stored in the backend (Recommended)
- The application operator supplies one backend connection for application use

### Risposta

Fonte: turno `01a17751-14fe-77a0-b798-5cf5be053348`.

Each user supplies their own AI credentials, stored in the backend (Recommended)

## Q63

### Domanda — variante 1

Fonte: turno `01a17751-14fe-77a0-b798-5cf5be053348`.

Q63 — Should the MVP AI settings let a user configure, update, remove, and test their own connection, while product features such as receipt extraction and itinerary generation remain outside the MVP? The provider and model options would be decided separately.
- Manage and test the connection in the MVP (Recommended)
- Manage the connection in the MVP; add connection testing in V1

### Domanda — variante 2

Fonte: turno `01a17752-4437-7b93-8a83-12e5a6220fa7`.

Q63–Q65 are confirmed. Q66–Q68 cover **offline content, refresh behavior, and access after logout or revocation**.

These are V1 decisions; the MVP commitment remains architectural preparation. Everything stays in this chat.

### Risposta

Fonte: turno `01a17752-4437-7b93-8a83-12e5a6220fa7`.

Manage and test the connection in the MVP (Recommended)

## Q64

### Domanda

Fonte: turno `01a17751-14fe-77a0-b798-5cf5be053348`.

Q64 — Should V1 include both receipt extraction and itinerary suggestions based on a selected group of Ideas? Receipt extraction is already confirmed for V1; itinerary suggestions are confirmed as post-MVP but do not yet have a release assigned.
- Include receipt extraction and Idea-based itinerary suggestions in V1 (Recommended)
- Keep receipt extraction in V1; defer itinerary suggestions further

### Risposta

Fonte: turno `01a17752-4437-7b93-8a83-12e5a6220fa7`.

Include receipt extraction and Idea-based itinerary suggestions in V1 (Recommended)

## Q65

### Domanda

Fonte: turno `01a17751-14fe-77a0-b798-5cf5be053348`.

Q65 — Whenever an AI feature is introduced, should its output be a draft that the user reviews before it changes trip data? For example, review extracted receipt fields before creating an expense, or review suggested activities before adding them to the itinerary.
- Yes — AI proposes drafts; the user approves changes (Recommended)
- Allow automatic changes after the user starts the AI action

### Risposta

Fonte: turno `01a17752-4437-7b93-8a83-12e5a6220fa7`.

Yes — AI proposes drafts; the user approves changes (Recommended)

## Q66

### Domanda

Fonte: turno `01a17752-4437-7b93-8a83-12e5a6220fa7`.

Q66 — Should users explicitly download a read-only bundle for a selected trip, containing its itinerary, trip Ideas, reservations, expenses, balances, and participant information, plus selected PDFs and images? Map tiles, place search, directions, and AI would require a connection.
- Core trip data plus selected attachments; online maps and AI (Recommended)
- Core trip data only; offline attachments later
- Also include offline map tiles in V1

### Risposta

Fonte: turno `01a17757-646c-7b13-ac25-67efe3eec609`.

Core trip data only; offline attachments later

## Q67

### Domanda

Fonte: turno `01a17752-4437-7b93-8a83-12e5a6220fa7`.

Q67 — Should V1 bundles use an explicit Download/Refresh action while connected, show when they were last refreshed, and remain readable after closing and reopening the application? Background bundle updates would remain a separate future capability.
- Explicit download and refresh, with a visible snapshot timestamp (Recommended)
- Refresh downloaded bundles automatically whenever connected

### Risposta

Fonte: turno `01a17757-646c-7b13-ac25-67efe3eec609`.

There should be an explicit option to allow a trip to be downloaded. When it's ON, the refresh should then be automatic when connected.

## Q68

### Domanda

Fonte: turno `01a17752-4437-7b93-8a83-12e5a6220fa7`.

Q68 — Should a downloaded bundle remain available until the user removes it or logs out, with access checked again on reconnection and the local bundle removed if access was revoked? An offline device would learn about revocation when it reconnects.
- Keep until removal/logout; check revocation on reconnection (Recommended)
- Also impose an offline expiry period, to be defined

### Risposta

Fonte: turno `01a17757-646c-7b13-ac25-67efe3eec609`.

Keep until removal/logout; check revocation on reconnection (Recommended)

## Q69

### Domanda — variante 1

Fonte: turno `01a17757-646c-7b13-ac25-67efe3eec609`.

Q69 — Should automatic refresh run while the application is open, including when it reconnects or reopens online? Refreshing while the application is fully closed would be a separate capability requiring platform investigation.
- Refresh while open, and on reopening or reconnection (Recommended)
- Also require background refresh while fully closed; investigate feasibility

### Domanda — variante 2

Fonte: turno `01a17757-646c-7b13-ac25-67efe3eec609`.

Q69–Q70 clarify refresh timing and what happens when downloading is switched off. No files or Linear records have changed.

### Risposta

Fonte: turno `01a1775d-97be-7ab0-b6fc-80ebd1b92862`.

Refresh while open, and on reopening or reconnection (Recommended)

## Q70

### Domanda

Fonte: turno `01a17757-646c-7b13-ac25-67efe3eec609`.

Q70 — When the user turns a trip’s download toggle OFF, should Creuza remove that trip’s downloaded data from the current device and stop refreshing it, while leaving online access unchanged? Turning it ON again would download a fresh copy.
- Yes — OFF removes the local copy and stops refresh (Recommended)
- OFF stops refresh but keeps the existing downloaded copy until separately removed

### Risposta

Fonte: turno `01a1775d-97be-7ab0-b6fc-80ebd1b92862`.

Yes — OFF removes the local copy and stops refresh (Recommended)

## Q71

### Domanda — variante 1

Fonte: turno `01a1775d-97be-7ab0-b6fc-80ebd1b92862`.

Q71 — Should deleting a trip move it to a recoverable trash area, accessible only to its Owner? Other members would lose online access while it is deleted. The Owner could restore the trip with its content and memberships, or explicitly delete it permanently; the MVP would have no automatic purge deadline.
- Recoverable trip trash, Owner-only restore and permanent deletion (Recommended)
- Recoverable trash with an automatic purge deadline to define
- Allow archiving only; defer trip deletion

### Domanda — variante 2

Fonte: turno `01a17762-05ed-7582-903e-27d5b75fa585`.

Q71–Q73 are confirmed. Q74–Q76 cover **web versus native delivery, login experience, and interface language**.

After these, the remaining top-level questions concern operating constraints and readiness for the comparison/prototype work. Nothing has been saved.

### Risposta

Fonte: turno `01a17762-05ed-7582-903e-27d5b75fa585`.

Recoverable trip trash, Owner-only restore and permanent deletion (Recommended)

## Q72

### Domanda

Fonte: turno `01a1775d-97be-7ab0-b6fc-80ebd1b92862`.

Q72 — When the Owner permanently deletes a trip, should all trip-owned records and files be deleted, while personal Ideas, Idea groups, accounts, and personal AI settings remain? Downloaded copies would be invalidated when their devices reconnect, under the offline policy already agreed.
- Delete trip-owned data; preserve independent personal data (Recommended)
- Keep a separate financial archive after deleting the rest of the trip

### Risposta

Fonte: turno `01a17762-05ed-7582-903e-27d5b75fa585`.

Delete trip-owned data; preserve independent personal data (Recommended)

## Q73

### Domanda

Fonte: turno `01a1775d-97be-7ab0-b6fc-80ebd1b92862`.

Q73 — Should Owners and Editors be able to correct or soft-delete financial entries after settlements have been recorded, with a visible change history and recalculated balances? Existing settlements would remain recorded unless explicitly corrected, so a correction could create a new amount owed in either direction.
- Allow corrections, preserve history and settlements, and recalculate balances (Recommended)
- Lock settled expenses; use separate adjustment entries for corrections

### Risposta

Fonte: turno `01a17762-05ed-7582-903e-27d5b75fa585`.

Allow corrections, preserve history and settlements, and recalculate balances (Recommended)

## Q74

### Domanda — variante 1

Fonte: turno `01a17762-05ed-7582-903e-27d5b75fa585`.

Q74 — Should the MVP be a responsive web application with full functionality on mobile and desktop browsers, followed by an installable web app with the agreed offline features in V1? Separate native iOS/Android applications would remain outside the current release scope.
- Responsive web MVP; installable web app and offline in V1 (Recommended)
- Make the web app installable in the MVP; offline still arrives in V1
- Native mobile applications are required in the MVP

### Domanda — variante 2

Fonte: turno `01a17780-e7ea-7521-b72a-a3422375732d`.

Q74–Q76 are confirmed. Q77–Q79 establish **budget, initial usage, and hosting-region preferences** for the provider comparisons.

No provider has been selected, and everything remains in this chat.

### Risposta

Fonte: turno `01a17780-e7ea-7521-b72a-a3422375732d`.

Responsive web MVP; installable web app and offline in V1 (Recommended)

## Q75

### Domanda

Fonte: turno `01a17762-05ed-7582-903e-27d5b75fa585`.

Q75 — Which login experience should the MVP provide? Every option must support verified identity and accepting invitations addressed to that email. The authentication provider would be selected separately.
- Email and password, with email verification and password reset (Recommended)
- Passwordless login using an emailed code or link
- Email/password plus Google sign-in

### Risposta

Fonte: turno `01a17780-e7ea-7521-b72a-a3422375732d`.

Email/password plus Google sign-in

## Q76

### Domanda

Fonte: turno `01a17762-05ed-7582-903e-27d5b75fa585`.

Q76 — Which interface languages should the MVP support? User-entered content, such as Idea titles and trip notes, could use any language.
- Italian first; English translation can follow (Recommended)
- Italian and English from the MVP
- English first

### Risposta

Fonte: turno `01a17780-e7ea-7521-b72a-a3422375732d`.

Italian first; English translation can follow (Recommended)

## Q77

### Domanda — variante 1

Fonte: turno `01a17780-e7ea-7521-b72a-a3422375732d`.

Q77 — What monthly infrastructure budget should the initial provider comparisons target? Include application hosting, database, files, authentication, invitation emails, and maps; exclude AI usage charged through users’ own connections. This is a comparison target, not spending authorization.
- Prefer €0–10 per month
- Target €10–25 per month (Recommended)
- Target €25–50 per month

### Domanda — variante 2

Fonte: turno `01a17787-3290-7f11-9d6a-000548918a89`.

Q77–Q79 are confirmed. Q80–Q82 cover **browser coverage, edit conflicts, and recovery targets**.

After your answers, I’ll consolidate the chat-only decision map. Provider feasibility remains to be tested against the €0–10/month target.

### Risposta

Fonte: turno `01a17787-3290-7f11-9d6a-000548918a89`.

Prefer €0–10 per month

## Q78

### Domanda

Fonte: turno `01a17780-e7ea-7521-b72a-a3422375732d`.

Q78 — What initial usage should the comparisons assume? These are sizing scenarios, not hard limits imposed on users or trips.
- Personal use and a small circle: roughly 2–10 regular users, with occasional simultaneous editing (Recommended)
- A larger private group: roughly 10–50 regular users
- A public launch with a larger usage target to define

### Risposta

Fonte: turno `01a17787-3290-7f11-9d6a-000548918a89`.

Personal use and a small circle: roughly 2–10 regular users, with occasional simultaneous editing (Recommended)

## Q79

### Domanda

Fonte: turno `01a17780-e7ea-7521-b72a-a3422375732d`.

Q79 — Should we prefer EU regions for application hosting, the database, and file storage? Maps, authentication, email, and AI services would still need their own data-location and processing assessment.
- Prefer EU regions for hosting, database, and files (Recommended)
- No regional preference; compare cost and operational simplicity first
- Require EU-only processing across all services; assess feasibility

### Risposta

Fonte: turno `01a17787-3290-7f11-9d6a-000548918a89`.

Prefer EU regions for hosting, database, and files (Recommended)

## Q80

### Domanda

Fonte: turno `01a17787-3290-7f11-9d6a-000548918a89`.

Q80 — Which mobile browsers should receive first-class testing from the MVP? This sets test coverage for the agreed mobile-first experience and does not introduce native applications.
- Both iPhone/Safari and Android/Chrome, alongside desktop browsers (Recommended)
- Prioritize iPhone/Safari first
- Prioritize Android/Chrome first

### Risposta

Fonte: turno `01a1778e-c845-7661-b4ab-46f783ef2ee2`.

Both iPhone/Safari and Android/Chrome, alongside desktop browsers (Recommended)

## Q81

### Domanda

Fonte: turno `01a17787-3290-7f11-9d6a-000548918a89`.

Q81 — When two members change the same record, should Creuza detect conflicting edits, preserve the user’s unsaved changes, and offer a way to reconcile them instead of silently overwriting someone’s work? Live cursor-style co-editing would remain outside the MVP.
- Detect conflicts, preserve drafts, and support reconciliation (Recommended)
- Use the latest saved change, with history available to recover earlier values
- Require explicit editing locks for shared records

### Risposta

Fonte: turno `01a1778e-c845-7661-b4ab-46f783ef2ee2`.

Use the latest saved change, with history available to recover earlier values

## Q82

### Domanda

Fonte: turno `01a17787-3290-7f11-9d6a-000548918a89`.

Q82 — What recovery target should the infrastructure comparison assess? This is a target to validate against cost and provider capabilities, not an availability promise.
- Daily backups of trip data and documents, with a tested restore process; assess up to 24 hours of lost changes (Recommended)
- Assess a tighter target of at most one hour of lost changes
- Compare recovery options and costs before selecting a target

### Risposta

Fonte: turno `01a1778e-c845-7661-b4ab-46f783ef2ee2`.

Daily backups of trip data and documents, with a tested restore process; assess up to 24 hours of lost changes (Recommended)

## Q83

### Domanda — variante 1

Fonte: turno `01a1779f-9a06-7cb1-837e-6fafd823e239`.

Q83 — In the Peru trip, an Idea such as “Explore Cusco” could lead to visits on several days. Should one trip Idea be usable to create multiple itinerary items, each with its own schedule and details, while retaining their connection to that Idea?
- Allow multiple itinerary items from one Idea (Recommended)
- Each trip Idea becomes one itinerary item; duplicate it for another use

### Domanda — variante 2

Fonte: turno `01a1779f-9a06-7cb1-837e-6fafd823e239`.

Q83–Q84 test two unresolved edges: **using one Idea for several itinerary items** and **finding Ideas after scheduling them**.

No files or Linear records have changed.

### Risposta

Fonte: turno `01a177a3-8740-7d82-b37d-c2ac8266a2ff`.

Allow multiple itinerary items from one Idea (Recommended)

## Q84

### Domanda

Fonte: turno `01a1779f-9a06-7cb1-837e-6fafd823e239`.

Q84 — After scheduling an Idea, should the trip’s Ideas panel default to showing unscheduled Ideas, with filters for Planned and All so you can still find its planned Ideas? The original personal Idea would remain in your private collection, as already agreed.
- Default to Unscheduled, with Planned and All filters (Recommended)
- Show planned and unscheduled Ideas together, with clear status labels
- Show only unscheduled Ideas; access scheduled content through the itinerary

### Risposta

Fonte: turno `01a177a3-8740-7d82-b37d-c2ac8266a2ff`.

Show only unschedules, planned will be visible in the itinerary

## Q85

### Domanda — variante 1

Fonte: turno `01a177a3-8740-7d82-b37d-c2ac8266a2ff`.

Q85 — Suppose “Explore Cusco” produces two itinerary items. Removing one leaves the Idea planned. When the last item is removed, should the Idea automatically return to the trip’s unscheduled Ideas panel, or should returning it require an explicit “Move back to Ideas” action?
- Return automatically when the last itinerary item is removed (Recommended)
- Return only through an explicit “Move back to Ideas” action

### Domanda — variante 2

Fonte: turno `01a177a3-8740-7d82-b37d-c2ac8266a2ff`.

Q85–Q86 test **returning an Idea after its last itinerary item is removed** and **editing multiple items from the same Idea independently**.

### Domanda — variante 3

Fonte: turno `01a177b0-13c2-7f63-97ab-4b211e9d83c9`.

Q85–Q86 are confirmed: **returning to Ideas is explicit**, and **scheduled items change independently**.

### Risposta

Fonte: turno `01a177b0-13c2-7f63-97ab-4b211e9d83c9`.

Return only through an explicit “Move back to Ideas” action

## Q86

### Domanda

Fonte: turno `01a177a3-8740-7d82-b37d-c2ac8266a2ff`.

Q86 — If two itinerary items came from the same Idea, should editing one item’s title, notes, location, or schedule affect only that item? The other item, the underlying trip Idea, and the personal Idea would keep their existing information.
- Yes — each scheduled item evolves independently (Recommended)
- Share title, notes, and location across the trip Idea and its items; keep schedules separate

### Risposta

Fonte: turno `01a177b0-13c2-7f63-97ab-4b211e9d83c9`.

Yes — each scheduled item evolves independently (Recommended)

## Q87

### Domanda — variante 1

Fonte: turno `01a177b0-13c2-7f63-97ab-4b211e9d83c9`.

Q87 — “Explore Cusco” has become two independently edited itinerary items: a walking tour and a market visit. If you choose “Move back to Ideas” on the walking tour, should only that item become an unscheduled trip Idea, preserving its current title, notes, and location, while the market visit remains scheduled?
- Move only the selected item back, preserving its current content (Recommended)
- Move all items from the same original Idea back together
- Move only the selected item back, but restore the original Idea’s content

### Domanda — variante 2

Fonte: turno `01a177b0-13c2-7f63-97ab-4b211e9d83c9`.

Q87–Q88 cover moving back one edited occurrence and recovering a deleted itinerary item. Everything remains in this chat.

### Risposta

Fonte: turno `01a177cd-2771-7cf0-a1bd-c86ae8ca4b05`.

Move only the selected item back, preserving its current content (Recommended)

## Q88

### Domanda — variante 1

Fonte: turno `01a177b0-13c2-7f63-97ab-4b211e9d83c9`.

Q88 — Should deleting an itinerary item move it to recoverable trip trash, without automatically returning it to Ideas? Owners and Editors could restore it. Its independent reservations, documents, and financial records would remain intact, and deleting the item would not cancel a reservation.
- Yes — recoverable item deletion, with independent records preserved (Recommended)
- Keep deletion permanent; use “Move back to Ideas” to preserve an item

### Domanda — variante 2

Fonte: turno `01a177cd-8e9b-7ce0-b8ae-0e2f7e9b8e63`.

Q88 — Should deleting an itinerary item move it to recoverable trip trash, without automatically returning it to Ideas? Owners and Editors could restore it. Its independent reservations, documents, and financial records would remain intact, and deleting the item would not cancel a reservation.
- Yes — recoverable item deletion, with independent records preserved (Recommended)
- Keep deletion permanent; use “Move back to Ideas” to preserve an item

### Risposta

Fonte: turno `01a177ce-edce-7dd0-86cd-8d0bbe146d7d`.

Yes — recoverable item deletion, with independent records preserved (Recommended)

## Q89

### Domanda — variante 1

Fonte: turno `01a177ce-edce-7dd0-86cd-8d0bbe146d7d`.

Q89 — For an accommodation stay with check-in on 10 October and checkout on 13 October, should Creuza count three nights—10, 11, and 12 October—and show checkout on the 13th? This is distinct from the trip’s inclusive start/end dates.
- Yes — count nights up to, but excluding, the checkout date (Recommended)
- Use a different accommodation-date rule — I’ll describe it

### Domanda — variante 2

Fonte: turno `01a177ce-edce-7dd0-86cd-8d0bbe146d7d`.

Q89–Q91 clarify **night counting, overlapping plans, and ordering timed versus flexible items**. Everything remains in this chat.

### Risposta

Fonte: turno `01a177da-c856-7dd2-92bc-ae1fc1fc93d5`.

Yes — count nights up to, but excluding, the checkout date (Recommended)

## Q90

### Domanda

Fonte: turno `01a177ce-edce-7dd0-86cd-8d0bbe146d7d`.

Q90 — Should potentially overlapping timed activities or transfers be allowed, with a visible advisory rather than a save-blocking error? For example, you could temporarily keep two alternative excursions at the same time while deciding. Accommodation spans would not automatically count as clashes with daytime activities.
- Allow overlaps and show a non-blocking advisory (Recommended)
- Allow overlaps without advisories in the MVP
- Block overlapping timed activities and transfers

### Risposta

Fonte: turno `01a177da-c856-7dd2-92bc-ae1fc1fc93d5`.

Allow overlaps and show a non-blocking advisory (Recommended)

## Q91

### Domanda

Fonte: turno `01a177ce-edce-7dd0-86cd-8d0bbe146d7d`.

Q91 — How should a day’s itinerary be ordered when it contains timed, all-day, and time-not-decided items? The exact visual layout would still be tested in a prototype.
- Timed items chronologically; separate manually ordered All-day and Time-not-decided groups (Recommended)
- One manually ordered list for all items, with their times shown
- One chronological timeline with flexible items manually positioned between timed items

### Risposta

Fonte: turno `01a177da-c856-7dd2-92bc-ae1fc1fc93d5`.

Timed items chronologically; separate manually ordered All-day and Time-not-decided groups (Recommended)

## Q92

### Domanda — variante 1

Fonte: turno `01a177da-c856-7dd2-92bc-ae1fc1fc93d5`.

Q92 — For the MVP, should payment allocations and supplier refunds within an expense use that expense’s selected currency and stored exchange rate? For example, a PEN expense records each payer’s contribution in PEN. Participant settlements would still independently accept EUR or PEN with their own rate, as agreed.
- Use the expense’s currency and rate for its payments and supplier refunds (Recommended)
- Give every payment and supplier refund its own currency and rate; define exchange-difference handling

### Domanda — variante 2

Fonte: turno `01a177dd-772b-75f1-b262-721ae8439cb5`.

Q92–Q93 are confirmed.

### Risposta

Fonte: turno `01a177dd-772b-75f1-b262-721ae8439cb5`.

Use the expense’s currency and rate for its payments and supplier refunds (Recommended)

## Q93

### Domanda

Fonte: turno `01a177da-c856-7dd2-92bc-ae1fc1fc93d5`.

Q93 — Does this partial-payment example match your expectations? A PEN 120 expense is split equally at EUR 1 = PEN 4. You pay PEN 40, so the other traveler owes you EUR 5. They settle that EUR 5, leaving no traveler-to-traveler balance yet. They then pay the remaining PEN 80 to the provider. Both now bear EUR 15 of cost, and you owe them EUR 10 after accounting for their earlier settlement.
- Yes — these intermediate and final balances are correct (Recommended)
- I expect different behavior — I’ll explain

### Risposta

Fonte: turno `01a177dd-772b-75f1-b262-721ae8439cb5`.

Yes — these intermediate and final balances are correct (Recommended)

## Q94

### Domanda — variante 1

Fonte: turno `01a177dd-772b-75f1-b262-721ae8439cb5`.

Q94 — Does this refund example match your expectations? A PEN 120 expense uses EUR 1 = PEN 4. You pay it all, and the other traveler settles their EUR 15 half. The supplier then refunds PEN 40 to you. If both travelers benefit equally, you now owe the other traveler EUR 5. If the refund benefits only the other traveler, you owe them EUR 10 instead. Their original settlement stays recorded.
- Yes — the refund recipient and benefit allocation produce those balances (Recommended)
- I expect different refund behavior — I’ll explain

### Domanda — variante 2

Fonte: turno `01a177dd-772b-75f1-b262-721ae8439cb5`.

Q94–Q95 validate **refund allocation after settlement** and **repayment using a different exchange rate**. These will give us concrete financial acceptance examples.

Everything remains in this chat.

### Risposta

Fonte: turno `01a17815-5347-77b2-8151-c3e35c240842`.

Yes — the refund recipient and benefit allocation produce those balances (Recommended)

## Q95

### Domanda

Fonte: turno `01a177dd-772b-75f1-b262-721ae8439cb5`.

Q95 — Does this different-rate settlement example match your expectations? Someone owes you EUR 15. They repay PEN 60, recording EUR 1 = PEN 5 for that settlement. It clears EUR 12, leaving EUR 3 owed. At that rate, repaying PEN 75 would clear the full EUR 15. The expense’s earlier rate remains unchanged.
- Yes — use the settlement’s own rate and show any remaining balance (Recommended)
- A repayment marked as full should clear the debt regardless of its converted amount
- I expect another behavior — I’ll explain

### Risposta

Fonte: turno `01a17815-5347-77b2-8151-c3e35c240842`.

Yes — use the settlement’s own rate and show any remaining balance (Recommended)

## Q96

### Domanda — variante 1

Fonte: turno `01a17815-5347-77b2-8151-c3e35c240842`.

Q96 — When you create a trip, should Creuza automatically add you as a Participant linked to your account, as well as making you its Owner? Your participation and access role would remain separate concepts.
- Yes — automatically create the creator’s linked Participant record (Recommended)
- Make me Owner, but let me choose whether to add myself as a Participant

### Domanda — variante 2

Fonte: turno `01a17815-5347-77b2-8151-c3e35c240842`.

Q96–Q97 clarify **automatic participation for the trip creator** and **inviting an existing Participant without duplication**. Everything remains in this chat.

### Risposta

Fonte: turno `01a17816-e18b-73d3-a228-2b488ea3ac09`.

Yes — automatically create the creator’s linked Participant record (Recommended)

## Q97

### Domanda

Fonte: turno `01a17815-5347-77b2-8151-c3e35c240842`.

Q97 — Suppose the Owner has already added “Emma” as a name-only Participant and recorded expenses involving her. Should the Owner be able to invite her from that existing Participant record, adding her email and linking the matching account when available, while preserving the same record and its financial history?
- Yes — invite through and enrich the existing Participant record (Recommended)
- Create a separate invited Participant, then offer a manual merge

### Risposta

Fonte: turno `01a17816-e18b-73d3-a228-2b488ea3ac09`.

Yes — invite through and enrich the existing Participant record (Recommended)

## Q98

### Domanda — variante 1

Fonte: turno `01a17816-e18b-73d3-a228-2b488ea3ac09`.

Q98 — For a tourist pass covering several places, should the MVP support optional validity dates and free-text usage conditions, with links to the activities it covers? The pass could be recorded before those visits are scheduled. Automatic admission counting or ticket scanning would remain outside the MVP.
- Yes — optional validity dates, conditions notes, and activity links (Recommended)
- The MVP also needs structured entry limits and usage tracking

### Domanda — variante 2

Fonte: turno `01a17816-e18b-73d3-a228-2b488ea3ac09`.

Q98–Q99 clarify **pass validity and usage notes** and **how changed booking times affect linked itinerary items**.

After your answers, I’ll consolidate this initial validation round in the chat. Nothing has been saved.

### Risposta

Fonte: turno `01a17822-02d8-7cc3-a667-8723f8c4aaa3`.

Yes — optional validity dates, conditions notes, and activity links (Recommended)

## Q99

### Domanda

Fonte: turno `01a17816-e18b-73d3-a228-2b488ea3ac09`.

Q99 — If you edit a reservation’s date or time, should linked itinerary items keep their current schedules until you explicitly update them? Creuza would flag conflicting reservation/itinerary times and offer to apply the new times to selected linked items where applicable, rather than changing every linked item automatically.
- Flag discrepancies and let me explicitly update selected itinerary items (Recommended)
- Automatically update linked itinerary items whenever the mapping is unambiguous

### Risposta

Fonte: turno `01a17822-02d8-7cc3-a667-8723f8c4aaa3`.

Automatically update linked itinerary items whenever the mapping is unambiguous

## Q100

### Domanda — variante 1

Fonte: turno `01a1782c-28cf-7a92-81e7-ca517a934746`.

Q100 — Which itinerary structure should guide the first design? A: one focused day, with a date rail and an optional Ideas/map/detail panel on desktop. B: a continuous scroll of day sections for the whole trip. C: several day columns on desktop, collapsing to one day at a time on mobile. All retain the agreed timed, all-day, and time-undecided groups.
- A — Focused day with contextual panels (Recommended)
- B — Continuous trip itinerary
- C — Multi-day planning board

### Domanda — variante 2

Fonte: turno `01a1782c-28cf-7a92-81e7-ca517a934746`.

Q100–Q102 select the **itinerary structure, mobile navigation, and item-detail behavior**. No files have been saved.

### Risposta

Fonte: turno `01a17859-6d13-7772-9dd3-ba421678dee9`.

I would like a mix of A and B. A continous trip itinerary but with a summary of it, or like the most important parts - then the ability to open a day (in an accordion or similar) to have the full itinerary for that day in detail

## Q101

### Domanda

Fonte: turno `01a1782c-28cf-7a92-81e7-ca517a934746`.

Q101 — For the mobile trip workspace, which navigation structure should we explore? Every option retains access to every feature; documents and tickets can also be reached from their linked itinerary items.
- Bottom navigation: Programma, Idee, Mappa, Spese, Altro; Altro contains reservations, documents, participants, and settings (Recommended)
- Bottom navigation: Programma, Idee, Prenotazioni, Spese, Altro; the map is under Altro
- A sections menu instead of persistent bottom navigation

### Risposta

Fonte: turno `01a17859-6d13-7772-9dd3-ba421678dee9`.

Bottom navigation: Programma, Idee, Prenotazioni, Spese, Altro; the map is under Altro

## Q102

### Domanda

Fonte: turno `01a1782c-28cf-7a92-81e7-ca517a934746`.

Q102 — When opening an itinerary item, should mobile use a full-screen detail view with a clear return to the same day and scroll position, while desktop opens a side panel that leaves the itinerary visible? Both would offer the same information and editing capabilities.
- Full-screen details on mobile; contextual side panel on desktop (Recommended)
- Use a separate full-page detail view on both devices
- Use an overlay dialog on both devices

### Risposta

Fonte: turno `01a17859-6d13-7772-9dd3-ba421678dee9`.

Full-screen details on mobile; contextual side panel on desktop (Recommended)

## Q103

### Domanda — variante 1

Fonte: turno `01a17859-6d13-7772-9dd3-ba421678dee9`.

Q103 — What should a collapsed day show? I recommend a compact summary generated from the itinerary: date, relevant places, short activity highlights, main transfers, overnight location, and booking issues that need attention. Full notes and detailed times would appear when expanded.
- Use the compact, automatically generated travel summary (Recommended)
- Show only places, transfers, and overnight location
- Let me write a custom day summary instead of generating it

### Domanda — variante 2

Fonte: turno `01a17859-6d13-7772-9dd3-ba421678dee9`.

Q103–Q104 refine **summary content** and **whether multiple days can stay expanded**. Everything remains in this chat.

### Risposta

Fonte: turno `01a1785b-522a-7322-8b56-3a7304a8fc9d`.

Use the compact, automatically generated travel summary (Recommended)

## Q104

### Domanda

Fonte: turno `01a17859-6d13-7772-9dd3-ba421678dee9`.

Q104 — Should several days be expandable at the same time, so you can compare adjacent days and follow overnight transfers without closing the previous day?
- Allow multiple expanded days (Recommended)
- Keep only one day expanded at a time

### Risposta

Fonte: turno `01a1785b-522a-7322-8b56-3a7304a8fc9d`.

Allow multiple expanded days (Recommended)

## Q105

### Domanda — variante 1

Fonte: turno `01a1785b-522a-7322-8b56-3a7304a8fc9d`.

Q105 — On desktop, should unscheduled trip Ideas optionally open beside Programma in a contextual panel, so you can plan while seeing the itinerary? Selecting an itinerary item would switch that panel to its details. Mobile would retain the dedicated Idee tab and full-screen details.
- Allow the contextual Ideas panel alongside Programma on desktop (Recommended)
- Keep Ideas on a separate screen on both desktop and mobile

### Domanda — variante 2

Fonte: turno `01a1785b-522a-7322-8b56-3a7304a8fc9d`.

Q105–Q106 decide **whether desktop Ideas can sit beside Programma** and **where you land after scheduling from the Ideas screen**. No files have been saved.

### Risposta

Fonte: turno `01a1785c-a970-7731-9c39-0700ee76490b`.

Keep Ideas on a separate screen on both desktop and mobile

## Q106

### Domanda — variante 1

Fonte: turno `01a1785b-522a-7322-8b56-3a7304a8fc9d`.

Q106 — After scheduling an Idea from the dedicated Idee screen, should you stay there to continue planning other Ideas, with confirmation and a “Vedi nel Programma” action? The scheduled Idea would leave the unscheduled list, as agreed.
- Stay in Idee, with an action to view the scheduled item (Recommended)
- Immediately open the target day in Programma after each scheduled Idea

### Domanda — variante 2

Fonte: turno `01a1785c-a970-7731-9c39-0700ee76490b`.

Q106 — After scheduling an Idea from the dedicated Idee screen, should you stay there to continue planning other Ideas, with confirmation and a “Vedi nel Programma” action? The scheduled Idea would leave the unscheduled list, as agreed.
- Stay in Idee, with an action to view the scheduled item (Recommended)
- Immediately open the target day in Programma after each scheduled Idea

### Risposta

Fonte: turno `01a1785d-4319-7df2-8b08-d5286dbf6512`.

Stay in Idee, with an action to view the scheduled item (Recommended)

## Q107

### Domanda — variante 1

Fonte: turno `01a1785d-4319-7df2-8b08-d5286dbf6512`.

Q107 — Should one personal Idea be allowed in several named groups without duplicating the Idea? For example, the same Cusco Idea could belong to both “Peru” and “South America”. Editing the personal Idea would update it wherever it appears in your personal groups; trip copies would remain independent.
- Allow an Idea in multiple groups (Recommended)
- Each Idea belongs to at most one group

### Domanda — variante 2

Fonte: turno `01a1785d-4319-7df2-8b08-d5286dbf6512`.

Q107–Q109 complete this interaction branch: **group membership, the personal Ideas landing screen, and creating a trip from a group**. Everything remains in this chat.

### Risposta

Fonte: turno `01a1785e-a0a7-7622-a2d3-a2e00f624818`.

Allow an Idea in multiple groups (Recommended)

## Q108

### Domanda

Fonte: turno `01a1785d-4319-7df2-8b08-d5286dbf6512`.

Q108 — How should “Le mie Idee” open? Both approaches would let you access ungrouped Ideas and named groups.
- Show all personal Ideas, with group filters and quick access to groups (Recommended)
- Show a group-first overview; open a group to browse its Ideas

### Risposta

Fonte: turno `01a1785e-a0a7-7622-a2d3-a2e00f624818`.

Show all personal Ideas, with group filters and quick access to groups (Recommended)

## Q109

### Domanda

Fonte: turno `01a1785d-4319-7df2-8b08-d5286dbf6512`.

Q109 — When choosing “Crea viaggio” from a group, should a short creation flow preselect all its Ideas and let you exclude some before creating the trip? You would enter the trip name, with dates optional; the selected Ideas would appear unscheduled in the new trip.
- Preselect all, allow exclusions, then create the trip (Recommended)
- Create with every Idea in the group; organize the trip’s Ideas afterward

### Risposta

Fonte: turno `01a1785e-a0a7-7622-a2d3-a2e00f624818`.

Preselect all, allow exclusions, then create the trip (Recommended)

## Q110

### Domanda — variante 1

Fonte: turno `01a17862-814b-7982-b372-3863e18d4496`.

Q110 — Should React + TypeScript + Vite + Mantine, with a separate backend API, be the preferred application direction for the PoC? My reasoning is that Creuza’s core is an interactive, authenticated workspace with an explicit OpenAPI backend, and we have not identified a requirement for server-rendered public pages. This would not select the backend runtime or hosting provider.
- Use the Vite-based React application as the preferred direction (Recommended)
- Prioritize Next.js instead
- Keep Vite and Next.js equally open until a UI prototype comparison

### Domanda — variante 2

Fonte: turno `01a17862-814b-7982-b372-3863e18d4496`.

**Q110–Q111 select the preferred application and authentication directions for that comparison.** No PoC has been run, no provider has been adopted, and no files or Linear records have changed.

### Domanda — variante 3

Fonte: turno `01a17875-d113-7ce3-97df-bbffc4c705f7`.

Q110, revised — Should we include TanStack Start in a focused comparison against Vite + TanStack Router, using the same Creuza itinerary and Better Auth flow? Start supports SPA mode, Mantine, and Better Auth; we would preserve the generated OpenAPI backend boundary and evaluate whether its additional server features help enough to justify adopting them.
- Compare TanStack Start and the router-only SPA before choosing (Recommended)
- Make TanStack Start the preferred candidate, retaining the SPA as a baseline
- Keep the router-only SPA as the preferred candidate

### Risposta 1

Fonte: turno `01a17875-d113-7ce3-97df-bbffc4c705f7`.

what about tanstack start for the application?

### Risposta 2

Fonte: turno `01a17877-c7b3-7583-8f9a-e1582a0cdcb7`.

Make TanStack Start the preferred candidate, retaining the SPA as a baseline

## Q111

### Domanda

Fonte: turno `01a17862-814b-7982-b372-3863e18d4496`.

Q111 — Which authentication approach should lead the PoC? Self-hosted Better Auth keeps authentication in the chosen backend/PostgreSQL deployment, with email delivery and operation under our control. Managed Neon Auth or Supabase Auth reduces auth operations but ties more of the setup to a database platform. Trip Participants, roles, and invitations remain Creuza-owned in either case.
- Lead with Better Auth; compare managed Neon Auth if Neon is shortlisted (Recommended)
- Prioritize a managed authentication service
- Keep both approaches equally open until the authentication PoC

### Risposta

Fonte: turno `01a17875-d113-7ce3-97df-bbffc4c705f7`.

Lead with Better Auth; compare managed Neon Auth if Neon is shortlisted (Recommended)

## Q112

### Domanda

Fonte: turno `01a17877-c7b3-7583-8f9a-e1582a0cdcb7`.

Q112 — May I create and run an isolated local comparison under prototypes/application-comparison/? It would contain TanStack Start and Vite + TanStack Router versions of the same Mantine itinerary, a shared test API with Better Auth, and isolated local PostgreSQL/test-email services. This includes prototype source files, package downloads, and local test data; it would not modify the existing documents, provision cloud services, or send real emails.
- Create and run the isolated local comparison (Recommended)
- Keep everything in chat; prepare the comparison plan only

### Risposta

Fonte: turno `01a1787d-7e39-7b02-a2d8-944e772c6bc3`.

Create and run the isolated local comparison (Recommended)

## Q113

### Domanda

Fonte: turno `01a178b8-1cd6-7890-a53e-f6c31599ca19`.

Q113 — For the backend runtime PoC, should we compare Node.js + Hono against Cloudflare Workers + Hono, using the same Better Auth, PostgreSQL, generated OpenAPI, and private S3-compatible file scenarios? Keeping Hono constant isolates the runtime differences. This defines the comparison; it does not adopt Cloudflare or authorize cloud provisioning.
- Yes — compare Node.js + Hono with Workers + Hono (Recommended)
- Compare Node.js hosting options instead of different runtimes
- Include another runtime in the comparison

### Risposta

Fonte: turno `01a178bb-d88a-7980-8972-6530f36e7703`.

I don't want you to generate full BE, as my usage limit is getting close to zero. What are your doubts about the two options?

## Q114

### Domanda

Fonte: turno `01a178b8-1cd6-7890-a53e-f6c31599ca19`.

Q114 — For hosting, should we prefer managed services to reduce maintenance, while retaining a self-managed VPS as a fallback if managed options cannot meet the budget and recovery requirements? The €0–10 monthly target remains a preference; any higher-cost option would need your approval before spending.
- Yes — prefer managed services; retain a VPS fallback (Recommended)
- Prefer a VPS; I accept updates, monitoring, and backup operations
- Compare managed services and a VPS without a preference

### Risposta

Fonte: turno `01a178bb-d88a-7980-8972-6530f36e7703`.

Yes — prefer managed services; retain a VPS fallback (Recommended)

## Q115

### Domanda

Fonte: turno `01a178e3-77de-73b3-9565-7ee7f6405624`.

Q115 — Do you already own a domain whose DNS you can configure for sending Creuza’s magic links and invitation emails? An existing domain or subdomain would avoid buying another domain.
- Yes — I can use an existing domain
- No — I do not have a domain available

### Risposta

Fonte: turno `01a178e5-5959-7781-b25c-d05a71c6dcad`.

Yes — I can use an existing domain

## Q116

### Domanda

Fonte: turno `01a178e3-77de-73b3-9565-7ee7f6405624`.

Q116 — Should Google sign-in and magic-link sign-in resolve to the same Creuza account when they verify the same email address? This would preserve the same trips, Participant links, and invitations whichever method you use. Different email addresses would remain separate accounts, with account merging outside the MVP.
- Yes — one account for the same verified email (Recommended)
- Require explicit linking while signed in before enabling Google on an existing account

### Risposta

Fonte: turno `01a178e5-5959-7781-b25c-d05a71c6dcad`.

Yes — one account for the same verified email (Recommended)

## Q117

### Domanda

Fonte: turno `01a178e5-5959-7781-b25c-d05a71c6dcad`.

Q117 — Should Neon Free become the preferred PostgreSQL candidate for Creuza, using an EU region? This keeps PostgreSQL as agreed. Better Auth running in the Worker remains the authentication lead; we would complete the previously agreed comparison with Neon’s managed authentication before finalizing that integration.
- Yes — prefer Neon Free in an EU region (Recommended)
- Keep PostgreSQL provider open and compare another free option

### Risposta

Fonte: turno `01a178ed-bdb0-7a00-846c-55ecc51f080d`.

Yes — prefer Neon Free in an EU region (Recommended)

## Q118

### Domanda — variante 1

Fonte: turno `01a178e5-5959-7781-b25c-d05a71c6dcad`.

Q118 — For the agreed daily backups of trip data and documents, should we initially aim to retain seven daily recovery points and four weekly recovery points, with a tested restore process? This is backup retention, separate from recoverable trash in the application. Free storage allowances and scheduling reliability still need validation.
- Yes — seven daily and four weekly recovery points (Recommended)
- Keep seven daily recovery points only
- Keep thirty daily recovery points

### Domanda — variante 2

Fonte: turno `01a178ed-bdb0-7a00-846c-55ecc51f080d`.

Q118 clarification — Did you mean “let’s NOT plan for backups for now,” given that Creuza will initially be for personal use? That would defer the earlier daily-backup and tested-restore requirement.
- Yes — defer planned backups and restore testing for now
- No — continue planning daily backups and restore testing

### Risposta 1

Fonte: turno `01a178ed-bdb0-7a00-846c-55ecc51f080d`.

For now, let's now plan for backups as it will be only used for personal purposes

### Risposta 2

Fonte: turno `01a178ef-469b-7210-94d1-c53150eaa681`.

Yes — defer planned backups and restore testing for now

## Q119

### Domanda

Fonte: turno `01a17905-94d1-7ca2-b1c2-3b77e37376b8`.

Q119 — Should Cloudflare R2 be the MVP document-storage provider, using private buckets restricted to the EU jurisdiction? This retains the agreed S3-compatible storage boundary and authorization through Creuza. Upload limits will be decided separately.
- Yes — use private R2 storage in the EU jurisdiction (Recommended)
- Keep the storage provider open

### Risposta

Fonte: turno `01a17905-94d1-7ca2-b1c2-3b77e37376b8`.

Yes — use private R2 storage in the EU jurisdiction (Recommended)

## Q120

### Domanda

Fonte: turno `01a17905-94d1-7ca2-b1c2-3b77e37376b8`.

Q120 — Should Resend Free be the MVP email provider for Italian magic-link and invitation emails, using your existing domain or a sending subdomain? Its current free allowance is 3,000 emails per month, capped at 100 per day; exceeding those limits would require a later decision.
- Yes — use Resend Free with my existing domain (Recommended)
- Keep the email provider open

### Risposta

Fonte: turno `01a17905-94d1-7ca2-b1c2-3b77e37376b8`.

Yes — use Resend Free with my existing domain (Recommended)

## Q121

### Domanda

Fonte: turno `01a17905-94d1-7ca2-b1c2-3b77e37376b8`.

Q121 — Should MVP place search aim to find specific venues—such as a hotel, restaurant, museum, or tour meeting point—in addition to cities and major landmarks? I recommend this for travel planning, while retaining manual map-point selection and location notes when a place is missing. This sets the search-quality criterion for comparing providers.
- Yes — specific venues as well as cities and landmarks (Recommended)
- Cities and major landmarks are sufficient; use manual pins for other places

### Risposta

Fonte: turno `01a1790a-df0f-7252-adf0-ad17284d66eb`.

Yes — specific venues as well as cities and landmarks (Recommended)

## Q122

### Domanda

Fonte: turno `01a1790a-df0f-7252-adf0-ad17284d66eb`.

Q122 — To conserve usage, should we provisionally choose MapLibre + MapTiler Free from the documentation review and defer the earlier comparative map prototype? MapTiler documents venue/POI search and permanent storage of geocoding results for most use cases. Actual venue coverage and mobile usability would remain unverified until later validation; this would not claim that the prototype requirement has been completed.
- Yes — prefer MapLibre + MapTiler; defer the comparative prototype (Recommended)
- Keep the maps choice open until the comparative prototype
- Compare Geoapify in more detail before choosing a preference

### Risposta

Fonte: turno `01a1790c-7ae6-7772-8fa7-2427f36a84c0`.

what if we use google maps? in terms of pricing given the personal usage

## Q123

### Domanda

Fonte: turno `01a17a0e-f326-7143-bc40-d6ae08516a0c`.

Q123 — Per la V1, confermi che offline rimangano leggibili i contenuti personali del viaggio — titoli e note scritti da te, orari, prenotazioni, spese e indicazioni testuali inserite autonomamente — mentre le schede dei luoghi fornite da Google richiedano una connessione? Conserveremmo il riferimento al luogo, ma non una copia permanente dei nomi, indirizzi e altri dettagli restituiti da Google. Questo precisa il precedente requisito del bundle offline.
- Sì — contenuti personali offline; schede Google online (Consigliato)
- Voglio anche nomi e indirizzi dei luoghi offline: lasciamo aperta questa parte

### Risposta

Fonte: turno `01a17a11-8210-78a1-85ef-fbaef4d0a30a`.

Sì — contenuti personali offline; schede Google online (Consigliato)

## Q124

### Domanda

Fonte: turno `01a17a11-8210-78a1-85ef-fbaef4d0a30a`.

Q124 — Per l’MVP, va bene un limite di 20 MB per singolo allegato, sia PDF sia immagine, mostrato prima del caricamento? Un file oltre il limite verrebbe rifiutato con un messaggio chiaro, senza modificarlo automaticamente.
- Sì — 20 MB per file (Consigliato)
- Preferisco 10 MB per file
- Preferisco 50 MB per file

### Risposta

Fonte: turno `01a17a12-3e36-7851-8360-2c2ecfb3347b`.

Sì — 20 MB per file (Consigliato)

## Q125

### Domanda

Fonte: turno `01a17a11-8210-78a1-85ef-fbaef4d0a30a`.

Q125 — Vuoi che l’MVP accetti anche foto HEIC/HEIF, oltre a JPEG, PNG e WebP, con un’anteprima visualizzabile su mobile e desktop e l’originale scaricabile? La soluzione tecnica per generare l’anteprima andrà validata durante l’implementazione.
- Sì — includere HEIC/HEIF nell’MVP (Consigliato)
- Per ora JPEG, PNG e WebP; HEIC/HEIF in seguito

### Risposta

Fonte: turno `01a17a12-3e36-7851-8360-2c2ecfb3347b`.

Sì — includere HEIC/HEIF nell’MVP (Consigliato)

## Q126

### Domanda

Fonte: turno `01a17a12-3e36-7851-8360-2c2ecfb3347b`.

Q126 — Hai già un provider AI che vorresti collegare a Creuza, per esempio OpenAI, Google Gemini o Anthropic? Basta indicare il servizio; puoi anche rispondere “nessuna preferenza”. Questo orienta le impostazioni di connessione dell’MVP, senza anticipare estrazione ricevute o generazione dell’itinerario, già previste per la V1.

### Risposta

Fonte: turno `01a17a13-2d89-7b82-a716-79ae3f1cc9ef`.

vorrei provare opencode

## Q127

### Domanda

Fonte: turno `01a17a13-2d89-7b82-a716-79ae3f1cc9ef`.

Q127 — Quando dici OpenCode, intendi usare il suo servizio di modelli via API (OpenCode Console/Zen) per l’AI dentro Creuza, integrare l’agente OpenCode tramite SDK, oppure usarlo come strumento per sviluppare l’app? Per ricevute e suggerimenti di itinerario consiglierei la prima strada, verificando modelli e costi.
- API OpenCode Console/Zen dentro Creuza (Consigliato)
- Agente OpenCode integrato tramite SDK
- OpenCode come strumento di sviluppo

### Risposta

Fonte: turno `01a17a14-025d-7b51-82f6-a360ebe98c33`.

vorrei usare l'usage del mio account opencode go

## Q128

### Domanda — variante 1

Fonte: turno `01a17c22-b064-75b1-a2ec-16cc725aa0d4`.

Q128 — Quando la quota AI è esaurita, confermi che Creuza interrompa le richieste e mostri il limite raggiunto, senza passare automaticamente a crediti a pagamento o a un altro provider? Un nuovo tentativo resterebbe un’azione esplicita dell’utente.
- Sì — interrompere, senza passaggi automatici a pagamento (Consigliato)
- Consentire un provider alternativo configurato esplicitamente

### Domanda — variante 2

Fonte: turno `01a17c24-2167-7b72-83fa-03f789dc6436`.

**Q128–Q129 confermate.** Ho aperto Q130 sull’obiettivo di accessibilità dell’MVP. Tutte le decisioni restano in chat.

### Risposta

Fonte: turno `01a17c24-2167-7b72-83fa-03f789dc6436`.

Sì — interrompere, senza passaggi automatici a pagamento (Consigliato)

## Q129

### Domanda

Fonte: turno `01a17c22-b064-75b1-a2ec-16cc725aa0d4`.

Q129 — Per le funzioni AI della V1, confermi un invio circoscritto ai dati necessari all’azione richiesta? Per estrarre una ricevuta: il file selezionato e le informazioni necessarie a interpretarlo, come le valute del viaggio. Per proporre un itinerario: le Idee selezionate, le date e le preferenze indicate. Prima dell’invio, Creuza mostrerebbe quali dati saranno condivisi con il provider; gli altri documenti, le spese e i contatti dei partecipanti resterebbero esclusi.
- Sì — dati selezionati e riepilogo prima dell’invio (Consigliato)
- Preferisco definire separatamente i dati per ciascuna funzione

### Risposta

Fonte: turno `01a17c24-2167-7b72-83fa-03f789dc6436`.

Sì — dati selezionati e riepilogo prima dell’invio (Consigliato)

## Q130

### Domanda

Fonte: turno `01a17c24-2167-7b72-83fa-03f789dc6436`.

Q130 — Confermi WCAG 2.2 livello AA come obiettivo di accessibilità dell’MVP per i percorsi principali? Questo comprende navigazione da tastiera, focus visibile, etichette per i lettori di schermo, contrasto leggibile, controlli touch adeguati e informazioni comprensibili anche senza distinguere i colori. Le verifiche affiancherebbero controlli automatici e prove manuali dei percorsi principali.
- Sì — puntare a WCAG 2.2 AA per i percorsi principali (Consigliato)
- Prevedere i requisiti di base e rinviare l’obiettivo AA

### Risposta

Fonte: turno `01a17c26-03ce-7272-b4f2-09df478795fb`.

Sì — puntare a WCAG 2.2 AA per i percorsi principali (Consigliato)

## Q131

### Domanda

Fonte: turno `01a17c26-03ce-7272-b4f2-09df478795fb`.

Q131 — Nel perimetro MVP ricostruito manca una funzione essenziale per il tuo uso personale? Comprende: viaggi e riepiloghi giornalieri; Idee personali, gruppi e copie nei viaggi; itinerario; prenotazioni e pass; documenti; spese, ripartizioni e saldi; partecipanti, inviti e ruoli; mappa e ricerca luoghi; accesso Google/magic link; configurazione della connessione AI. Offline, estrazione ricevute, suggerimenti AI e task strutturati restano in V1. Se manca qualcosa, indica la funzione: non occorre riconfermare le singole regole già approvate.
- Il perimetro MVP è sufficiente per il mio uso iniziale
- Manca una funzione essenziale, che specifico nella risposta

### Risposta

Fonte: turno `01a17c29-e382-7232-b038-56bb0214b03a`.

Il perimetro MVP è sufficiente per il mio uso iniziale

## Decisioni esplicite fuori numerazione

### Turno 01a178b7-625f-7e70-adb3-e92e0b319be5

let's go with tanstack start

### Turno 01a178dd-d2b7-73a2-8eca-6b80f541070f

I want a free alternative.
We can think of using cloudflare, and using google oauth + magic link instead of the email/password

### Turno 01a17904-116e-7001-b2de-87ef5ea03e17

I like better auth

### Turno 01a17a0e-b929-7941-aab5-6e2dac0d4a36

direi di confermare google visto l'uso personale che ne farei

### Turno 01a17a17-ec13-7380-b490-8de71110fdc6

I will be using tanstack ai that can generate a sort of harness, so I should be able to use opencode go inside of it, no?

### Autorizzazione alla persistenza — 27 ottobre 2026

L’utente: «da ora in poi hai la possibilita' di modificare file, create issues, ecc».

Sostituisce il precedente vincolo di mantenere le nuove decisioni esclusivamente in chat. Autorizza il consolidamento di file e issue; non cambia le regole di approvazione delle nuove decisioni di prodotto o architettura.

## Q132

### Domanda — 27 ottobre 2026

Q132 — Per completare la verifica di Workers, autorizzi una prova nei tuoi account Cloudflare e Neon con un Worker temporaneo, un database di test UE e un bucket R2 privato UE? Userei pochi dati sintetici, accesso ristretto ed email simulate, esclusivamente entro piani e quote gratuiti disponibili. Mi fermerei se servissero attivazioni della fatturazione, acquisti o upgrade. Prima del deploy adatterei il probe locale, che non è pubblicabile così com’è. Serve un’autorizzazione distinta perché Q112 approvava soltanto la prova locale; questa scelta non adotta ancora definitivamente lo stack.

### Risposta

Risposta dell’utente, 27 ottobre 2026: **«Per ora solo locale; proseguiamo con le regole di dominio»**.

Esito: prova cloud rinviata e non autorizzata. Conservare i risultati locali, senza equipararli a prova cloud o adozione definitiva. Proseguire sui rami di dominio indipendenti; non riproporre automaticamente il provisioning.


## Q133

### Domanda — 27 ottobre 2026

Q133 — Nell’MVP, confermi di bloccare un pagamento al fornitore se porterebbe il totale dei pagamenti oltre il costo registrato della spesa? Esempio: spesa di €100, già pagati €70; aggiungere €40 verrebbe rifiutato con un messaggio chiaro. Consiglio questo limite per l’MVP; consentire un sovrapagamento reale richiederebbe anche rappresentare il credito verso il fornitore.

- Sì — bloccare i pagamenti oltre il costo (Consigliato)
- Consentire sovrapagamenti reali e gestire il credito verso il fornitore

### Risposta

Risposta dell’utente: «No va permesso, perche' il costo previsto potrebbe cambiare (differenza del cambio da quando era stato concordato al giorno effettivo, per esempio). Il costo previsto deve essere un'indicazione generale, il saldo e' quello che da il costo effettivo e deve andare in override.»

Esito: distinguere previsto/effettivo; la previsione non è un limite. La proposta di blocco è rifiutata. Non dedurre l’adozione del credito verso il fornitore né una specifica gestione del cambio per pagamento.

## Q134

### Domanda — 27 ottobre 2026

Q134 — Confermi che i rimborsi del fornitore complessivamente registrati su una spesa non possano superare quanto effettivamente pagato al fornitore? Esempio: spesa di €100 con solo €30 pagati → massimo €30 rimborsabili; se €10 sono già stati restituiti, possono esserne registrati altri €20. Le regolazioni tra partecipanti restano separate.

- Sì — rimborsi limitati a quanto pagato, meno quelli già ricevuti (Consigliato)
- Voglio poter registrare restituzioni superiori; specificherò un caso

### Risposta

Risposta dell’utente: **«Sì — rimborsi limitati a quanto pagato, meno quelli già ricevuti (Consigliato)»**.

Esito: limite approvato; le regolazioni tra Partecipanti restano separate.

## Q135

### Domanda — 27 ottobre 2026

Q135 — Per distinguere un acconto dal costo definitivo, confermi un’azione esplicita «Segna come saldata» riferita al fornitore? Esempio: previsto €100 e acconto €30 → mostriamo previsto e pagato finora; dopo un saldo finale di €80 e la chiusura, il costo effettivo è €110 e prevale sulla previsione di €100, che resta consultabile. Questo è distinto dalle regolazioni tra partecipanti.

- Sì — chiusura esplicita e costo effettivo dai pagamenti (Consigliato)
- Preferisco un costo definitivo inserito manualmente, senza azione di chiusura

### Risposta

Risposta dell’utente: **«Sì — chiusura esplicita e costo effettivo dai pagamenti (Consigliato)»**.

Esito: azione esplicita Segna come saldata al fornitore, consuntivo dai pagamenti e previsione ancora consultabile. Regolazioni fra Partecipanti distinte.


## Q136

### Domanda — 27 ottobre 2026

Q136 — Per gestire le differenze di cambio che hai descritto, vuoi conservare un cambio effettivo per ciascun pagamento, distinto da quello della previsione? Esempio ipotetico: previsti PEN 400 a 4 PEN/EUR = €100; pagati PEN 400 a 3,2 PEN/EUR = €125. Il pagamento pesa €125 nei saldi, mentre la previsione resta €100. Questo preciserebbe Q92, che finora prevedeva il cambio della spesa anche per i pagamenti.

- Sì — cambio effettivo per ogni pagamento, previsione conservata (Consigliato)
- Un cambio di consuntivo unico per l’intera spesa

### Risposta

Risposta dell’utente: «per MVP, manteniamo un cambio unico. Vediamo se in futuro avere piu' flessibilita' ma non so quanto sara' necessario».

Esito: un cambio unico per spesa nell’MVP; proposta di tassi per pagamento non adottata. Flessibilità futura soltanto eventuale, senza release assegnata.

## Q137

### Domanda — 27 ottobre 2026

Q137 — Quando il costo effettivo cambia, confermi di ricalcolare automaticamente le quote uguali o percentuali e richiedere invece una revisione degli importi fissi? Esempio: previsto €100, effettivo €110 → due quote uguali diventano €55 ciascuna; quote del 40% e 60% diventano €44 e €66. Se erano stati fissati €40 e €60, Creuza segnala i €10 da attribuire e richiede di aggiornare le quote prima di segnare la spesa come saldata, senza bloccare la registrazione dei pagamenti.

- Sì — ricalcolo uguali/percentuali e revisione degli importi fissi (Consigliato)
- Ricalcolare proporzionalmente anche gli importi fissi

### Risposta

Risposta dell’utente: **«Sì — ricalcolo uguali/percentuali e revisione degli importi fissi (Consigliato)»**.

Esito: ricalcolo automatico per quote uguali e percentuali; importi fissi da aggiornare e quadrare prima della chiusura al fornitore. La registrazione dei pagamenti resta consentita.

## Q138

### Domanda — 27 ottobre 2026

Q138 — Per una prenotazione con date e orari precisi, confermi l’aggiornamento automatico solo dei campi del Programma che coincidono ancora con i precedenti valori prenotati? Esempio: bus prenotato e programmato alle 09:00, poi spostato alle 10:00 → aggiornamento automatico. Se avevi già modificato il Programma alle 09:30, Creuza mantiene quel valore e propone di allinearlo, senza sovrascriverlo automaticamente.

- Sì — aggiornare i campi allineati e preservare le modifiche manuali (Consigliato)
- La prenotazione deve prevalere anche sulle modifiche manuali

### Risposta

Risposta dell’utente: **«Sì — aggiornare i campi allineati e preservare le modifiche manuali (Consigliato)»**.

Esito: aggiornamento automatico dei campi temporali ancora allineati; valori modificati indipendentemente preservati, con proposta di allineamento.


## Q139

### Domanda — 27 ottobre 2026

Q139 — Per un pass che copre più visite, confermi che cambiare il periodo di validità non sposti automaticamente le attività? Creuza segnalerebbe le visite fuori dalla nuova validità, lasciandoti decidere come riprogrammarle.

- Sì — segnalare le visite fuori validità senza spostarle (Consigliato)
- Riposizionare automaticamente le attività nella nuova validità

### Risposta

Risposta dell’utente: **«Sì — segnalare le visite fuori validità senza spostarle (Consigliato)»**.

Esito: la modifica di validità del pass genera avvisi sulle visite fuori intervallo, senza riprogrammazione automatica.


## Q140

### Domanda — 27 ottobre 2026

Q140 — Se più prenotazioni collegate indicano orari diversi, oppure un biglietto di andata e ritorno non è associato chiaramente alla tratta corretta, confermi di mantenere il Programma e segnalare l’ambiguità? L’aggiornamento automatico riprenderebbe dopo la scelta della prenotazione o della tratta pertinente.

- Sì — mantenere il Programma e chiedere di risolvere l’ambiguità (Consigliato)
- Preferire automaticamente l’ultima prenotazione modificata

### Risposta

Risposta dell’utente: **«Sì — mantenere il Programma e chiedere di risolvere l’ambiguità (Consigliato)»**.

Esito: Programma conservato finché fonti o tratte non sono chiarite; automazione dopo la scelta della prenotazione/tratta pertinente. Nessuna precedenza automatica dell’ultima modifica.

## N07

### Decisione spontanea dell’utente — 27 ottobre 2026

«farei le verifiche tecniche in fase di implementazione dell'MVP, e' proprio fatto per capire se il prodotto e' viable, gia' in un'applicazione completa, ed e' un contesto in cui poter prendere ancora alcune scelte tecniche/architetturali secondarie.»

### Risoluzione

Le verifiche tecniche si svolgono durante l’implementazione dell’MVP, nei percorsi integrati dell’applicazione; non sono prerequisiti di PoC per chiudere la specifica. Le scelte tecniche e architetturali secondarie entro i vincoli concordati sono delegate all’agente, da documentare con ragione/esito. Cambi di prodotto o dei vincoli fondamentali restano decisioni dell’utente.

Le issue tecniche restano aperte come attività implementative fuori dalla mappa; il loro spostamento non certifica la fattibilità. Scope V1 e rinvio provisioning Q132 restano validi. Risoluzione in [Integrare la validazione tecnica nell’MVP e delegare le scelte secondarie](https://linear.app/giocosta/issue/NAS-82/integrare-la-validazione-tecnica-nellmvp-e-delegare-le-scelte).

## Q141

### Revisione del piano — 27 ottobre 2026

Q141 — La proposta comprende 22 ticket verticali: 18 nuovi e quattro ricavati dalle issue esistenti, più il supporto agli accessi già tracciato. Il primo percorso sarà utilizzabile localmente; le integrazioni e verifiche restano dentro l’MVP. Approvi questa granularità e le dipendenze indicate nel piano, oppure preferisci accorpare o dividere alcuni ticket? Puoi indicare anche singole modifiche.

- Approvo granularità e dipendenze (Consigliato)
- Preferisco meno ticket, più ampi
- Preferisco ticket più piccoli

### Risposta

«Approvo granularità e dipendenze (Consigliato)».

Risposta esplicita tramite card Q141, 27 ottobre 2026. Approvata la suddivisione del [piano MVP](../../planning/MVP_IMPLEMENTATION_PLAN.md): 22 incrementi, 18 nuovi ticket e quattro riusi, più il supporto accessi già tracciato. Si procede alla pubblicazione con dipendenze native; i vincoli di versione e il rinvio del provisioning Q132 rimangono validi.







