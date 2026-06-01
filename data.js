window.SS_DATA = {
  cities: ["Amsterdam", "Rotterdam", "Utrecht", "The Hague"],
  moods: [
    {
      id: "soft",
      label: "Ease me in",
      title: "Warm rooms, early starts, friendly floors",
      genres: ["house", "disco", "live electronic"],
      color: "#f7c66f"
    },
    {
      id: "deep",
      label: "I want the real thing",
      title: "Warehouse hours and scene institutions",
      genres: ["techno", "leftfield", "club"],
      color: "#7be0c3"
    },
    {
      id: "brave",
      label: "Surprise me",
      title: "Odd, hybrid, local, and hard to explain",
      genres: ["ambient", "bass", "hybrid"],
      color: "#9aa7ff"
    }
  ],
  events: [
    {
      id: "ij-sunset",
      city: "Amsterdam",
      title: "IJ Sunset Sessions",
      venue: "NDSM Wharf",
      date: "Fri 12 Jun",
      time: "19:00-02:00",
      price: 28,
      resale: 0,
      firstTimer: true,
      soldOut: false,
      mood: "soft",
      tags: ["outdoor", "free ferry", "easy first night"],
      guide: "A soft landing: open air, simple travel, and enough time to get home easily.",
      practicals: ["Free ferry from Centraal", "No strict dress code", "Bring a light jacket"]
    },
    {
      id: "warehouse-west",
      city: "Amsterdam",
      title: "Warehouse West",
      venue: "Elementenstraat",
      date: "Sat 13 Jun",
      time: "23:00-07:00",
      price: 58,
      resale: 18,
      firstTimer: false,
      soldOut: true,
      mood: "deep",
      tags: ["sold out", "harder techno", "resale active"],
      guide: "A long Amsterdam night with pressure, pace, and a crowd that came to stay.",
      practicals: ["Lockers available", "Earplugs strongly advised", "Night bus nearby"]
    },
    {
      id: "rotterdam-signal",
      city: "Rotterdam",
      title: "Signal at Perron",
      venue: "Perron",
      date: "Sat 20 Jun",
      time: "23:30-06:00",
      price: 34,
      resale: 6,
      firstTimer: true,
      soldOut: false,
      mood: "deep",
      tags: ["train friendly", "basement club", "editor pick"],
      guide: "Direct, sweaty, welcoming, and close to Rotterdam Centraal.",
      practicals: ["Walk from Rotterdam Centraal", "Card only bar", "Check last train or plan night train"]
    },
    {
      id: "utrecht-odd-hours",
      city: "Utrecht",
      title: "Odd Hours Listening Club",
      venue: "De Nijverheid",
      date: "Sun 21 Jun",
      time: "16:00-22:00",
      price: 18,
      resale: 0,
      firstTimer: true,
      soldOut: false,
      mood: "brave",
      tags: ["Sunday", "experimental", "low stakes"],
      guide: "Community energy without a 06:00 ending.",
      practicals: ["Cycle friendly", "Food trucks outside", "English widely spoken"]
    }
  ],
  glossary: [
    { term: "b2b", plain: "Back-to-back: two DJs share one set and swap tracks." },
    { term: "closing set", plain: "The final slot. Often looser, longer, and more emotional." },
    { term: "doors", plain: "The time entry begins, not the time the main artist starts." },
    { term: "first release", plain: "The cheapest ticket tier. It sells out fastest." },
    { term: "RA", plain: "Resident Advisor, a common event listing site for electronic music." },
    { term: "OV", plain: "Dutch public transport. You tap in and out with card, phone, or OV-chipkaart." }
  ],
  trust: [
    { stat: "110%", label: "max resale cap", detail: "No hype pricing. Resale stays close to face value." },
    { stat: "48h", label: "fresh QR window", detail: "The buyer gets a refreshed ticket before the event." },
    { stat: "0 EUR", label: "refund stress", detail: "If a ticket does not scan, support steps in." }
  ],
  checklist: [
    { id: "vibe", label: "Pick a night that matches your energy", detail: "Start with mood before price or popularity." },
    { id: "first-timer", label: "Check if it is first-timer OK", detail: "Look for easier venues, earlier starts, and clear transport." },
    { id: "travel", label: "Plan the way home before you go", detail: "Night trains, ferries, and buses decide how calm the ending feels." },
    { id: "cash", label: "Check cloakroom and locker rules", detail: "Know what to bring before you queue." },
    { id: "ears", label: "Pack earplugs", detail: "Future you deserves functioning hearing." }
  ],
  myTix: {
    name: "Annika",
    saved: 3,
    alerts: 2,
    ticket: {
      status: "Saved for tonight",
      qr: "unlocks 48h before doors",
      support: "door help ready",
      reminder: "Ferry F3 from Centraal is the easiest route"
    }
  },
  accounts: [
    { id: "google", name: "Google", detail: "Calendar holds and login" },
    { id: "spotify", name: "Spotify", detail: "Better music matches" },
    { id: "ticketswap", name: "TicketSwap", detail: "Import resale tickets" },
    { id: "calendar", name: "Calendar", detail: "Route and door reminders" }
  ]
};
