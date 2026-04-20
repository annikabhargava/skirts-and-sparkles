// Strategy pane — voice, tone, trust principles, newcomer angle
(function () {
  const pane = document.getElementById('pane-strategy');
  pane.innerHTML = `
    <h1 class="page-h">The strategy, on one page.</h1>
    <p class="page-sub">before any pixels — what we're designing against.</p>

    <!-- positioning -->
    <div class="strat-card" style="max-width: 920px; background: #fffdf7;">
      <div class="num">01 · POSITIONING</div>
      <h3>A festival site that makes the scene findable — especially if you're new to it.</h3>
      <p style="line-height:1.6;">
        Amsterdam's techno scene is incredible, and it's completely opaque from the outside.
        If you moved here from Delhi or Lagos or São Paulo, you might not know where to start.
        <strong>Skirts & Sparkles</strong> isn't just a festival site with a ticket resale bolted on — it's
        a front door for people who want in but don't know the language yet.
      </p>
      <p style="line-height:1.6;">
        Every other ticket site optimises for "I already know what I want." We optimise for
        <em>"I heard this is a thing, help me."</em> The resale layer is the trust play; the discovery layer is the magic.
      </p>
      <div style="display:flex; gap: 12px; flex-wrap:wrap; margin-top: 14px;">
        <span class="chip filled">primary · festival goers planning their weekend</span>
        <span class="chip">buyers · sold-out rescue</span>
        <span class="chip">sellers · can't make it</span>
        <span class="chip">organisers · list + manage</span>
      </div>
    </div>

    <!-- voice spectrum -->
    <div class="section-h">Voice — where we sit</div>
    <p class="section-sub">
      The brand sits in one position; the tone flexes per context.
      Warm and a little atmospheric on discovery; calm and specific at checkout; generous on errors.
    </p>

    <div class="strat-card" style="max-width: 920px;">
      <div class="spectrum">
        <div class="left">Playful</div>
        <div class="bar"><div class="dot-mark" style="left: 38%"></div></div>
        <div class="right">Serious</div>
      </div>
      <div class="spectrum">
        <div class="left">Formal</div>
        <div class="bar"><div class="dot-mark" style="left: 82%"></div></div>
        <div class="right">Casual</div>
      </div>
      <div class="spectrum">
        <div class="left">Reserved</div>
        <div class="bar"><div class="dot-mark" style="left: 65%"></div></div>
        <div class="right">Enthusiastic</div>
      </div>
      <div class="spectrum">
        <div class="left">Insider</div>
        <div class="bar"><div class="dot-mark" style="left: 22%"></div></div>
        <div class="right">Welcoming</div>
      </div>
      <div class="spectrum">
        <div class="left">Hyped</div>
        <div class="bar"><div class="dot-mark" style="left: 70%"></div></div>
        <div class="right">Matter-of-fact</div>
      </div>
      <p style="margin-top: 16px; font-family: var(--hand); font-size: 22px; color: var(--accent);">
        → Honest · Upbeat · Calm · Peer · Newcomer-friendly
      </p>
    </div>

    <!-- do / don't voice examples -->
    <div class="section-h">Voice in the wild</div>
    <div class="strat-grid">
      <div class="strat-card">
        <div class="num">EMPTY STATE — sold-out event</div>
        <h3>Patient, specific, never hype-y.</h3>
        <div class="dont">"OOPS! 🙈 No tickets left, sorry!!"</div>
        <div class="do">"All tickets sold. About 40% of Adam's Warehouse tickets reappear in the last 72 hours — turn on alerts and we'll ping you the second one lists."</div>
      </div>
      <div class="strat-card">
        <div class="num">ERROR — payment declined</div>
        <h3>Calm. Name the problem. Offer a way out.</h3>
        <div class="dont">"Something went wrong. Please try again."</div>
        <div class="do">"Your bank declined this card. Try a different card or iDEAL — the seller's holding your ticket for 10 more minutes."</div>
      </div>
      <div class="strat-card">
        <div class="num">CHECKOUT — button microcopy</div>
        <h3>Say the thing that quiets the fear.</h3>
        <div class="dont">"Buy now · €58"</div>
        <div class="do">"Pay €58 · Refunded in full if your ticket doesn't scan"</div>
      </div>
      <div class="strat-card">
        <div class="num">DISCOVERY — for newcomers</div>
        <h3>Low jargon. Name the thing.</h3>
        <div class="dont">"ADE-adjacent hard-groove warehouse showcase, 6am finish."</div>
        <div class="do">"Long one. Dark, fast techno. Starts 11pm, ends 6am. First time? Bring earplugs, water, and €10 cash for coat check."</div>
      </div>
      <div class="strat-card">
        <div class="num">SELL FLOW — loss aversion</div>
        <h3>Lead with fairness, not fees.</h3>
        <div class="dont">"List for up to 200% face value."</div>
        <div class="do">"You paid €65. We cap resale at €71.50 — same as face + fees. It's the law here, and it keeps fans coming back."</div>
      </div>
      <div class="strat-card">
        <div class="num">CONFIRMATION — the "is this real?" moment</div>
        <h3>Replace anxiety with specifics.</h3>
        <div class="dont">"Thanks for your purchase!"</div>
        <div class="do">"You're in. Your QR arrives in your email and in <u>My tickets</u> 48 hours before the show — this is how the venue gets a fresh code for you."</div>
      </div>
    </div>

    <!-- UX strategy principles -->
    <div class="section-h">UX principles we design against</div>
    <p class="section-sub">Every wireframe on the next tab is evaluated against these five. If a screen doesn't serve one of them, it probably shouldn't exist.</p>

    <div class="strat-grid">
      <div class="strat-card">
        <div class="num">PRINCIPLE 01</div>
        <h3>Trust before transaction.</h3>
        <p>Before the "Pay" button: who's the seller, is the ticket real, what happens if it isn't, how do we know. Never a policy link — always a one-line answer.</p>
      </div>
      <div class="strat-card">
        <div class="num">PRINCIPLE 02</div>
        <h3>Newcomer as first-class user.</h3>
        <p>A "first time at a techno festival?" nudge doesn't live in help — it lives in the flow. Price context ("face value was €65"), time context ("this runs til 6am"), and vocab ("what's a boiler room set?") are surfaced inline.</p>
      </div>
      <div class="strat-card">
        <div class="num">PRINCIPLE 03</div>
        <h3>Mobile-first, queue-proof.</h3>
        <p>People buy on the tram, in the line, on 2 bars of signal. Primary actions live in the thumb zone; QR is reachable in ≤ 2 taps from app open; everything degrades gracefully offline.</p>
      </div>
      <div class="strat-card">
        <div class="num">PRINCIPLE 04</div>
        <h3>Price-cap as feature, not footnote.</h3>
        <p>The fair-price cap is our killer reassurance vs. grey-market sites. Show face value + cap + current ask on every listing. Make the maths obvious.</p>
      </div>
      <div class="strat-card">
        <div class="num">PRINCIPLE 05</div>
        <h3>Alerts &gt; search for sold-out shows.</h3>
        <p>When there are no tickets, the page pivots: it stops being a buy page and becomes an alert-subscribe page, with a real stat ("72% of Adam's W. tickets reappear"), not a vague promise.</p>
      </div>
      <div class="strat-card">
        <div class="num">PRINCIPLE 06</div>
        <h3>One screen, one job.</h3>
        <p>Lineup is its own screen. Tickets is its own screen. Practical info is its own screen. No mega-pages that bury the thing the user came for.</p>
      </div>
    </div>

    <!-- newcomer angle -->
    <div class="section-h">The newcomer layer — your actual superpower</div>
    <div class="strat-card" style="max-width: 920px; background: #fffdf7;">
      <p style="font-family: var(--serif); font-size: 22px; line-height: 1.4; margin: 0 0 12px;">
        "I moved to Amsterdam and didn't know this scene existed. Now it's my favourite part of living here.
        I want to help other people find that."
      </p>
      <p style="font-family: var(--hand-tight); font-size: 22px; color: var(--muted); margin: 0 0 20px;">— you, in the brief</p>
      <p>We translate this into three product surfaces, called out in the wireframes:</p>
      <ul style="line-height: 1.6; font-size: 14px;">
        <li><strong>"New to this?" banner</strong> — optional, dismissable, top of homepage. Opens a 60-second explainer: what techno/house/trance actually sounds like, how a Dutch club night works, what to bring, cloakroom etiquette.</li>
        <li><strong>Event glossary inline</strong> — "b2b," "boiler room," "hybrid set," "closing set" — hover/tap a term and get a plain-English explanation in 1 sentence.</li>
        <li><strong>"Your first festival" checklist</strong> — in My Tickets, the day before the event: earplugs, water, coat €, shoes you can dance in, how to get home at 6am (night bus / bike / Uber pricing).</li>
      </ul>
      <p style="margin-top: 14px; padding: 12px; background: var(--paper-2); border-left: 3px solid var(--accent); font-size: 13px;">
        <strong>Key principle:</strong> the newcomer layer must never feel like a "beginner mode." It's just
        good information, available to everyone. Locals will read it too.
      </p>
    </div>
  `;
})();
