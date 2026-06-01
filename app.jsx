function App() {
  const data = window.SS_DATA;
  const [moodId, setMoodId] = useState(data.moods[0].id);
  const [city, setCity] = useState("Amsterdam");
  const [selectedEventId, setSelectedEventId] = useState(data.events[0].id);
  const [activeTerm, setActiveTerm] = useState(data.glossary[0].term);
  const progress = useScrollProgress();

  const selectedMood = data.moods.find((mood) => mood.id === moodId);
  const filteredEvents = useMemo(() => {
    return data.events.filter((event) => event.mood === moodId && (city === "All" || event.city === city));
  }, [moodId, city]);

  const selectedEvent = data.events.find((event) => event.id === selectedEventId) || filteredEvents[0] || data.events[0];
  const activeGlossary = data.glossary.find((item) => item.term === activeTerm) || data.glossary[0];

  useEffect(() => {
    if (!filteredEvents.some((event) => event.id === selectedEventId) && filteredEvents[0]) {
      setSelectedEventId(filteredEvents[0].id);
    }
  }, [filteredEvents, selectedEventId]);

  return (
    <main id="top">
      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} />
      <nav className="site-nav">
        <Brand />
        <div className="nav-links" aria-label="Primary navigation">
          <a href="#discover">Discover</a>
          <a href="#resale">Resale</a>
          <a href="#guide">Scene guide</a>
          <a href="#mobile">Mobile</a>
        </div>
        <a className="nav-cta" href="#discover">Find my night</a>
      </nav>

      <section className="hero" aria-label="Skirts and Sparkles introduction">
        <div className="hero-media">
          <img src="assets/amsterdam-night-scene.png" alt="Newcomers arriving at an Amsterdam music venue at night" />
          <div className="hero-overlay" />
        </div>
        <div className="hero-content">
          <p className="eyebrow">Netherlands music scene · decoded</p>
          <h1>Tickets are the transaction. The scene is the product.</h1>
          <p className="hero-copy">
            Skirts & Sparkles helps newcomers understand where to go, what the night will feel like,
            and how to buy or resell tickets without getting burned.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#discover"><Icon name="compass" /> Start exploring</a>
            <a className="button secondary" href="#guide"><Icon name="guide" /> Learn the language</a>
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
          eyebrow="Interactive discovery"
          title="Choose the kind of night you can actually handle."
        >
          Not every sold-out warehouse is a good first Dutch night out. Start with mood, then city, then the event details that ticket sites usually hide.
        </SectionHeader>

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
                  <span>Switch city or mood. The real app would let you save this as an alert.</span>
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
                <button>{selectedEvent.soldOut ? "Watch resale" : "View tickets"}</button>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section resale" id="resale">
        <SectionHeader eyebrow="TicketSwap energy, newcomer context" title="Resale should feel calm, not desperate.">
          The ticket layer borrows the trust expectations people know, then adds context: seller clarity, fair-price logic, and what happens if the QR fails.
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
        <SectionHeader eyebrow="Scene guide" title="No gatekeeping. Just translation.">
          A glossary turns confusing event language into confidence, while the interface keeps users in discovery mode instead of sending them to another tab.
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

      <section className="section mobile" id="mobile">
        <div className="mobile-copy">
          <SectionHeader eyebrow="Mobile later" title="The website already knows what the app should become.">
            Save events, watch resale, get travel nudges, open the QR, and find help at the door. The website can validate the model before the app build starts.
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
        <p>For expats, internationals, and anyone trying to find the door into Dutch nightlife.</p>
        <a href="#top">Back to top</a>
      </footer>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
