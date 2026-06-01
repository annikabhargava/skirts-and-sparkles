window.SS_DATA = {
  cities: ["Amsterdam", "Rotterdam", "Utrecht", "The Hague"],
  moods: [
    {
      id: "soft",
      label: "Ease me in",
      title: "Warm rooms, early starts, friendly floors",
      description: "For your first few weeks in the Netherlands: smaller venues, clear travel, and music that leaves space to breathe.",
      genres: ["house", "disco", "live electronic"],
      color: "#f7c66f"
    },
    {
      id: "deep",
      label: "I want the real thing",
      title: "Warehouse hours and scene institutions",
      description: "Louder nights with proper sound, longer sets, and enough context to know what you are walking into.",
      genres: ["techno", "leftfield", "club"],
      color: "#7be0c3"
    },
    {
      id: "brave",
      label: "Surprise me",
      title: "Odd, hybrid, local, and hard to explain",
      description: "For when you want the story afterwards: experimental bills, new collectives, and lineups you would miss on ticket sites.",
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
      guide: "Start here if Dutch nightlife still feels like a closed door. You can leave before the night bus era begins.",
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
      guide: "A classic Amsterdam long night. Great if you know you want pressure, pace, and a crowd that came to stay.",
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
      guide: "A good Rotterdam intro: direct, sweaty, welcoming, and much less ceremonial than Amsterdam.",
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
      guide: "Not really a rave, not really a concert. Perfect if you like community energy without a 06:00 ending.",
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
    { stat: "0 EUR", label: "refund stress", detail: "If a ticket does not scan, support handles the refund flow." }
  ]
};
