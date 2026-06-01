function App() {
  const data = window.SS_DATA;
  const [moodId, setMoodId] = useState(data.moods[0].id);
  const [city, setCity] = useState("Amsterdam");
  const [selectedEventId, setSelectedEventId] = useState(data.events[0].id);
  const [activeTerm, setActiveTerm] = useState(data.glossary[0].term);
  const [firstTimerOnly, setFirstTimerOnly] = useState(true);
  const [savedEventIds, setSavedEventIds] = useState([data.events[0].id]);
  const [checklistDone, setChecklistDone] = useState(["vibe", "first-timer"]);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [linkedAccounts, setLinkedAccounts] = useState(["google"]);
  const progress = useScrollProgress();

  const selectedMood = data.moods.find((mood) => mood.id === moodId);
  const filteredEvents = useMemo(() => {
    return data.events.filter((event) => {
      const cityMatch = city === "All" || event.city === city;
      const firstTimerMatch = !firstTimerOnly || event.firstTimer;
      return event.mood === moodId && cityMatch && firstTimerMatch;
    });
  }, [moodId, city, firstTimerOnly]);

  const selectedEvent = data.events.find((event) => event.id === selectedEventId) || filteredEvents[0] || data.events[0];
  const activeGlossary = data.glossary.find((item) => item.term === activeTerm) || data.glossary[0];
  const savedEvents = data.events.filter((event) => savedEventIds.includes(event.id));
  const checklistProgress = Math.round((checklistDone.length / data.checklist.length) * 100);
  const toggleSaved = (id) => {
    setSavedEventIds((ids) => ids.includes(id) ? ids.filter((item) => item !== id) : [...ids, id]);
  };
  const toggleChecklist = (id) => {
    setChecklistDone((ids) => ids.includes(id) ? ids.filter((item) => item !== id) : [...ids, id]);
  };
  const toggleLinkedAccount = (id) => {
    setLinkedAccounts((ids) => ids.includes(id) ? ids.filter((item) => item !== id) : [...ids, id]);
  };

  useEffect(() => {
    if (!filteredEvents.some((event) => event.id === selectedEventId) && filteredEvents[0]) {
      setSelectedEventId(filteredEvents[0].id);
    }
  }, [filteredEvents, selectedEventId]);

  useEffect(() => {
    const jumpToHash = () => {
      const target = window.location.hash && document.querySelector(window.location.hash);
      if (target) target.scrollIntoView();
    };
    requestAnimationFrame(jumpToHash);
    window.addEventListener("hashchange", jumpToHash);
    return () => window.removeEventListener("hashchange", jumpToHash);
  }, []);

  return (
    <main id="top">
      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} />
      <nav className="site-nav">
        <Brand />
        <div className="nav-links" aria-label="Primary navigation">
          <a href="#discover">Discover</a>
          <a href="#resale">Resale</a>
          <a href="#guide">Scene guide</a>
          <a href="#my-tix">My tix</a>
          <a href="#account">Account</a>
        </div>
        <a className="nav-cta" href="#account">{isSignedIn ? "Account" : "Sign in"}</a>
      </nav>

      <section className="hero" aria-label="Skirts and Sparkles introduction">
        <div className="hero-media">
          <img src="assets/amsterdam-night-scene.png" alt="People arriving at an Amsterdam music venue at night" />
          <div className="hero-overlay" />
        </div>
        <div className="hero-content">
          <p className="eyebrow">Netherlands music nights</p>
          <h1>Find a night out that feels right.</h1>
          <p className="hero-copy">
            Discover events, save tickets, check the basics, and get resale alerts without the guesswork.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#discover"><Icon name="compass" /> Start exploring</a>
            <a className="button secondary" href="#account"><Icon name="guide" /> Sign in</a>
          </div>
        </div>
        <div className="hero-dock" aria-label="Live platform snapshot">
          <span>Amsterdam</span>
          <strong>47</strong>
          <span>events this week</span>
          <strong>18</strong>
          <span>fair resale listings live</span>
        </div>
      </section>

      <section className="ticker" aria-label="Scene signals">
        <div>
          <span>first-timer filters</span>
          <span>my tix dashboard</span>
          <span>pre-night checklist</span>
          <span>fair resale cap</span>
          <span>venue practicals</span>
          <span>plain-English glossary</span>
          <span>night bus nudges</span>
          <span>fresh QR tickets</span>
          <span>first-timer filters</span>
          <span>fair resale cap</span>
          <span>venue practicals</span>
        </div>
      </section>

      <section className="section discover" id="discover">
        <SectionHeader
          eyebrow="Discover"
          title="What are you in the mood for?"
        >
          Pick a vibe. We will keep the travel, timing, and ticket details clear.
        </SectionHeader>

        <div className="welcome-strip">
          <div>
            <span>New here?</span>
            <strong>First-timer mode is on.</strong>
            <p>Showing easier venues, clearer travel, and lower-pressure nights first.</p>
          </div>
          <button className={firstTimerOnly ? "active" : ""} onClick={() => setFirstTimerOnly((value) => !value)}>
            {firstTimerOnly ? "Show everything" : "First-timer OK only"}
          </button>
        </div>

        <div className="mood-grid">
          {data.moods.map((mood) => (
            <button
              key={mood.id}
              className={"mood-card" + (mood.id === moodId ? " active" : "")}
              style={{ "--mood": mood.color }}
              onClick={() => setMoodId(mood.id)}
            >
              <span>{mood.label}</span>
              <strong>{mood.title}</strong>
              <small>{mood.genres.join(" · ")}</small>
            </button>
          ))}
        </div>

        <div className="explorer">
          <div className="explorer-controls">
            {["All", ...data.cities].map((item) => (
              <PillButton key={item} active={city === item} onClick={() => setCity(item)}>
                {item}
              </PillButton>
            ))}
          </div>

          <div className="event-browser">
            <div className="event-list" aria-label="Filtered events">
              {filteredEvents.length ? filteredEvents.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  selected={event.id === selectedEvent.id}
                  onSelect={setSelectedEventId}
                />
              )) : (
                <div className="empty-state">
                  <strong>No exact match yet.</strong>
                  <span>Switch city or mood, or save an alert.</span>
                </div>
              )}
            </div>

            <aside className="event-detail">
              <div className="detail-topline">
                <span>{selectedEvent.date} · {selectedEvent.time}</span>
                <span>{selectedEvent.firstTimer ? "first-timer OK" : "know what you like"}</span>
              </div>
              <h3>{selectedEvent.title}</h3>
              <p>{selectedEvent.guide}</p>
              <div className="tag-row">
                {selectedEvent.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <div className="practical-list">
                {selectedEvent.practicals.map((item) => (
                  <div key={item}>
                    <Icon name="check" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="ticket-bar">
                <div>
                  <span>{selectedEvent.soldOut ? "Sold out" : "Primary tickets"}</span>
                  <strong>{selectedEvent.soldOut ? `${selectedEvent.resale} resale live` : `from EUR ${selectedEvent.price}`}</strong>
                </div>
                <div className="ticket-actions">
                  <button onClick={() => toggleSaved(selectedEvent.id)}>
                    {savedEventIds.includes(selectedEvent.id) ? "Saved" : "Save night"}
                  </button>
                  <button>{selectedEvent.soldOut ? "Watch resale" : "View tickets"}</button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section checklist" id="checklist">
        <SectionHeader eyebrow="Checklist" title="Ready for tonight?">
          Tick off the basics before you leave.
        </SectionHeader>
        <div className="checklist-layout">
          <div className="checklist-score">
            <span>{checklistProgress}% ready</span>
            <div className="score-ring" style={{ "--ready": `${checklistProgress}%` }}>
              <strong>{checklistDone.length}/{data.checklist.length}</strong>
            </div>
            <p>{selectedEvent.title} is looking doable. Keep the practicals close and the night gets much easier.</p>
          </div>
          <div className="checklist-items">
            {data.checklist.map((item) => (
              <ChecklistItem
                key={item.id}
                item={item}
                checked={checklistDone.includes(item.id)}
                onToggle={toggleChecklist}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section resale" id="resale">
        <SectionHeader eyebrow="Resale" title="Buy resale with a calmer checkout.">
          Fair prices, verified sellers, and a fresh QR before the event.
        </SectionHeader>
        <div className="trust-grid">
          {data.trust.map((item) => (
            <article key={item.label} className="trust-panel">
              <strong>{item.stat}</strong>
              <span>{item.label}</span>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
        <div className="resale-console">
          <div className="console-header">
            <span>Live resale board</span>
            <span>Warehouse West · Sat 13 Jun</span>
          </div>
          {[64, 58, 61].map((price, index) => (
            <div className="listing-row" key={price}>
              <span>Seller {index + 1}</span>
              <strong>EUR {price}</strong>
              <span>{price <= 58 ? "face value" : "inside fair cap"}</span>
              <button>Inspect</button>
            </div>
          ))}
        </div>
      </section>

      <section className="section guide" id="guide">
        <SectionHeader eyebrow="Scene guide" title="Scene words, plain and simple.">
          Tap a term when a listing gets confusing.
        </SectionHeader>
        <div className="guide-layout">
          <div className="glossary-list">
            {data.glossary.map((item) => (
              <GlossaryTerm
                key={item.term}
                item={item}
                active={item.term === activeTerm}
                onClick={() => setActiveTerm(item.term)}
              />
            ))}
          </div>
          <div className="glossary-answer">
            <span>Plain English</span>
            <h3>{activeGlossary.term}</h3>
            <p>{activeGlossary.plain}</p>
          </div>
        </div>
      </section>

      <section className="section my-tix" id="my-tix">
        <SectionHeader eyebrow="My tix" title="Your saved nights.">
          Tickets, alerts, routes, and door help in one place.
        </SectionHeader>
        <div className="mytix-layout">
          <article className="ticket-wallet">
            <div className="wallet-topline">
              <span>{data.myTix.ticket.status}</span>
              <span>{selectedEvent.firstTimer ? "first-timer OK" : "scene-ready"}</span>
            </div>
            <h3>{selectedEvent.title}</h3>
            <p>{selectedEvent.venue} · {selectedEvent.date} · {selectedEvent.time}</p>
            <div className="wallet-grid">
              <div>
                <span>QR</span>
                <strong>{data.myTix.ticket.qr}</strong>
              </div>
              <div>
                <span>Support</span>
                <strong>{data.myTix.ticket.support}</strong>
              </div>
              <div>
                <span>Reminder</span>
                <strong>{data.myTix.ticket.reminder}</strong>
              </div>
            </div>
          </article>
          <aside className="saved-nights">
            <div className="saved-header">
              <strong>{data.myTix.saved} saved nights</strong>
              <span>{data.myTix.alerts} resale alerts</span>
            </div>
            {(savedEvents.length ? savedEvents : [selectedEvent]).map((event) => (
              <button key={event.id} onClick={() => setSelectedEventId(event.id)}>
                <span>{event.date}</span>
                <strong>{event.title}</strong>
                <em>{event.firstTimer ? "first-timer OK" : "after midnight energy"}</em>
              </button>
            ))}
          </aside>
        </div>
      </section>

      <section className="section account" id="account">
        <SectionHeader eyebrow="Account" title={isSignedIn ? "Welcome back." : "Sign in to save your night."}>
          {isSignedIn ? "Your connected accounts are ready." : "Use email or connect an account. No pressure, no spam."}
        </SectionHeader>
        <div className="account-layout">
          <form className="login-panel" onSubmit={(event) => { event.preventDefault(); setIsSignedIn(true); }}>
            <label>
              Email
              <input type="email" placeholder="you@example.com" required />
            </label>
            <label>
              Password
              <input type="password" placeholder="8+ characters" required />
            </label>
            <button type="submit">{isSignedIn ? "Signed in" : "Sign in"}</button>
            <div className="login-actions">
              <button type="button" onClick={() => setIsSignedIn(true)}>Continue with Google</button>
              <button type="button" onClick={() => setIsSignedIn(true)}>Create account</button>
            </div>
          </form>
          <aside className="link-panel">
            <div className="saved-header">
              <strong>Linked accounts</strong>
              <span>{linkedAccounts.length}/{data.accounts.length} connected</span>
            </div>
            {data.accounts.map((account) => {
              const linked = linkedAccounts.includes(account.id);
              return (
                <button key={account.id} className={linked ? "linked" : ""} onClick={() => toggleLinkedAccount(account.id)}>
                  <span>
                    <strong>{account.name}</strong>
                    <em>{account.detail}</em>
                  </span>
                  <b>{linked ? "Connected" : "Connect"}</b>
                </button>
              );
            })}
          </aside>
        </div>
      </section>

      <section className="section mobile" id="mobile">
        <div className="mobile-copy">
          <SectionHeader eyebrow="At the venue" title="Everything you need at the door.">
            QR, route, reminders, and support stay close.
          </SectionHeader>
          <div className="app-principles">
            <span><Icon name="phone" /> Concierge before the event</span>
            <span><Icon name="ticket" /> Ticket wallet at the venue</span>
            <span><Icon name="guide" /> Help mode under pressure</span>
          </div>
        </div>
        <PhonePreview event={selectedEvent} />
      </section>

      <footer className="footer">
        <Brand />
        <p>Find the night. Keep the ticket. Get home easy.</p>
        <a href="#top">Back to top</a>
      </footer>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
