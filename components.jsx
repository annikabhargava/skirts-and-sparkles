const { useEffect, useMemo, useState } = React;

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="Skirts and Sparkles home">
      <span>Skirts</span>
      <span>&</span>
      <span>Sparkles</span>
    </a>
  );
}

function Icon({ name }) {
  const icons = {
    compass: "⌁",
    ticket: "▣",
    guide: "?",
    phone: "◧",
    arrow: "→",
    check: "✓"
  };
  return <span className="icon" aria-hidden="true">{icons[name] || "•"}</span>;
}

function PillButton({ active, children, onClick }) {
  return (
    <button className={"pill-button" + (active ? " active" : "")} onClick={onClick}>
      {children}
    </button>
  );
}

function SectionHeader({ eyebrow, title, children }) {
  return (
    <div className="section-header">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

function EventCard({ event, selected, onSelect }) {
  return (
    <button 
      className={"event-card" + (selected ? " selected" : "")} 
      onClick={() => onSelect(event.id)}
      aria-label={`Show details for ${event.title} at ${event.venue} in ${event.city}`}
      aria-pressed={selected}
    >
      <span className="event-date">{event.date}</span>
      <span className="event-main">
        <strong>{event.title}</strong>
        <span>{event.venue} · {event.city}</span>
        {event.firstTimer && <em>first-timer OK</em>}
      </span>
      <span className="event-meta">
        {event.soldOut ? `${event.resale} resale` : `from EUR ${event.price}`}
      </span>
    </button>
  );
}

function PhonePreview({ event, doorHelpActive, onToggleDoorHelp }) {
  return (
    <div className="phone-shell" aria-label="Ticket wallet preview">
      <div className="phone-top" />
      <div className="phone-screen">
        <div className="phone-status">
          <span>Tonight</span>
          <span>21:42</span>
        </div>
        <h3>{event.title}</h3>
        <p>{event.venue} · {event.time}</p>
        <div className="route-card">
          <span>Next best move</span>
          <strong>{event.practicals[0]}</strong>
        </div>
        <div className="qr-card">
          {doorHelpActive ? (
            <div className="qr-support-message" style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "10px", background: "rgba(123, 224, 195, 0.15)", borderRadius: "8px", border: "1px solid var(--mint)", textAlign: "center" }}>
              <span style={{ color: "var(--mint)", fontWeight: "bold", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.05em" }}>● Help Request Sent</span>
              <p style={{ margin: 0, fontSize: "12px", color: "rgba(255, 250, 240, 0.8)", lineHeight: "1.3" }}>Connecting you to a live host at {event.venue}... A support agent will meet you at the guest list entrance.</p>
            </div>
          ) : (
            <>
              <div className="qr-mark" />
              <span>Ticket appears here 48h before doors</span>
            </>
          )}
        </div>
        <button 
          className={"phone-action" + (doorHelpActive ? " active" : "")} 
          onClick={onToggleDoorHelp}
          style={doorHelpActive ? { background: "var(--mint)", color: "var(--ink)", fontWeight: "bold" } : {}}
        >
          {doorHelpActive ? "Cancel Help Request" : "I need help at the door"}
        </button>
      </div>
    </div>
  );
}

function GlossaryTerm({ item, active, onClick }) {
  return (
    <button 
      className={"glossary-term" + (active ? " active" : "")} 
      onClick={onClick}
      aria-label={`Show definition of ${item.term}`}
      aria-pressed={active}
    >
      <span>{item.term}</span>
      <Icon name="arrow" />
    </button>
  );
}

function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max <= 0 ? 0 : window.scrollY / max);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return progress;
}

function ChecklistItem({ item, checked, onToggle }) {
  return (
    <button className={"checklist-item" + (checked ? " checked" : "")} onClick={() => onToggle(item.id)}>
      <span className="check-dot">{checked ? "✓" : ""}</span>
      <span>
        <strong>{item.label}</strong>
        <small>{item.detail}</small>
      </span>
    </button>
  );
}

Object.assign(window, {
  Brand,
  Icon,
  PillButton,
  SectionHeader,
  EventCard,
  PhonePreview,
  GlossaryTerm,
  ChecklistItem,
  useScrollProgress
});
