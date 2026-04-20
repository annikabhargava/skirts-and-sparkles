// Empty + error states — B + C combo
function EmptyScreen({ go, tweaks }) {
  const [state, setState] = useState("soldout"); // soldout | declined | search

  return (
    <Page>
      <Nav route="home" go={go} alerts={2} />

      <section className="container" style={{paddingTop: 40}}>
        <div className="t-kicker">EDGE CASES</div>
        <h1 className="t-h1 mt-4" style={{fontSize: 52}}><em>Where most sites ship garbage.</em></h1>
        <p className="t-body text-muted mt-12" style={{maxWidth: 560}}>Three of the moments a ticket site lives or dies on. Voice: warm for soft failures, cool for money moments.</p>

        <div className="row gap-8 mt-24" style={{flexWrap:"wrap"}}>
          {[
            {id:"soldout", n:"Sold-out → alert pivot"},
            {id:"declined", n:"Payment declined"},
            {id:"search", n:"Empty search"},
          ].map(s => (
            <button key={s.id}
              className={"btn btn-sm " + (state === s.id ? "btn-primary" : "btn-ghost")}
              onClick={() => setState(s.id)}>{s.n}</button>
          ))}
        </div>
      </section>

      <section className="container" style={{paddingTop: 32, paddingBottom: 80}}>
        {state === "soldout" && (
          <div style={{background: "var(--black)", color: "var(--bone)", padding: "64px 48px", borderRadius: 4}}>
            <div className="t-kicker" style={{color: "var(--signal)"}}>ADAM'S WAREHOUSE · 31 MAY · STATUS 00/00</div>
            <h2 className="t-h1 mt-12" style={{color:"var(--bone)", fontSize: 72}}><em>All tickets sold.</em></h2>
            <div className="t-hand mt-8" style={{color: "var(--gold)", fontSize: 26}}>not the end of the story.</div>

            <div className="row gap-32 mt-32" style={{flexWrap:"wrap"}}>
              <div style={{flex: "1 1 300px"}}>
                <div style={{fontFamily:"var(--serif)", fontSize: 96, fontStyle:"italic", lineHeight: 1}}>72%</div>
                <div className="readout mt-4">of tickets for this event reappear in the last 48 hours</div>
                <div className="t-small mt-8" style={{color: "var(--steel)"}}>Life gets in the way, people resell at face. We'll ping you the second one lists.</div>
                <button className="btn btn-ember btn-lg mt-24">Alert me · it's free</button>
              </div>
              <div style={{flex: "1 1 300px"}}>
                <div className="card-industrial" style={{padding: 20}}>
                  <div className="t-mono-xs" style={{color:"var(--signal)"}}>WHAT YOU'LL GET</div>
                  <div className="col gap-8 mt-12" style={{fontFamily:"var(--mono)", fontSize: 12, lineHeight: 1.6}}>
                    <div>01 · 1 email the moment one lists</div>
                    <div>02 · 1 push notification</div>
                    <div>03 · 2-minute head start, first come</div>
                  </div>
                </div>
                <div className="t-hand mt-16" style={{color: "var(--gold)"}}>no spam. promise on our mother. ✦</div>
              </div>
            </div>
          </div>
        )}

        {state === "declined" && (
          <div className="card" style={{padding: 48, maxWidth: 560}}>
            <div className="chip chip-ember">something to sort</div>
            <h2 className="t-h2 mt-16" style={{fontStyle:"italic"}}>Your bank declined this card.</h2>
            <p className="t-body mt-12">
              No charge was made. The seller's holding your ticket for <strong>9 more minutes</strong>.
            </p>
            <div className="col gap-8 mt-20">
              <div style={{padding: 14, border: "1px solid rgba(26,18,11,0.1)", borderRadius: 8, fontSize: 14}}>① A different card</div>
              <div style={{padding: 14, border: "1px solid rgba(26,18,11,0.1)", borderRadius: 8, fontSize: 14}}>② iDEAL (most NL banks — usually just works)</div>
              <div style={{padding: 14, border: "1px solid rgba(26,18,11,0.1)", borderRadius: 8, fontSize: 14}}>③ Apple Pay / Google Pay</div>
            </div>
            <div className="row gap-12 mt-24">
              <button className="btn btn-primary">Try again</button>
              <button className="btn btn-ghost">Give up this ticket</button>
            </div>
            <div className="t-hand mt-12" style={{color:"var(--muted)"}}>no charge was made. zero.</div>
          </div>
        )}

        {state === "search" && (
          <div style={{maxWidth: 720}}>
            <div className="t-kicker">YOU SEARCHED</div>
            <h2 className="t-h2 mt-4" style={{fontStyle:"italic"}}>Nothing for "Amelie Lens" this week.</h2>
            <div className="t-hand mt-8" style={{fontSize: 22, color:"var(--ember)"}}>but she's in Rotterdam on 14 June 👀</div>

            <button className="btn btn-ember btn-lg mt-24">See Rotterdam show →</button>

            <div className="rule-ind mt-40" data-label="OR · SIMILAR THIS WEEK"/>
            <div className="col gap-12">
              <div className="card">
                <div className="row between center">
                  <div>
                    <div style={{fontFamily:"var(--serif)", fontSize: 22, fontStyle:"italic"}}>Adam's Warehouse · Closing</div>
                    <div className="readout mt-4">Sat · hard techno · sold out, 34 resale</div>
                  </div>
                  <button className="btn btn-ghost btn-sm">See →</button>
                </div>
              </div>
              <div className="card">
                <div className="row between center">
                  <div>
                    <div style={{fontFamily:"var(--serif)", fontSize: 22, fontStyle:"italic"}}>De School · b2b night</div>
                    <div className="readout mt-4">Sat · industrial · from €42</div>
                  </div>
                  <button className="btn btn-ghost btn-sm">See →</button>
                </div>
              </div>
            </div>

            <div className="card mt-24" style={{background:"var(--cream-2)"}}>
              <div className="row between center" style={{flexWrap:"wrap", gap: 12}}>
                <div style={{fontFamily:"var(--serif)", fontSize: 18, fontStyle:"italic"}}>Turn on an alert for <em>Amelie Lens in Amsterdam</em> →</div>
                <button className="btn btn-primary btn-sm">Alert me</button>
              </div>
            </div>
          </div>
        )}
      </section>
    </Page>
  );
}
Object.assign(window, { EmptyScreen });
