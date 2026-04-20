// Sell flow — B + C combo: educational trust-building + add-a-note
function SellScreen({ go, tweaks }) {
  const [step, setStep] = useState(1);
  const [price, setPrice] = useState(65);
  const [note, setNote] = useState("Got stuck with a work trip — ticket is fresh, bought day one. English/NL both fine. x");
  const face = 65, cap = 71.50;

  const fee = Math.round(price * 0.05 * 100) / 100;
  const payout = Math.round((price - fee) * 100) / 100;
  const overCap = price > cap;

  return (
    <Page>
      <Nav route="sell" go={go} alerts={2} />

      <section className="container-narrow" style={{ paddingTop: 40 }}>
        <Crumbs go={go} items={[{ label: "Sell a ticket" }]} />

        {step === 1 && (
          <>
            <h1 className="t-h1 mt-20" style={{fontSize:64}}><em>Selling here</em> is pretty chill.</h1>
            <p className="t-body text-muted mt-16" style={{maxWidth: 560}}>
              No bidding wars. No shadowy brokers. Your ticket, at a fair price, to another fan.
              Here's exactly how it works.
            </p>

            <div className="card mt-32" style={{padding: 28}}>
              <div className="t-kicker mb-16">HOW IT WORKS · 4 STEPS</div>
              <div className="col gap-16">
                {[
                  { n: "01", t: "List your ticket.", s: "Set a price at or below the cap (face + 10%). Dutch law — not us being mean." },
                  { n: "02", t: "Buyer pays. Ticket is held.", s: "We invalidate your original QR and issue the buyer a fresh one." },
                  { n: "03", t: "Buyer scans in at the door.", s: "If they don't make it or the scan fails, we refund them — you keep your ticket." },
                  { n: "04", t: "You get paid 3 days after the event.", s: "€NL IBAN payout. 95% of the sale, we take 5% to run the thing." },
                ].map(x => (
                  <div key={x.n} className="row gap-16" style={{alignItems:"flex-start"}}>
                    <div className="t-mono" style={{fontSize: 20, fontWeight: 700, minWidth: 44}}>{x.n}</div>
                    <div>
                      <div style={{fontFamily:"var(--serif)", fontSize: 22, fontStyle:"italic"}}>{x.t}</div>
                      <div className="t-small mt-4">{x.s}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button className="btn btn-primary btn-lg mt-32" onClick={() => setStep(2)}>List my ticket →</button>
          </>
        )}

        {step === 2 && (
          <>
            <h1 className="t-h2 mt-20" style={{fontStyle:"italic"}}>Which ticket, and for how much?</h1>

            <div className="card mt-24" style={{padding: 28}}>
              <div className="t-kicker mb-8">1 · TICKET</div>
              <div className="row between center" style={{
                background: "var(--cream-2)", padding: 16, borderRadius: 8
              }}>
                <div>
                  <div style={{fontWeight:600}}>Skirts & Sparkles · Sat weekend pass</div>
                  <div className="readout mt-4">face €{face} · 1 ticket</div>
                </div>
                <span className="chip chip-ink">selected</span>
              </div>
            </div>

            <div className="card mt-16" style={{padding: 28}}>
              <div className="row between" style={{alignItems:"baseline"}}>
                <div className="t-kicker mb-8">2 · YOUR PRICE</div>
                <div className="readout">cap: €{cap.toFixed(2)}</div>
              </div>
              <div className="row gap-12 center mt-8">
                <div style={{fontFamily:"var(--serif)", fontSize: 56, fontStyle:"italic", lineHeight:1}}>€</div>
                <input
                  type="number"
                  value={price}
                  onChange={e => setPrice(parseFloat(e.target.value) || 0)}
                  style={{
                    fontFamily:"var(--serif)", fontStyle:"italic", fontSize: 56,
                    border: "none", outline: "none", background: "transparent",
                    width: 180, padding: 0, color: "var(--ink)",
                    borderBottom: "2px solid var(--ink)"
                  }}
                />
              </div>
              <div className="mt-16">
                <FairPriceLadder price={Math.min(price, cap)} face={face} cap={cap} />
              </div>
              {overCap && (
                <div className="card mt-16" style={{background:"#fde8e3", borderColor:"var(--ember)", padding: 16}}>
                  <div style={{fontFamily:"var(--serif)", fontSize: 20, fontStyle:"italic"}}>
                    €{price} is above the cap.
                  </div>
                  <div className="t-small mt-4">
                    Dutch law caps resale at face + 10%. It keeps fans coming back. Try €{cap.toFixed(2)}?
                  </div>
                  <button className="btn btn-ghost btn-sm mt-12" onClick={() => setPrice(cap)}>Set to cap</button>
                </div>
              )}
              {price === face && (
                <div className="t-hand mt-12" style={{color:"var(--safe)"}}>at face value — sells fastest ✓</div>
              )}
            </div>

            {/* C: note */}
            <div className="card mt-16" style={{padding: 28}}>
              <div className="t-kicker mb-8">3 · A NOTE FOR YOUR BUYER <span style={{opacity:0.6}}>(OPTIONAL)</span></div>
              <div className="t-small text-muted mb-12">Humanises the sale. Tickets with a note sell <strong style={{color:"var(--ember)"}}>2.4× faster</strong>.</div>
              <textarea
                value={note}
                onChange={e => setNote(e.target.value.slice(0,240))}
                rows="3"
                style={{
                  width: "100%",
                  padding: 14,
                  border: "1px solid rgba(26,18,11,0.2)",
                  borderRadius: 8,
                  fontFamily: "var(--serif)",
                  fontStyle: "italic",
                  fontSize: 17,
                  background: "#fffbe8",
                  color: "var(--ink)",
                  resize: "vertical",
                }}
              />
              <div className="readout text-right mt-4">{note.length}/240</div>
            </div>

            {/* Payout breakdown */}
            <div className="card-industrial mt-16" style={{padding: 20}}>
              <div className="t-mono-xs" style={{color:"var(--signal)"}}>PAYOUT · 3 DAYS AFTER EVENT</div>
              <div className="col gap-6 mt-12" style={{fontFamily:"var(--mono)", fontSize: 13}}>
                <div className="row between"><span>Your ask</span><span>€{price.toFixed(2)}</span></div>
                <div className="row between" style={{opacity:0.6}}><span>Platform fee (5%)</span><span>−€{fee.toFixed(2)}</span></div>
                <div className="row between" style={{paddingTop:8, borderTop:"1px solid var(--grid)", fontWeight:700, fontSize:15}}>
                  <span>You receive</span><span>€{payout.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <button className="btn btn-primary btn-lg btn-full mt-24" onClick={() => setStep(3)} disabled={overCap}>
              List it · takes 90 seconds
            </button>
          </>
        )}

        {step === 3 && (
          <div style={{textAlign:"center", paddingTop: 40, paddingBottom: 120}}>
            <div className="t-kicker" style={{color:"var(--ember)"}}>LIVE · JUST NOW</div>
            <h1 className="t-h1 mt-12" style={{fontSize: 72}}><em>Listed.</em></h1>
            <p className="t-hand mt-8" style={{fontSize:24}}>a fellow fan will be along.</p>
            <div className="card mt-24" style={{padding: 24, textAlign:"left"}}>
              <div className="row between"><div>Ticket</div><div className="t-mono">€{price.toFixed(2)}</div></div>
              <div className="row between"><div>You'll receive</div><div className="t-mono">€{payout.toFixed(2)}</div></div>
              <div className="row between"><div>Payout</div><div className="t-mono">Mon 27 May</div></div>
              {note && (
                <div className="mt-16">
                  <div className="t-mono-xs text-muted mb-4">YOUR NOTE</div>
                  <div className="bubble">"{note}"</div>
                </div>
              )}
            </div>
            <div className="row gap-12 mt-24" style={{justifyContent:"center", flexWrap:"wrap"}}>
              <button className="btn btn-primary" onClick={() => go("account")}>Go to My tickets</button>
              <button className="btn btn-ghost" onClick={() => go("home")}>Back home</button>
            </div>
          </div>
        )}
      </section>
    </Page>
  );
}
Object.assign(window, { SellScreen });
