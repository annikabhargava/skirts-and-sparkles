// Mobile "in the queue" — Wireframe C (pre-event handrail)
function MobileScreen({ go, tweaks }) {
  const [view, setView] = useState("handrail"); // handrail | qr | help

  return (
    <Page>
      <Nav route="mobile" go={go} alerts={2} />

      <section className="container" style={{paddingTop: 40, paddingBottom: 40}}>
        <div className="row between center" style={{flexWrap:"wrap", gap: 16}}>
          <div>
            <div className="t-kicker">MOBILE PREVIEW · IN THE QUEUE</div>
            <h1 className="t-h1 mt-4" style={{fontSize: 52}}><em>On your way?</em></h1>
          </div>
          <div className="row gap-8">
            {[{id:"handrail",n:"Pre-event"},{id:"qr",n:"At the gate"},{id:"help",n:"Help mode"}].map(v => (
              <button key={v.id}
                className={"btn btn-sm " + (view === v.id ? "btn-primary" : "btn-ghost")}
                onClick={() => setView(v.id)}>{v.n}</button>
            ))}
          </div>
        </div>

        <div className="row gap-32 mt-32" style={{justifyContent: "center", flexWrap: "wrap"}}>
          <div className="phone">
            <div className="phone-screen dark" style={{padding: "60px 20px 24px"}}>
              {view === "handrail" && (
                <>
                  <div className="t-mono-xs" style={{color: "var(--steel)"}}>TONIGHT · 20:45 · 2H TO DOORS</div>
                  <h2 className="t-h3 mt-8" style={{fontStyle:"italic", color:"var(--bone)"}}>Skirts & Sparkles</h2>
                  <div className="readout mt-4">NDSM werf · gate B</div>

                  <div className="col gap-8 mt-24">
                    {[
                      { i: "🚇", t: "Ferry F3 · 21:02", s: "leaves Centraal · free · every 15m" },
                      { i: "🌧", t: "Rain starts ~23:40", s: "hood advised" },
                      { i: "💶", t: "Coat check €10 cash", s: "ATM at ferry terminal" },
                      { i: "👂", t: "Earplugs in your bag?", s: "hearing is one-use", warn: true },
                      { i: "🚌", t: "Way home · bus 397", s: "06:12 from NDSM" },
                    ].map((x, i) => (
                      <div key={i} style={{
                        background: x.warn ? "rgba(232,168,56,0.15)" : "rgba(255,255,255,0.05)",
                        border: "1px solid " + (x.warn ? "var(--warn)" : "rgba(255,255,255,0.1)"),
                        padding: 12, borderRadius: 8,
                        display: "flex", gap: 12, alignItems: "center"
                      }}>
                        <div style={{fontSize: 18}}>{x.i}</div>
                        <div>
                          <div style={{fontWeight: 600, fontSize: 13, color: "var(--bone)"}}>{x.t}</div>
                          <div style={{fontSize: 11, color: "var(--steel)"}}>{x.s}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button className="btn btn-ember btn-full mt-24" onClick={() => setView("qr")}>Show my QR</button>
                  <div className="t-hand text-center mt-12" style={{color: "var(--gold)"}}>see you in there ✦</div>
                </>
              )}

              {view === "qr" && (
                <>
                  <div className="row between center">
                    <div className="t-mono-xs" style={{color:"var(--steel)"}}>TONIGHT · 23:12</div>
                    <span className="chip chip-industrial" style={{color:"var(--safe)", borderColor:"var(--safe)"}}>offline ✓</span>
                  </div>
                  <h2 className="t-h3 mt-8" style={{fontStyle:"italic", color:"var(--bone)"}}>Skirts & Sparkles</h2>
                  <div className="readout mt-4">Saturday main · gate B</div>

                  <div style={{
                    width: 240, height: 240, margin: "32px auto",
                    background: "white", padding: 12, borderRadius: 4,
                    display: "flex", alignItems: "center", justifyContent: "center"
                  }}>
                    <div style={{
                      width: "100%", height: "100%",
                      backgroundImage: `
                        radial-gradient(circle at 14% 14%, #000 0 26px, transparent 26px),
                        radial-gradient(circle at 86% 14%, #000 0 26px, transparent 26px),
                        radial-gradient(circle at 14% 86%, #000 0 26px, transparent 26px),
                        repeating-linear-gradient(90deg, #000 0 5px, transparent 5px 10px),
                        repeating-linear-gradient(0deg, #000 0 5px, transparent 5px 10px)
                      `,
                      backgroundBlendMode: "multiply"
                    }}/>
                  </div>

                  <div className="t-mono-xs text-center" style={{color: "var(--steel)"}}>AUTO-BRIGHTNESS ON · SHAKE TO RE-RENDER</div>

                  <button className="btn-industrial btn btn-full mt-24" style={{background:"transparent", border:"1px solid var(--signal)", color:"var(--signal)"}} onClick={() => setView("help")}>
                    Problem at the door?
                  </button>
                </>
              )}

              {view === "help" && (
                <>
                  <div style={{
                    background: "var(--signal)", color: "white",
                    padding: "6px 12px", display: "inline-block",
                    fontFamily:"var(--mono)", fontSize: 11, textTransform:"uppercase", letterSpacing:"0.1em"
                  }}>help mode</div>
                  <h2 className="t-h3 mt-12" style={{fontStyle:"italic", color:"var(--bone)"}}>QR not scanning?</h2>
                  <div className="t-hand mt-4" style={{color:"var(--gold)"}}>deep breath. we've got you.</div>

                  <div className="col gap-8 mt-24">
                    {[
                      "① Turn brightness to max — try again",
                      "② Show this page to the bouncer",
                      "③ Chat with us · avg reply 28s",
                    ].map((t,i) => (
                      <div key={i} style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        padding: 14, borderRadius: 8,
                        fontSize: 13, color: "var(--bone)"
                      }}>{t}</div>
                    ))}
                    <div style={{
                      background: "var(--signal)", color: "white",
                      padding: 14, borderRadius: 8, fontSize: 13, fontWeight: 600
                    }}>④ Refund in full — not your fault.</div>
                  </div>

                  <button className="btn btn-ember btn-full mt-24">Call support · it's free</button>
                  <div className="t-hand text-center mt-12" style={{color:"var(--gold)"}}>you'll be fine ✦</div>
                </>
              )}
            </div>
          </div>

          <div style={{maxWidth: 360}}>
            <div className="t-kicker mb-12">THE LOGIC</div>
            <h3 className="t-h3" style={{fontStyle:"italic"}}>Three modes, one app.</h3>
            <p className="t-small mt-12">
              <strong>Pre-event</strong> is the concierge — context you didn't know you needed.
              When the event is now, it auto-opens the <strong>QR</strong>. One tap to <strong>Help</strong>
              if anything goes wrong. Works offline. Bright by default.
            </p>
            <p className="t-small mt-12">
              This is the moment where most ticket apps ship garbage. For newcomers especially, it's where the brand's warmth has to show up under pressure.
            </p>
          </div>
        </div>
      </section>
    </Page>
  );
}
Object.assign(window, { MobileScreen });
