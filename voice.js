// Voice lab — same scenario, three tones side-by-side
(function () {
  const pane = document.getElementById('pane-voice');

  const scenarios = [
    {
      name: 'Sold-out · empty state',
      sub: 'the moment: user lands on an event page, no tickets left.',
      warm: {
        label: 'headline + body + CTA',
        txt: `<strong>All tickets sold — but keep reading.</strong><br><br>About 7 in 10 tickets for this one reappear in the last 48 hours. Life gets in the way, people resell at face. We'll ping you the second one lists.<br><br><em>→ Alert me</em>`
      },
      cool: {
        label: 'headline + body + CTA',
        txt: `<strong>Sold out.</strong><br><br>72% of tickets reappear within 48h of the event. Turn on an alert to be notified the moment one is listed.<br><br><em>→ Set alert</em>`
      },
      scene: {
        label: 'headline + body + CTA',
        txt: `<strong>No tickets. For now.</strong><br><br>Fans drop out. Tickets come back. Happens every time — about 72% come back late.<br><br><em>→ Put me on the list ✦</em>`
      }
    },
    {
      name: 'Payment declined',
      sub: 'the moment: card didn\'t go through; seller is holding the ticket.',
      warm: {
        label: 'headline + body + CTA',
        txt: `<strong>Your bank said no — nothing to worry about.</strong><br><br>The card was declined, but no charge went through. The seller's holding your ticket for 9 more minutes. Try a different card, or iDEAL.<br><br><em>→ Try again</em>`
      },
      cool: {
        label: 'headline + body + CTA',
        txt: `<strong>Card declined.</strong><br><br>No charge was made. The seller will hold this ticket for 9 more minutes. Try a different card or iDEAL.<br><br><em>→ Retry</em>`
      },
      scene: {
        label: 'headline + body + CTA',
        txt: `<strong>Bank got cold feet.</strong><br><br>No money moved. You've got 9 minutes before the ticket goes back to the pool. iDEAL tends to just work.<br><br><em>→ Try again</em>`
      }
    },
    {
      name: 'Checkout reassurance',
      sub: 'the moment: just above the "Pay" button.',
      warm: {
        label: 'single line under CTA',
        txt: `Pay <strong>€64</strong> — refunded in full if your QR doesn't scan at the door. Zero drama.`
      },
      cool: {
        label: 'single line under CTA',
        txt: `Full refund if the ticket doesn't scan. No questions.`
      },
      scene: {
        label: 'single line under CTA',
        txt: `QR fails at the door? You get every cent back on the spot. Promise.`
      }
    },
    {
      name: 'Sell flow · price cap explainer',
      sub: 'the moment: seller types a price above the legal cap.',
      warm: {
        label: 'inline helper text',
        txt: `<strong>€75 is above the cap (€71.50).</strong><br>Dutch law caps resale at face value + 10% — it keeps fans coming back, and it's not us being mean. Try €71.50?`
      },
      cool: {
        label: 'inline helper text',
        txt: `<strong>Max price: €71.50</strong> (face value + 10%, per Dutch law). <em>Set to max →</em>`
      },
      scene: {
        label: 'inline helper text',
        txt: `<strong>Above the cap.</strong> €71.50 is the ceiling — any higher and we can't list it.`
      }
    },
    {
      name: 'Confirmation · "you\'re in"',
      sub: 'the moment: purchase complete, user has 11 days to wait.',
      warm: {
        label: 'hero + sub',
        txt: `<strong>You're in.</strong><br><br>Saturday 24 May. 22:00. A big warm room.<br>Your fresh QR lands in the app <strong>Thursday evening</strong>. Until then, try not to overthink it.`
      },
      cool: {
        label: 'hero + sub',
        txt: `<strong>Ticket confirmed.</strong><br><br>Sat 24 May, 22:00. QR delivered Thu 22 May, 20:00 (48h before doors).`
      },
      scene: {
        label: 'hero + sub',
        txt: `<strong>Locked in. ✦</strong><br><br>Sat 24.05 · 22:00 · NDSM. QR drops Thursday night. See you on the floor.`
      }
    },
    {
      name: 'First-time-buyer nudge',
      sub: 'the moment: user adds a first resale ticket to cart.',
      warm: {
        label: 'quiet banner above CTA',
        txt: `<strong>First time buying from another fan?</strong> Here's the short version: we hold the money until you scan in. If the QR doesn't work, you get every cent back, same-day. That's the whole deal.`
      },
      cool: {
        label: 'quiet banner above CTA',
        txt: `<strong>How resale works:</strong> we escrow your payment until you scan in at the door. Full refund if the ticket fails.`
      },
      scene: {
        label: 'quiet banner above CTA',
        txt: `<strong>New to fan-to-fan?</strong> We hold the money. You scan in. Seller gets paid. That's it.`
      }
    },
    {
      name: '"New to this?" homepage banner',
      sub: 'the moment: homepage top, dismissable.',
      warm: {
        label: 'dismissable banner',
        txt: `<strong>New to Amsterdam's dance scene?</strong> We made a 60-second tour. What techno actually sounds like, how a Dutch club night works, what to bring. No quiz at the end.`
      },
      cool: {
        label: 'dismissable banner',
        txt: `<strong>New here?</strong> 60-second guide to Amsterdam's dance scene →`
      },
      scene: {
        label: 'dismissable banner',
        txt: `<strong>Just moved here? Welcome.</strong> The scene is deep. We'll show you a door in.`
      }
    }
  ];

  const row = (s) => `
    <div class="copy-lab">
      <div class="scenario">${s.name}<small>${s.sub}</small></div>
      <div class="copy-card warm">
        <div class="ttl">WARM · default</div>
        <div class="txt">${s.warm.txt}</div>
      </div>
      <div class="copy-card cool">
        <div class="ttl">COOL · understated</div>
        <div class="txt">${s.cool.txt}</div>
      </div>
      <div class="copy-card scene">
        <div class="ttl">SCENE · lightly irreverent</div>
        <div class="txt">${s.scene.txt}</div>
      </div>
    </div>
  `;

  pane.innerHTML = `
    <h1 class="page-h">Voice lab.</h1>
    <p class="page-sub">same moment, three tones. pick a column, or mix by context.</p>

    <div class="strat-card" style="max-width: 980px; background: #fffdf7;">
      <div class="num">HOW TO USE THIS TAB</div>
      <p style="font-size:14px;line-height:1.6">
        Each row below is one real product moment. The three columns are three tones applied to it. 
        The product doesn't have to pick one for everything — most good voice systems pick a <em>default</em> (my bet: <strong>Warm</strong>) 
        and a <em>contextual override</em> (e.g. <strong>Cool</strong> for money / refund / ID-type flows).
      </p>
      <div class="row gap-8 mt-12">
        <span class="chip" style="background:#fffdf7">WARM → default</span>
        <span class="chip" style="background:#fffdf7">COOL → transactional / legal</span>
        <span class="chip" style="background:#fffdf7">SCENE → marketing only</span>
      </div>
    </div>

    <div class="section-h">Seven scenarios</div>
    <div>${scenarios.map(row).join('')}</div>

    <div class="strat-card mt-24" style="max-width: 980px;">
      <div class="num">MY VOICE RECOMMENDATION</div>
      <h3 style="font-family: var(--serif); font-size: 28px; margin-bottom: 8px;">Warm by default. Cool when money or refunds are on the line.</h3>
      <p style="font-size:14px;line-height:1.6">
        Warm fits your differentiator: making the scene welcoming to people who don't speak the language yet. 
        It also protects against the "cool-kid tax" — the thing that happens on a lot of scene-facing sites, where 
        the copy is so dry or so inside-joke-y that newcomers bounce.
      </p>
      <p style="font-size:14px;line-height:1.6">
        Switch to Cool in any flow where the user is already nervous: payment, refunds, ID, age verification, 
        anything legal. In those moments, personality is noise.
      </p>
      <p style="font-size:14px;line-height:1.6">
        Scene tone belongs on social, the newsletter, and maybe the homepage hero during peak festival weeks. 
        Don't put it in the product.
      </p>
    </div>
  `;
})();
