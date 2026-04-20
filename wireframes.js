// Wireframes — all screens, stacked, with 3-4 variants each
(function () {
  const pane = document.getElementById('pane-wireframes');

  // Helper builders
  const chip = (txt, cls='') => `<span class="chip ${cls}">${txt}</span>`;
  const btn  = (txt, cls='') => `<div class="btn-wire ${cls}">${txt}</div>`;

  pane.innerHTML = `
    <h1 class="page-h">Wireframes.</h1>
    <p class="page-sub">sketchy layout, real copy. 3–4 variants per screen.</p>

    <!-- ============ HOMEPAGE ============ -->
    <div id="wf-home">
    <div class="section-h">Homepage / discovery</div>
    <p class="section-sub">Three hierarchies: calendar-first (what's on), editorial-first (newcomer-friendly story), map-first (where in the city).</p>

    <div class="variant-grid">

      <!-- HOME A: calendar-first -->
      <div class="variant">
        <div class="variant-label">A · Calendar-first <span class="num">HOME/01</span></div>
        <div class="variant-body">
          <div class="row between center mb-12">
            <div class="serif" style="font-size:20px;"><em>Skirts</em> & Sparkles</div>
            <div class="row gap-8">${chip('Browse')} ${chip('Sell')} ${chip('Sign in')}</div>
          </div>
          <div class="wire p-12 mb-12" style="background:#fffdf7">
            <div class="wire-label">THIS WEEK · AMSTERDAM</div>
            <div class="serif" style="font-size:28px; line-height:1.1;">47 nights. 12 sold out. 3 last-minute.</div>
            <div class="handT" style="color:var(--muted); font-size:17px;">new to this? <u>start here →</u></div>
          </div>
          <div class="row gap-8 mb-12" style="flex-wrap:wrap">
            ${chip('TONIGHT', 'filled')} ${chip('Fri')} ${chip('Sat')} ${chip('Sun')} ${chip('Next wk')}
          </div>
          <div class="col gap-8">
            ${['Skirts & Sparkles · Main night','Adam’s Warehouse · Closing','De School b2b night'].map((t,i)=>`
              <div class="wire p-8 row between center">
                <div class="col">
                  <div class="mono" style="font-size:10px;color:var(--muted)">FRI · 22 MAY · 23:00–06:00</div>
                  <div style="font-weight:600; font-size:14px;">${t}</div>
                  <div class="handT" style="font-size:16px;color:var(--muted)">${['dark techno','hard groove','hybrid live'][i]} · NDSM</div>
                </div>
                <div class="col" style="text-align:right">
                  ${i===1?chip('SOLD OUT','yellow'):chip('from €42','green')}
                  <div class="mono" style="font-size:10px;color:var(--muted);margin-top:4px">${i===1?'12 ppl waiting':'23 tickets'}</div>
                </div>
              </div>
            `).join('')}
          </div>
          <div class="anno" style="right:20px;top:128px;">pivot on sold-out → alerts, not dead-end</div>
        </div>
        <div class="variant-note">strengths: scannable; "what's tonight" answer above the fold. risk: cold-open for true newcomers.</div>
      </div>

      <!-- HOME B: editorial newcomer-first -->
      <div class="variant">
        <div class="variant-label">B · Editorial · newcomer-first <span class="num">HOME/02</span></div>
        <div class="variant-body">
          <div class="row between center mb-12">
            <div class="serif" style="font-size:20px;"><em>Skirts</em> & Sparkles</div>
            <div class="row gap-8">${chip('Events')} ${chip('Guide')} ${chip('Sign in')}</div>
          </div>
          <div class="wire-yellow p-12 mb-12" style="border:1.5px solid var(--ink)">
            <div class="hand" style="font-size:24px; line-height:1.2;">New to Amsterdam's dance scene?</div>
            <div style="font-size:13px; margin-top:4px;">A 60-second tour: what's techno, what's house, how a Dutch club night actually works.</div>
            <div class="mt-8">${btn('Take the tour', 'accent')} <span class="handT" style="font-size:15px; margin-left:8px;">dismiss →</span></div>
          </div>
          <div class="serif" style="font-size:26px; line-height:1.1;" class="mb-8">This weekend, worth a metro ride.</div>
          <div class="row gap-8 mb-12">
            <div class="wire p-8" style="flex:1">
              <div class="ph h-60 mb-8">crowd / lights</div>
              <div class="mono" style="font-size:10px;color:var(--muted)">EDITOR'S PICK</div>
              <div style="font-weight:600;font-size:13px">Skirts & Sparkles — Saturday main</div>
              <div style="font-size:11px">Big room, warm crowd, good first-festival pick.</div>
            </div>
            <div class="wire p-8" style="flex:1">
              <div class="ph h-60 mb-8">venue / exterior</div>
              <div class="mono" style="font-size:10px;color:var(--muted)">IF YOU LIKED BERGHAIN...</div>
              <div style="font-weight:600;font-size:13px">Adam's Warehouse · Closing</div>
              <div style="font-size:11px">Harder, longer. Not for night one.</div>
            </div>
          </div>
          <div class="wire p-8 row between center">
            <div class="handT" style="font-size:18px;">see all 47 events this week →</div>
          </div>
        </div>
        <div class="variant-note">strengths: does your differentiator proud. risk: slower for locals who just want to buy.</div>
      </div>

      <!-- HOME C: map-first -->
      <div class="variant">
        <div class="variant-label">C · Map-first <span class="num">HOME/03</span></div>
        <div class="variant-body">
          <div class="row between center mb-12">
            <div class="serif" style="font-size:20px;"><em>Skirts</em> & Sparkles</div>
            <div class="row gap-8">${chip('List')} ${chip('Map','filled')} ${chip('Sell')}</div>
          </div>
          <div class="ph" style="height:240px;margin-bottom:12px;position:relative;">
            Amsterdam map · pins per venue
            <div style="position:absolute;top:40px;left:60px;width:28px;height:28px;border-radius:50%;background:var(--accent);color:white;display:flex;align-items:center;justify-content:center;font-family:var(--mono);font-size:10px;border:2px solid var(--ink)">3</div>
            <div style="position:absolute;top:120px;left:160px;width:28px;height:28px;border-radius:50%;background:var(--ink);color:white;display:flex;align-items:center;justify-content:center;font-family:var(--mono);font-size:10px;border:2px solid var(--ink)">7</div>
            <div style="position:absolute;top:80px;left:260px;width:28px;height:28px;border-radius:50%;background:var(--accent-4);color:white;display:flex;align-items:center;justify-content:center;font-family:var(--mono);font-size:10px;border:2px solid var(--ink)">1</div>
          </div>
          <div class="mono" style="font-size:10px;color:var(--muted)">NDSM · 3 EVENTS TONIGHT</div>
          <div class="col gap-8 mt-8">
            <div class="wire p-8">
              <div style="font-size:13px;font-weight:600">Skirts & Sparkles</div>
              <div class="mono" style="font-size:10px;color:var(--muted)">23:00 · 12 min from Centraal (free ferry)</div>
            </div>
            <div class="wire p-8">
              <div style="font-size:13px;font-weight:600">BIJ Het IJ opening</div>
              <div class="mono" style="font-size:10px;color:var(--muted)">22:00 · 8 min walk</div>
            </div>
          </div>
          <div class="anno" style="right:20px; top:280px;">travel time built in — newcomer gold</div>
        </div>
        <div class="variant-note">strengths: solves "where am I going?" anxiety. risk: novel, needs explaining.</div>
      </div>

    </div>
    </div>

    <!-- ============ EVENT DETAIL ============ -->
    <div id="wf-event">
    <div class="section-h">Event detail</div>
    <p class="section-sub">Lineup, practical info, tickets. Where "one screen, one job" gets tested hardest.</p>

    <div class="variant-grid">

      <!-- EVENT A -->
      <div class="variant">
        <div class="variant-label">A · Lineup-led <span class="num">EVT/01</span></div>
        <div class="variant-body">
          <div class="ph h-120 mb-12">festival hero image</div>
          <div class="serif" style="font-size:28px;line-height:1"><em>Skirts & Sparkles</em></div>
          <div class="handT" style="font-size:18px;color:var(--muted)">Sat 24 May · NDSM · 22:00–06:00</div>
          <div class="row gap-4 mt-8 mb-12">${chip('techno')} ${chip('house')} ${chip('first-timer OK','green')}</div>
          <div class="wire-label mt-12">LINE-UP</div>
          <div class="col gap-4 mt-8">
            ${['22:00 · Artist A','00:00 · Artist B (b2b) Artist C','02:00 · Headliner','04:00 · Closing set'].map(s=>`<div class="wire p-8" style="font-size:12px">${s}</div>`).join('')}
          </div>
          <div class="mt-12 row gap-8">${btn('See tickets · from €58', 'accent')} ${btn('Add to calendar','ghost')}</div>
          <div class="handT mt-12" style="font-size:17px;color:var(--muted)">what's a "b2b"? <u>tap any artist for 1-sentence context</u></div>
        </div>
        <div class="variant-note">strengths: music fans see the art first. ticket CTA sticky on mobile.</div>
      </div>

      <!-- EVENT B -->
      <div class="variant">
        <div class="variant-label">B · Practical-led · newcomer-safe <span class="num">EVT/02</span></div>
        <div class="variant-body">
          <div class="serif" style="font-size:26px;line-height:1;"><em>Skirts & Sparkles</em></div>
          <div class="handT" style="font-size:18px;color:var(--muted)">a long, loud Saturday. first one? read this.</div>
          <div class="wire wire-bg p-12 mt-12">
            <div class="wire-label">THE PRACTICALS</div>
            <div style="font-size:12px;line-height:1.7;margin-top:6px">
              📍 NDSM werf, 12 min free ferry from Centraal<br>
              🕒 Doors 22:00 · last music 06:00<br>
              👟 Wear shoes you can dance in 8 hours<br>
              💶 Bring €10 cash — coat check<br>
              🎧 Earplugs: take them. really.<br>
              🚇 Night bus 397 home · or OV-bike
            </div>
          </div>
          <div class="wire-label mt-12">LINE-UP · 8 artists across 3 stages</div>
          <div class="ph h-60 mt-8">[timetable grid]</div>
          <div class="mt-12">${btn('See tickets · from €58', 'accent')}</div>
          <div class="anno" style="right:20px;top:160px;">THIS is your differentiator</div>
        </div>
        <div class="variant-note">strengths: makes newcomers feel held. locals might skim — that's fine.</div>
      </div>

      <!-- EVENT C -->
      <div class="variant">
        <div class="variant-label">C · Tickets-first (sold out) <span class="num">EVT/03</span></div>
        <div class="variant-body">
          <div class="serif" style="font-size:26px;line-height:1"><em>Skirts & Sparkles</em></div>
          <div class="handT" style="font-size:18px;color:var(--muted)">Sat 24 May · SOLD OUT</div>
          <div class="wire-accent p-12 mt-12" style="color:white">
            <div class="mono" style="font-size:10px;opacity:0.9">NO OFFICIAL TICKETS LEFT</div>
            <div class="serif" style="font-size:22px;margin-top:4px;">But 34 fans are reselling right now.</div>
            <div style="font-size:12px;margin-top:8px">Average price: €64 · face value €65 · cap €71.50. Every ticket gets a fresh QR at the door.</div>
            <div class="mt-8">${btn('Browse 34 tickets', 'ghost')}</div>
          </div>
          <div class="wire p-12 mt-12">
            <div style="font-weight:600;font-size:13px">Or turn on alerts</div>
            <div style="font-size:12px;color:var(--muted)">72% of tickets for this event reappear in the final 48h. We'll ping you the second one lists.</div>
            <div class="mt-8 row gap-8">${btn('Alert me', 'accent')} ${chip('2,410 alerts set')}</div>
          </div>
          <div class="anno" style="right:20px;top:100px;">pivots the page from dead-end to two live actions</div>
        </div>
        <div class="variant-note">strengths: answers "can I still go?" in 5 seconds. builds fairness trust upfront.</div>
      </div>

    </div>
    </div>

    <!-- ============ TICKET LISTING ============ -->
    <div id="wf-listing">
    <div class="section-h">Ticket listing (one ticket)</div>
    <p class="section-sub">The highest-stakes screen in the product. Three trust treatments.</p>

    <div class="variant-grid">

      <!-- LISTING A -->
      <div class="variant">
        <div class="variant-label">A · Seller-led trust <span class="num">LST/01</span></div>
        <div class="variant-body">
          <div class="wire-label">TICKET · 1 of 34</div>
          <div class="serif" style="font-size:22px;line-height:1.1;margin-top:4px;">Weekend pass · Skirts & Sparkles</div>
          <div class="handT" style="color:var(--muted);font-size:17px;">Sat 24 May · general admission</div>
          <div class="wire wire-bg p-12 mt-12">
            <div class="row between center">
              <div>
                <div class="mono" style="font-size:10px;color:var(--muted)">SELLER</div>
                <div style="font-weight:600;font-size:14px">Lotte · 23 sales</div>
                <div style="font-size:11px">NL phone ✓ · email ✓ · IG linked</div>
              </div>
              ${chip('verified','green')}
            </div>
          </div>
          <div class="wire p-12 mt-8">
            <div class="row between"><div style="font-size:12px">Face value</div><div class="mono">€65.00</div></div>
            <div class="row between"><div style="font-size:12px">Fair-price cap</div><div class="mono">€71.50</div></div>
            <div class="row between"><div style="font-size:12px;font-weight:600">Seller's ask</div><div class="mono" style="font-weight:700">€64.00</div></div>
          </div>
          <div class="mt-12">${btn('Pay €64 · refunded if it doesn’t scan', 'accent')}</div>
          <div class="handT" style="font-size:15px;color:var(--muted);margin-top:6px">your QR lands in the app 48h before · this is how we know it's fresh</div>
        </div>
        <div class="variant-note">strengths: verification is the headline. risk: seller-heavy before buyer knows the price.</div>
      </div>

      <!-- LISTING B -->
      <div class="variant">
        <div class="variant-label">B · Price-cap led <span class="num">LST/02</span></div>
        <div class="variant-body">
          <div class="handT" style="font-size:17px;color:var(--muted)">Skirts & Sparkles · Sat 24 May</div>
          <div class="serif" style="font-size:48px;line-height:0.9;margin-top:4px;">€64</div>
          <div class="mono" style="font-size:11px;color:var(--muted);margin-top:4px;">€1 UNDER FACE VALUE · €7.50 UNDER LEGAL CAP</div>
          <div class="wire wire-bg p-12 mt-12" style="position:relative;">
            <div class="wire-label">FAIR-PRICE LADDER</div>
            <div style="height:6px; background: linear-gradient(90deg, var(--accent-4) 0%, var(--accent-4) 60%, var(--accent-3) 60%, var(--accent-3) 100%); border: 1.5px solid var(--ink); border-radius: 999px; margin-top: 10px; position: relative;">
              <div style="position:absolute;left:58%;top:-6px;width:14px;height:14px;background:var(--ink);border-radius:50%;border:2px solid white"></div>
            </div>
            <div class="row between mono" style="font-size:10px;margin-top:6px"><span>€0</span><span>face €65</span><span>cap €71.50</span></div>
          </div>
          <div class="wire p-12 mt-8 row between center">
            <div style="font-size:12px"><strong>Lotte</strong> · 23 sales · verified ✓</div>
            ${chip('details →')}
          </div>
          <div class="mt-12">${btn('Pay €64 · full refund if it doesn’t scan', 'accent')}</div>
        </div>
        <div class="variant-note">strengths: makes fairness visceral. great for first-timers afraid of scalping.</div>
      </div>

      <!-- LISTING C -->
      <div class="variant">
        <div class="variant-label">C · Conversation-led <span class="num">LST/03</span></div>
        <div class="variant-body">
          <div class="wire-label">MESSAGE FROM LOTTE · 2h AGO</div>
          <div class="wire p-12 mt-8" style="background:#fffbe8">
            <div style="font-size:13px;line-height:1.5;font-style:italic">"Hey! Friend got sick, selling our extra Sat pass at face. Will be there from 23:30 if you want to go in together. English is fine :)"</div>
          </div>
          <div class="row between mt-12">
            <div class="col">
              <div class="handT" style="font-size:17px;color:var(--muted)">Sat 24 May · weekend pass</div>
              <div class="serif" style="font-size:22px">€64 <span class="mono" style="font-size:11px;color:var(--muted)">/ cap €71.50</span></div>
            </div>
            <div class="col" style="text-align:right">
              <div class="mono" style="font-size:10px;color:var(--muted)">LOTTE · 23 sales · ✓</div>
              ${chip('message','filled')}
            </div>
          </div>
          <div class="mt-12">${btn('Buy · €64', 'accent')}</div>
          <div class="handT" style="font-size:15px;color:var(--muted);margin-top:8px">fan-to-fan, the way resale should feel</div>
        </div>
        <div class="variant-note">strengths: humanises resale. risk: optional field, not every seller writes one.</div>
      </div>

    </div>
    </div>

    <!-- ============ BUY FLOW ============ -->
    <div id="wf-buy">
    <div class="section-h">Buy flow / checkout</div>
    <p class="section-sub">Three step-count strategies. All end in a QR that arrives close to the event.</p>

    <div class="variant-grid">

      <!-- BUY A -->
      <div class="variant">
        <div class="variant-label">A · Single-screen confirm <span class="num">BUY/01</span></div>
        <div class="variant-body">
          <div class="wire-label">REVIEW AND PAY</div>
          <div class="wire p-12 mt-8">
            <div style="font-size:13px;font-weight:600">Skirts & Sparkles · Sat 24 May</div>
            <div style="font-size:11px;color:var(--muted)">Weekend pass · from Lotte (verified)</div>
            <div class="row between mt-8"><div>Ticket</div><div class="mono">€64.00</div></div>
            <div class="row between"><div>Buyer protection</div><div class="mono">included</div></div>
            <div class="row between" style="font-weight:700"><div>Total</div><div class="mono">€64.00</div></div>
          </div>
          <div class="wire-label mt-12">PAY WITH</div>
          <div class="row gap-8 mt-8">${chip('iDEAL','filled')} ${chip('Card')} ${chip('Apple Pay')}</div>
          <div class="wire wire-bg p-12 mt-12" style="font-size:12px;line-height:1.5">
            <strong>What happens next →</strong><br>
            1. We hold Lotte's ticket for you<br>
            2. 48h before the show, a fresh QR lands in <u>My tickets</u><br>
            3. Lotte gets paid <em>after</em> you scan in
          </div>
          <div class="mt-12">${btn('Pay €64', 'accent')}</div>
          <div class="handT" style="font-size:15px;color:var(--muted);margin-top:6px">refunded in full if your QR doesn't scan at the door. zero-friction.</div>
        </div>
        <div class="variant-note">best for confident buyers. sets expectations in one read.</div>
      </div>

      <!-- BUY B -->
      <div class="variant">
        <div class="variant-label">B · 3-step, guardrailed <span class="num">BUY/02</span></div>
        <div class="variant-body">
          <div class="row gap-4 mb-12">
            ${chip('1 · confirm', 'filled')} ${chip('2 · pay')} ${chip('3 · done')}
          </div>
          <div class="serif" style="font-size:22px;">Quick check before we take your money.</div>
          <ul style="font-size:13px;line-height:1.8;padding-left:18px;margin:12px 0">
            <li>Event: <strong>Sat 24 May, NDSM</strong> — not Friday or Sunday?</li>
            <li>Name on ticket: <strong>goes in by QR</strong>, no ID check at door</li>
            <li>Refund if it doesn't scan: <strong>yes, full</strong></li>
          </ul>
          <div class="wire wire-bg p-12" style="font-size:12px">
            <strong>First time buying resale?</strong> You're covered — if your QR doesn't work at the door, you get every cent back, instantly.
          </div>
          <div class="mt-12">${btn('Yes, continue to pay', 'accent')} ${btn('Cancel','ghost')}</div>
          <div class="anno" style="right:20px;top:110px;">quiets the "is this real?" fear</div>
        </div>
        <div class="variant-note">best for sold-out panic buyers. intentional friction = reduced chargebacks.</div>
      </div>

      <!-- BUY C -->
      <div class="variant">
        <div class="variant-label">C · Confirmation · "you're in" <span class="num">BUY/03</span></div>
        <div class="variant-body">
          <div style="text-align:center;padding:20px 0">
            <div class="serif" style="font-size:44px;line-height:1"><em>You're in.</em></div>
            <div class="handT" style="font-size:20px;color:var(--muted)">Sat 24 May · 22:00</div>
          </div>
          <div class="wire p-12 mt-8" style="background:#fffdf7">
            <div style="font-size:13px;font-weight:600">Your QR arrives Thurs 22 May</div>
            <div style="font-size:11px;color:var(--muted);margin-top:2px">via email · in <u>My tickets</u> · push notification</div>
          </div>
          <div class="wire p-12 mt-8">
            <div style="font-size:13px;font-weight:600">First festival? 👟</div>
            <div style="font-size:11px;margin-top:2px">We'll send a short "what to bring" list on Friday. Opt out anytime.</div>
            ${chip('keep on','green')} ${chip('no thanks')}
          </div>
          <div class="mt-12 row gap-8">${btn('Add to wallet', 'accent')} ${btn('Share with friends going','ghost')}</div>
          <div class="handT" style="font-size:15px;color:var(--muted);margin-top:8px">"you're in" not "thanks for your purchase"</div>
        </div>
        <div class="variant-note">does the newcomer-layer work in a confirmation screen. very on-brand.</div>
      </div>

    </div>
    </div>

    <!-- ============ SELL FLOW ============ -->
    <div id="wf-sell">
    <div class="section-h">Sell flow</div>
    <p class="section-sub">Three stances: fast, educational, or conversational.</p>

    <div class="variant-grid">

      <!-- SELL A -->
      <div class="variant">
        <div class="variant-label">A · Fast path <span class="num">SELL/01</span></div>
        <div class="variant-body">
          <div class="wire-label">LIST YOUR TICKET · TAKES 90 SECONDS</div>
          <div class="wire p-12 mt-8">
            <div style="font-size:12px;color:var(--muted)">1. Which ticket?</div>
            ${chip('Sat weekend pass · €65','filled')}
          </div>
          <div class="wire p-12 mt-8">
            <div style="font-size:12px;color:var(--muted)">2. Your price (cap: €71.50)</div>
            <div class="row center gap-8 mt-8"><div class="serif" style="font-size:32px">€</div><div class="wire p-8" style="flex:1;font-family:var(--mono)">65.00</div></div>
            <div class="handT" style="font-size:15px;color:var(--muted);margin-top:4px">at face value — sells fastest</div>
          </div>
          <div class="wire p-12 mt-8">
            <div style="font-size:12px;color:var(--muted)">3. Payout to</div>
            ${chip('NL13 RABO •••• 4421')}
          </div>
          <div class="mt-12">${btn('List it', 'accent')}</div>
          <div class="handT" style="font-size:15px;color:var(--muted);margin-top:6px">you're paid 3 days after the event</div>
        </div>
        <div class="variant-note">optimised for the "friend bailed, I need to dump this" case.</div>
      </div>

      <!-- SELL B -->
      <div class="variant">
        <div class="variant-label">B · Educational · trust-building <span class="num">SELL/02</span></div>
        <div class="variant-body">
          <div class="serif" style="font-size:22px;">Selling is pretty chill here.</div>
          <div class="wire wire-bg p-12 mt-8" style="font-size:12px;line-height:1.6">
            <strong>How it works:</strong><br>
            1. List your ticket. Max price: face + 10% (Dutch law, not us being mean).<br>
            2. When it sells, we invalidate your QR and give the buyer a fresh one.<br>
            3. You keep 95%. We take 5% to run the thing.<br>
            4. Payout lands 3 days after the event.
          </div>
          <div class="wire p-12 mt-12">
            <div class="row between"><div>Your ask</div><div class="mono">€65.00</div></div>
            <div class="row between" style="color:var(--muted);font-size:12px"><div>Platform fee (5%)</div><div class="mono">−€3.25</div></div>
            <div class="row between" style="font-weight:700"><div>You receive</div><div class="mono">€61.75</div></div>
          </div>
          <div class="mt-12">${btn('List it', 'accent')}</div>
        </div>
        <div class="variant-note">first-time sellers feel informed, not tricked.</div>
      </div>

      <!-- SELL C -->
      <div class="variant">
        <div class="variant-label">C · Add-a-note · conversational <span class="num">SELL/03</span></div>
        <div class="variant-body">
          <div class="wire p-12">
            <div style="font-size:12px;color:var(--muted)">Your price</div>
            <div class="serif" style="font-size:32px">€65</div>
          </div>
          <div class="wire wire-dashed p-12 mt-8" style="background:#fffbe8">
            <div style="font-size:12px;color:var(--muted)">Message to your buyer (optional, adds trust)</div>
            <div class="handT" style="font-size:17px;margin-top:4px;line-height:1.3">
              "Got stuck with a work trip. Ticket is fresh, bought it day one. English/NL both fine. x"
            </div>
            <div class="mono" style="font-size:10px;color:var(--muted);margin-top:6px">132/240</div>
          </div>
          <div class="wire p-8 mt-8" style="font-size:11px;color:var(--muted)">
            Tickets with a note sell 2.4× faster ✨
          </div>
          <div class="mt-12">${btn('List it', 'accent')}</div>
          <div class="anno" style="right:20px;top:140px;">humanises the seller</div>
        </div>
        <div class="variant-note">emotional layer on top of the transactional. low cost, big impact.</div>
      </div>

    </div>
    </div>

    <!-- ============ MY TICKETS / ALERTS ============ -->
    <div id="wf-account">
    <div class="section-h">My tickets + alerts</div>
    <p class="section-sub">The "do I still have a ticket to the thing tonight" screen. Must feel safe on a hungover morning.</p>

    <div class="variant-grid">

      <!-- MY A -->
      <div class="variant">
        <div class="variant-label">A · Timeline <span class="num">ACC/01</span></div>
        <div class="variant-body">
          <div class="wire-label">UPCOMING · 3</div>
          <div class="wire-yellow p-12 mt-8" style="border:1.5px solid var(--ink)">
            <div class="mono" style="font-size:10px">TONIGHT · 22:00</div>
            <div style="font-weight:700;font-size:15px">Skirts & Sparkles</div>
            <div style="font-size:11px">QR ready · tap to show</div>
            ${btn('Open QR','accent')}
          </div>
          <div class="wire p-12 mt-8">
            <div class="mono" style="font-size:10px;color:var(--muted)">IN 11 DAYS</div>
            <div style="font-weight:600;font-size:14px">Adam's Warehouse · Closing</div>
            <div style="font-size:11px;color:var(--muted)">QR arrives Wed 4 Jun</div>
          </div>
          <div class="wire p-12 mt-8" style="background:#fffdf7">
            <div class="mono" style="font-size:10px;color:var(--muted)">ALERTS · 2 ACTIVE</div>
            <div style="font-size:13px;margin-top:4px">De School · Sat 7 Jun</div>
            <div style="font-size:11px;color:var(--muted)">72% reappear — we'll ping you</div>
          </div>
        </div>
        <div class="variant-note">time-sorted. closest thing = most prominent.</div>
      </div>

      <!-- MY B -->
      <div class="variant">
        <div class="variant-label">B · Checklist mode (day-of) <span class="num">ACC/02</span></div>
        <div class="variant-body">
          <div class="hand" style="font-size:22px;background:var(--accent-3);padding:4px 10px;display:inline-block">tonight, your first one ✨</div>
          <div class="col gap-8 mt-12">
            ${['QR ticket · ready','Earplugs · bring some','Coat check · €10 cash','Shoes · easy to dance in 6h','Way home · night bus 397 · 06:12'].map((t,i)=>`
              <div class="wire p-8 row center gap-8">
                <div style="width:18px;height:18px;border:1.5px solid var(--ink);border-radius:4px;${i<2?'background:var(--accent-4)':''}"></div>
                <div style="font-size:13px">${t}</div>
              </div>
            `).join('')}
          </div>
          <div class="mt-12">${btn('Show my QR','accent')}</div>
          <div class="anno" style="right:20px;top:180px;">newcomer-layer done right</div>
        </div>
        <div class="variant-note">the "first festival" scaffolding, opt-in. doubles as checklist for locals too.</div>
      </div>

      <!-- MY C -->
      <div class="variant">
        <div class="variant-label">C · Alerts inbox <span class="num">ACC/03</span></div>
        <div class="variant-body">
          <div class="wire-label">ALERTS</div>
          <div class="wire p-12 mt-8" style="background:var(--paper-2)">
            <div class="row between center">
              <div>
                <div style="font-weight:600;font-size:14px">Adam's Warehouse · Sold out</div>
                <div style="font-size:11px;color:var(--muted)">alert on · since 3 May</div>
              </div>
              ${chip('3 tickets just listed','green')}
            </div>
            <div class="mt-8">${btn('See 3 tickets', 'accent')}</div>
          </div>
          <div class="wire p-12 mt-8">
            <div style="font-weight:600;font-size:13px">De School b2b · Sat 7 Jun</div>
            <div style="font-size:11px;color:var(--muted)">alert on · waiting</div>
          </div>
          <div class="wire wire-dashed p-12 mt-8" style="text-align:center">
            <div class="handT" style="font-size:17px;color:var(--muted)">turn on alerts for another event →</div>
          </div>
        </div>
        <div class="variant-note">alerts as a first-class surface, not buried in settings.</div>
      </div>

    </div>
    </div>

    <!-- ============ MOBILE / QUEUE ============ -->
    <div id="wf-mobile">
    <div class="section-h">Mobile · "in the queue" view</div>
    <p class="section-sub">Standing outside the venue, 2 bars of signal, 30 seconds before the bouncer wants your code.</p>

    <div class="variant-grid" style="grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));">

      <!-- MOB A -->
      <div class="variant">
        <div class="variant-label">A · QR-first, always <span class="num">MOB/01</span></div>
        <div class="variant-body" style="display:flex;justify-content:center">
          <div class="phone"><div class="phone-screen" style="padding:16px">
            <div class="row between center">
              <div class="mono" style="font-size:10px;color:var(--muted)">TONIGHT · 23:12</div>
              ${chip('offline ✓','green')}
            </div>
            <div class="serif" style="font-size:20px;margin-top:8px"><em>Skirts & Sparkles</em></div>
            <div class="handT" style="font-size:16px;color:var(--muted)">Saturday main · gate B</div>
            <div class="ph" style="width:180px;height:180px;margin:16px auto;background:
              repeating-linear-gradient(0deg, #000 0 6px, #fff 6px 12px),
              repeating-linear-gradient(90deg, #000 0 6px, #fff 6px 12px); background-blend-mode: xor;">QR</div>
            <div class="mono" style="font-size:10px;text-align:center;color:var(--muted)">auto-brightens · shake for fresh render</div>
            <div class="mt-12">${btn('Problem at the door?','ghost')}</div>
          </div></div>
        </div>
        <div class="variant-note">app opens to QR. one tap away, works offline, bright by default.</div>
      </div>

      <!-- MOB B -->
      <div class="variant">
        <div class="variant-label">B · "Problem at the door" mode <span class="num">MOB/02</span></div>
        <div class="variant-body" style="display:flex;justify-content:center">
          <div class="phone"><div class="phone-screen" style="padding:16px">
            <div class="hand" style="font-size:20px;background:var(--accent);color:white;padding:4px 10px;display:inline-block">help mode</div>
            <div class="serif" style="font-size:22px;margin-top:10px;line-height:1.1">QR not scanning?</div>
            <div class="handT" style="font-size:16px;color:var(--muted);margin-top:4px">deep breath. we've got you.</div>
            <div class="col gap-8 mt-12">
              <div class="wire p-8" style="font-size:12px">① Turn brightness to max <span class="mono" style="color:var(--muted)">→ try again</span></div>
              <div class="wire p-8" style="font-size:12px">② Show the bouncer this page →</div>
              <div class="wire p-8" style="font-size:12px">③ Chat with us (avg reply 28s)</div>
              <div class="wire wire-accent p-8" style="font-size:12px">④ Refund in full — not your fault</div>
            </div>
            <div class="mt-12">${btn('Call support','accent')}</div>
          </div></div>
        </div>
        <div class="variant-note">the "I am panicking at the gate" screen. trust-closer.</div>
      </div>

      <!-- MOB C -->
      <div class="variant">
        <div class="variant-label">C · Pre-event handrail <span class="num">MOB/03</span></div>
        <div class="variant-body" style="display:flex;justify-content:center">
          <div class="phone"><div class="phone-screen" style="padding:16px">
            <div class="mono" style="font-size:10px;color:var(--muted)">TONIGHT · 20:45 · 2h TO DOORS</div>
            <div class="serif" style="font-size:20px;margin-top:6px;line-height:1.1"><em>On your way?</em></div>
            <div class="wire p-8 mt-12" style="font-size:12px">🚇 Ferry F3 leaves 21:02 from Centraal</div>
            <div class="wire p-8 mt-8" style="font-size:12px">🌧️ Rain starts ~23:40 · hood advised</div>
            <div class="wire p-8 mt-8" style="font-size:12px">💶 Coat check: €10 cash · ATM at ferry</div>
            <div class="wire wire-yellow p-8 mt-8" style="font-size:12px">👂 Earplugs in your bag?</div>
            <div class="mt-16">${btn('Show my QR','accent')}</div>
            <div class="handT" style="font-size:14px;color:var(--muted);margin-top:8px;text-align:center">see you in there x</div>
          </div></div>
        </div>
        <div class="variant-note">the "concierge for newcomers" thing. very differentiating.</div>
      </div>

    </div>
    </div>

    <!-- ============ EMPTY / ERROR ============ -->
    <div id="wf-empty">
    <div class="section-h">Empty states & errors</div>
    <p class="section-sub">Where most products ship garbage. Where we earn trust.</p>

    <div class="variant-grid">

      <!-- EMP A -->
      <div class="variant">
        <div class="variant-label">A · Sold-out → alert pivot <span class="num">EMP/01</span></div>
        <div class="variant-body">
          <div class="serif" style="font-size:28px;line-height:1;">All tickets sold.</div>
          <div class="handT" style="font-size:20px;color:var(--muted);margin-top:4px">not the end of the story.</div>
          <div class="wire wire-bg p-12 mt-12">
            <div style="font-size:13px;line-height:1.6">About <strong>72%</strong> of tickets for Adam's Warehouse reappear in the last 72 hours — life gets in the way, people resell at face.</div>
          </div>
          <div class="mt-12">${btn('Alert me the second one lists','accent')}</div>
          <div class="wire p-12 mt-8" style="background:#fffdf7;font-size:12px">
            You'll get: 1 email · 1 push · chance to buy, first-come. No spam, we promise on our mother.
          </div>
          <div class="anno" style="right:20px;top:100px;">real number, not vague hope</div>
        </div>
        <div class="variant-note">the template for every sold-out event page.</div>
      </div>

      <!-- EMP B -->
      <div class="variant">
        <div class="variant-label">B · Payment declined <span class="num">EMP/02</span></div>
        <div class="variant-body">
          <div class="hand" style="font-size:22px;background:#fde8e3;padding:4px 10px;display:inline-block;color:var(--accent)">something to sort</div>
          <div class="serif" style="font-size:24px;margin-top:10px;line-height:1.1">Your bank declined this card.</div>
          <div style="font-size:13px;margin-top:8px;line-height:1.5">The seller's holding your ticket for <strong>9 more minutes</strong>. Try:</div>
          <div class="col gap-8 mt-12">
            <div class="wire p-8" style="font-size:12px">① A different card</div>
            <div class="wire p-8" style="font-size:12px">② iDEAL (most NL banks)</div>
            <div class="wire p-8" style="font-size:12px">③ Apple Pay / Google Pay</div>
          </div>
          <div class="mt-12 row gap-8">${btn('Try again','accent')} ${btn('Give up this ticket','ghost')}</div>
          <div class="handT" style="font-size:15px;color:var(--muted);margin-top:8px">no charge was made. zero.</div>
        </div>
        <div class="variant-note">names the problem, gives the clock, gives three outs.</div>
      </div>

      <!-- EMP C -->
      <div class="variant">
        <div class="variant-label">C · Empty search <span class="num">EMP/03</span></div>
        <div class="variant-body">
          <div class="serif" style="font-size:22px;">Nothing for "Amelie Lens" this week.</div>
          <div class="handT" style="font-size:18px;color:var(--muted);margin-top:2px">but she's in Rotterdam on 14 June 👀</div>
          <div class="mt-12">${btn('See Rotterdam show','accent')}</div>
          <div class="wire wire-bg p-12 mt-12">
            <div class="wire-label">OR: SIMILAR THIS WEEK</div>
            <div class="col gap-4 mt-8">
              <div class="wire p-8" style="font-size:12px">Sat · Adam's Warehouse · hard techno</div>
              <div class="wire p-8" style="font-size:12px">Sun · De School · industrial</div>
            </div>
          </div>
          <div class="wire p-8 mt-8" style="font-size:12px;background:#fffdf7">
            Turn on an alert for <em>Amelie Lens in Amsterdam</em> →
          </div>
        </div>
        <div class="variant-note">empty ≠ dead-end. three alt paths in one screen.</div>
      </div>

    </div>
    </div>

  `;
})();
