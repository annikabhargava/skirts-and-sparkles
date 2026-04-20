// My tickets + alerts — Wireframe B (checklist mode, day-of)
function AccountScreen({ go, tweaks }) {
  const [checked, setChecked] = useState({ qr: true, earplugs: false, cash: false, shoes: false, home: false });
  const toggle = k => setChecked(c => ({...c, [k]: !c[k]}));

  return (
    <Page>
      <Nav route="account" go={go} alerts={2} />

      <section className="container" style={{paddingTop: 40}}>
        <Crumbs go={go} items={[{ label: "My tickets" }]} />

        <div className="row between center mt-20" style={{flexWrap:"wrap", gap: 16}}>
          <h1 className="t-h1" style={{fontSize: 64}}><em>Tonight,</em> your first one.</h1>
          <div className="t-hand" style={{fontSize: 22}}>✦ doors in 4h 12m</div>
        </div>
      </section>

      <section className="container" style={{paddingTop: 32, paddingBottom: 40}}>
        <div style={{display:"grid", gridTemplateColumns:"1.2fr 1fr", gap: 32, alignItems:"flex-start"}}>
          {/* Tonight's ticket */}
          <div>
            <div className="card" style={{padding: 28, background: "var(--ink)", color: "var(--cream)", border: "none"}}>
              <div className="t-kicker" style={{color:"var(--gold)"}}>TONIGHT · 22:00 · GATE B</div>
              <h2 className="t-h2 mt-12" style={{color:"var(--cream)", fontStyle:"italic"}}>Skirts & Sparkles</h2>
              <div className="readout mt-4" style={{color:"rgba(253,244,232,0.6)"}}>NDSM werf · 12 min ferry</div>

              <div className="mt-24" style={{
                display:"flex", justifyContent:"center", alignItems:"center",
                background: "white", borderRadius: 12, padding: 20
              }}>
                <div style={{
                  width: 220, height: 220,
                  backgroundImage: `
                    radial-gradient(circle at 12% 12%, #000 0 28px, transparent 28px),
                    radial-gradient(circle at 88% 12%, #000 0 28px, transparent 28px),
                    radial-gradient(circle at 12% 88%, #000 0 28px, transparent 28px),
                    repeating-conic-gradient(#000 0 8deg, transparent 8deg 16deg),
                    repeating-linear-gradient(90deg, #000 0 6px, transparent 6px 12px),
                    repeating-linear-gradient(0deg, #000 0 6px, transparent 6px 12px)
                  `,
                  backgroundBlendMode: "multiply",
                  position: "relative"
                }}>
                  <div style={{position:"absolute", inset: 8, border:"6px solid white", pointerEvents:"none"}}/>
                </div>
              </div>
              <div className="row between center mt-16">
                <div className="t-mono" style={{fontSize: 11, color:"rgba(253,244,232,0.6)"}}>CODE · SSP-2026-24M-9F3L · FRESH</div>
                <button className="btn btn-industrial btn-sm" style={{background:"var(--cream)", color:"var(--ink)"}}>Full-screen QR</button>
              </div>
            </div>

            <div className="row gap-12 mt-16">
              <button className="btn btn-ghost">Add to Apple Wallet</button>
              <button className="btn btn-ghost">Problem at the door?</button>
            </div>
          </div>

          {/* First-festival checklist */}
          <div>
            <div className="t-kicker mb-12" style={{color:"var(--ember)"}}>FIRST FESTIVAL ✦ CHECKLIST</div>
            <div className="col gap-8">
              {[
                { id: "qr", t: "QR ticket · ready", s: "tap above to show at the gate" },
                { id: "earplugs", t: "Earplugs · bring a pair", s: "hearing is one-use. free at the bar while they last." },
                { id: "cash", t: "€10 cash · coat check", s: "ATM at the ferry terminal" },
                { id: "shoes", t: "Shoes you can dance in 6h", s: "warm inside — layer light" },
                { id: "home", t: "Way home · night bus 397", s: "06:12 from NDSM · also OV-bike" },
              ].map(x => (
                <div key={x.id} className="check-row" onClick={() => toggle(x.id)} style={{cursor:"pointer"}}>
                  <div className={"check-box " + (checked[x.id] ? "on" : "")} />
                  <div className="col gap-4" style={{flex:1}}>
                    <div style={{fontWeight:600, fontSize:14, textDecoration: checked[x.id] ? "line-through" : "none", opacity: checked[x.id] ? 0.6 : 1}}>{x.t}</div>
                    <div className="t-small">{x.s}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming + alerts */}
      <section className="container" style={{paddingBottom: 40}}>
        <div className="rule-ind" data-label="COMING UP"/>
        <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))", gap: 20}}>
          <div className="card">
            <div className="t-kicker mb-8">IN 11 DAYS · SAT 31 MAY</div>
            <div style={{fontFamily:"var(--serif)", fontSize: 24, fontStyle:"italic"}}>Adam's Warehouse · Closing</div>
            <div className="t-small mt-4">QR arrives <strong>Wed 4 Jun, 20:00</strong></div>
            <div className="row gap-8 mt-12">
              <span className="chip chip-warn">resale · €64 paid</span>
              <span className="chip">Lotte · verified</span>
            </div>
          </div>

          <div className="card">
            <div className="t-kicker mb-8">IN 17 DAYS · SAT 7 JUN</div>
            <div style={{fontFamily:"var(--serif)", fontSize: 24, fontStyle:"italic"}}>De School b2b night</div>
            <div className="t-small mt-4">QR arrives <strong>Thu 5 Jun, 20:00</strong></div>
            <div className="row gap-8 mt-12">
              <span className="chip chip-safe">face value · €45</span>
            </div>
          </div>
        </div>

        <div className="rule-ind mt-32" data-label="ALERTS · 2 ACTIVE"/>
        <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))", gap: 20}}>
          <div className="card" style={{background: "var(--cream-2)"}}>
            <div className="row between center">
              <div>
                <div style={{fontFamily:"var(--serif)", fontSize: 20, fontStyle:"italic"}}>Awakenings · 22 Jun</div>
                <div className="readout">alert on · since 3 May</div>
              </div>
              <span className="chip chip-ember">3 just listed!</span>
            </div>
            <button className="btn btn-primary btn-sm mt-12" onClick={() => go("listing", { id: "adams-warehouse" })}>See 3 tickets →</button>
          </div>
          <div className="card">
            <div className="row between center">
              <div>
                <div style={{fontFamily:"var(--serif)", fontSize: 20, fontStyle:"italic"}}>DGTL Amsterdam · 5 Apr</div>
                <div className="readout">alert on · waiting</div>
              </div>
              <button className="link-u t-small">turn off</button>
            </div>
          </div>
        </div>
      </section>
    </Page>
  );
}
Object.assign(window, { AccountScreen });
