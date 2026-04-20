// Event detail — Wireframe B (practical-led, newcomer-safe)
function EventScreen({ go, params, tweaks }) {
  const ev = window.DATA.events.find(e => e.id === params.id) || window.DATA.events[0];

  return (
    <Page>
      <Nav route="home" go={go} alerts={2} />

      <section className="container" style={{ paddingTop: 32, paddingBottom: 16 }}>
        <Crumbs go={go} items={[
          { label: "Events", to: "home" },
          { label: ev.title }
        ]} />
      </section>

      {/* Hero */}
      <section className="container" style={{ paddingBottom: 32 }}>
        <div className="row gap-32" style={{ flexWrap: "wrap", alignItems: "flex-end" }}>
          <div style={{ flex: "1 1 500px" }}>
            <div className="t-kicker mb-12">{ev.date.full.toUpperCase()} · {ev.time} · {ev.venue.toUpperCase()}</div>
            <h1 className="t-h1"><em>{ev.title}</em></h1>
            <p className="t-hand mt-12">{ev.note}</p>
            <div className="row gap-8 mt-16" style={{ flexWrap: "wrap" }}>
              {ev.genres.map(g => <span className="chip" key={g}>{g}</span>)}
              {ev.firstTimerFriendly && <span className="chip chip-safe">first-timer OK</span>}
              {ev.soldOut && <span className="chip chip-warn">sold out</span>}
            </div>
          </div>
          <div style={{ flex: "1 1 380px" }}>
            <div className="hero-art" style={{ height: 280 }} />
          </div>
        </div>
      </section>

      {/* Sold-out pivot OR ticket CTA */}
      {ev.soldOut ? (
        <section style={{ background: "var(--black)", color: "var(--bone)", padding: "48px 0" }}>
          <div className="container">
            <div className="t-kicker" style={{ color: "var(--signal)" }}>STATUS · 00 OF 00</div>
            <h2 className="t-h2 mt-12" style={{ color: "var(--bone)", fontStyle: "italic" }}>
              All official tickets gone. But {ev.resaleCount} fans are reselling right now.
            </h2>
            <div className="row gap-32 mt-24" style={{ flexWrap: "wrap" }}>
              <div>
                <div className="readout" style={{ color: "var(--steel)" }}>AVG RESALE PRICE</div>
                <div style={{ fontFamily: "var(--serif)", fontSize: 48, fontStyle: "italic" }}>€{ev.resaleAvg}</div>
                <div className="readout">face €{ev.face} · cap €{ev.cap}</div>
              </div>
              <div>
                <div className="readout" style={{ color: "var(--steel)" }}>REAPPEAR RATE (LAST 48H)</div>
                <div style={{ fontFamily: "var(--serif)", fontSize: 48, fontStyle: "italic" }}>{Math.round(ev.reappearRate*100)}%</div>
                <div className="readout">turn on alerts, wait</div>
              </div>
              <div>
                <div className="readout" style={{ color: "var(--steel)" }}>ALERTS SET</div>
                <div style={{ fontFamily: "var(--serif)", fontSize: 48, fontStyle: "italic" }}>{ev.alertsSet.toLocaleString()}</div>
                <div className="readout">you won't be alone</div>
              </div>
            </div>
            <div className="row gap-12 mt-24" style={{ flexWrap: "wrap" }}>
              <button className="btn btn-ember btn-lg" onClick={() => go("listing", { id: ev.id })}>
                Browse {ev.resaleCount} resale tickets →
              </button>
              <button className="btn-industrial btn" style={{background:"transparent",border:"1px solid var(--bone)",color:"var(--bone)"}}>
                Alert me the moment one lists
              </button>
            </div>
          </div>
        </section>
      ) : (
        <section style={{ background: "var(--cream-2)", padding: "32px 0", borderTop: "1px solid rgba(26,18,11,0.1)", borderBottom: "1px solid rgba(26,18,11,0.1)" }}>
          <div className="container row between center" style={{ flexWrap: "wrap", gap: 20 }}>
            <div>
              <div className="t-kicker">TICKETS</div>
              <div className="t-h3 mt-4" style={{ fontStyle: "italic" }}>from €{ev.priceFrom} · {ev.ticketsLeft} left</div>
              {tweaks.showPriceCap && <div className="readout mt-4">face €{ev.face} · resale capped at €{ev.cap}</div>}
            </div>
            <div className="row gap-12" style={{ flexWrap: "wrap" }}>
              <button className="btn btn-ghost">Add to calendar</button>
              <button className="btn btn-primary btn-lg" onClick={() => go("buy", { id: ev.id })}>
                Get tickets · from €{ev.priceFrom}
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Practicals — newcomer gold */}
      <section className="container" style={{ paddingTop: 64 }}>
        <div className="t-kicker mb-12">THE PRACTICALS</div>
        <h2 className="t-h2" style={{ fontStyle: "italic" }}>A long, loud Saturday. First one? Read this.</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20, marginTop: 24 }}>
          {[
            { k: "GETTING THERE", t: "NDSM werf", s: "12 min free ferry from Centraal. Runs every 15 min until 03:00." },
            { k: "DOORS & LAST MUSIC", t: "22:00 → 06:00", s: "Doors 22:00. Last music 06:00. In-out not allowed." },
            { k: "WHAT TO WEAR", t: "Shoes you can dance in 6 hours", s: "It's warm inside. Layer light. No strict dress code." },
            { k: "CLOAKROOM", t: "€10 cash", s: "ATM at the ferry terminal. Card sometimes works, cash always." },
            { k: "EARPLUGS", t: "Take them. Really.", s: "Hearing is one-use. Free earplugs at the bar while stocks last." },
            { k: "GETTING HOME", t: "Night bus 397", s: "Leaves every 20 min. Or OV-bike — €3 from Centraal." },
          ].map((x) => (
            <div key={x.k} className="card">
              <div className="t-kicker mb-8">{x.k}</div>
              <div style={{ fontFamily: "var(--serif)", fontSize: 22, fontStyle: "italic" }}>{x.t}</div>
              <div className="t-small mt-8">{x.s}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Timetable */}
      {ev.lineup && (
        <section className="container" style={{ paddingTop: 64 }}>
          <div className="row between" style={{ alignItems: "baseline", flexWrap: "wrap", gap: 12 }}>
            <div>
              <div className="t-kicker mb-8">LINE-UP · 8 ARTISTS · 3 STAGES</div>
              <h2 className="t-h2" style={{ fontStyle: "italic" }}>The music.</h2>
            </div>
            <div className="t-hand">hover an underlined word — plain English, one sentence.</div>
          </div>
          <div className="timetable mt-24">
            <div className="head">Time</div>
            <div className="head">Main</div>
            <div className="head">Dome</div>
            <div className="head">Garden</div>
            {ev.lineup.map((slot, i) => {
              const room = slot.room;
              return (
                <React.Fragment key={i}>
                  <div className="time">{slot.time}</div>
                  <div className={"slot" + (slot.hero ? " hero" : "") + (slot.kind === "closing" ? " ember" : "")}>
                    {room === "Main" ? (slot.gloss ? <span className="gloss" data-gloss={slot.gloss}>{slot.name}</span> : slot.name) : ""}
                  </div>
                  <div className={"slot" + (slot.hero ? " hero" : "")}>
                    {room === "Dome" ? (slot.gloss ? <span className="gloss" data-gloss={slot.gloss}>{slot.name}</span> : slot.name) : ""}
                  </div>
                  <div className={"slot" + (slot.hero ? " hero" : "")}>
                    {room === "Garden" ? (slot.gloss ? <span className="gloss" data-gloss={slot.gloss}>{slot.name}</span> : slot.name) : ""}
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </section>
      )}

      {/* Bottom trust strip */}
      <section className="container" style={{ padding: "64px 40px" }}>
        <div className="row gap-32" style={{ flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 280px" }}>
            <Stat n="100%" label="Refund if your QR doesn't scan" />
          </div>
          <div style={{ flex: "1 1 280px" }}>
            <Stat n={"€" + ev.cap} label="Fair-price cap · resale" />
          </div>
          <div style={{ flex: "1 1 280px" }}>
            <Stat n="48h" label="QR arrives before the event" />
          </div>
        </div>
      </section>

      {!ev.soldOut && (
        <div style={{
          position: "sticky", bottom: 0, background: "var(--cream)",
          borderTop: "1px solid rgba(26,18,11,0.12)", padding: "16px 40px",
          display: "flex", justifyContent: "space-between", alignItems: "center", gap: 20, flexWrap: "wrap"
        }}>
          <div className="readout">{ev.ticketsLeft} tickets left · from <strong style={{color:"var(--ink)"}}>€{ev.priceFrom}</strong></div>
          <button className="btn btn-primary btn-lg" onClick={() => go("buy", { id: ev.id })}>Pay · from €{ev.priceFrom}</button>
        </div>
      )}
    </Page>
  );
}
Object.assign(window, { EventScreen });
