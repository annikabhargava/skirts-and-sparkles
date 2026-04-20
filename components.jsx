// Shared components — exported to window at bottom
const { useState, useEffect, useRef } = React;

/* ---------- Brand mark ---------- */
function Brand({ size = 26, spark = true, onClick }) {
  return (
    <span className="brand" style={{ fontSize: size }} onClick={onClick}>
      <em>Skirts</em>&nbsp;& Sparkles{spark && <span className="spark">✦</span>}
    </span>
  );
}

/* ---------- Industrial strip (warehouse token) ---------- */
function IndustrialStrip({ items }) {
  const doubled = [...items, ...items];
  return (
    <div className="strip-industrial">
      <span className="dot" />
      <div className="strip-scroll">
        {doubled.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
    </div>
  );
}

/* ---------- Site nav ---------- */
function Nav({ route, go, cart, alerts }) {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Brand onClick={() => go("home")} />
        <div className="nav-links">
          <button className={"nav-link " + (route === "home" ? "active" : "")} onClick={() => go("home")}>Events</button>
          <button className={"nav-link " + (route === "sell" ? "active" : "")} onClick={() => go("sell")}>Sell a ticket</button>
          <button className={"nav-link " + (route === "account" ? "active" : "")} onClick={() => go("account")}>
            My tickets{alerts > 0 && <span className="chip chip-ember" style={{marginLeft:8}}>{alerts}</span>}
          </button>
          <button className={"nav-link " + (route === "mobile" ? "active" : "")} onClick={() => go("mobile")}>Mobile preview</button>
        </div>
      </div>
    </nav>
  );
}

/* ---------- Crumbs ---------- */
function Crumbs({ items, go }) {
  return (
    <div className="crumbs">
      {items.map((c, i) => (
        <React.Fragment key={i}>
          {i > 0 && <span className="sep">/</span>}
          {c.to ? <a className="link-u" onClick={() => go(c.to, c.params)}>{c.label}</a> : <span>{c.label}</span>}
        </React.Fragment>
      ))}
    </div>
  );
}

/* ---------- Event row (home list) ---------- */
function EventRow({ ev, go }) {
  return (
    <div className="event-row" onClick={() => go("event", { id: ev.id })}>
      <div className="event-date">
        <div className="d">{ev.date.d}</div>
        <div className="m">{ev.date.m}</div>
      </div>
      <div className="col gap-4">
        <div style={{ fontFamily: "var(--serif)", fontSize: 26, fontStyle: "italic", lineHeight: 1 }}>{ev.title}</div>
        <div className="readout">{ev.time} · {ev.venueShort}</div>
        <div className="row gap-6 mt-4" style={{ flexWrap: "wrap" }}>
          {ev.genres.map((g) => <span className="chip" key={g}>{g}</span>)}
          {ev.firstTimerFriendly && <span className="chip chip-safe">first-timer OK</span>}
        </div>
      </div>
      <div className="col gap-4" style={{ alignItems: "flex-end" }}>
        {ev.soldOut
          ? <>
              <span className="chip chip-warn">sold out</span>
              <div className="readout text-right">{ev.resaleCount} resale · from €{ev.resaleAvg ?? ""}</div>
            </>
          : <>
              <div style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 22 }}>from €{ev.priceFrom}</div>
              <div className="readout text-right">{ev.ticketsLeft} left</div>
            </>
        }
      </div>
    </div>
  );
}

/* ---------- Fair-price ladder (the trust viz) ---------- */
function FairPriceLadder({ price, face, cap }) {
  const pct = Math.min(100, (price / cap) * 100);
  const facePct = (face / cap) * 100;
  return (
    <div>
      <div className="row between readout mb-8">
        <span>€0</span>
        <span>face €{face.toFixed(2)}</span>
        <span>cap €{cap.toFixed(2)}</span>
      </div>
      <div className="ladder">
        <div className="ladder-fill" style={{ width: facePct + "%" }} />
        <div className="ladder-mark" style={{ left: pct + "%" }} />
      </div>
      <div className="readout mt-8">
        Dutch law caps resale at face value + 10%. This ticket: <strong style={{color:"var(--ink)"}}>€{price.toFixed(2)}</strong>
        {price < face && <span> — <span className="text-safe">€{(face-price).toFixed(2)} under face.</span></span>}
        {price > face && price <= cap && <span> — inside the fair-price window.</span>}
      </div>
    </div>
  );
}

/* ---------- Verified seller row ---------- */
function SellerBlock({ seller, minimal = false }) {
  const checks = { phone: "NL phone", email: "email", instagram: "Instagram" };
  return (
    <div className={minimal ? "row between center" : "card row between center"}>
      <div className="col gap-4">
        {!minimal && <div className="t-mono-xs text-muted">SELLER</div>}
        <div style={{ fontWeight: 600, fontSize: 15 }}>{seller.name} · {seller.sales} sales</div>
        <div className="readout">
          {seller.verified.map(v => "✓ " + checks[v]).join(" · ")} · since {seller.joined}
        </div>
      </div>
      <span className="chip chip-safe">verified</span>
    </div>
  );
}

/* ---------- Glossary term ---------- */
function Gloss({ term, children }) {
  const g = window.DATA.glossary[term.toLowerCase()] || "";
  return <span className="gloss" data-gloss={g}>{children || term}</span>;
}

/* ---------- Stat callout ---------- */
function Stat({ n, label, kind }) {
  return (
    <div className="col gap-4">
      <div style={{ fontFamily: "var(--serif)", fontSize: 44, fontStyle: "italic", lineHeight: 1 }}>{n}</div>
      <div className="readout">{label}</div>
    </div>
  );
}

/* ---------- Page wrapper ---------- */
function Page({ children, dark = false }) {
  useEffect(() => {
    if (dark) document.body.classList.add("mode-dark");
    else document.body.classList.remove("mode-dark");
  }, [dark]);
  return <div className="page">{children}</div>;
}

/* ---------- Tweaks panel ---------- */
function Tweaks({ tweaks, setTweak }) {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const handler = (e) => {
      if (!e.data) return;
      if (e.data.type === "__activate_edit_mode") setOn(true);
      if (e.data.type === "__deactivate_edit_mode") setOn(false);
    };
    window.addEventListener("message", handler);
    try { window.parent.postMessage({ type: "__edit_mode_available" }, "*"); } catch(e){}
    return () => window.removeEventListener("message", handler);
  }, []);
  if (!on) return null;
  return (
    <div className="tweaks on">
      <h4>Tweaks</h4>
      <div className="group">
        <div className="group-label">Newcomer layer</div>
        <div className="pill-row">
          <button className={"pill " + (tweaks.newcomerMode ? "on":"")} onClick={() => setTweak("newcomerMode", true)}>on</button>
          <button className={"pill " + (!tweaks.newcomerMode ? "on":"")} onClick={() => setTweak("newcomerMode", false)}>off</button>
        </div>
      </div>
      <div className="group">
        <div className="group-label">Price-cap visibility</div>
        <div className="pill-row">
          <button className={"pill " + (tweaks.showPriceCap ? "on":"")} onClick={() => setTweak("showPriceCap", true)}>show</button>
          <button className={"pill " + (!tweaks.showPriceCap ? "on":"")} onClick={() => setTweak("showPriceCap", false)}>hide</button>
        </div>
      </div>
      <div className="group">
        <div className="group-label">Voice tone</div>
        <div className="pill-row">
          <button className={"pill " + (tweaks.voiceTone==='warm' ? "on":"")} onClick={() => setTweak("voiceTone", "warm")}>warm</button>
          <button className={"pill " + (tweaks.voiceTone==='cool' ? "on":"")} onClick={() => setTweak("voiceTone", "cool")}>cool</button>
          <button className={"pill " + (tweaks.voiceTone==='scene' ? "on":"")} onClick={() => setTweak("voiceTone", "scene")}>scene</button>
        </div>
      </div>
      <div className="group">
        <div className="group-label">Annotations</div>
        <div className="pill-row">
          <button className={"pill " + (tweaks.showAnnotations ? "on":"")} onClick={() => setTweak("showAnnotations", true)}>on</button>
          <button className={"pill " + (!tweaks.showAnnotations ? "on":"")} onClick={() => setTweak("showAnnotations", false)}>off</button>
        </div>
      </div>
    </div>
  );
}

/* ---------- Voice-aware copy helpers ---------- */
function voice(tone, options) {
  return options[tone] || options.warm;
}

Object.assign(window, {
  Brand, IndustrialStrip, Nav, Crumbs,
  EventRow, FairPriceLadder, SellerBlock, Gloss, Stat,
  Page, Tweaks, voice
});
