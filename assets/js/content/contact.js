(() => {
  const sharedContent = window.siteSharedContent || {};
  const contacts = (sharedContent.global && sharedContent.global.contacts) || {};

  window.sitePageContent = {
    seo: {
      title: "Contatti | Giorgio Lodigiani",
      description: "Contatti di Giorgio Lodigiani per viaggi su misura e viaggi accompagnati: email, telefono, WhatsApp e modulo di richiesta."
    },
    hero: {
      eyebrow: "Contatti",
      title: "Scrivimi e raccontami il viaggio che hai in mente.",
      description: "Puoi contattarmi per un viaggio su misura, per un viaggio di nozze, per un progetto aziendale o per avere informazioni su una partenza accompagnata.",
      primaryCta: { label: "Vai al modulo", href: "#contact-form" },
      secondaryCta: { label: "WhatsApp", href: contacts.whatsappHref },
      pills: ["Telefono", "Email", "WhatsApp", "Primo confronto"],
      badge: "Contatti",
      image: "assets/images/journey-tropics.svg",
      imageAlt: "Contatti consulente di viaggi",
      cardTitle: "Canali diretti",
      cardText: "Scegli il canale piu comodo e raccontami l'idea con il livello di dettaglio che preferisci: da li capiamo subito il modo migliore per lavorarci.",
      cardMeta: contacts.hours
    },
    contactTitle: "Scegli il canale piu comodo",
    contactText: "Telefono, email e WhatsApp sono pensati per avviare un confronto semplice e ben impostato, sia per un progetto su misura sia per una partenza accompagnata.",
    form: {
      title: "Raccontami il viaggio che hai in mente",
      text: "Compila il modulo con i dettagli principali. Basta anche una traccia iniziale, purche sia chiaro il tipo di viaggio o il tipo di richiesta.",
      submitLabel: "Prepara la richiesta",
      feedbackIdle: "Dopo l'invio si aprira il client di posta predefinito del dispositivo.",
      feedbackSuccess: "La richiesta e pronta. Se non si apre il client di posta, scrivi direttamente a",
      fields: {
        name: "Nome e cognome",
        email: "Email",
        type: "Tipologia di richiesta",
        period: "Periodo indicativo",
        guests: "Viaggiatori",
        message: "Descrivi il progetto"
      },
      options: [
        "Da definire",
        "Viaggio su misura",
        "Viaggio di nozze",
        "Progetto aziendale",
        "Collaborazione professionale",
        "Campus o outdoor",
        "Parti con Giorgio",
        "Richiesta generale"
      ]
    },
    planningTitle: "Prima del primo contatto",
    planningList: [
      "Meta desiderata oppure tipo di esperienza che vuoi vivere",
      "Periodo indicativo o finestre disponibili",
      "Numero di viaggiatori ed eventuali esigenze particolari",
      "Se vuoi costruire un viaggio da zero o valutare una partenza accompagnata"
    ],
    supportPanel: {
      title: "Piu il punto di partenza e chiaro, piu la risposta puo essere utile",
      text: "Anche poche informazioni bastano, se aiutano a capire il tipo di viaggio, il momento della partenza e il livello di supporto di cui hai bisogno.",
      note: "Dopo il primo scambio, se serve approfondire, il questionario viene inviato direttamente via email e non dal sito."
    }
  };
})();
