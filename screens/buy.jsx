// Buy flow — B + C combo: 3-step guardrail (B) → "You're in" confirmation (C)
function BuyScreen({ go, params, tweaks }) {
  const ev = window.DATA.events.find(e => e.id === params.id) || window.DATA.events[0];
  const listing = params.listing ? window.DATA.listings.find(l => l.id === params.listing) : null;
  const price = listing ? listing.price : ev.priceFrom;
  const isResale = !!listing;

  const [step, setStep] = useState(1); // 1 confirm, 2 pay, 3 done
  const [method, setMethod] = useState("ideal");
  const [hold, setHold] = useState(9*60); // 9 min hold seconds
  const [firstTime, setFirstTime] = useState(true);

  useEffect(() => {
    if (step !== 2) return;
    const t = setInterval(() => setHold(h => Math.max(0, h-1)), 1000);
    return () => clearInterval(t);
  }, [step]);

  const mm = String(Math.floor(hold/60)).padStart(2,'0');
  const ss = String(hold%60).padStart(2,'0');

  return (
    <Page>
      <Nav route="home" go={go} alerts={2} />

      <section className="container-narrow" style={{ paddingTop: 40 }}>
        <Crumbs go={go} items={[
          { label: "Events", to: "home" },
          { label: ev.title, to: "event", params: { id: ev.id } },
          { label: "Checkout" }
        ]} />

        {/* Step indicator */}
        {step < 3 && (
          <div className="row gap-8 mt-24">
            {["Confirm","Pay","Done"].map((s,i) => (
              <div key={s} className="row center gap-8" style={{opacity: i+1 <= step ? 1 : 0.4}}>
                <div style={{
                  width: 26, height: 26, borderRadius: "50%",
                  background: i+1 <= step ? "var(--ink)" : "transparent",
                  color: i+1 <= step ? "var(--cream)" : "var(--ink)",
                  border: "1.5px solid var(--ink)",
                  display:"flex", alignItems:"center", justifyContent:"center",
                  fontFamily:"var(--mono)", fontSize: 12, fontWeight: 700
                }}>{i+1}</div>
                <div className="t-mono-xs" style={{color: i+1 === step ? "var(--ink)" : "var(--muted)"}}>{s}</div>
                {i < 2 && <div style={{width:40, height:1, background:"rgba(26,18,11,0.2)", marginLeft:8}}/>}
              </div>
            ))}
          </div>
        )}
      </section>

      {step === 1 && (
        <section className="container-narrow" style={{ paddingTop: 32, paddingBottom: 80 }}>
          <h1 className="t-h1" style={{fontSize:56}}><em>Quick check</em> before we take your money.</h1>

          <div className="card mt-24" style={{ padding: 28 }}>
            <div className="t-kicker mb-12">YOU'RE BUYING</div>
            <div style={{fontFamily:"var(--serif)", fontSize:28, fontStyle:"italic"}}>{ev.title}</div>
            <div className="readout mt-4">{ev.date.full} · {ev.time} · {ev.venue}</div>

            <div className="mt-24" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div>
                <div className="t-mono-xs text-muted">DATE</div>
                <div style={{fontWeight:600, marginTop:4}}>{ev.date.full}</div>
                <div className="t-small text-muted">not Friday or Sunday — check once.</div>
              </div>
              <div>
                <div className="t-mono-xs text-muted">NAME ON TICKET</div>
                <div style={{fontWeight:600, marginTop:4}}>Goes in by QR</div>
                <div className="t-small text-muted">no ID check at the door.</div>
              </div>
              <div>
                <div className="t-mono-xs text-muted">IF IT DOESN'T SCAN</div>
                <div style={{fontWeight:600, marginTop:4, color:"var(--safe)"}}>Full refund, same night.</div>
                <div className="t-small text-muted">seller doesn't get paid either.</div>
              </div>
              <div>
                <div className="t-mono-xs text-muted">QR DELIVERY</div>
                <div style={{fontWeight:600, marginTop:4}}>Thu 22 May, 20:00</div>
                <div className="t-small text-muted">48 hours before doors.</div>
              </div>
            </div>
          </div>

          {isResale && firstTime && tweaks.newcomerMode && (
            <div className="card mt-16" style={{ background: "var(--cream-2)", borderColor: "var(--ember)", borderWidth: 1 }}>
              <div className="t-kicker mb-8" style={{color:"var(--ember)"}}>FIRST TIME BUYING FAN-TO-FAN?</div>
              <div className="t-body">
                Here's the short version: we hold your money until you scan in. If the QR doesn't work,
                you get every cent back, same-day. That's the whole deal.
              </div>
            </div>
          )}

          <div className="row gap-12 mt-24">
            <button className="btn btn-primary btn-lg" onClick={() => setStep(2)}>Yes, continue to pay →</button>
            <button className="btn btn-ghost" onClick={() => go("event", { id: ev.id })}>Cancel</button>
          </div>
        </section>
      )}

      {step === 2 && (
        <section className="container-narrow" style={{ paddingTop: 32, paddingBottom: 80 }}>
          <div className="row between center" style={{flexWrap:"wrap", gap: 12}}>
            <h1 className="t-h2" style={{fontStyle:"italic"}}>Pay</h1>
            {isResale && (
              <div className="chip chip-warn" style={{padding: "8px 12px"}}>
                Seller holding this ticket · {mm}:{ss}
              </div>
            )}
          </div>

          <div className="card mt-20" style={{padding: 28}}>
            <div className="t-kicker mb-12">ORDER</div>
            <div className="row between"><div>Ticket · {ev.title}</div><div className="t-mono">€{price.toFixed(2)}</div></div>
            <div className="row between"><div>Buyer protection</div><div className="t-mono">included</div></div>
            <div className="row between mt-8" style={{paddingTop:8, borderTop:"1px solid rgba(26,18,11,0.12)", fontWeight:700}}>
              <div>Total</div>
              <div className="t-mono" style={{fontSize:16}}>€{price.toFixed(2)}</div>
            </div>
          </div>

          <div className="mt-24">
            <div className="t-mono-xs text-muted mb-12">PAY WITH</div>
            <div className="row gap-8" style={{flexWrap:"wrap"}}>
              {[{id:"ideal",n:"iDEAL"},{id:"card",n:"Card"},{id:"apple",n:"Apple Pay"},{id:"bancontact",n:"Bancontact"}].map(m => (
                <button key={m.id}
                  className={"btn " + (method === m.id ? "btn-primary" : "btn-ghost")}
                  onClick={() => setMethod(m.id)}>{m.n}</button>
              ))}
            </div>
          </div>

          <div className="card-industrial mt-24" style={{padding: 20}}>
            <div className="t-mono-xs" style={{color:"var(--signal)"}}>WHAT HAPPENS NEXT</div>
            <div className="col gap-8 mt-12" style={{fontFamily:"var(--mono)", fontSize: 13, lineHeight: 1.6}}>
              <div>01 · We hold the ticket for you{isResale ? ` · ${mm}:${ss} remaining` : ""}</div>
              <div>02 · 48h before doors, a fresh QR lands in My tickets</div>
              <div>03 · You scan in {isResale ? "· then we pay the seller" : ""}</div>
            </div>
          </div>

          <button className="btn btn-ember btn-lg btn-full mt-24" onClick={() => setStep(3)}>
            Pay €{price.toFixed(2)} · refunded in full if it doesn't scan
          </button>
          <div className="t-hand text-center mt-8" style={{color:"var(--muted)"}}>zero drama · promise</div>
        </section>
      )}

      {step === 3 && (
        <section className="container-narrow" style={{ paddingTop: 64, paddingBottom: 120, textAlign: "center" }}>
          <div className="t-kicker" style={{color:"var(--ember)"}}>CONFIRMATION · {Date.now().toString(36).slice(-6).toUpperCase()}</div>
          <h1 className="t-h1 mt-12" style={{fontSize: 96}}><em>You're in.</em></h1>
          <p className="t-hand mt-8" style={{fontSize: 26}}>{ev.date.full} · {ev.time.split("–")[0]}</p>

          <div className="card mt-32" style={{padding: 28, textAlign: "left"}}>
            <div className="t-kicker mb-8">YOUR QR ARRIVES</div>
            <div style={{fontFamily:"var(--serif)", fontSize: 28, fontStyle:"italic"}}>Thu 22 May · 20:00</div>
            <div className="t-small mt-4">via email · in <a className="link-u" onClick={() => go("account")}>My tickets</a> · push notification</div>
          </div>

          {tweaks.newcomerMode && (
            <div className="card mt-16" style={{padding: 28, textAlign: "left", background:"var(--cream-2)"}}>
              <div className="row between center" style={{flexWrap:"wrap", gap: 12}}>
                <div>
                  <div className="t-kicker mb-8" style={{color:"var(--ember)"}}>FIRST FESTIVAL? ✦</div>
                  <div style={{fontFamily:"var(--serif)", fontSize: 22, fontStyle:"italic"}}>We'll send a "what to bring" list Friday.</div>
                  <div className="t-small mt-4">Earplugs, coat cash, shoes, how to get home at 6am. Opt out anytime.</div>
                </div>
                <div className="row gap-8">
                  <button className="btn btn-primary btn-sm">Keep on</button>
                  <button className="btn btn-ghost btn-sm">No thanks</button>
                </div>
              </div>
            </div>
          )}

          <div className="row gap-12 mt-32 center" style={{justifyContent:"center", flexWrap:"wrap"}}>
            <button className="btn btn-ember btn-lg">Add to wallet</button>
            <button className="btn btn-ghost">Share with friends going</button>
          </div>

          <div className="t-hand mt-24" style={{color:"var(--muted)"}}>see you in there ✦</div>
        </section>
      )}
    </Page>
  );
}
Object.assign(window, { BuyScreen });
