// Homepage — Wireframe A (calendar-first) rendered hi-fi
// Warm editorial canvas + warehouse industrial strip
function HomeScreen({ go, tweaks }) {
  const events = window.DATA.events;
  const [filter, setFilter] = useState("all");

  const filters = [
    { id: "all", label: "This week" },
    { id: "fri", label: "Fri" },
    { id: "sat", label: "Sat" },
    { id: "sun", label: "Sun" },
    { id: "firsttimer", label: "First-timer OK" },
  ];

  const filtered = filter === "firsttimer"
    ? events.filter(e => e.firstTimerFriendly)
    : events;

  return (
    <Page>
      <Nav route="home" go={go} alerts={2} />

      {/* Industrial strip — live data pulse */}
      <IndustrialStrip items={[
        "47 events this week",
        "12 sold out",
        "3 last-minute",
        "2,410 alerts active",
        "resale avg 98% of face",
      ]}/>

      {/* Hero — warm editorial */}
      <section className="container" style={{ paddingTop: 64, paddingBottom: 32 }}>
        <div className="t-kicker mb-12">AMSTERDAM · WEEK OF 20 MAY · 2026</div>
        <h1 className="t-h1">
          <em>47 nights.</em> 12 sold out.<br/>
          3 last-minute.
        </h1>
        <div className="row between mt-24" style={{ alignItems: "flex-end", gap: 32, flexWrap: "wrap" }}>
          <p className="t-body text-muted" style={{ maxWidth: 520, margin: 0 }}>
            Amsterdam's dance scene, surfaced honestly. Face-value tickets, fan-to-fan resale with a fair-price cap,
            and a little context if you're new around here.
          </p>
          {tweaks.newcomerMode && (
            <button className="btn btn-ember btn-lg" onClick={() => go("event", { id: "ss-main" })}>
              New to this? 60-sec tour →
            </button>
          )}
        </div>
      </section>

      {/* Filter bar */}
      <section className="container" style={{ paddingTop: 24 }}>
        <div className="row gap-8" style={{ flexWrap: "wrap" }}>
          {filters.map(f => (
            <button key={f.id}
              className={"btn btn-sm " + (filter === f.id ? "btn-primary" : "btn-ghost")}
              onClick={() => setFilter(f.id)}>
              {f.label}
            </button>
          ))}
        </div>
      </section>

      {/* Event list */}
      <section className="container" style={{ paddingTop: 24, paddingBottom: 48 }}>
        <div>
          {filtered.map(ev => <EventRow key={ev.id} ev={ev} go={go} />)}
        </div>
      </section>

      {/* Editor's pick — warehouse treatment for contrast */}
      <section style={{ background: "var(--black)", color: "var(--bone)", padding: "64px 0", marginTop: 48 }}>
        <div className="container">
          <div className="row between center mb-20" style={{ flexWrap: "wrap", gap: 20 }}>
            <div className="t-kicker" style={{color:"var(--signal)"}}>EDITOR'S PICK · MAY</div>
            <div className="readout">week 21 / 52</div>
          </div>
          <div className="row gap-32" style={{ flexWrap: "wrap", alignItems: "flex-start" }}>
            <div style={{ flex: "1 1 420px" }}>
              <h2 className="t-h2" style={{ color: "var(--bone)", fontStyle: "italic" }}>
                If it's your first festival weekend in this city —
              </h2>
              <p className="t-body mt-16" style={{ color: "var(--bone)", opacity: 0.85, maxWidth: 460 }}>
                Skirts & Sparkles on Saturday is the one. Good air, bigger room, warmer crowd. The music stays
                accessible until about 02:00, then gets weirder. Leave around 04:00 and you've had a proper night
                without losing Sunday.
              </p>
              <div className="row gap-12 mt-24">
                <button className="btn btn-industrial" onClick={() => go("event", { id: "ss-main" })}>See Saturday →</button>
                <button className="btn-industrial btn" style={{background:"transparent",border:"1px solid var(--bone)"}} onClick={() => go("event", { id: "adams-warehouse" })}>
                  Ready for harder? →
                </button>
              </div>
            </div>
            <div style={{ flex: "1 1 380px" }}>
              <div className="hero-art" style={{ height: 320 }} />
            </div>
          </div>
        </div>
      </section>

      {/* Footer — scene guide */}
      <section className="container" style={{ padding: "64px 40px" }}>
        <div className="row gap-32" style={{ flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 300px" }}>
            <div className="t-kicker mb-12">THE SCENE, EXPLAINED</div>
            <h3 className="t-h3" style={{ fontStyle: "italic" }}>No gatekeeping, just good info.</h3>
            <p className="t-body text-muted mt-12">
              What's the difference between <Gloss term="b2b" />, a <Gloss term="hybrid set" />, and a{" "}
              <Gloss term="closing set" />? Hover any underlined term to find out. No quiz at the end.
            </p>
          </div>
          <div style={{ flex: "1 1 300px" }}>
            <div className="t-kicker mb-12">FAIR-PRICE CAP</div>
            <h3 className="t-h3" style={{ fontStyle: "italic" }}>Face value + 10%, max.</h3>
            <p className="t-body text-muted mt-12">
              Dutch law, and our rule. Sellers can't gouge, buyers know what fair looks like,
              the scene keeps its door open to more than just the people who refreshed fastest.
            </p>
          </div>
          <div style={{ flex: "1 1 300px" }}>
            <div className="t-kicker mb-12">IF IT DOESN'T SCAN</div>
            <h3 className="t-h3" style={{ fontStyle: "italic" }}>Full refund, same night.</h3>
            <p className="t-body text-muted mt-12">
              Every resale ticket gets a fresh QR at the door. If it fails, we refund you on the spot
              and the seller doesn't get paid. That's it.
            </p>
          </div>
        </div>
      </section>
    </Page>
  );
}
Object.assign(window, { HomeScreen });
