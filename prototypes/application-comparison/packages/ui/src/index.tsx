import { useEffect, useState } from "react";
import { useRouter, useRouterState } from "@tanstack/react-router";
import { useMediaQuery } from "@mantine/hooks";
import { Accordion, Alert, Badge, Button, Divider, Drawer, Group, Loader, MantineProvider, Modal, PasswordInput, Select, Stack, Textarea, TextInput, Title } from "@mantine/core";
import type { Trip, ItineraryItem } from "../../../apps/api/src/fixture";

type User = { id: string; name: string; email: string; emailVerified: boolean };
type Mail = { id: string; type: string; to: string; subject: string; url: string; at: string };
type Props = { variant: "TanStack Start" | "Vite + TanStack Router" };
const groupNames: Record<string, string> = { "all-day": "Tutto il giorno", timed: "Con orario", undecided: "Orario da definire" };
const kindNames: Record<string, string> = { activity: "Attività", transfer: "Trasferimento", stay: "Alloggio" };

async function api(path: string, body?: unknown) {
  const response = await fetch(path, { credentials: "include", ...(body === undefined ? {} : { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) }) });
  const data = await response.json();
  if (!response.ok) throw new Error(data.error?.message ?? data.error ?? data.message ?? "Richiesta non riuscita");
  return data;
}

export function PrototypeApplication({ variant }: Props) {
  return <MantineProvider defaultColorScheme="light" theme={{ primaryColor: "teal", fontFamily: "Inter, Segoe UI, sans-serif", defaultRadius: "md" }}>
    <Application variant={variant} />
  </MantineProvider>;
}

function Application({ variant }: Props) {
  const router = useRouter();
  const href = useRouterState({ select: (state) => state.location.href });
  const search = new URLSearchParams(href.split("?")[1] ?? "");
  const view = search.get("view") ?? "program";
  const selectedId = search.get("item");
  const inviteToken = search.get("invite");
  const resetToken = search.get("token");
  const focusItem = search.get("focus");
  const mobile = useMediaQuery("(max-width: 48em)", false);
  const [ready, setReady] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [trip, setTrip] = useState<Trip | null>(null);
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [busy, setBusy] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup" | "reset" | "new-password">("login");
  const [email, setEmail] = useState("owner@creuza.test");
  const [password, setPassword] = useState("PeruPrototype2026!");
  const [name, setName] = useState("Viaggiatore demo");
  const [mails, setMails] = useState<Mail[]>([]);
  const [mailOpen, setMailOpen] = useState(false);
  const [expanded, setExpanded] = useState<string[]>(["2026-10-21"]);
  const [editTitle, setEditTitle] = useState("");
  const [editNotes, setEditNotes] = useState("");
  const [scheduleId, setScheduleId] = useState<string | null>(null);
  const [lastScheduledId, setLastScheduledId] = useState<string | null>(null);
  const [scheduleDay, setScheduleDay] = useState("2026-10-21");
  const [scheduleKind, setScheduleKind] = useState("activity");
  const [scheduleTime, setScheduleTime] = useState("");
  const [inviteOpen, setInviteOpen] = useState(false);
  const [inviteEmail, setInviteEmail] = useState("compagno@creuza.test");
  const [inviteRole, setInviteRole] = useState("Editor");
  const [history, setHistory] = useState<Array<{ id: number; changed_at: string }>>([]);
  const [historyOpen, setHistoryOpen] = useState(false);
  const [notifications, setNotifications] = useState<Array<{ id: string; message: string }>>([]);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const selected = trip?.days.flatMap((day) => day.items).find((item) => item.id === selectedId);
  const canEdit = role === "Owner" || role === "Editor";

  function go(nextView = view, item?: string, focus?: string) {
    const params = new URLSearchParams({ view: nextView });
    if (item) params.set("item", item);
    if (focus) params.set("focus", focus);
    void router.navigate({ to: "/trip/peru" as never, search: Object.fromEntries(params) as never, resetScroll: false });
  }
  async function load() {
    const me = await api("/api/me");
    setUser(me.user);
    if (me.user) {
      try {
        const result = await api("/api/trips/peru");
        setTrip(result.trip); setRole(result.role);
      } catch { setTrip(null); setRole(""); }
    } else { setTrip(null); setRole(""); }
  }
  async function action(work: () => Promise<void>) {
    setBusy(true); setError(""); setNotice("");
    try { await work(); } catch (exception) { setError(exception instanceof Error ? exception.message : String(exception)); }
    finally { setBusy(false); }
  }
  useEffect(() => {
    const saved = sessionStorage.getItem("creuza-expanded");
    if (saved) { try { setExpanded(JSON.parse(saved)); } catch { /* Prototype defaults remain usable. */ } }
    void load().catch((exception) => setError(String(exception))).finally(() => setReady(true));
  }, []);
  useEffect(() => { if (ready) sessionStorage.setItem("creuza-expanded", JSON.stringify(expanded)); }, [expanded, ready]);
  useEffect(() => {
    if (selected) { setEditTitle(selected.title); setEditNotes(selected.notes); }
  }, [selectedId, trip]);
  useEffect(() => { if (resetToken) setAuthMode("new-password"); }, [resetToken]);
  useEffect(() => {
    if (view === "program" && focusItem && trip) {
      const frame = requestAnimationFrame(() => document.getElementById("item-" + focusItem)?.scrollIntoView({ block: "center" }));
      return () => cancelAnimationFrame(frame);
    }
  }, [view, focusItem, trip]);

  async function submitAuth(event: React.FormEvent) {
    event.preventDefault();
    await action(async () => {
      const callbackURL = window.location.origin + window.location.pathname + window.location.search;
      if (authMode === "new-password") {
        await api("/api/auth/reset-password", { token: resetToken, newPassword: password });
        setAuthMode("login");
        go("program");
        setNotice("Password aggiornata. Puoi accedere con la nuova password demo.");
      } else if (authMode === "signup") {
        await api("/api/auth/sign-up/email", { name, email, password, callbackURL });
        setNotice("Account creato. Apri la posta locale per verificare l'email, poi accedi.");
        setMails(await api("/__prototype/mail")); setMailOpen(true);
      } else if (authMode === "reset") {
        await api("/api/auth/request-password-reset", { email, redirectTo: window.location.origin + "/?reset=1" });
        setNotice("Richiesta registrata. Il link, se disponibile, è nella posta locale.");
        setMails(await api("/__prototype/mail")); setMailOpen(true);
      } else {
        await api("/api/auth/sign-in/email", { email, password });
        await load();
        setNotice("Accesso riuscito.");
        if (!inviteToken) go("program");
      }
    });
  }
  const nav = [
    { id: "program", icon: "▤", label: "Programma" },
    { id: "ideas", icon: "◇", label: "Idee" },
    { id: "bookings", icon: "▱", label: "Prenotazioni" },
    { id: "expenses", icon: "€", label: "Spese" },
    { id: "more", icon: "•••", label: "Altro" }
  ];
  return <div className="prototype-root">
    <div className="prototype-strip"><span>PROTOTIPO LOCALE · DATI FITTIZI</span><span>{variant}</span></div>
    <header className="app-header">
      <a className="brand" href="/" onClick={(event) => { event.preventDefault(); go("program"); }}><span className="brand-symbol">c.</span> creuza</a>
      <div className="header-actions">
        <Button variant="subtle" color="dark" size="xs" onClick={() => void action(async () => { setMails(await api("/__prototype/mail")); setMailOpen(true); })}>Posta locale</Button>
        {user && <><Button variant="subtle" color="dark" size="xs" onClick={() => void action(async () => { setNotifications(await api("/api/notifications")); setNotificationOpen(true); })}>Inviti</Button>
          <span className="user-name">{user.name}</span>
          <Button variant="light" color="dark" size="xs" onClick={() => void action(async () => { await api("/api/auth/sign-out", {}); await load(); })}>Esci</Button></>}
      </div>
    </header>
    {!ready ? <main className="loading"><Loader /><p>Caricamento del prototipo…</p></main> :
      !user || resetToken ? <main className="login-layout">
        <section className="login-story"><p className="eyebrow">IL VIAGGIO PRENDE FORMA</p><h1>Più spazio<br />per partire.</h1><p>Idee, giornate e prenotazioni.<br />Il tuo viaggio, finalmente insieme.</p><div className="route-art"><span>OLLANTAYTAMBO</span><i /><strong>MACHU PICCHU</strong><i /><span>CUSCO</span></div></section>
        <section className="login-form"><Badge color="teal" variant="light">{variant}</Badge><h2>{authMode === "signup" ? "Crea un account demo" : authMode === "reset" ? "Recupera l'accesso" : authMode === "new-password" ? "Scegli la nuova password demo" : "Bentornato"}</h2><p className="secondary">Confronto locale con autenticazione reale e posta catturata.</p>
          {error && <Alert color="red" role="alert">{error}</Alert>}{notice && <Alert color="teal" role="status">{notice}</Alert>}
          <form onSubmit={(event) => void submitAuth(event)}><Stack gap="md">
            {authMode === "signup" && <TextInput label="Nome" value={name} onChange={(event) => setName(event.currentTarget.value)} required />}
            {authMode !== "new-password" && <TextInput label="Email" type="email" value={email} onChange={(event) => setEmail(event.currentTarget.value)} required />}
            {authMode !== "reset" && <PasswordInput label="Password" value={password} onChange={(event) => setPassword(event.currentTarget.value)} required />}
            <Button type="submit" loading={busy}>{authMode === "signup" ? "Crea account" : authMode === "reset" ? "Invia link locale" : authMode === "new-password" ? "Salva nuova password" : "Accedi"}</Button>
          </Stack></form>
          <Group mt="md" gap="xs"><Button size="xs" variant="subtle" onClick={() => { setAuthMode(authMode === "signup" ? "login" : "signup"); setError(""); }}> {authMode === "signup" ? "Ho già un account" : "Crea account demo"}</Button>
            <Button size="xs" variant="subtle" onClick={() => setAuthMode(authMode === "reset" ? "login" : "reset")}>Password dimenticata</Button></Group>
          <Divider my="lg" /><p className="demo-credentials">Accesso di prova<br /><strong>owner@creuza.test</strong><br />PeruPrototype2026!</p>
          <p className="secondary small">Google: integrazione da verificare con credenziali OAuth. Nessun accesso Google simulato.</p>
        </section>
      </main> :
      <div className="workspace">
        <aside className="desktop-sidebar"><p className="eyebrow">IL TUO VIAGGIO</p><strong>Perù</strong><p className="secondary small">7–24 ottobre 2026</p>
          <nav aria-label="Sezioni viaggio">{nav.map((entry) => <button key={entry.id} className={view === entry.id ? "active" : ""} onClick={() => go(entry.id)}><span>{entry.icon}</span>{entry.label}</button>)}</nav>
          <div className="sidebar-bottom"><Badge variant="light">{role || "Invito in attesa"}</Badge><a href="http://localhost:4300/api/reference" target="_blank" rel="noreferrer">Riferimento API ↗</a></div>
        </aside>
        <main className="trip-main">
          {error && <Alert color="red" role="alert" mb="md">{error}</Alert>}{notice && <Alert color="teal" role="status" mb="md" withCloseButton onClose={() => setNotice("")}>{notice}</Alert>}
          {inviteToken && <Alert title="Invito al viaggio Perù" color="teal" mb="lg"><p>Accetta per attivare il ruolo assegnato. Il partecipante già registrato sarà conservato.</p><Button size="sm" loading={busy} onClick={() => void action(async () => { await api("/api/invitations/accept", { token: inviteToken }); await load(); go("program"); setNotice("Invito accettato."); })}>Accetta invito</Button></Alert>}
          {!trip ? <section className="empty-state"><h1>Il viaggio ti aspetta.</h1><p>Il tuo account è attivo. Serve un invito accettato per leggere questo viaggio demo.</p><Button variant="light" onClick={() => void action(async () => { setMails(await api("/__prototype/mail")); setMailOpen(true); })}>Apri posta locale</Button></section> :
          <>
            <div className="trip-heading"><div><p className="eyebrow">PERÙ · 7–24 OTTOBRE 2026</p><h1>{nav.find((entry) => entry.id === view)?.label ?? "Programma"}</h1><p className="secondary">{view === "ideas" ? "Spunti da trasformare nella tua prossima giornata." : "Uno sguardo al viaggio. Ogni giornata, nei dettagli."}</p></div>
              {role === "Owner" && <Button variant="light" onClick={() => setInviteOpen(true)}>Invita partecipante</Button>}</div>
            {view === "program" && <><div className="itinerary-toolbar"><span className="secondary small">3 giornate campione · più giorni possono restare aperti</span><Button variant="subtle" size="xs" onClick={() => void action(async () => { setHistory(await api("/api/history")); setHistoryOpen(true); })}>Cronologia</Button></div>
              <Accordion multiple value={expanded} onChange={setExpanded} variant="separated" radius="md" className="day-accordion">
                {trip.days.map((day, index) => <Accordion.Item key={day.date} value={day.date}>
                  <Accordion.Control><div className="day-summary"><span className="day-number">{index + 14}<small>GIORNO</small></span><div><p className="day-date">{day.label}</p><h2>{day.places}</h2><p className="day-highlights">{day.summary}</p></div></div></Accordion.Control>
                  <Accordion.Panel>{["all-day", "timed", "undecided"].map((group) => {
                    const items = day.items.filter((item) => item.group === group).sort((a, b) => group === "timed" ? a.time.localeCompare(b.time) : 0);
                    return <section key={group} className="day-group"><h3>{groupNames[group]}</h3>{items.length ? items.map((item) =>
                      <button key={item.id} id={"item-" + item.id} className="itinerary-item" onClick={() => go("program", item.id)} aria-label={"Apri " + item.title}>
                        <span className="item-time">{item.time || (item.kind === "stay" ? "NOTTE" : "—")}</span><span className="item-main"><span className="item-category">{kindNames[item.kind]}</span><strong>{item.title}</strong><span className="secondary small">{item.place}</span>{item.booking && <span className="booking-hint">↗ {item.booking}</span>}</span><span className="item-arrow">↗</span>
                      </button>) : <p className="empty-group">Nessun elemento</p>}</section>;
                  })}</Accordion.Panel>
                </Accordion.Item>)}
              </Accordion>
            </>}
            {view === "ideas" && <section><div className="section-caption"><Badge variant="light" color="orange">Solo idee non pianificate</Badge><span className="secondary small">Le idee personali restano indipendenti</span></div><div className="idea-grid">{trip.ideas.map((idea) => <article className="idea-card" key={idea.id}><span className="idea-symbol">◇</span><p className="eyebrow">{idea.place}</p><h2>{idea.title}</h2><p className="secondary">{idea.notes}</p><Button disabled={!canEdit} onClick={() => { setScheduleId(idea.id); setScheduleTime(""); }}>Pianifica</Button></article>)}</div>{!trip.ideas.length && <p>Tutte le idee campione sono state pianificate. Le trovi nel Programma.</p>}</section>}
            {view === "bookings" && <section className="simple-surface"><h2>Prenotazioni collegate</h2>{trip.days.flatMap((day) => day.items).filter((item) => item.booking).map((item) => <button className="booking-row" key={item.id} onClick={() => go("program", item.id)}><strong>{item.booking}</strong><span>{item.title} ↗</span></button>)}<p className="secondary small">Riferimenti dimostrativi. Nessun biglietto personale è stato importato.</p></section>}
            {view === "expenses" && <section className="simple-surface"><p className="eyebrow">ESEMPIO DEL CONTRATTO API</p><h2>{trip.moneyExample.originalAmount} PEN</h2><p>{trip.moneyExample.homeAmount} EUR · 1 EUR = {trip.moneyExample.unitsPerEuro} PEN</p><p className="secondary">Importi trasportati come stringhe decimali. Questa schermata verifica il contratto; il registro finanziario completo non fa parte del confronto.</p></section>}
            {view === "more" && <section className="simple-surface"><h2>Altro</h2><p>Mappa, documenti e impostazioni appartengono alla specifica, ma non sono implementati in questo confronto mirato.</p><Button variant="light" onClick={() => void action(async () => { setHistory(await api("/api/history")); setHistoryOpen(true); })}>Apri cronologia del prototipo</Button></section>}
          </>}
        </main>
        {!selectedId && !scheduleId && <nav className="mobile-nav" aria-label="Sezioni viaggio mobile">{nav.map((entry) => <button key={entry.id} className={view === entry.id ? "active" : ""} onClick={() => go(entry.id)}><span>{entry.icon}</span>{entry.label}</button>)}</nav>}
      </div>}
    <Drawer opened={Boolean(selected)} onClose={() => go(view)} title={selected ? kindNames[selected.kind] : "Dettagli"} closeButtonProps={{ "aria-label": "Chiudi dettagli" }} position="right" size={mobile ? "100%" : 440} withOverlay={mobile} lockScroll={mobile} className="item-drawer">
      {selected && <Stack gap="lg"><div><p className="eyebrow">PERÙ · DETTAGLI ELEMENTO</p><Title order={2}>{selected.title}</Title><p className="secondary">{selected.place} {selected.time && "· " + selected.time}</p></div>
        <TextInput label="Titolo" value={editTitle} readOnly={!canEdit} onChange={(event) => setEditTitle(event.currentTarget.value)} />
        <Textarea label="Note" minRows={5} value={editNotes} readOnly={!canEdit} onChange={(event) => setEditNotes(event.currentTarget.value)} />
        {selected.booking && <Alert color="teal" title="Prenotazione collegata">{selected.booking}</Alert>}
        {canEdit && <><Button loading={busy} onClick={() => void action(async () => { await api("/api/trips/peru/items", { action: "edit", itemId: selected.id, title: editTitle, notes: editNotes }); await load(); setNotice("Modifica salvata. La versione precedente è nella cronologia."); })}>Salva modifiche</Button>
          {!selected.booking && <Button variant="light" onClick={() => void action(async () => { await api("/api/trips/peru/items", { action: "moveBack", itemId: selected.id }); await load(); go("ideas"); setNotice("Elemento spostato nelle Idee con il suo contenuto attuale."); })}>Sposta nelle Idee</Button>}
          <p className="secondary small">Ultimo salvataggio prevalente, con versione precedente conservata. Le regole complete di prenotazione e cancellazione sono fuori da questo campione.</p></>}
      </Stack>}
    </Drawer>
    <Modal opened={Boolean(scheduleId)} onClose={() => setScheduleId(null)} title="Pianifica un'idea" fullScreen={mobile} centered>
      <Stack><Select label="Tipo di elemento" data={[{ value: "activity", label: "Attività" }, { value: "transfer", label: "Trasferimento" }, { value: "stay", label: "Alloggio" }]} value={scheduleKind} onChange={(value) => setScheduleKind(value ?? "activity")} />
        <Select label="Giorno" data={trip?.days.map((day) => ({ value: day.date, label: day.label + " · " + day.places })) ?? []} value={scheduleDay} onChange={(value) => setScheduleDay(value ?? "2026-10-21")} />
        <TextInput label="Orario (facoltativo)" type="time" value={scheduleTime} onChange={(event) => setScheduleTime(event.currentTarget.value)} />
        <Button loading={busy} onClick={() => void action(async () => { const result = await api("/api/trips/peru/items", { action: "schedule", itemId: scheduleId, date: scheduleDay, kind: scheduleKind, time: scheduleTime }); setLastScheduledId(result.itemId); setScheduleId(null); await load(); setNotice("Idea pianificata. Puoi continuare con le altre idee oppure aprire il Programma."); })}>Pianifica</Button>
      </Stack>
    </Modal>
    {notice.startsWith("Idea pianificata") && <div className="view-result"><Button onClick={() => { setExpanded((days) => [...new Set([...days, scheduleDay])]); go("program", undefined, lastScheduledId ?? undefined); setNotice(""); }}>Vedi nel Programma</Button></div>}
    <Modal opened={mailOpen} onClose={() => setMailOpen(false)} title="Posta locale — nessun invio reale" size="lg"><Stack>{mails.length ? [...mails].reverse().map((message) => <article className="mail-message" key={message.id}><Badge size="xs">{message.type}</Badge><strong>{message.subject}</strong><p>{message.to}</p><a href={message.url}>Apri link locale ↗</a></article>) : <p>Nessun messaggio catturato. Registrati o crea un invito per provare il flusso.</p>}</Stack></Modal>
    <Modal opened={inviteOpen} onClose={() => setInviteOpen(false)} title="Invita un partecipante"><Stack><TextInput label="Email" type="email" value={inviteEmail} onChange={(event) => setInviteEmail(event.currentTarget.value)} /><Select label="Ruolo" data={["Editor", "Viewer"]} value={inviteRole} onChange={(value) => setInviteRole(value ?? "Editor")} /><Button loading={busy} onClick={() => void action(async () => { const result = await api("/api/invitations", { email: inviteEmail, role: inviteRole }); setInviteOpen(false); setNotice("Partecipante conservato/creato. Invito catturato nella posta locale. Account collegato: " + (result.accountLinked ? "sì" : "non ancora")); })}>Crea invito locale</Button></Stack></Modal>
    <Modal opened={historyOpen} onClose={() => setHistoryOpen(false)} title="Cronologia del prototipo"><Stack>{history.length ? history.map((entry) => <p key={entry.id}>Versione precedente #{entry.id} · {new Date(entry.changed_at).toLocaleString("it-IT")}</p>) : <p>Nessuna modifica registrata.</p>}<p className="secondary small">Il campione conserva lo stato precedente nel database; l'interfaccia di ripristino completo è da sviluppare.</p></Stack></Modal>
    <Modal opened={notificationOpen} onClose={() => setNotificationOpen(false)} title="Notifiche inviti"><Stack>{notifications.length ? notifications.map((entry) => <p key={entry.id}>{entry.message}</p>) : <p>Nessun invito per questo account.</p>}</Stack></Modal>
  </div>;
}
