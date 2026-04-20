// Vibes — three visual directions applied to the same event-detail moment
(function () {
  const pane = document.getElementById('pane-vibes');
  pane.innerHTML = `
    <h1 class="page-h">Vibes.</h1>
    <p class="page-sub">three directions, same event. pick one, or mix.</p>

    <div class="section-h">Same screen, three aesthetics</div>
    <p class="section-sub">Event detail for <strong>Skirts & Sparkles · Sat 24 May</strong>, rendered three ways. Content is identical; only type, colour, and rhythm change.</p>

    <div class="variant-grid" style="grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));">

      <!-- VIBE A — Dutch minimal -->
      <div class="vibe-card">
        <div class="vibe-head">A · Dutch minimal <span class="sub">confident type · lots of air</span></div>
        <div class="vibe-body v-dutch">
          <div class="hero">
            <div class="kicker">SAT 24 MAY · NDSM · 22:00→06:00</div>
            <h1><em>Skirts</em> & Sparkles.</h1>
            <div class="meta">
              <div>8 artists · 3 stages</div>
              <div>from €58</div>
              <div>first-timer friendly</div>
            </div>
            <div class="btn">See tickets</div>
            <span style="margin-left:10px;font-size:12px;color:#666;text-decoration:underline">New to this? 60-sec tour →</span>
          </div>
          <div class="ph-img">[editorial festival photo]</div>
          <div style="padding:20px 28px;font-size:13px;line-height:1.6;color:#333">
            A long, warm Saturday on the IJ. Doors at 22:00, last music at 06:00, free ferry home every 15 minutes.
          </div>
        </div>
      </div>

      <!-- VIBE B — Warehouse -->
      <div class="vibe-card">
        <div class="vibe-head">B · Warehouse <span class="sub">dark · monospaced · scene-accurate</span></div>
        <div class="vibe-body v-ware">
          <div class="hero">
            <div class="kicker">[24.05] · [NDSM] · [22:00-06:00]</div>
            <h1>SKIRTS & <em>SPARKLES</em></h1>
            <div class="meta">&gt; 8 artists // 3 stages // from €58.00</div>
            <div class="btn">[ SEE TICKETS ]</div>
            <span style="margin-left:10px;font-family:var(--mono);font-size:11px;color:#888">new here? ./tour.sh</span>
          </div>
          <div class="strip">
            <span>CAP_FREE // 04 OF 08</span>
            <span>1h34m TIL DOORS</span>
            <span>34 RESALE</span>
          </div>
          <div style="padding:20px 28px;font-family:var(--mono);font-size:11px;line-height:1.8;color:#aaa">
            $ NDSM werf // 12min ferry ex Centraal<br>
            $ bring: earplugs, €10 cash, shoes<br>
            $ last music 06:00 // night bus 397
          </div>
        </div>
      </div>

      <!-- VIBE C — Warm editorial / newcomer -->
      <div class="vibe-card">
        <div class="vibe-head">C · Warm editorial <span class="sub">on-brief · newcomer-friendly</span></div>
        <div class="vibe-body v-warm">
          <div class="hero">
            <div class="kicker">a long saturday, on the IJ</div>
            <h1><em>Skirts</em> & Sparkles<span class="spark">✨</span></h1>
            <div class="meta">Saturday 24 May, 22:00 to 06:00. Eight artists, three stages, and a big warm room with good air and better speakers. Never been to one? This is a nice first one.</div>
            <div class="btn">See tickets · from €58</div>
            <div class="btn sec">60-sec tour</div>
          </div>
          <div style="padding:0 28px 20px;font-family:var(--hand);font-size:18px;color:#8a5030">bring: earplugs, water, €10 cash, shoes you can dance in</div>
        </div>
      </div>

    </div>

    <!-- recommendation -->
    <div class="strat-card mt-24" style="max-width: 920px; background: #fffdf7;">
      <div class="num">RECOMMENDATION</div>
      <h3 style="font-family: var(--serif); font-size: 26px;">Go <strong>C</strong> for the brand, borrow from <strong>A</strong> for the app.</h3>
      <p>
        <strong>C (warm editorial)</strong> leans all the way into your differentiator — the "I'm new here, help me find the good stuff" energy.
        It doesn't look like a ticket site. That's the point.
      </p>
      <p>
        Once someone's inside the transactional flows (checkout, my tickets, the queue), the product should shift into <strong>A (Dutch minimal)</strong> —
        calm, unambiguous, low-personality. That's where clarity beats charm.
      </p>
      <p>
        <strong>B (warehouse)</strong> is fun but it speaks to the scene insider only — which is exactly the user you said you're <em>not</em> building for.
        Good reference for an editorial/zine sub-brand later.
      </p>
    </div>
  `;
})();
