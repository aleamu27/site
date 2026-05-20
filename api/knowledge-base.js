// RAG Knowledge Base for Hepta Chat
// AI can ONLY answer based on information in this file

module.exports = {
  company: {
    name: "Hepta",
    altName: "Heptatech",
    location: "Oslo, Norway",
    domains: ["hepta.no", "heptatech.io"],
    description: "Software development company that brings visual identity into software. Design and engineering on the same team.",
  },

  services: {
    development: {
      name: "Utvikling / Development",
      description: "Nettsider, webapper, APIer, integrasjoner, ytelse, tilgjengelighet, sky-deployment",
      keywords: ["nettside", "webapp", "api", "website", "web app", "utvikling", "development"],
    },
    visualIdentity: {
      name: "Visuell identitet / Visual Identity",
      description: "Brandsystemer, typografi, farge, art direction, logo, designsystem",
      keywords: ["design", "brand", "logo", "visuell", "identitet", "visual", "identity", "branding"],
    },
    calarOS: {
      name: "Calar OS",
      description: "Forstepartsanalyse for nettsider. Hvem er pa siden, hvordan de beveger seg gjennom funnelen, attribusjon til kanaler og kampanjer, lead scoring, salgssignaler.",
      keywords: ["analytics", "analyse", "calar", "tracking", "leads", "scoring"],
    },
    consulting: {
      name: "Radgivning / Consulting",
      description: "Vurdering, planlegging og forbedring av digital tilstedevarelse",
      keywords: ["radgivning", "consulting", "strategi", "strategy", "vurdering"],
    },
  },

  pricing: {
    minimum: "USD 20,000",
    description: "Prosjekter starter typisk rundt USD 20,000 og skalerer med omfang. Dette reflekterer produksjonsklar kode med tilpasset arkitektur.",
    factors: ["Kompleksitet", "Antall sider/funksjoner", "Visuell identitet", "Integrasjoner", "Tekniske krav"],
  },

  industries: ["Fintech", "Produktselskaper", "Scale-ups", "Organisasjoner som trenger forstepartsanalyse"],

  contact: {
    email: "hello@heptatech.io",
    form: "hepta.no/contact",
  },

  team: {
    description: "Kun seniorer, ingen overleveringer til junioransatte. Liten kundelist basert pa god match.",
  },

  faq: [
    {
      q: "Hvor lang tid tar det a lage en nettside?",
      a: "Det avhenger av omfang. En enklere markedsforingsside kan ta noen uker, mens storre prosjekter med webapp, integrasjoner eller komplekse systemer tar flere maneder.",
    },
    {
      q: "Hva koster en nettside?",
      a: "Prosjekter starter typisk rundt USD 20,000 og skalerer med omfang og kompleksitet.",
    },
    {
      q: "Hvilke teknologier bruker dere?",
      a: "Vi velger teknologi basert pa prosjektets behov. Vanlige valg inkluderer React, Node.js, og moderne sky-infrastruktur.",
    },
    {
      q: "Jobber dere med sma bedrifter?",
      a: "Vi fokuserer pa prosjekter der det er god match mellom ambisjon og budsjett. Minimumsengasjement er rundt USD 20,000.",
    },
  ],
};
