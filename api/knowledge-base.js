// RAG Knowledge Base for Hepta Chat
// AI can ONLY answer based on information in this file
// Bilingual: Norwegian (no) and English (en)

module.exports = {
  company: {
    name: "Hepta",
    altName: "Heptatech",
    location: "Oslo, Norway",
    domains: ["hepta.no", "heptatech.io"],
    tagline: "Good software that looks good",
    description: {
      no: "Hepta er et softwareutviklingsselskap som bringer visuell identitet inn i software. Design og engineering pa samme team. Vi lager vakker, ytelsesrik programvare som brukere faktisk vil bruke.",
      en: "Hepta is a software development company that brings visual identity into software. Design and engineering on the same team. We build beautiful, high-performance software that users actually want to use.",
    },
    philosophy: {
      no: "Vi tror pa a levere programvare som bade fungerer utmerket og ser bra ut. Design og utvikling jobber tett sammen for a skape helhetlige losninger.",
      en: "We believe in delivering software that both works brilliantly and looks great. Design and development work closely together to create cohesive solutions.",
    },
    approach: {
      no: "Vi holder kundeutvalget lite og basert pa god match. Kun seniorer pa teamet - ingen overleveringer til junioransatte.",
      en: "We keep our client list small and based on good fit. Senior team members only - no handoffs to junior staff.",
    },
  },

  services: {
    development: {
      name: { no: "Utvikling", en: "Development" },
      tagline: "Code is how we build",
      description: {
        no: "Vi bygger nettsider, webapper, APIer, integrasjoner med fokus pa ytelse, tilgjengelighet og moderne sky-deployment.",
        en: "We build websites, web apps, APIs, and integrations with a focus on performance, accessibility, and modern cloud deployment.",
      },
      details: {
        no: [
          "Custom nettsider og webapplikasjoner",
          "API-utvikling og integrasjoner mot tredjepartssystemer",
          "Skybasert infrastruktur og deployment",
          "Ytelsesoptimalisering og tilgjengelighet (accessibility)",
          "Sikkerhet etter beste praksis",
        ],
        en: [
          "Custom websites and web applications",
          "API development and third-party integrations",
          "Cloud-based infrastructure and deployment",
          "Performance optimization and accessibility",
          "Security following best practices",
        ],
      },
    },
    visualIdentity: {
      name: { no: "Visuell identitet", en: "Visual Identity" },
      tagline: "Design is how we think",
      description: {
        no: "Vi designer brandsystemer som fungerer pa tvers av alle flater - fra logo til komplett designsystem.",
        en: "We design brand systems that work across all surfaces - from logo to complete design system.",
      },
      details: {
        no: [
          "Brandsystemer og visuell identitet",
          "Typografi og fargepaletter",
          "Art direction og grafisk profil",
          "Logo og symboler",
          "Designsystemer for digital og print",
          "Illustrasjoner og ikoner",
        ],
        en: [
          "Brand systems and visual identity",
          "Typography and color palettes",
          "Art direction and graphic profile",
          "Logo and symbols",
          "Design systems for digital and print",
          "Illustrations and icons",
        ],
      },
      philosophy: {
        no: "Design handler ikke bare om hvordan ting ser ut, men hvordan de fungerer. Vi designer med brukeren i fokus.",
        en: "Design isn't just about how things look, but how they work. We design with the user in focus.",
      },
    },
    calarOS: {
      name: "Calar OS",
      tagline: { no: "Forstepartsanalyse for nettsider", en: "First-party analytics for websites" },
      description: {
        no: "Calar OS er var forsteparts-analytikklosning som gir deg full kontroll over dataene dine uten a vaere avhengig av tredjepartstjenester.",
        en: "Calar OS is our first-party analytics solution that gives you full control over your data without depending on third-party services.",
      },
      features: {
        no: [
          "Besokende-tracking: Se hvem som er pa nettsiden din og hva de gjor",
          "Funnel-analyse: Forsta hvordan besokende beveger seg gjennom salgstrakten",
          "Attribusjon: Spor hvilke kanaler og kampanjer som driver trafikk og konverteringer",
          "Lead scoring: Automatisk rangering av leads basert pa atferd og engasjement",
          "Salgssignaler: Fa varsler nar viktige hendelser skjer",
          "Forsteparts cookies: Full kontroll, ingen avhengighet av tredjeparter",
        ],
        en: [
          "Visitor tracking: See who's on your site and what they're doing",
          "Funnel analysis: Understand how visitors move through your sales funnel",
          "Attribution: Track which channels and campaigns drive traffic and conversions",
          "Lead scoring: Automatic ranking of leads based on behavior and engagement",
          "Sales signals: Get alerts when important events happen",
          "First-party cookies: Full control, no third-party dependencies",
        ],
      },
      benefits: {
        no: [
          "Bedre GDPR-compliance med forstepartsdata",
          "Mer presise data uten ad-blockere som stopper tracking",
          "Full eierskap over egne data",
        ],
        en: [
          "Better GDPR compliance with first-party data",
          "More accurate data without ad blockers stopping tracking",
          "Full ownership of your own data",
        ],
      },
    },
    consulting: {
      name: { no: "Radgivning", en: "Consulting" },
      description: {
        no: "Vurdering, planlegging og forbedring av digital tilstedevarelse. Vi hjelper med strategi, tekniske valg og veikart for digitale prosjekter.",
        en: "Assessment, planning, and improvement of digital presence. We help with strategy, technical choices, and roadmaps for digital projects.",
      },
    },
  },

  pricing: {
    approach: {
      no: "Vi priser basert pa verdi og kompleksitet, ikke timepris.",
      en: "We price based on value and complexity, not hourly rates.",
    },
    description: {
      no: "Prisen varierer basert pa prosjektets omfang, kompleksitet og krav. Vi gir alltid et konkret tilbud etter a ha forstatt behovet.",
      en: "Pricing varies based on project scope, complexity, and requirements. We always provide a concrete proposal after understanding your needs.",
    },
    factors: {
      no: ["Kompleksitet", "Antall sider/funksjoner", "Visuell identitet", "Integrasjoner", "Tekniske krav", "Tidslinje"],
      en: ["Complexity", "Number of pages/features", "Visual identity", "Integrations", "Technical requirements", "Timeline"],
    },
    note: {
      no: "For a gi et presist estimat trenger vi a vite mer om prosjektet. Ta kontakt sa kan vi diskutere.",
      en: "To give an accurate estimate, we need to know more about your project. Get in touch and we can discuss.",
    },
  },

  industries: {
    no: [
      "Fintech og finansielle tjenester",
      "Produktselskaper og SaaS",
      "Scale-ups i vekstfase",
      "Organisasjoner som trenger forstepartsanalyse",
      "Bedrifter som vil ha design og utvikling fra samme team",
    ],
    en: [
      "Fintech and financial services",
      "Product companies and SaaS",
      "Scale-ups in growth phase",
      "Organizations that need first-party analytics",
      "Companies that want design and development from the same team",
    ],
  },

  contact: {
    email: "hello@heptatech.io",
    form: "hepta.no/contact",
    location: { no: "Oslo, Norge", en: "Oslo, Norway" },
  },

  team: {
    description: {
      no: "Kun seniorer pa teamet. Ingen overleveringer til junioransatte. Liten kundelist basert pa god match.",
      en: "Senior team members only. No handoffs to junior staff. Small client list based on good fit.",
    },
    approach: {
      no: "Vi tar bare pa oss prosjekter der vi ser god match. Dette sikrer kvalitet og godt samarbeid.",
      en: "We only take on projects where we see a good fit. This ensures quality and great collaboration.",
    },
  },

  portfolio: {
    description: {
      no: "Vi har jobbet med en rekke selskaper innen fintech, produktselskaper og scale-ups. Ta kontakt for a se relevante eksempler.",
      en: "We've worked with a range of companies in fintech, product companies, and scale-ups. Get in touch to see relevant examples.",
    },
  },

  security: {
    approach: {
      no: "Vi bygger sikkerhet inn fra starten, ikke som en ettertanke. Alle prosjekter folger beste praksis for sikkerhet.",
      en: "We build security in from the start, not as an afterthought. All projects follow security best practices.",
    },
    standards: {
      no: [
        "OWASP Top 10 - beskyttelse mot de vanligste sarbarhetene",
        "Sikker autentisering og autorisasjon",
        "Kryptert dataoverforing (HTTPS/TLS)",
        "Sikker datalagring og haandtering av sensitive data",
        "Input-validering og beskyttelse mot injection-angrep",
        "Regelmessige sikkerhetsgjennomganger",
      ],
      en: [
        "OWASP Top 10 - protection against the most common vulnerabilities",
        "Secure authentication and authorization",
        "Encrypted data transfer (HTTPS/TLS)",
        "Secure data storage and handling of sensitive data",
        "Input validation and protection against injection attacks",
        "Regular security reviews",
      ],
    },
    gdpr: {
      description: {
        no: "Vi hjelper med GDPR-compliance i alle digitale losninger.",
        en: "We help with GDPR compliance in all digital solutions.",
      },
      features: {
        no: [
          "Privacy by design - personvern bygget inn fra start",
          "Dataminimering - kun samle nodvendige data",
          "Samtykkehaandtering for cookies og tracking",
          "Rett til sletting og dataportabilitet",
          "Sikker databehandling og lagring",
          "Dokumentasjon av dataflyt og behandlingsgrunnlag",
        ],
        en: [
          "Privacy by design - privacy built in from the start",
          "Data minimization - only collect necessary data",
          "Consent management for cookies and tracking",
          "Right to deletion and data portability",
          "Secure data processing and storage",
          "Documentation of data flows and legal basis",
        ],
      },
      note: {
        no: "Med Calar OS far du forstepartsdata som gir bedre kontroll og enklere GDPR-compliance enn tredjepartslosninger.",
        en: "With Calar OS you get first-party data that gives you better control and easier GDPR compliance than third-party solutions.",
      },
    },
    nis2: {
      description: {
        no: "NIS2-direktivet stiller nye krav til cybersikkerhet for mange virksomheter i EU/EOS.",
        en: "The NIS2 directive sets new cybersecurity requirements for many organizations in the EU/EEA.",
      },
      howWeHelp: {
        no: [
          "Sikker systemarkitektur som moter NIS2-krav",
          "Logging og overvaking av sikkerhetshendelser",
          "Tilgangskontroll og identitetshaandtering",
          "Sikker utviklingspraksis (secure SDLC)",
          "Dokumentasjon og rapportering",
          "Hjelp med risikovurderinger",
        ],
        en: [
          "Secure system architecture that meets NIS2 requirements",
          "Logging and monitoring of security events",
          "Access control and identity management",
          "Secure development practices (secure SDLC)",
          "Documentation and reporting",
          "Help with risk assessments",
        ],
      },
      note: {
        no: "Ta kontakt for a diskutere hvordan vi kan hjelpe din virksomhet med NIS2-compliance.",
        en: "Get in touch to discuss how we can help your organization with NIS2 compliance.",
      },
    },
  },

  integrations: {
    description: {
      no: "Vi bygger integrasjoner mot de fleste systemer og APIer.",
      en: "We build integrations with most systems and APIs.",
    },
    commonIntegrations: [
      "CRM (Salesforce, HubSpot, Pipedrive)",
      "Payment (Stripe, Vipps, Klarna, Nets)",
      "Email (Mailchimp, Sendgrid, Brevo)",
      "Accounting (Tripletex, Fiken, Visma, Xero, QuickBooks)",
      "ERP systems",
      "Inventory and logistics",
      "Social media and ad platforms",
      "Calendar and booking systems",
      "Authentication (OAuth, SSO, BankID)",
      "Cloud platforms (AWS, Google Cloud, Azure, Vercel)",
    ],
    approach: {
      no: "Vi kan integrere mot de fleste systemer som har et API. Fortell oss hva du trenger, sa finner vi en losning.",
      en: "We can integrate with most systems that have an API. Tell us what you need, and we'll find a solution.",
    },
    custom: {
      no: "Har du et internt system eller en nisjelosning? Vi bygger custom integrasjoner etter behov.",
      en: "Have an internal system or niche solution? We build custom integrations as needed.",
    },
  },

  technology: {
    description: {
      no: "Vi velger teknologi basert pa prosjektets behov, ikke hva som er trendy.",
      en: "We choose technology based on project needs, not what's trendy.",
    },
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Styled Components"],
    backend: ["Node.js", "Python", "PostgreSQL", "Redis", "GraphQL", "REST APIs"],
    infrastructure: ["Vercel", "AWS", "Google Cloud", "Cloudflare", "Docker"],
    approach: {
      no: "Vi bruker moderne, velprøvde teknologier som gir god ytelse, sikkerhet og vedlikeholdbarhet.",
      en: "We use modern, proven technologies that deliver great performance, security, and maintainability.",
    },
  },

  process: {
    description: {
      no: "Var prosess er designet for a levere kvalitet og holde deg involvert.",
      en: "Our process is designed to deliver quality and keep you involved.",
    },
    steps: {
      no: [
        "1. Oppstartsmate - Vi forstar behovet og malsettingene",
        "2. Forslag og estimat - Du far et konkret forslag med omfang",
        "3. Design - Visuell identitet og brukeropplevelse",
        "4. Utvikling - Iterativ bygging med regelmessige oppdateringer",
        "5. Testing - Grundig kvalitetssikring",
        "6. Lansering - Go-live med stotte",
        "7. Oppfolging - Vedlikehold og videreutvikling ved behov",
      ],
      en: [
        "1. Kickoff meeting - We understand your needs and goals",
        "2. Proposal and estimate - You get a concrete proposal with scope",
        "3. Design - Visual identity and user experience",
        "4. Development - Iterative building with regular updates",
        "5. Testing - Thorough quality assurance",
        "6. Launch - Go-live with support",
        "7. Follow-up - Maintenance and further development as needed",
      ],
    },
    communication: {
      no: "Du far jevnlige oppdateringer og har alltid tilgang til a se fremdrift.",
      en: "You get regular updates and always have access to see progress.",
    },
  },

  practicalDetails: {
    hosting: {
      description: {
        no: "Vi kan sette opp og administrere hosting for deg, eller du kan haandtere det selv om du foretrekker det. Dette er noe vi tilpasser etter dine behov.",
        en: "We can set up and manage hosting for you, or you can handle it yourself if you prefer. This is something we tailor to your needs.",
      },
      note: {
        no: "Ta kontakt sa finner vi en losning som passer for deg.",
        en: "Get in touch and we'll find a solution that works for you.",
      },
    },
    domain: {
      description: {
        no: "Vi hjelper gjerne med a skaffe og sette opp domene. En ting mindre a tenke pa for deg.",
        en: "We're happy to help acquire and set up your domain. One less thing for you to worry about.",
      },
    },
    cms: {
      description: {
        no: "Trenger du a oppdatere innhold selv? Vi setter opp et brukervennlig CMS tilpasset dine behov. Du slipper a vaere avhengig av oss for hver lille endring.",
        en: "Need to update content yourself? We set up a user-friendly CMS tailored to your needs. No need to depend on us for every small change.",
      },
    },
    ownership: {
      description: {
        no: "Du eier all kode vi lager for deg. Etter levering er prosjektet ditt - ingen innlaasing.",
        en: "You own all code we create for you. After delivery, the project is yours - no lock-in.",
      },
    },
  },

  content: {
    copywriting: {
      description: {
        no: "Vi tar oss av tekstinnholdet. Godt innhold er halvparten av en god nettside, sa vi skriver tekster som fungerer. Selvfolgelig samarbeider vi tett med deg om budskap og tone, og noen kunder foretrekker a skrive selv - det fungerer ogsa fint.",
        en: "We handle the copy. Good content is half of a good website, so we write text that works. Of course, we collaborate closely with you on messaging and tone, and some clients prefer to write themselves - that works fine too.",
      },
    },
    images: {
      description: {
        no: "Var kjernekompetanse er kode og design, men vi kan absolutt hjelpe med bilder og visuelt innhold om du trenger det.",
        en: "Our core competency is code and design, but we can definitely help with images and visual content if you need it.",
      },
    },
    multilingual: {
      description: {
        no: "Vi bygger flerspraklige nettsider med i18n - sa mange sprak du trenger. Perfekt for bedrifter som opererer i flere markeder.",
        en: "We build multilingual websites with i18n - as many languages as you need. Perfect for companies operating in multiple markets.",
      },
    },
  },

  technicalStandards: {
    seo: {
      description: {
        no: "Teknisk SEO er inkludert i alle leveranser. Vi bygger nettsider som soekemotorer elsker - riktig struktur, raske lastetider, og alle de tekniske detaljene pa plass.",
        en: "Technical SEO is included in all deliveries. We build websites that search engines love - proper structure, fast load times, and all the technical details in place.",
      },
    },
    mobile: {
      description: {
        no: "Alt vi lager er mobilvennlig fra start. Responsivt design er ikke et tillegg - det er standard.",
        en: "Everything we build is mobile-friendly from the start. Responsive design isn't an add-on - it's standard.",
      },
    },
    accessibility: {
      description: {
        no: "Universell utforming er innebygd i var utviklingsprosess. Vi bygger nettsider som fungerer for alle.",
        en: "Accessibility is built into our development process. We build websites that work for everyone.",
      },
    },
    ecommerce: {
      description: {
        no: "Vi bygger komplette nettbutikklosninger med alle integrasjonene du trenger - betaling, lagerstyring, ordre, frakt. Alt som skal til for a selge online.",
        en: "We build complete e-commerce solutions with all the integrations you need - payments, inventory management, orders, shipping. Everything you need to sell online.",
      },
    },
  },

  delivery: {
    training: {
      description: {
        no: "Alle prosjekter leveres med videoguide sa du og teamet ditt vet hvordan alt fungerer. Ingen gaetting - du er klar til a bruke losningen fra dag en.",
        en: "All projects come with video guides so you and your team know how everything works. No guessing - you're ready to use the solution from day one.",
      },
    },
    revisions: {
      description: {
        no: "Vi jobber iterativt og tar revisjoner underveis. Nar designet er godkjent, vet vi begge hva vi bygger mot. Ingen overraskelser.",
        en: "We work iteratively and handle revisions along the way. Once the design is approved, we both know what we're building toward. No surprises.",
      },
    },
    paymentAndWarranty: {
      description: {
        no: "Detaljer om betaling og garanti tar vi pa e-post nar vi diskuterer prosjektet ditt.",
        en: "Details about payment and warranty we handle via email when discussing your project.",
      },
      note: {
        no: "Ta kontakt sa gir vi deg et konkret forslag.",
        en: "Get in touch and we'll give you a concrete proposal.",
      },
    },
  },

  faq: [
    {
      q: { no: "Hvor lang tid tar det a lage en nettside?", en: "How long does it take to build a website?" },
      a: {
        no: "Det avhenger av omfang. En enklere markedsforingsside kan ta noen uker, mens storre prosjekter med webapp, integrasjoner eller komplekse systemer tar flere maneder.",
        en: "It depends on scope. A simpler marketing site can take a few weeks, while larger projects with web apps, integrations, or complex systems take several months.",
      },
    },
    {
      q: { no: "Hva koster en nettside?", en: "How much does a website cost?" },
      a: {
        no: "Det varierer basert pa hva du trenger. For a gi et godt estimat ma vi vite mer om prosjektet ditt. Legg igjen e-posten din sa tar vi en prat.",
        en: "It varies based on what you need. To give a good estimate, we need to know more about your project. Leave your email and we'll have a chat.",
      },
    },
    {
      q: { no: "Hvilke teknologier bruker dere?", en: "What technologies do you use?" },
      a: {
        no: "Vi velger teknologi basert pa prosjektets behov. Vanlige valg inkluderer React, Node.js, og moderne sky-infrastruktur.",
        en: "We choose technology based on project needs. Common choices include React, Node.js, and modern cloud infrastructure.",
      },
    },
    {
      q: { no: "Jobber dere med sma bedrifter?", en: "Do you work with small businesses?" },
      a: {
        no: "Ja, vi jobber med bedrifter i alle storrelser. Det viktigste er at det er god match mellom ambisjon og prosjekt.",
        en: "Yes, we work with businesses of all sizes. What matters most is a good fit between ambition and project.",
      },
    },
    {
      q: { no: "Kan dere hjelpe med bade design og utvikling?", en: "Can you help with both design and development?" },
      a: {
        no: "Ja, det er nettopp det vi spesialiserer oss pa. Design og engineering jobber pa samme team, sa du slipper a koordinere mellom ulike byraer.",
        en: "Yes, that's exactly what we specialize in. Design and engineering work on the same team, so you don't have to coordinate between different agencies.",
      },
    },
    {
      q: { no: "Hva er Calar OS?", en: "What is Calar OS?" },
      a: {
        no: "Calar OS er var forstepartsanalytikklosning. Den lar deg spore besokende, analysere funnels, gjore attribusjon og score leads - alt med data du eier selv.",
        en: "Calar OS is our first-party analytics solution. It lets you track visitors, analyze funnels, do attribution, and score leads - all with data you own yourself.",
      },
    },
    {
      q: { no: "Hvorfor forstepartsdata?", en: "Why first-party data?" },
      a: {
        no: "Forstepartsdata gir deg bedre GDPR-compliance, mer presise data (ad-blockere pavirker ikke), og full kontroll over egne data.",
        en: "First-party data gives you better GDPR compliance, more accurate data (ad blockers don't affect it), and full control over your own data.",
      },
    },
    {
      q: { no: "Hvor er dere basert?", en: "Where are you based?" },
      a: {
        no: "Vi er basert i Oslo, Norge, men jobber med kunder over hele Norden og internasjonalt.",
        en: "We're based in Oslo, Norway, but work with clients across the Nordics and internationally.",
      },
    },
    {
      q: { no: "Kan jeg se eksempler pa tidligere arbeid?", en: "Can I see examples of previous work?" },
      a: {
        no: "Ja, ta kontakt sa kan vi vise deg relevante eksempler basert pa hva du er interessert i.",
        en: "Yes, get in touch and we can show you relevant examples based on what you're interested in.",
      },
    },
    {
      q: { no: "Kan dere hjelpe med GDPR?", en: "Can you help with GDPR?" },
      a: {
        no: "Ja, vi bygger GDPR-compliance inn i alle losninger. Dette inkluderer privacy by design, samtykkehaandtering, dataminimering og sikker databehandling.",
        en: "Yes, we build GDPR compliance into all solutions. This includes privacy by design, consent management, data minimization, and secure data processing.",
      },
    },
    {
      q: { no: "Hva med NIS2?", en: "What about NIS2?" },
      a: {
        no: "Vi kan hjelpe med a bygge systemer som moter NIS2-kravene - sikker arkitektur, logging, tilgangskontroll og dokumentasjon. Ta kontakt for a diskutere dine behov.",
        en: "We can help build systems that meet NIS2 requirements - secure architecture, logging, access control, and documentation. Get in touch to discuss your needs.",
      },
    },
    {
      q: { no: "Er losningene deres sikre?", en: "Are your solutions secure?" },
      a: {
        no: "Sikkerhet er innebygd i alt vi gjor. Vi folger OWASP-standarder, bruker kryptering, og har sikker utviklingspraksis. Vi kan ogsa hjelpe med compliance-krav.",
        en: "Security is built into everything we do. We follow OWASP standards, use encryption, and have secure development practices. We can also help with compliance requirements.",
      },
    },
    {
      q: { no: "Kan dere integrere med systemet vart?", en: "Can you integrate with our system?" },
      a: {
        no: "Ja, vi bygger integrasjoner mot de fleste systemer - CRM, betalingslosninger, regnskapssystemer, og mer. Fortell oss hva du bruker sa finner vi en losning.",
        en: "Yes, we build integrations with most systems - CRM, payment solutions, accounting systems, and more. Tell us what you use and we'll find a solution.",
      },
    },
    {
      q: { no: "Stotter dere Vipps/Stripe/betaling?", en: "Do you support Stripe/payment integrations?" },
      a: {
        no: "Ja, vi har erfaring med de fleste betalingslosninger inkludert Vipps, Stripe, Klarna og Nets.",
        en: "Yes, we have experience with most payment solutions including Stripe, Klarna, PayPal, and regional options like Vipps and Nets.",
      },
    },
    {
      q: { no: "Kan dere integrere med HubSpot/Salesforce?", en: "Can you integrate with HubSpot/Salesforce?" },
      a: {
        no: "Ja, vi har erfaring med CRM-integrasjoner. Vi kan koble nettsiden eller appen din til CRM-systemet ditt for automatisk lead-haandtering.",
        en: "Yes, we have experience with CRM integrations. We can connect your website or app to your CRM system for automatic lead handling.",
      },
    },
    {
      q: { no: "Hvilken prosess folger dere?", en: "What process do you follow?" },
      a: {
        no: "Vi starter med a forsta behovet, lager et forslag, designer, utvikler iterativt med jevnlige oppdateringer, tester grundig, og stotter deg gjennom lansering.",
        en: "We start by understanding your needs, create a proposal, design, develop iteratively with regular updates, test thoroughly, and support you through launch.",
      },
    },
    {
      q: { no: "Tilbyr dere vedlikehold?", en: "Do you offer maintenance?" },
      a: {
        no: "Ja, vi tilbyr lopende vedlikehold og videreutvikling etter lansering. Ta kontakt for a diskutere en avtale som passer dine behov.",
        en: "Yes, we offer ongoing maintenance and further development after launch. Get in touch to discuss an agreement that fits your needs.",
      },
    },
    {
      q: { no: "Kan dere hjelpe med BankID-integrasjon?", en: "Can you help with authentication integration?" },
      a: {
        no: "Ja, vi har erfaring med BankID og andre autentiseringslosninger som OAuth og SSO.",
        en: "Yes, we have experience with various authentication solutions including OAuth, SSO, and regional options like BankID.",
      },
    },
    {
      q: { no: "Hva med hosting?", en: "What about hosting?" },
      a: {
        no: "Vi kan sette opp og administrere hosting for deg, eller du kan haandtere det selv. Ta kontakt sa finner vi en losning som passer.",
        en: "We can set up and manage hosting for you, or you can handle it yourself. Get in touch and we'll find a solution that fits.",
      },
    },
    {
      q: { no: "Hjelper dere med domene?", en: "Do you help with domains?" },
      a: {
        no: "Ja, vi hjelper gjerne med a skaffe og sette opp domene. En ting mindre a tenke pa.",
        en: "Yes, we're happy to help acquire and set up your domain. One less thing to think about.",
      },
    },
    {
      q: { no: "Kan jeg oppdatere nettsiden selv?", en: "Can I update the website myself?" },
      a: {
        no: "Ja, vi kan sette opp et brukervennlig CMS sa du enkelt kan oppdatere innhold uten a vaere avhengig av oss.",
        en: "Yes, we can set up a user-friendly CMS so you can easily update content without depending on us.",
      },
    },
    {
      q: { no: "Hvem eier koden?", en: "Who owns the code?" },
      a: {
        no: "Du eier all kode vi lager for deg. Etter levering er prosjektet ditt - ingen innlaasing.",
        en: "You own all code we create for you. After delivery, the project is yours - no lock-in.",
      },
    },
    {
      q: { no: "Skriver dere tekstinnhold?", en: "Do you write copy/content?" },
      a: {
        no: "Ja, vi tar oss av tekstinnholdet. Vi samarbeider tett med deg om budskap og tone. Noen kunder foretrekker a skrive selv - det fungerer ogsa fint.",
        en: "Yes, we handle the copy. We collaborate closely with you on messaging and tone. Some clients prefer to write themselves - that works fine too.",
      },
    },
    {
      q: { no: "Kan dere lage nettside pa flere sprak?", en: "Can you build multilingual websites?" },
      a: {
        no: "Ja, vi bygger flerspraklige nettsider - sa mange sprak du trenger. Perfekt for bedrifter som opererer i flere markeder.",
        en: "Yes, we build multilingual websites - as many languages as you need. Perfect for companies operating in multiple markets.",
      },
    },
    {
      q: { no: "Er nettsidene mobilvennlige?", en: "Are the websites mobile-friendly?" },
      a: {
        no: "Alt vi lager er mobilvennlig fra start. Responsivt design er standard, ikke et tillegg.",
        en: "Everything we build is mobile-friendly from the start. Responsive design is standard, not an add-on.",
      },
    },
    {
      q: { no: "Gjor dere SEO?", en: "Do you do SEO?" },
      a: {
        no: "Teknisk SEO er inkludert i alle leveranser. Vi bygger nettsider med riktig struktur, raske lastetider og alle de tekniske detaljene pa plass.",
        en: "Technical SEO is included in all deliveries. We build websites with proper structure, fast load times, and all the technical details in place.",
      },
    },
    {
      q: { no: "Bygger dere nettbutikk?", en: "Do you build e-commerce?" },
      a: {
        no: "Ja, vi bygger komplette nettbutikklosninger med alle integrasjonene du trenger - betaling, lagerstyring, ordre, frakt.",
        en: "Yes, we build complete e-commerce solutions with all the integrations you need - payments, inventory, orders, shipping.",
      },
    },
    {
      q: { no: "Far vi opplaering?", en: "Do we get training?" },
      a: {
        no: "Alle prosjekter leveres med videoguide sa du og teamet ditt vet hvordan alt fungerer fra dag en.",
        en: "All projects come with video guides so you and your team know how everything works from day one.",
      },
    },
    {
      q: { no: "Hvor mange endringsrunder far vi?", en: "How many revision rounds do we get?" },
      a: {
        no: "Vi jobber iterativt og tar revisjoner underveis. Nar designet er godkjent, vet vi begge hva vi bygger mot.",
        en: "We work iteratively and handle revisions along the way. Once the design is approved, we both know what we're building toward.",
      },
    },
    {
      q: { no: "Hvordan er betalingen?", en: "How does payment work?" },
      a: {
        no: "Detaljer om betaling tar vi pa e-post nar vi diskuterer prosjektet ditt. Ta kontakt sa gir vi deg et konkret forslag.",
        en: "Payment details we handle via email when discussing your project. Get in touch and we'll give you a concrete proposal.",
      },
    },
  ],
};
