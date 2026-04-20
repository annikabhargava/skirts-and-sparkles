// Ticket listing — A + B + C combo
// A: seller-led trust (verified block prominent)
// B: price-cap ladder (fairness viz)
// C: seller note / conversational bubble
function ListingScreen({ go, params, tweaks }) {
  const ev = window.DATA.events.find(e => e.id === params.id) || window.DATA.events.find(e => e.soldOut);
  const listings = window.DATA.listings;
  const [selected, setSelected] = useState(listings[0].id);
  const active = listings.find(l => l.id === selected);

  return (
    <Page>
      <Nav route="home" go={go} alerts={2} />

      <section className="container" style={{ paddingTop: 32 }}>
        <Crumbs go={go} items={[
          { label: "Events", to: "home" },
          { label: ev.title, to: "event", params: { id: ev.id } },
          { label: "Resale tickets" }
        ]} />
      </section>

      <section className="container" style={{ paddingTop: 24, paddingBottom: 40 }}>
        <div className="row between center" style={{flexWrap:"wrap", gap:20}}>
          <div>
            <div className="t-kicker">RESALE · {listings.length} TICKETS · {ev.date.full.toUpperCase()}</div>
            <h1 className="t-h1 mt-4" style={{fontSize: 56}}><em>{ev.title}</em></h1>
          </div>
          <div className="text-right">
            <div className="readout">AVG</div>
            <div style={{ fontFamily: "var(--serif)", fontSize: 40, fontStyle: "italic" }}>€{ev.resaleAvg}</div>
          </div>
        </div>
      </section>

      <section className="container" style={{ paddingBottom: 80 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 32, alignItems: "flex-start" }}>
          {/* LEFT: list of listings */}
          <div className="col gap-16">
            {listings.map(l => (
              <div
                key={l.id}
                className={"card card-interactive " + (selected === l.id ? "" : "")}
                style={{
                  borderColor: selected === l.id ? "var(--ink)" : "rgba(26,18,11,0.08)",
                  borderWidth: selected === l.id ? 2 : 1,
                  padding: 20,
                }}
                onClick={() => setSelected(l.id)}>
                <div className="row between">
                  <div>
                    <div className="row gap-8 center">
                      <div style={{fontFamily:"var(--serif)", fontSize: 32, fontStyle:"italic", lineHeight:1}}>€{l.price}</div>
                      {l.price < l.face && <span className="chip chip-safe">under face</span>}
                      {l.price === l.face && <span className="chip chip-safe">face value</span>}
                      {l.price > l.face && <span className="chip chip-warn">at cap</span>}
                    </div>
                    <div className="readout mt-4">face €{l.face} · cap €{l.cap}{l.qty > 1 ? ` · ${l.qty} tickets (won't split)` : ""}</div>
                  </div>
                  <div className="text-right">
                    <div style={{ fontWeight: 600, fontSize: 14 }}>{l.seller.name}</div>
                    <div className="readout">{l.seller.sales} sales · ✓</div>
                  </div>
                </div>
                {l.note && (
                  <div className="bubble mt-16" style={{fontSize:15}}>"{l.note}"</div>
                )}
                <div className="readout mt-12">listed {l.listedAgo}</div>
              </div>
            ))}
          </div>

          {/* RIGHT: sticky detail */}
          <div style={{ position: "sticky", top: 100 }}>
            <div className="card" style={{ padding: 28 }}>
              {/* A — seller block */}
              <div className="t-kicker mb-12">TICKET · 1 of {listings.length} · {ev.date.full.toUpperCase()}</div>
              <h2 className="t-h2" style={{ fontStyle: "italic" }}>Weekend pass</h2>
              <div className="readout mt-4">general admission · gate B</div>

              <div className="mt-24">
                <SellerBlock seller={active.seller} />
              </div>

              {/* C — seller note */}
              {active.note && (
                <div className="mt-16">
                  <div className="t-mono-xs text-muted mb-8">NOTE FROM {active.seller.name.toUpperCase()}</div>
                  <div className="bubble">"{active.note}"</div>
                </div>
              )}

              {/* B — price-cap ladder */}
              {tweaks.showPriceCap && (
                <div className="mt-24">
                  <div className="t-mono-xs text-muted mb-12">FAIR-PRICE POSITION</div>
                  <FairPriceLadder price={active.price} face={active.face} cap={active.cap} />
                </div>
              )}

              {/* Pricing summary */}
              <div className="mt-24" style={{ background: "var(--cream-2)", borderRadius: 8, padding: 16 }}>
                <div className="row between"><div className="t-small">Ticket</div><div className="t-mono">€{active.price.toFixed(2)}</div></div>
                <div className="row between"><div className="t-small">Buyer protection</div><div className="t-mono">included</div></div>
                <div className="row between mt-8" style={{paddingTop:8, borderTop:"1px solid rgba(26,18,11,0.12)"}}>
                  <div style={{fontWeight:700}}>Total</div>
                  <div className="t-mono" style={{fontWeight:700, fontSize:16}}>€{active.price.toFixed(2)}</div>
                </div>
              </div>

              <button className="btn btn-primary btn-lg btn-full mt-24" onClick={() => go("buy", { id: ev.id, listing: active.id })}>
                Pay €{active.price} · full refund if it doesn't scan
              </button>
              <div className="t-hand text-center mt-8" style={{color:"var(--muted)"}}>
                your fresh QR arrives 48h before the show
              </div>
            </div>
          </div>
        </div>
      </section>
    </Page>
  );
}
Object.assign(window, { ListingScreen });
