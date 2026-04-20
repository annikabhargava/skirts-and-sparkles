// App root
const { useState, useEffect } = React;

function App() {
  const defaults = JSON.parse(document.getElementById("tweak-defaults").textContent.replace(/\/\*EDITMODE-(BEGIN|END)\*\//g, ""));
  const [tweaks, setTweaks] = useState(() => {
    try { return { ...defaults, ...JSON.parse(localStorage.getItem("ss_tweaks") || "{}") }; }
    catch (e) { return defaults; }
  });
  const [route, setRoute] = useState(() => {
    try { return JSON.parse(localStorage.getItem("ss_route") || '{"name":"home","params":{}}'); }
    catch(e) { return { name: "home", params: {} }; }
  });

  const go = (name, params = {}) => {
    const r = { name, params };
    setRoute(r);
    try { localStorage.setItem("ss_route", JSON.stringify(r)); } catch(e){}
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const setTweak = (k, v) => {
    setTweaks(t => {
      const next = { ...t, [k]: v };
      try { localStorage.setItem("ss_tweaks", JSON.stringify(next)); } catch(e){}
      try { window.parent.postMessage({ type: "__edit_mode_set_keys", edits: { [k]: v } }, "*"); } catch(e){}
      return next;
    });
  };

  const screens = {
    home: HomeScreen,
    event: EventScreen,
    listing: ListingScreen,
    buy: BuyScreen,
    sell: SellScreen,
    account: AccountScreen,
    mobile: MobileScreen,
    empty: EmptyScreen,
  };

  const Screen = screens[route.name] || HomeScreen;

  return (
    <>
      <Screen go={go} params={route.params} tweaks={tweaks} />
      <Tweaks tweaks={tweaks} setTweak={setTweak} />

      {/* Quick jump bar (dev aid, always on) */}
      <div style={{
        position: "fixed", bottom: 20, left: 20, zIndex: 100,
        background: "var(--cream)", border: "1px solid var(--ink)",
        borderRadius: 999, padding: 6, display: "flex", gap: 4,
        boxShadow: "var(--shadow-soft)", fontSize: 11
      }}>
        {[
          {n:"Home", r:"home"},
          {n:"Event", r:"event", p:{id:"ss-main"}},
          {n:"Sold-out", r:"event", p:{id:"adams-warehouse"}},
          {n:"Listings", r:"listing", p:{id:"adams-warehouse"}},
          {n:"Buy", r:"buy", p:{id:"ss-main"}},
          {n:"Sell", r:"sell"},
          {n:"My tix", r:"account"},
          {n:"Mobile", r:"mobile"},
          {n:"Empty", r:"empty"},
        ].map(j => (
          <button key={j.n}
            onClick={() => go(j.r, j.p || {})}
            style={{
              padding: "6px 12px", borderRadius: 999,
              background: route.name === j.r && JSON.stringify(route.params) === JSON.stringify(j.p||{}) ? "var(--ink)" : "transparent",
              color: route.name === j.r && JSON.stringify(route.params) === JSON.stringify(j.p||{}) ? "var(--cream)" : "var(--ink)",
              fontFamily: "var(--mono)", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.05em",
              cursor: "pointer", border: "none"
            }}>{j.n}</button>
        ))}
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
