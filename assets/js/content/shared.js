(() => {
  const CONTACTS = {
    phoneDisplay: "+39 340 745 8110",
    phoneHref: "tel:+393407458110",
    whatsappHref: "https://wa.me/393407458110?text=Ciao%20Giorgio%2C%20vorrei%20parlare%20di%20un%20viaggio.",
    whatsappLabel: "Scrivimi su WhatsApp",
    email: "ciao@giorgiolodigiani.it",
    emailHref: "mailto:ciao@giorgiolodigiani.it",
    instagramLabel: "@giorgiotraveladvisor",
    instagramHref: "https://www.instagram.com/giorgiotraveladvisor/",
    location: "Consulenza online in tutta Italia e incontri su richiesta",
    hours: "Lun - Ven | 09:00 - 19:00"
  };

  const IMAGES = {
    portrait: "assets/images/giorgio-portrait-placeholder.svg",
    amalfi: "assets/images/journey-amalfi.svg",
    marrakech: "assets/images/journey-marrakech.svg",
    nordic: "assets/images/journey-nordic.svg",
    safari: "assets/images/journey-safari.svg",
    tokyo: "assets/images/journey-tokyo.svg",
    tropics: "assets/images/journey-tropics.svg",
    galleryCoast: "assets/images/gallery-coast.svg",
    galleryDesert: "assets/images/gallery-desert.svg",
    galleryCity: "assets/images/gallery-city.svg",
    galleryLodge: "assets/images/gallery-lodge.svg",
    galleryIsland: "assets/images/gallery-island.svg",
    galleryMountain: "assets/images/gallery-mountain.svg"
  };

  const HOME_OFFERS = [
    {
      icon: "compass",
      title: "Viaggi su misura",
      text: "Viaggi personali, di nozze e aziendali costruiti intorno a tempi, desideri, budget e stile reale di chi parte.",
      meta: ["Personalizzati", "Nozze", "Aziende"],
      href: "servizi.html",
      linkLabel: "Scopri l'area su misura"
    },
    {
      icon: "plane",
      title: "Parti con Giorgio",
      text: "Itinerari gia pensati e accompagnati personalmente, con programma definito, esperienze selezionate e una presenza diretta sul posto.",
      meta: ["Viaggi accompagnati", "Piccoli gruppi", "Presenza diretta"],
      href: "viaggi.html",
      linkLabel: "Vedi i viaggi accompagnati"
    }
  ];

  const TAILORED_SERVICES = [
    {
      icon: "compass",
      title: "Viaggi personalizzati",
      text: "Dalla direzione iniziale alla struttura completa del viaggio: destinazione, ritmo, soggiorni, esperienze e passaggi operativi pensati in modo coerente.",
      meta: ["Su misura", "Un solo referente", "Itinerario completo"]
    },
    {
      icon: "heart",
      title: "Viaggi di nozze",
      text: "Progetti costruiti per coppie che cercano un viaggio di nozze con identita precisa, tono alto e una sensazione generale all'altezza del momento.",
      meta: ["Nozze", "Coppie", "Selezione curata"]
    },
    {
      icon: "city",
      title: "Progetti aziendali su misura",
      text: "Esperienze di viaggio costruite intorno al settore e all'identita dell'azienda, non format aziendali standardizzati.",
      meta: ["Aziende", "Esperienza coerente", "Regia dedicata"]
    }
  ];

  const ACCOMPANIED_FEATURES = [
    {
      icon: "plane",
      title: "Programma gia costruito",
      text: "La struttura del viaggio e gia definita: tappe, tempi, esperienze e taglio generale sono pensati in anticipo.",
      meta: ["Itinerario chiaro", "Tempi leggibili"]
    },
    {
      icon: "user",
      title: "Presenza diretta",
      text: "Giorgio accompagna il gruppo come riferimento costante sul posto, dando continuita tra progetto e viaggio reale.",
      meta: ["Guida diretta", "Supporto sul campo"]
    },
    {
      icon: "spark",
      title: "Esperienza piu fluida",
      text: "Chi parte entra in un viaggio gia calibrato, con meno dispersione organizzativa e piu attenzione a ritmo, atmosfera e qualita percepita.",
      meta: ["Meno attrito", "Piu presenza"]
    }
  ];

  const PROFESSIONAL_PROJECTS = [
    {
      icon: "city",
      title: "Consulenze per aziende e partner",
      text: "Progetti turistici costruiti per aziende, agenzie e realta che hanno bisogno di una lettura operativa, commerciale o di prodotto piu aderente al contesto italiano.",
      meta: ["Aziende", "Agenzie", "Consulenza dedicata"]
    },
    {
      icon: "message",
      title: "Rappresentanza e sviluppo in Italia",
      text: "Supporto a partner locali esteri che vogliono promuoversi sul mercato italiano, presentare meglio la propria proposta o avere un riferimento diretto sul territorio.",
      meta: ["Mercato italiano", "Promozione", "Presenza locale"]
    },
    {
      icon: "compass",
      title: "Campus estivi e progetti outdoor",
      text: "Settimane sul campo e format all'aperto che uniscono viaggio, orientamento, esperienza diretta e lavoro di gruppo in un contesto piu educativo e attivo.",
      meta: ["Campus", "Outdoor", "Esperienza sul campo"]
    }
  ];

  const OUTDOOR_PROJECTS = [
    {
      icon: "compass",
      title: "Campus estivi",
      text: "Settimane organizzate con un'impostazione chiara, adatte a un contesto piu formativo e immersivo, dove il viaggio diventa anche esperienza vissuta sul campo.",
      meta: ["Settimane dedicate", "Dimensione educativa"]
    },
    {
      icon: "plane",
      title: "Outdoor collegato al viaggio",
      text: "Quando il contesto lo richiede, l'accompagnamento puo includere attivita e momenti all'aperto pensati per dare piu coerenza all'esperienza complessiva.",
      meta: ["Accompagnamento", "Esperienze attive"]
    }
  ];

  const ACCOMPANIED_TRIPS = [
    {
      image: IMAGES.amalfi,
      alt: "Viaggio accompagnato in Costiera Amalfitana",
      tag: "Partenza accompagnata",
      title: "Costiera Amalfitana",
      text: "Mare, soste ben dosate, hotel selezionati e giornate costruite per vivere la destinazione senza correre.",
      chips: ["Italia", "Primavera - Estate", "Con accompagnamento"]
    },
    {
      image: IMAGES.marrakech,
      alt: "Viaggio accompagnato tra Marrakech e deserto",
      tag: "Partenza accompagnata",
      title: "Marrakech e deserto",
      text: "Citta, materia, riad ben scelti e una parentesi nel deserto con un ritmo piu raccolto e leggibile.",
      chips: ["Marocco", "Autunno - Primavera", "Esperienziale"]
    },
    {
      image: IMAGES.nordic,
      alt: "Viaggio accompagnato in Islanda",
      tag: "Partenza accompagnata",
      title: "Islanda on the road",
      text: "Paesaggio forte, soste sensate e un itinerario gia calibrato per chi vuole vivere la luce del Nord senza dispersione.",
      chips: ["Nord Europa", "Estate", "Road trip"]
    },
    {
      image: IMAGES.safari,
      alt: "Viaggio accompagnato safari Tanzania",
      tag: "Partenza accompagnata",
      title: "Tanzania tra safari e lodge",
      text: "Un viaggio di intensita alta, ma tenuto con una regia chiara tra spostamenti, esperienze e tempi di recupero.",
      chips: ["Africa", "Giugno - Ottobre", "Safari"]
    }
  ];

  const PHOTO_ITEMS = [
    {
      image: IMAGES.galleryCoast,
      alt: "Paesaggio costiero elegante al tramonto",
      tag: "Costa e luce",
      title: "Linee pulite, luce calda, ritmo mediterraneo",
      text: "Un'immagine che racconta soggiorni vista mare, hotel di carattere e giornate costruite con tempi ampi e ben dosati.",
      location: "Mediterraneo",
      chips: ["Mare", "Hotel di charme"],
      layout: "wide"
    },
    {
      image: IMAGES.galleryDesert,
      alt: "Tenda premium nel deserto al tramonto",
      tag: "Deserto curato",
      title: "Silenzio, materia e cambio di ritmo",
      text: "Una scena utile per evocare itinerari che alternano citta, ospitalita di gusto e una parentesi piu raccolta.",
      location: "Marocco",
      chips: ["Esperienziale", "Tramonto"],
      layout: "tall"
    },
    {
      image: IMAGES.galleryCity,
      alt: "Skyline urbana e hotel design",
      tag: "Taglio urbano",
      title: "Energia contemporanea con selezione mirata",
      text: "Una direzione adatta a city break e grandi citta, con quartieri giusti, hotel ben scelti e agenda mai sovraccarica.",
      location: "Tokyo",
      chips: ["City break", "Design stay"]
    },
    {
      image: IMAGES.galleryLodge,
      alt: "Lodge raffinato immerso nella natura",
      tag: "Natura e comfort",
      title: "Paesaggio forte, accoglienza misurata",
      text: "Un riferimento visivo utile per viaggi in cui il contesto naturale resta protagonista senza rinunciare a comfort e servizio.",
      location: "Africa orientale",
      chips: ["Safari", "Lodge"]
    },
    {
      image: IMAGES.galleryIsland,
      alt: "Pontile privato in una laguna tropicale",
      tag: "Acqua e quiete",
      title: "Spazio, privacy e respiro",
      text: "Una scena che comunica luce, distanza dal rumore e una qualita del soggiorno basata su calma e selezione.",
      location: "Oceano Indiano",
      chips: ["Resort", "Slow luxury"],
      layout: "wide"
    },
    {
      image: IMAGES.galleryMountain,
      alt: "Suite panoramica in montagna",
      tag: "Silenzio alpino",
      title: "Montagna contemporanea e tempo lento",
      text: "Perfetta per raccontare chalet di carattere, benessere e soggiorni costruiti con equilibrio tra paesaggio e comfort.",
      location: "Dolomiti",
      chips: ["Montagna", "Wellness"],
      layout: "tall"
    }
  ];

  const PROCESS = [
    { title: "Primo confronto", text: "Raccolgo obiettivi, tempi, budget e aspettative per definire una direzione chiara sin dall'inizio." },
    { title: "Struttura del viaggio", text: "Organizzo tappe, soggiorni ed esperienze in un itinerario leggibile e coerente con il tipo di viaggio." },
    { title: "Rifinitura", text: "Mettiamo a fuoco ritmo, dettagli pratici, priorita e richieste specifiche fino a ottenere un progetto credibile." },
    { title: "Partenza", text: "Prima della partenza hai un quadro completo del viaggio e un riferimento diretto per gli ultimi passaggi." }
  ];

  const ACCOMPANIED_PROCESS = [
    { title: "Scelta della partenza", text: "Valuti il taglio del viaggio, il ritmo e la destinazione per capire se la proposta e quella giusta per te." },
    { title: "Preparazione chiara", text: "Ricevi una lettura precisa del programma, dei passaggi del viaggio e di cosa aspettarti in modo realistico." },
    { title: "Viaggio con presenza diretta", text: "Durante la partenza Giorgio resta il riferimento sul posto, con una presenza che rende l'esperienza piu fluida." },
    { title: "Esperienza piu leggibile", text: "L'obiettivo non e riempire le giornate, ma farle funzionare con coerenza, tempi giusti e un buon livello generale." }
  ];

  const VALUES = [
    { icon: "ear", title: "Ascolto vero", text: "Il punto di partenza non e il catalogo ma la persona, con il suo modo reale di stare in viaggio." },
    { icon: "spark", title: "Scelte che hanno senso", text: "Tappe, quartieri, tempi e hotel vengono selezionati per tenere insieme atmosfera e fattibilita." },
    { icon: "shield", title: "Meno rumore", text: "La consulenza serve a togliere dispersione e a rendere il progetto piu pulito, leggibile e credibile." },
    { icon: "plane", title: "Presenza personale", text: "Che si tratti di una progettazione o di una partenza accompagnata, il riferimento resta diretto e riconoscibile." }
  ];

  const FAQ = [
    { question: "Posso contattarti anche se non ho ancora scelto la meta?", answer: "Si. Spesso il valore del primo confronto sta proprio nel dare una direzione a un'idea ancora aperta." },
    { question: "Segui solo viaggi lunghi?", answer: "No. Un weekend, un viaggio di nozze o un itinerario piu articolato richiedono tutti un'impostazione chiara." },
    { question: "Come funziona l'area Parti con Giorgio?", answer: "Si tratta di viaggi gia costruiti e accompagnati direttamente, non di consulenze da progettare da zero." },
    { question: "Puoi lavorare anche su progetti aziendali?", answer: "Si. L'obiettivo e costruire esperienze coerenti con il settore e con l'identita dell'azienda, non format generici." }
  ];

  const CONTACT_CHANNELS = [
    { icon: "phone", title: "Telefono", value: CONTACTS.phoneDisplay, note: "Per una richiesta rapida o per fissare direttamente un confronto.", href: CONTACTS.phoneHref },
    { icon: "mail", title: "Email", value: CONTACTS.email, note: "Ideale se vuoi spiegare con piu calma il progetto o il tipo di viaggio.", href: CONTACTS.emailHref },
    { icon: "whatsapp", title: "WhatsApp", value: CONTACTS.whatsappLabel, note: "Canale diretto per un primo messaggio veloce e per avviare la conversazione.", href: CONTACTS.whatsappHref, external: true },
    { icon: "instagram", title: "Instagram", value: CONTACTS.instagramLabel, note: "Un punto di contatto utile per vedere tono, presenza e aggiornamenti del lavoro.", href: CONTACTS.instagramHref, external: true }
  ];

  window.siteSharedContent = {
    images: IMAGES,
    global: {
      siteName: "Giorgio Lodigiani",
      role: "Consulente di viaggi",
      tagline: "Viaggi su misura e viaggi accompagnati costruiti con attenzione a ritmo, atmosfera e qualita dell'esperienza.",
      contacts: CONTACTS,
      footerText: "Consulenza viaggi personale per costruire itinerari su misura o accompagnare partenze selezionate con una direzione chiara."
    },
    navigation: [
      { key: "home", label: "Home", href: "index.html" },
      { key: "services", label: "Viaggi su misura", href: "servizi.html" },
      { key: "journeys", label: "Parti con Giorgio", href: "viaggi.html" },
      { key: "gallery", label: "Foto", href: "galleria.html" },
      { key: "about", label: "Chi sono", href: "chi-sono.html" },
      { key: "contact", label: "Contatti", href: "contatti.html" }
    ],
    shared: {
      homeOffers: HOME_OFFERS,
      tailoredServices: TAILORED_SERVICES,
      accompaniedFeatures: ACCOMPANIED_FEATURES,
      accompaniedTrips: ACCOMPANIED_TRIPS,
      professionalProjects: PROFESSIONAL_PROJECTS,
      outdoorProjects: OUTDOOR_PROJECTS,
      photoItems: PHOTO_ITEMS,
      process: PROCESS,
      accompaniedProcess: ACCOMPANIED_PROCESS,
      values: VALUES,
      faq: FAQ,
      contactChannels: CONTACT_CHANNELS,
      homeMethodList: [
        "Ascolto iniziale per capire priorita, tempi e stile del viaggio",
        "Selezione coerente di tappe, soggiorni ed esperienze",
        "Un riferimento diretto fino alla partenza o durante il viaggio accompagnato"
      ]
    }
  };
})();
