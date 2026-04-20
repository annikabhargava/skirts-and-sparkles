// App shell — tab switching, tweaks, edit-mode
(function () {
  // Tabs
  const tabs = document.querySelectorAll('.tab');
  const panes = document.querySelectorAll('.pane');
  tabs.forEach(t => {
    t.addEventListener('click', () => {
      const target = t.dataset.pane;
      tabs.forEach(x => x.classList.toggle('active', x === t));
      panes.forEach(p => p.classList.toggle('active', p.id === 'pane-' + target));
      try { localStorage.setItem('ss_tab', target); } catch(e){}
      window.scrollTo({ top: 0, behavior: 'instant' });
    });
  });
  // restore tab
  try {
    const saved = localStorage.getItem('ss_tab');
    if (saved) {
      const t = document.querySelector(`.tab[data-pane="${saved}"]`);
      if (t) t.click();
    }
  } catch(e){}

  // Tweaks
  const tweaksEl = document.getElementById('tweaks');
  const defaults = JSON.parse(document.getElementById('tweak-defaults').textContent.replace(/\/\*EDITMODE-(BEGIN|END)\*\//g, ''));
  const state = { ...defaults };

  function applyState() {
    document.body.classList.toggle('grey', state.fidelity === 'grey');
    // voice tone filter
    const voiceCards = document.querySelectorAll('#pane-voice .copy-card');
    voiceCards.forEach(c => {
      if (state.tone === 'all') { c.style.display = ''; return; }
      c.style.display = c.classList.contains(state.tone) ? '' : 'none';
    });
    // scroll to screen section
    if (state.screen && state.screen !== 'all') {
      const el = document.getElementById('wf-' + state.screen);
      if (el) {
        const activeTab = document.querySelector('.tab.active');
        if (activeTab && activeTab.dataset.pane !== 'wireframes') {
          document.querySelector('.tab[data-pane="wireframes"]').click();
        }
        setTimeout(() => el.scrollIntoView({ block: 'start' }), 100);
      }
    }
    // sync pills
    tweaksEl.querySelectorAll('.pill').forEach(p => {
      const k = p.dataset.set;
      p.classList.toggle('on', state[k] === p.dataset.val);
    });
  }

  tweaksEl.querySelectorAll('.pill').forEach(p => {
    p.addEventListener('click', () => {
      state[p.dataset.set] = p.dataset.val;
      applyState();
      postEdit();
    });
  });
  document.getElementById('screenSelect').addEventListener('change', (e) => {
    state.screen = e.target.value;
    applyState();
  });

  function postEdit() {
    try {
      window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { fidelity: state.fidelity, tone: state.tone } }, '*');
    } catch(e){}
  }

  // Edit mode (Tweaks toggle)
  window.addEventListener('message', (e) => {
    const d = e.data || {};
    if (d.type === '__activate_edit_mode') tweaksEl.classList.add('on');
    if (d.type === '__deactivate_edit_mode') tweaksEl.classList.remove('on');
  });
  try { window.parent.postMessage({ type: '__edit_mode_available' }, '*'); } catch(e){}

  applyState();
})();
