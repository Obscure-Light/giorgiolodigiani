(() => {
  const siteSharedContent = window.siteSharedContent;
  const pageContent = window.sitePageContent;
  const app = document.querySelector("[data-app]");
  const pageKey = document.body.dataset.page || "home";

  if (!siteSharedContent || !pageContent || !app) {
    return;
  }

  const { global, navigation, shared } = siteSharedContent;
  const page = pageContent;

  const icons = {
    arrow: '<path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>',
    chevron: '<path d="m9 6 6 6-6 6"></path>',
    compass: '<circle cx="12" cy="12" r="9"></circle><path d="m14.8 9.2-2.5 7-3.1-3.1 5.6-3.9Z"></path>',
    heart: '<path d="M12 20.2 4.9 13a4.8 4.8 0 0 1 6.8-6.8L12 6.5l.3-.3A4.8 4.8 0 0 1 19.1 13Z"></path>',
    city: '<path d="M4 20V9l5-3v14"></path><path d="M9 20V4l6 3v13"></path><path d="M15 20v-8l5-2v10"></path><path d="M7 11h.01"></path><path d="M12 10h.01"></path><path d="M17 14h.01"></path>',
    plane: '<path d="M2 16l20-4-20-4 5 4-5 4Z"></path><path d="M8 12h14"></path>',
    ear: '<path d="M8 9a4 4 0 1 1 8 0c0 2-1 2.8-2 3.7-.8.7-1 1.2-1 2.3"></path><path d="M12 19a1 1 0 1 0 0 .01"></path>',
    spark: '<path d="M12 3v4"></path><path d="M12 17v4"></path><path d="M3 12h4"></path><path d="M17 12h4"></path><path d="m5.6 5.6 2.8 2.8"></path><path d="m15.6 15.6 2.8 2.8"></path><path d="m18.4 5.6-2.8 2.8"></path><path d="m8.4 15.6-2.8 2.8"></path>',
    shield: '<path d="M12 3 5 6v5c0 4.2 2.7 8 7 10 4.3-2 7-5.8 7-10V6Z"></path><path d="m9.5 12 1.7 1.7L14.8 10"></path>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.4 2.1L8 9.8a16 16 0 0 0 6.2 6.2l1.4-1.3a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.6A2 2 0 0 1 22 16.9Z"></path>',
    whatsapp: '<path d="M20 12a8 8 0 0 1-11.7 7L4 20l1.1-4.1A8 8 0 1 1 20 12Z"></path><path d="M8.3 8.7c.2-.4.4-.5.7-.5h.6c.2 0 .4 0 .6.4l.5 1.5c.1.3 0 .5-.1.6l-.4.5c-.1.1-.2.2 0 .4.2.4.8 1.2 1.8 1.8.2.1.3.1.4 0l.5-.6c.2-.2.4-.2.6-.1l1.4.6c.2.1.3.3.3.5-.1.6-.3 1.2-.8 1.5-.4.2-.8.3-1.3.2a6.3 6.3 0 0 1-4.8-4.5c-.1-.6-.1-1.2.2-1.7.2-.3.4-.5.6-.6Z"></path>',
    instagram: '<rect x="3.5" y="3.5" width="17" height="17" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.2" cy="6.8" r="1"></circle>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="m3 7 9 6 9-6"></path>',
    user: '<circle cx="12" cy="8" r="4"></circle><path d="M4 20a8 8 0 0 1 16 0"></path>',
    message: '<path d="M4 5h16v10H7l-3 3Z"></path>',
    camera: '<path d="M4 8h3l1.4-2h7.2L17 8h3a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2Z"></path><circle cx="12" cy="14" r="3.4"></circle>'
  };

  const icon = (name) => `
    <svg class="ui-icon ${name === "whatsapp" ? "ui-icon--whatsapp" : ""}" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${icons[name] || icons.spark}</svg>
  `;

  const createMetaChips = (items = []) => items.map((item) => `<span class="meta-chip">${item}</span>`).join("");
  const createListItems = (items = []) => items.map((item) => `<li>${item}</li>`).join("");

  const getLinkAttributes = (href = "", options = {}) => {
    const { external = false } = options;
    const opensNewTab = external || /^https?:\/\//i.test(href);
    return opensNewTab ? ' target="_blank" rel="noopener noreferrer"' : "";
  };

  const setSeo = () => {
    document.title = page.seo.title;
    const metaDescription = document.querySelector('meta[name="description"]');

    if (metaDescription) {
      metaDescription.setAttribute("content", page.seo.description);
    }
  };

  const renderHeader = () => `
    <a class="skip-link" href="#main-content">Vai al contenuto</a>
    <header class="site-header" data-header>
      <div class="shell header-inner">
        <a class="brand" href="index.html" aria-label="${global.siteName}, torna alla home">
          <span class="brand-mark">
            <img src="assets/images/logo-nuovo.jpg" alt="Logo ${global.siteName}" loading="eager" decoding="async">
          </span>
          <span class="brand-copy">
            <strong>${global.siteName}</strong>
            <span>${global.role}</span>
          </span>
        </a>

        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-navigation" aria-label="Apri il menu principale" data-menu-toggle>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav class="main-nav" id="primary-navigation" aria-label="Navigazione principale">
          ${navigation
            .map(
              (item) => `
                <a href="${item.href}" class="${item.key === pageKey ? "is-active" : ""}" ${item.key === pageKey ? 'aria-current="page"' : ""}>
                  ${item.label}
                </a>
              `
            )
            .join("")}
        </nav>

        <div class="header-actions">
          <a class="button button--secondary button--small" href="contatti.html#contact-form">
            ${icon("message")}
            <span>Contatti</span>
          </a>
        </div>
      </div>
    </header>
  `;

  const renderHero = (hero) => {
    const secondaryCta = hero.secondaryCta
      ? `
        <a class="button button--ghost" href="${hero.secondaryCta.href}"${getLinkAttributes(hero.secondaryCta.href)}>
          <span>${hero.secondaryCta.label}</span>
        </a>
      `
      : "";

    return `
      <section class="hero">
        <div class="shell hero-grid">
          <div class="hero-copy reveal">
            <span class="eyebrow">${hero.eyebrow}</span>
            <h1>${hero.title}</h1>
            <p>${hero.description}</p>
            <div class="hero-actions">
              <a class="button button--primary" href="${hero.primaryCta.href}"${getLinkAttributes(hero.primaryCta.href)}>
                ${icon("arrow")}
                <span>${hero.primaryCta.label}</span>
              </a>
              ${secondaryCta}
            </div>
            <div class="hero-pills">
              ${(hero.pills || []).map((item) => `<span class="pill">${item}</span>`).join("")}
            </div>
          </div>

          <div class="hero-panel reveal">
            <span class="hero-badge">${hero.badge}</span>
            <div class="hero-orbit" aria-hidden="true"></div>
            <div class="hero-image">
              <img src="${hero.image}" alt="${hero.imageAlt}" loading="eager" fetchpriority="high" decoding="async">
            </div>
            <div class="hero-card">
              <strong>${hero.cardTitle}</strong>
              <p>${hero.cardText}</p>
              <span>${hero.cardMeta}</span>
            </div>
          </div>
        </div>
      </section>
    `;
  };

  const renderSectionHeading = (title, text, eyebrow = "Sezione") => `
    <div class="shell section-heading reveal">
      <div>
        <span class="eyebrow">${eyebrow}</span>
        <h2>${title}</h2>
      </div>
      <p>${text}</p>
    </div>
  `;

  const renderOfferCards = (items = []) => `
    <div class="shell offer-grid">
      ${items
        .map(
          (item, index) => `
            <article class="offer-card reveal">
              <span class="offer-index">0${index + 1}</span>
              <div class="offer-copy">
                <div class="card-icon">${icon(item.icon)}</div>
                <h3>${item.title}</h3>
                <p>${item.text}</p>
                ${item.meta ? `<div class="card-meta">${createMetaChips(item.meta)}</div>` : ""}
              </div>
              ${item.href && item.linkLabel ? `<a class="text-link text-link--large" href="${item.href}"${getLinkAttributes(item.href)}><span>${item.linkLabel}</span>${icon("arrow")}</a>` : ""}
            </article>
          `
        )
        .join("")}
    </div>
  `;

  const renderInfoCards = (items = []) => `
    <div class="shell cards-grid">
      ${items
        .map(
          (item) => `
            <article class="card reveal">
              <div class="card-icon">${icon(item.icon)}</div>
              <h3>${item.title}</h3>
              <p>${item.text}</p>
              ${item.meta ? `<div class="card-meta">${createMetaChips(item.meta)}</div>` : ""}
              ${item.href && item.linkLabel ? `<a class="text-link" href="${item.href}"${getLinkAttributes(item.href)}><span>${item.linkLabel}</span>${icon("arrow")}</a>` : ""}
            </article>
          `
        )
        .join("")}
    </div>
  `;

  const renderJourneyCards = (items = []) => `
    <div class="shell cards-grid">
      ${items
        .map(
          (item) => `
            <article class="card card--media reveal">
              <div class="card-media">
                <img src="${item.image}" alt="${item.alt}" loading="lazy" decoding="async">
              </div>
              <div class="card-body">
                <span class="card-tag">${item.tag}</span>
                <h3>${item.title}</h3>
                <p>${item.text}</p>
                <div class="card-meta">${createMetaChips(item.chips || [])}</div>
                <a class="text-link" href="contatti.html#contact-form">
                  <span>Chiedi informazioni</span>
                  ${icon("arrow")}
                </a>
              </div>
            </article>
          `
        )
        .join("")}
    </div>
  `;

  const renderGalleryCards = (items = [], options = {}) => {
    const { preview = false, editorial = false } = options;

    return `
      <div class="shell gallery-grid ${preview ? "gallery-grid--preview" : ""} ${editorial ? "gallery-grid--editorial" : ""}">
        ${items
          .map(
            (item) => `
              <article class="gallery-card gallery-card--${item.layout || "standard"} reveal">
                <div class="gallery-media">
                  <img src="${item.image}" alt="${item.alt}" loading="lazy" decoding="async">
                </div>
                <div class="gallery-copy">
                  <div class="gallery-meta">
                    <span class="card-tag">${item.tag}</span>
                    <span class="gallery-location">${item.location}</span>
                  </div>
                  <h3>${item.title}</h3>
                  <p>${item.text}</p>
                  ${item.chips ? `<div class="card-meta">${createMetaChips(item.chips)}</div>` : ""}
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    `;
  };

  const renderTimeline = (items = []) => `
    <div class="shell">
      <div class="timeline">
        ${items
          .map(
            (item, index) => `
              <article class="timeline-step reveal">
                <span class="step-number">0${index + 1}</span>
                <h3>${item.title}</h3>
                <p>${item.text}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </div>
  `;

  const renderValues = (items = []) => `
    <div class="shell cards-grid">
      ${items
        .map(
          (item) => `
            <article class="card reveal">
              <div class="card-icon">${icon(item.icon)}</div>
              <h3>${item.title}</h3>
              <p>${item.text}</p>
            </article>
          `
        )
        .join("")}
    </div>
  `;

  const renderFaq = (items = []) => `
    <div class="shell details-grid">
      ${items
        .map(
          (item) => `
            <details class="faq-item reveal">
              <summary>
                <span>${item.question}</span>
                <span class="faq-toggle" aria-hidden="true">${icon("chevron")}</span>
              </summary>
              <p>${item.answer}</p>
            </details>
          `
        )
        .join("")}
    </div>
  `;

  const renderSplitPanels = (left, right) => `
    <div class="shell split-panel">
      <article class="feature-panel reveal">${left}</article>
      <article class="feature-panel reveal">${right}</article>
    </div>
  `;

  const renderEditorialIntro = (title, text, note) => `
    <div class="shell editorial-intro reveal">
      <span class="eyebrow">Taglio</span>
      <h2>${title}</h2>
      <p>${text}</p>
      ${note ? `<div class="editorial-note">${note}</div>` : ""}
    </div>
  `;

  const renderBand = (band) => `
    <section class="band">
      <div class="shell">
        <div class="band-panel reveal">
          <div>
            <span class="eyebrow eyebrow--light">Parliamone</span>
            <h2>${band.title}</h2>
            <p>${band.text}</p>
          </div>
          <div class="band-actions">
            <a class="button button--light" href="${band.primaryCta.href}"${getLinkAttributes(band.primaryCta.href)}>
              ${icon("message")}
              <span>${band.primaryCta.label}</span>
            </a>
            <a class="button button--line" href="${band.secondaryCta.href}"${getLinkAttributes(band.secondaryCta.href)}>
              <span>${band.secondaryCta.label}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  `;

  const renderHome = () => `
    ${renderHero(page.hero)}

    <section class="section section--home-offers">
      ${renderSectionHeading(page.offersSection.title, page.offersSection.text, "Offerta")}
      ${renderOfferCards(shared.homeOffers)}
    </section>

    <section class="section section--compact">
      ${renderSplitPanels(
        `<span class="eyebrow">Metodo</span><h2>${page.methodSection.title}</h2><p>${page.methodSection.text}</p>`,
        `<span class="eyebrow">Focus</span><h2>${page.methodSection.listTitle}</h2><ul class="list-check">${createListItems(page.methodSection.list)}</ul>`
      )}
    </section>

    <section class="section">
      ${renderSectionHeading(page.photoSection.title, page.photoSection.text, "Foto")}
      ${renderGalleryCards(shared.photoItems.slice(0, 3), { preview: true })}
      <div class="shell section-cta reveal">
        <a class="text-link text-link--large" href="${page.photoSection.cta.href}">
          <span>${page.photoSection.cta.label}</span>
          ${icon("arrow")}
        </a>
      </div>
    </section>

    <section class="section">
      ${renderSectionHeading(page.processSection.title, page.processSection.text, "Metodo")}
      ${renderTimeline(shared.process)}
    </section>

    ${renderBand(page.band)}
  `;

  const renderAbout = () => `
    ${renderHero(page.hero)}

    <section class="section section--compact">
      ${renderSplitPanels(
        `<span class="eyebrow">Profilo</span><h2>${page.story.title}</h2>${page.story.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}`,
        `<span class="eyebrow">Approccio</span><h2>${page.method.title}</h2><p>${page.method.text}</p><ul class="list-check">${createListItems(shared.homeMethodList)}</ul>`
      )}
    </section>

    <section class="section">
      ${renderSectionHeading("I principi del lavoro", "Quattro punti che tengono insieme progettazione su misura e viaggi accompagnati.", "Valori")}
      ${renderValues(shared.values)}
    </section>

    <section class="section">
      ${renderSectionHeading(page.professionalSection.title, page.professionalSection.text, "Collaborazioni")}
      ${renderInfoCards(shared.professionalProjects)}
    </section>

    ${renderBand(page.band)}
  `;

  const renderServicesPage = () => `
    ${renderHero(page.hero)}

    <section class="section section--compact">
      ${renderSplitPanels(
        `<span class="eyebrow">Area</span><h2>${page.intro.title}</h2><p>${page.intro.text}</p>`,
        `<span class="eyebrow">Orientamento</span><h2>${page.intro.listTitle}</h2><ul class="list-check">${createListItems(page.intro.list)}</ul>`
      )}
    </section>

    <section class="section">
      ${renderSectionHeading(page.sectionTitle, page.sectionText, "Su misura")}
      ${renderInfoCards(shared.tailoredServices)}
    </section>

    <section class="section">
      ${renderSectionHeading(page.professionalSection.title, page.professionalSection.text, "Progetti professionali")}
      ${renderInfoCards(shared.professionalProjects)}
    </section>

    <section class="section">
      ${renderSectionHeading(page.processTitle, page.processText, "Metodo")}
      ${renderTimeline(shared.process)}
    </section>

    <section class="section">
      ${renderSectionHeading(page.faqTitle, page.faqText, "FAQ")}
      ${renderFaq(shared.faq)}
    </section>

    ${renderBand(page.band)}
  `;

  const renderJourneysPage = () => `
    ${renderHero(page.hero)}

    <section class="section section--compact">
      ${renderSplitPanels(
        `<span class="eyebrow">Area</span><h2>${page.intro.title}</h2><p>${page.intro.text}</p>`,
        `<span class="eyebrow">Per chi</span><h2>${page.intro.listTitle}</h2><ul class="list-check">${createListItems(page.intro.list)}</ul>`
      )}
    </section>

    ${renderEditorialIntro(
      "Un viaggio accompagnato deve farti sentire orientato, seguito e libero di viverlo bene.",
      "Queste partenze nascono per unire programma chiaro, buona tenuta delle giornate e presenza diretta sul posto. L'obiettivo non e riempire il tempo, ma far funzionare davvero l'esperienza.",
      "Ogni partenza ha un taglio preciso: destinazione, ritmo, livello di supporto e tipo di atmosfera."
    )}

    <section class="section section--journey-collection">
      ${renderSectionHeading(page.tripsTitle, page.tripsText, "Partenze")}
      ${renderJourneyCards(shared.accompaniedTrips)}
    </section>

    <section class="section section--journey-features">
      ${renderSectionHeading(page.featuresTitle, page.featuresText, "Carattere")}
      ${renderInfoCards(shared.accompaniedFeatures)}
    </section>

    <section class="section">
      ${renderSectionHeading(page.outdoorSection.title, page.outdoorSection.text, "Esperienze collegate")}
      ${renderInfoCards(shared.outdoorProjects)}
    </section>

    <section class="section">
      ${renderSectionHeading(page.processTitle, page.processText, "Metodo")}
      ${renderTimeline(shared.accompaniedProcess)}
    </section>

    ${renderBand(page.band)}
  `;

  const renderGalleryPage = () => `
    ${renderHero(page.hero)}

    <section class="section section--compact">
      ${renderSplitPanels(
        `<span class="eyebrow">Foto</span><h2>${page.intro.title}</h2><p>${page.intro.text}</p>`,
        `<span class="eyebrow">Perche</span><h2>${page.intro.listTitle}</h2><ul class="list-check">${createListItems(page.intro.list)}</ul>`
      )}
    </section>

    ${renderEditorialIntro(
      "Le immagini aiutano a capire il tono del viaggio prima ancora della meta.",
      "Paesaggi, dettagli e contesti servono a mettere a fuoco ritmo, atmosfera e livello dell'esperienza. Sono uno strumento utile per immaginare meglio il progetto, non un semplice archivio visivo.",
      "Una selezione di riferimenti visivi per capire se il viaggio che hai in mente va nella direzione giusta."
    )}

    <section class="section section--photo-editorial">
      ${renderSectionHeading(page.galleryTitle, page.galleryText, "Selezione")}
      ${renderGalleryCards(shared.photoItems, { editorial: true })}
    </section>

    ${renderBand(page.band)}
  `;

  const renderContactChannels = () => `
    <div class="contact-list">
      ${shared.contactChannels
        .map(
          (channel) => `
            <a class="contact-link contact-link--${channel.icon} reveal" href="${channel.href}"${getLinkAttributes(channel.href, { external: channel.external })}>
              <span class="card-icon card-icon--${channel.icon}">${icon(channel.icon)}</span>
              <span>
                <strong>${channel.title}</strong>
                <small>${channel.value}</small>
                <em>${channel.note}</em>
              </span>
            </a>
          `
        )
        .join("")}
    </div>
  `;

  const renderContactPage = () => `
    ${renderHero(page.hero)}

    <section class="section section--compact">
      <div class="shell contact-grid">
        <article class="feature-panel reveal">
          <span class="eyebrow">Recapiti</span>
          <h2>${page.contactTitle}</h2>
          <p>${page.contactText}</p>
          ${renderContactChannels()}
          <div class="contact-note">
            <p><strong>Disponibilita:</strong> ${global.contacts.hours}</p>
            <p><strong>Modalita:</strong> ${global.contacts.location}</p>
          </div>
        </article>

        <article class="form-panel reveal" id="contact-form">
          <span class="eyebrow">Modulo</span>
          <h2>${page.form.title}</h2>
          <p>${page.form.text}</p>
          <form data-contact-form novalidate>
            <div class="form-grid">
              <label class="field">
                <span>${page.form.fields.name}</span>
                <input type="text" name="name" required autocomplete="name" placeholder="Il tuo nome">
              </label>
              <label class="field">
                <span>${page.form.fields.email}</span>
                <input type="email" name="email" required autocomplete="email" inputmode="email" placeholder="nome@email.it">
              </label>
              <label class="field">
                <span>${page.form.fields.type}</span>
                <select name="type">
                  ${page.form.options.map((option) => `<option value="${option}">${option}</option>`).join("")}
                </select>
              </label>
              <label class="field">
                <span>${page.form.fields.period}</span>
                <input type="text" name="period" placeholder="Es. Agosto 2026">
              </label>
              <label class="field field--full">
                <span>${page.form.fields.guests}</span>
                <input type="text" name="guests" placeholder="Es. 2 adulti">
              </label>
              <label class="field field--full">
                <span>${page.form.fields.message}</span>
                <textarea name="message" required spellcheck="true" placeholder="Descrivi meta, stile, budget o idea iniziale"></textarea>
              </label>
            </div>
            <button class="button button--primary" type="submit">
              ${icon("mail")}
              <span>${page.form.submitLabel}</span>
            </button>
            <p class="form-feedback" data-form-feedback role="status" aria-live="polite">${page.form.feedbackIdle}</p>
          </form>
        </article>
      </div>
    </section>

    <section class="section">
      ${renderSectionHeading(page.planningTitle, "Un promemoria breve per inviare una richiesta piu leggibile e ricevere una risposta piu utile.", "Checklist")}
      ${renderSplitPanels(
        `<span class="eyebrow">Checklist</span><h2>Le informazioni utili da preparare</h2><ul class="list-check">${createListItems(page.planningList)}</ul>`,
        `<span class="eyebrow">Supporto</span><h2>${page.supportPanel.title}</h2><p>${page.supportPanel.text}</p><p class="small-note">${page.supportPanel.note}</p>`
      )}
    </section>

    <section class="section">
      ${renderSectionHeading("Domande frequenti", "Una FAQ finale aiuta a chiarire i dubbi prima del primo contatto.", "FAQ")}
      ${renderFaq(shared.faq)}
    </section>
  `;

  const renderFooter = () => `
    <footer class="footer">
      <div class="shell">
        <div class="footer-panel reveal">
          <div class="footer-top">
            <div>
              <div class="brand footer-brand">
                <span class="brand-mark">
                  <img src="assets/images/logo-nuovo.jpg" alt="Logo ${global.siteName}" loading="lazy" decoding="async">
                </span>
                <span class="brand-copy">
                  <strong>${global.siteName}</strong>
                  <span>${global.role}</span>
                </span>
              </div>
              <p class="small-note">${global.footerText}</p>
            </div>
            <div class="footer-nav">
              <strong>Navigazione</strong>
              ${navigation.map((item) => `<a href="${item.href}">${item.label}</a>`).join("")}
            </div>
            <div class="footer-contacts">
              <strong>Contatti</strong>
              <a href="${global.contacts.emailHref}">${global.contacts.email}</a>
              <a href="${global.contacts.phoneHref}">${global.contacts.phoneDisplay}</a>
              <a href="${global.contacts.whatsappHref}" target="_blank" rel="noopener noreferrer">WhatsApp</a>
              <a href="${global.contacts.instagramHref}" target="_blank" rel="noopener noreferrer">Instagram</a>
              <span>${global.contacts.hours}</span>
            </div>
          </div>
          <div class="footer-bottom">
            <span>&copy; <span data-year></span> ${global.siteName}</span>
            <span>${global.tagline}</span>
          </div>
        </div>
      </div>
    </footer>
  `;

  const renderPage = () => {
    switch (pageKey) {
      case "about":
        return renderAbout();
      case "services":
        return renderServicesPage();
      case "journeys":
        return renderJourneysPage();
      case "gallery":
        return renderGalleryPage();
      case "contact":
        return renderContactPage();
      case "home":
      default:
        return renderHome();
    }
  };

  const bindHeader = () => {
    const header = document.querySelector("[data-header]");
    const toggle = document.querySelector("[data-menu-toggle]");
    const mobileNav = window.matchMedia("(max-width: 900px)");

    if (!header || !toggle) {
      return;
    }

    const closeMenu = () => {
      header.classList.remove("is-open");
      document.body.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Apri il menu principale");
    };

    toggle.addEventListener("click", () => {
      const isOpen = header.classList.toggle("is-open");
      document.body.classList.toggle("nav-open", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Chiudi il menu principale" : "Apri il menu principale");
    });

    document.querySelectorAll(".main-nav a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    });

    document.addEventListener("click", (event) => {
      if (header.classList.contains("is-open") && !header.contains(event.target)) {
        closeMenu();
      }
    });

    const handleViewportChange = (event) => {
      if (!event.matches) {
        closeMenu();
      }
    };

    if (typeof mobileNav.addEventListener === "function") {
      mobileNav.addEventListener("change", handleViewportChange);
    } else if (typeof mobileNav.addListener === "function") {
      mobileNav.addListener(handleViewportChange);
    }
  };

  const bindReveal = () => {
    const elements = document.querySelectorAll(".reveal");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((element) => observer.observe(element));
  };

  const bindContactForm = () => {
    const form = document.querySelector("[data-contact-form]");
    const feedback = document.querySelector("[data-form-feedback]");

    if (!form || !feedback) {
      return;
    }

    const setFeedback = (message, state = "idle", withEmailLink = false) => {
      feedback.classList.remove("is-error", "is-success");

      if (state === "error") {
        feedback.classList.add("is-error");
      }

      if (state === "success") {
        feedback.classList.add("is-success");
      }

      feedback.textContent = message;

      if (!withEmailLink) {
        return;
      }

      feedback.append(" ");
      const emailLink = document.createElement("a");
      emailLink.href = global.contacts.emailHref;
      emailLink.textContent = global.contacts.email;
      feedback.append(emailLink);
      feedback.append(".");
    };

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(form);
      const name = String(formData.get("name") || "").trim();
      const email = String(formData.get("email") || "").trim();
      const type = String(formData.get("type") || "").trim();
      const period = String(formData.get("period") || "").trim();
      const guests = String(formData.get("guests") || "").trim();
      const message = String(formData.get("message") || "").trim();
      const hasValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!name || !email || !message) {
        setFeedback("Compila almeno nome, email e descrizione del viaggio.", "error");
        return;
      }

      if (!hasValidEmail) {
        setFeedback("Inserisci un indirizzo email valido prima di preparare la richiesta.", "error");
        return;
      }

      const emailSubject = `Richiesta viaggio - ${type || "Nuovo progetto"}`;
      const emailBody = [
        "Ciao Giorgio,",
        "",
        "ti contatto dal sito.",
        "",
        `Nome: ${name}`,
        `Email: ${email}`,
        `Tipologia richiesta: ${type || "Da definire"}`,
        `Periodo: ${period || "Da definire"}`,
        `Viaggiatori: ${guests || "Da definire"}`,
        "",
        "Dettagli:",
        message,
        "",
        "Grazie."
      ].join("\n");

      const mailtoLink = `mailto:${global.contacts.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      setFeedback(page.form.feedbackSuccess, "success", true);
      window.location.href = mailtoLink;
    });
  };

  const setYear = () => {
    const yearSlot = document.querySelector("[data-year]");

    if (yearSlot) {
      yearSlot.textContent = String(new Date().getFullYear());
    }
  };

  setSeo();

  app.innerHTML = `
    ${renderHeader()}
    <main id="main-content">
      ${renderPage()}
    </main>
    ${renderFooter()}
  `;

  bindHeader();
  bindReveal();
  bindContactForm();
  setYear();
})();
