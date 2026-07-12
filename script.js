document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', event => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

const enasServices = window.enasServices || [];

const processSteps = [
  {
    id: 1,
    title: "Analyse & Compréhension",
    shortDescription: "J’analyse vos besoins, vos objectifs et vos défis pour poser des bases solides.",
    fullDescription: "Cette première étape permet de comprendre votre activité, vos priorités, vos contraintes et les résultats attendus. L’objectif est de poser une base claire avant de choisir les outils, les pages ou les automatisations à mettre en place.",
    icon: "search",
    keyPoints: ["Clarifier votre besoin réel", "Identifier les priorités du projet", "Repérer les points qui ralentissent votre activité"]
  },
  {
    id: 2,
    title: "Stratégie & Conception",
    shortDescription: "Je conçois une stratégie sur mesure et un plan d’action adapté à votre activité.",
    fullDescription: "Une fois le besoin clarifié, je structure le parcours : messages, sections, outils, formulaire, automatisation ou agent IA. Cette étape transforme l’idée en plan concret, simple à suivre et adapté à votre quotidien.",
    icon: "bulb",
    keyPoints: ["Définir le parcours utilisateur", "Choisir les bons outils", "Préparer une structure claire et évolutive"]
  },
  {
    id: 3,
    title: "Développement",
    shortDescription: "Je crée votre solution digitale avec un design moderne, rapide et évolutif.",
    fullDescription: "Je passe à la création concrète : intégration du design, construction des pages, mise en place des contenus, des formulaires et des éléments nécessaires pour rendre votre présence digitale claire et professionnelle.",
    icon: "code",
    keyPoints: ["Créer une interface lisible", "Adapter le rendu au mobile", "Construire une base propre et rapide"]
  },
  {
    id: 4,
    title: "Automatisation & Intégration",
    shortDescription: "J’automatise vos processus et je connecte vos outils pour vous faire gagner du temps.",
    fullDescription: "Les outils utiles sont connectés entre eux pour réduire les tâches manuelles : formulaire, email, tableau de suivi, calendrier, notifications, relances ou agent IA selon le besoin défini.",
    icon: "automation",
    keyPoints: ["Connecter les outils utiles", "Réduire les actions répétitives", "Centraliser les demandes importantes"]
  },
  {
    id: 5,
    title: "Lancement",
    shortDescription: "Je teste, j’optimise et je déploie votre solution pour assurer un lancement réussi.",
    fullDescription: "Avant la mise en ligne, chaque élément est vérifié : liens, formulaires, affichage mobile, messages automatiques, parcours de contact et cohérence globale. Le lancement se fait quand tout est prêt.",
    icon: "rocket",
    keyPoints: ["Tester le parcours complet", "Corriger les derniers détails", "Préparer une mise en ligne sereine"]
  },
  {
    id: 6,
    title: "Suivi & Amélioration",
    shortDescription: "Je reste à vos côtés pour suivre les performances et faire évoluer votre solution.",
    fullDescription: "Après la mise en ligne, la solution peut évoluer : nouvelles sections, ajustements de textes, amélioration du parcours, ajout d’automatisations ou optimisation selon les retours reçus.",
    icon: "chart",
    keyPoints: ["Faire évoluer le site ou les outils", "Améliorer selon les retours", "Ajouter de nouvelles fonctions utiles"]
  }
];

const processBenefits = [
  { icon: "shield", title: "Solutions sur mesure", text: "Pensées pour votre activité, vos objectifs et votre façon de travailler." },
  { icon: "clock", title: "Gain de temps", text: "Des outils simples pour réduire les tâches répétitives." },
  { icon: "chart", title: "Performance", text: "Des solutions rapides, fiables et prêtes à évoluer." },
  { icon: "headset", title: "Accompagnement", text: "Un suivi humain, clair et adapté à chaque étape." }
];

const audienceProfiles = [
  {
    id: 1,
    title: "Santé & bien-être",
    description: "Médecins, dentistes, thérapeutes, psychologues, coachs bien-être, sophrologues.",
    detail: "Sites rassurants, prise de rendez-vous, rappels, formulaires et réponses aux questions fréquentes pour fluidifier votre organisation.",
    tag: "Rendez-vous, rappels, suivi patient",
    icon: "heart",
    href: "details.html#sante-bien-etre"
  },
  {
    id: 2,
    title: "Artisans & services locaux",
    description: "Plombiers, électriciens, peintres, serruriers, menuisiers, entreprises de rénovation.",
    detail: "Pages locales, demandes de devis mieux structurées, suivi de chantier, relances et automatisations simples pour gagner du temps.",
    tag: "Devis, relances, suivi client",
    icon: "store",
    href: "details.html#artisans-services-locaux"
  },
  {
    id: 3,
    title: "Soins, beauté & commerce",
    description: "Instituts, coiffeurs, esthéticiennes, boutiques, créateurs, commerces indépendants.",
    detail: "Présentation des prestations, réservation, rappels, fidélisation, collecte d’avis et parcours client plus clair.",
    tag: "Réservation, rappels, fidélisation",
    icon: "scissors",
    href: "details.html#soins-beaute-commerce"
  },
  {
    id: 4,
    title: "Conseil & services professionnels",
    description: "Consultants, RH, comptables, avocats, formateurs, freelances, coachs professionnels.",
    detail: "Site crédible, qualification des prospects, suivi des dossiers, automatisation des relances et meilleure organisation commerciale.",
    tag: "Collecte, qualification, suivi",
    icon: "briefcase",
    href: "details.html#conseil-services-professionnels"
  }
];

const iconPaths = {
  web: '<path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v7A2.5 2.5 0 0 1 17.5 16h-11A2.5 2.5 0 0 1 4 13.5v-7Z"/><path d="M9 20h6"/><path d="M12 16v4"/>',
  automation: '<path d="M6 7h4v4H6z"/><path d="M14 13h4v4h-4z"/><path d="M10 9h2.5a3.5 3.5 0 0 1 3.5 3.5V13"/><path d="M14 15h-2.5A3.5 3.5 0 0 1 8 11.5V11"/>',
  ai: '<path d="M9 3v3"/><path d="M15 3v3"/><path d="M8 21v-3"/><path d="M16 21v-3"/><rect x="6" y="6" width="12" height="12" rx="3"/><path d="M9 12h.01"/><path d="M15 12h.01"/><path d="M10 15c1.2.8 2.8.8 4 0"/>',
  calendar: '<path d="M7 3v4"/><path d="M17 3v4"/><rect x="4" y="5" width="16" height="16" rx="3"/><path d="M4 10h16"/><path d="m9 15 2 2 4-4"/>',
  refresh: '<path d="M20 6v5h-5"/><path d="M4 18v-5h5"/><path d="M18 11a6 6 0 0 0-10.4-4.1L4 10"/><path d="M6 13a6 6 0 0 0 10.4 4.1L20 14"/>',
  bolt: '<path d="m13 2-9 12h7l-1 8 10-13h-7z"/>',
  target: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/>',
  heart: '<path d="M20.8 8.6c0 5.1-8.8 10.4-8.8 10.4S3.2 13.7 3.2 8.6A4.4 4.4 0 0 1 11 5.8a4.4 4.4 0 0 1 9.8 2.8Z"/>',
  rocket: '<path d="M4 14c3.4-8 8-10 16-10-1 8-3 12.6-11 16l-1-5z"/><path d="M7 17 4 20"/><path d="M15 9h.01"/>',
  search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 4 4"/>',
  bulb: '<path d="M9 18h6"/><path d="M10 22h4"/><path d="M8.5 14.5a6 6 0 1 1 7 0c-.9.6-1.5 1.5-1.5 2.5h-4c0-1-.6-1.9-1.5-2.5Z"/>',
  code: '<rect x="4" y="5" width="16" height="14" rx="2"/><path d="M4 9h16"/><path d="m10 13-2 2 2 2"/><path d="m14 13 2 2-2 2"/>',
  chart: '<path d="M4 19h16"/><path d="M7 16v-4"/><path d="M12 16V8"/><path d="M17 16v-7"/><path d="m6 10 4-4 4 3 4-5"/>',
  headset: '<path d="M4 13a8 8 0 0 1 16 0"/><path d="M5 13h3v5H5z"/><path d="M16 13h3v5h-3z"/><path d="M16 18c0 2-1.5 3-4 3"/><path d="M12 21h-1"/>',
  shield: '<path d="M12 3 5 6v5c0 4.6 3 8.4 7 10 4-1.6 7-5.4 7-10V6z"/><path d="m9 12 2 2 4-4"/>',
  scissors: '<circle cx="6" cy="7" r="3"/><circle cx="6" cy="17" r="3"/><path d="M8.5 8.5 19 19"/><path d="M8.5 15.5 19 5"/><path d="M14 7h6"/><path d="M14 17h6"/>',
  store: '<path d="M4 10h16"/><path d="M5 10l1-5h12l1 5"/><path d="M6 10v10h12V10"/><path d="M9 20v-5h6v5"/><path d="M8 5h8"/>',
  megaphone: '<path d="M3 11v3a2 2 0 0 0 2 2h2l4 4v-8"/><path d="M11 12 21 7v10l-10-5Z"/><path d="M5 16l1 4"/>',
  medical: '<path d="M10 6V4h4v2"/><rect x="5" y="6" width="14" height="14" rx="2"/><path d="M12 10v6"/><path d="M9 13h6"/>',
  briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/><path d="M3 13h18"/><path d="M10 13v2h4v-2"/>',
  calculator: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8"/><path d="M8 11h.01"/><path d="M12 11h.01"/><path d="M16 11h.01"/><path d="M8 15h.01"/><path d="M12 15h.01"/><path d="M16 15h.01"/>',
  handshake: '<path d="M8 12 5.5 9.5a2.1 2.1 0 0 1 0-3l.7-.7a2.1 2.1 0 0 1 3 0L12 8.6"/><path d="m12 8.6 2.8-2.8a2.1 2.1 0 0 1 3 0l.7.7a2.1 2.1 0 0 1 0 3L16 13"/><path d="m8 12 4 4 4-3"/><path d="m10 14-2 2"/><path d="m14 16 2 2"/>',
  spark: '<path d="M12 3 9.7 9.7 3 12l6.7 2.3L12 21l2.3-6.7L21 12l-6.7-2.3z"/>'
};

function serviceIcon(name, className = 'service-svg') {
  return `<svg class="${className}" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${iconPaths[name] || iconPaths.web}</svg>`;
}

function renderProcessSection() {
  const mount = document.querySelector('[data-process-section]');
  if (!mount) return;

  function renderDetail(step, inline = false) {
    return `
      <div class="process-detail${inline ? ' process-detail--inline' : ''}" id="${inline ? 'process-mobile-detail' : 'process-detail'}-${step.id}" role="region" aria-live="polite" aria-label="Détail de l'étape ${step.id}">
        <div class="process-detail-head">
          <span class="process-detail-number">${String(step.id).padStart(2, '0')}</span>
          <span class="process-detail-icon">${serviceIcon(step.icon)}</span>
        </div>
        <h3>${step.title}</h3>
        <p>${step.fullDescription}</p>
        <ul>
          ${step.keyPoints.map(point => `<li><span>✓</span>${point}</li>`).join('')}
        </ul>
        <a class="btn btn-secondary" href="offres.html">Voir les offres adaptées</a>
      </div>
    `;
  }

  mount.innerHTML = `
    <div class="process-desktop" aria-label="Schéma du processus Enas Digital">
      <div class="process-column process-column--left">
        ${processSteps.slice(0, 3).map(step => renderProcessButton(step)).join('')}
      </div>
      <div class="process-center" aria-hidden="true">
        <span class="process-center-mark">e</span>
        <span>Votre réussite<br/>est <em>mon objectif</em></span>
        <span class="process-center-dots" aria-hidden="true"><i></i><i></i><i></i></span>
      </div>
      <div class="process-column process-column--right">
        ${processSteps.slice(3).map(step => renderProcessButton(step)).join('')}
      </div>
    </div>
    <div class="process-mobile" aria-label="Parcours du processus Enas Digital">
      ${processSteps.map(step => `
        <div class="process-mobile-item">
          ${renderProcessButton(step)}
          <div class="process-mobile-detail" data-mobile-detail="${step.id}"></div>
        </div>
      `).join('')}
    </div>
    <div class="process-detail-wrap" data-process-detail></div>
    <div class="process-benefits" aria-label="Bénéfices de la méthode Enas Digital">
      ${processBenefits.map(benefit => `
        <article class="process-benefit-card">
          <span class="process-benefit-icon">${serviceIcon(benefit.icon)}</span>
          <span>
            <strong>${benefit.title}</strong>
            <small>${benefit.text}</small>
          </span>
        </article>
      `).join('')}
    </div>
    <div class="process-cta">
      <a class="btn btn-primary" href="#contact">Prêt à transformer votre activité ?</a>
      <a class="process-cta-link" href="offres.html">Discutons de votre projet</a>
    </div>
  `;

  const detail = mount.querySelector('[data-process-detail]');
  const buttons = Array.from(mount.querySelectorAll('.process-step'));

  function setActive(stepId) {
    const step = processSteps.find(item => item.id === stepId) || processSteps[0];
    buttons.forEach(button => {
      const active = Number(button.dataset.processStep) === step.id;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-expanded', String(active));
    });
    if (detail) detail.innerHTML = renderDetail(step);
    mount.querySelectorAll('[data-mobile-detail]').forEach(panel => {
      panel.innerHTML = Number(panel.dataset.mobileDetail) === step.id ? renderDetail(step, true) : '';
    });
  }

  buttons.forEach(button => {
    button.addEventListener('click', () => setActive(Number(button.dataset.processStep)));
  });
}

function renderProcessButton(step) {
  return `
    <button class="process-step process-step-${step.id}" type="button" data-process-step="${step.id}" aria-expanded="false" aria-controls="process-detail-${step.id}">
      <span class="process-step-number">${String(step.id).padStart(2, '0')}</span>
      <span class="process-step-icon">${serviceIcon(step.icon)}</span>
      <span class="process-step-copy">
        <strong>${step.title}</strong>
        <small>${step.shortDescription}</small>
      </span>
    </button>
  `;
}

function renderSchemaDiagram(config) {
  const mount = document.querySelector(config.mount);
  if (!mount) return;

  const leftItems = config.items.slice(0, 2);
  const rightItems = config.items.slice(2);
  const arrow = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';

  function renderCard(item, reverse = false) {
    return `
      <div class="schema-row${reverse ? ' schema-row--reverse' : ''}" data-schema-step="${item.id}">
        <article class="schema-card" tabindex="0" role="button" aria-expanded="false">
          <div class="schema-card-head">
            <div class="schema-icon-wrap">
              <div class="schema-hex-outer"></div>
              <div class="schema-hex-inner">${serviceIcon(item.icon)}</div>
            </div>
            <div>
              <div class="schema-num-mark"><span>${String(item.id).padStart(2, '0')}</span><i></i></div>
              <h3>${item.title}</h3>
            </div>
          </div>
          <p class="schema-desc">${item.description}</p>
          <a class="schema-details-btn" href="${item.href}">${config.detailLabel}${arrow}</a>
        </article>
      </div>
    `;
  }

  mount.innerHTML = `
    <div class="schema-diagram schema-diagram--${config.type}">
      <div class="schema-eyebrow"><span>${config.eyebrow}</span></div>
      <h2 class="schema-title">${config.title}</h2>
      <p class="schema-subtitle">${config.subtitle}</p>
      <div class="schema-stage">
        <svg class="schema-connectors" aria-hidden="true"></svg>
        <div class="schema-col schema-col--left">${leftItems.map(item => renderCard(item)).join('')}</div>
        <div class="schema-center">
          <div class="schema-hexcore">
            <div class="schema-hex-outer"></div>
            <div class="schema-hex-inner">
              ${serviceIcon(config.centerIcon, 'schema-center-icon')}
              ${config.centerLines.map((line, index) => `<p class="${index === config.centerLines.length - 1 ? 'schema-center-accent' : ''}">${line}</p>`).join('')}
            </div>
          </div>
        </div>
        <div class="schema-col schema-col--right">${rightItems.map(item => renderCard(item, true)).join('')}</div>
      </div>
      <div class="schema-cta-bar">
        <div class="schema-cta-icon">${serviceIcon('spark')}</div>
        <div>
          <h3>${config.ctaTitle}</h3>
          <p>${config.ctaText}</p>
        </div>
        <a href="#contact">${config.ctaButton}${arrow}</a>
      </div>
    </div>
  `;

  const stage = mount.querySelector('.schema-stage');
  const svg = mount.querySelector('.schema-connectors');
  const center = mount.querySelector('.schema-hexcore');
  const rows = Array.from(mount.querySelectorAll('.schema-row'));
  const cards = Array.from(mount.querySelectorAll('.schema-card'));
  const angleMap = { '1': -140, '2': 140, '3': -40, '4': 40 };
  let autoplayTimer = null;
  let resumeTimer = null;
  let currentAuto = 0;
  let userPaused = false;
  let pinnedStep = null;

  function drawConnectors() {
    if (!stage || !svg || !center) return;
    svg.innerHTML = '';
    if (window.matchMedia('(max-width: 900px)').matches) return;

    const stageRect = stage.getBoundingClientRect();
    const centerRect = center.getBoundingClientRect();
    const centerPoint = {
      x: centerRect.left + centerRect.width / 2 - stageRect.left,
      y: centerRect.top + centerRect.height / 2 - stageRect.top
    };
    const radius = centerRect.width / 2 + 4;
    const ns = 'http://www.w3.org/2000/svg';

    rows.forEach(row => {
      const card = row.querySelector('.schema-card');
      const step = row.dataset.schemaStep;
      const isLeft = !row.classList.contains('schema-row--reverse');
      const cardRect = card.getBoundingClientRect();
      const cardEdge = {
        x: (isLeft ? cardRect.right : cardRect.left) - stageRect.left,
        y: cardRect.top + cardRect.height / 2 - stageRect.top
      };
      const rad = angleMap[step] * Math.PI / 180;
      const centerAnchor = {
        x: centerPoint.x + Math.cos(rad) * radius,
        y: centerPoint.y + Math.sin(rad) * radius
      };
      const elbow = {
        x: cardEdge.x + (isLeft ? 12 : -12),
        y: cardEdge.y
      };

      const l1 = document.createElementNS(ns, 'line');
      l1.setAttribute('x1', cardEdge.x);
      l1.setAttribute('y1', cardEdge.y);
      l1.setAttribute('x2', elbow.x);
      l1.setAttribute('y2', elbow.y);
      l1.dataset.schemaLine = step;
      l1.classList.add('schema-line');

      const l2 = document.createElementNS(ns, 'line');
      l2.setAttribute('x1', elbow.x);
      l2.setAttribute('y1', elbow.y);
      l2.setAttribute('x2', centerAnchor.x);
      l2.setAttribute('y2', centerAnchor.y);
      l2.dataset.schemaLine = step;
      l2.classList.add('schema-line', 'schema-line--animated');
      const len = Math.hypot(centerAnchor.x - elbow.x, centerAnchor.y - elbow.y);
      l2.style.strokeDasharray = len;
      l2.style.strokeDashoffset = len;

      const dotElbow = document.createElementNS(ns, 'circle');
      dotElbow.setAttribute('cx', elbow.x);
      dotElbow.setAttribute('cy', elbow.y);
      dotElbow.setAttribute('r', 5);
      dotElbow.dataset.schemaLine = step;
      dotElbow.classList.add('schema-dot');

      const dotCenter = document.createElementNS(ns, 'circle');
      dotCenter.setAttribute('cx', centerAnchor.x);
      dotCenter.setAttribute('cy', centerAnchor.y);
      dotCenter.setAttribute('r', 5);
      dotCenter.dataset.schemaLine = step;
      dotCenter.classList.add('schema-dot', 'schema-dot--center');

      svg.append(l1, l2, dotElbow, dotCenter);
    });
  }

  function setConnectorState(step, active) {
    mount.querySelectorAll(`[data-schema-line="${step}"]`).forEach(el => {
      el.classList.toggle('active', active);
      if (el.classList.contains('schema-line--animated') && el.style.strokeDasharray) {
        el.style.strokeDashoffset = active ? '0' : el.style.strokeDasharray;
      }
    });
  }

  function activateStep(step) {
    cards.forEach(card => {
      const current = card.closest('.schema-row').dataset.schemaStep;
      const active = current === step;
      card.classList.toggle('active', active);
      card.setAttribute('aria-expanded', String(active));
      setConnectorState(current, active);
    });
  }

  function deactivateAll() {
    cards.forEach(card => {
      const current = card.closest('.schema-row').dataset.schemaStep;
      card.classList.remove('active');
      card.setAttribute('aria-expanded', 'false');
      setConnectorState(current, false);
    });
  }

  function pauseForUser() {
    userPaused = true;
    window.clearTimeout(resumeTimer);
    resumeTimer = window.setTimeout(() => {
      userPaused = false;
    }, 5000);
  }

  function startAutoplay() {
    window.clearInterval(autoplayTimer);
    autoplayTimer = window.setInterval(() => {
      if (userPaused || pinnedStep) return;
      activateStep(String(config.items[currentAuto].id));
      currentAuto = (currentAuto + 1) % config.items.length;
    }, 2600);
  }

  cards.forEach(card => {
    const step = card.closest('.schema-row').dataset.schemaStep;
    const toggle = () => {
      pauseForUser();
      const wasActive = pinnedStep === step && card.classList.contains('active');
      deactivateAll();
      pinnedStep = wasActive ? null : step;
      if (!wasActive) activateStep(step);
    };

    card.addEventListener('click', toggle);
    card.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggle();
      }
    });
    card.addEventListener('mouseenter', () => {
      pauseForUser();
      setConnectorState(step, true);
    });
    card.addEventListener('mouseleave', () => {
      if (!card.classList.contains('active')) setConnectorState(step, false);
    });
  });

  mount.querySelectorAll('.schema-details-btn').forEach(link => {
    link.addEventListener('click', event => event.stopPropagation());
  });

  window.addEventListener('load', () => {
    drawConnectors();
    startAutoplay();
  });
  window.addEventListener('resize', () => window.requestAnimationFrame(drawConnectors));
  window.setTimeout(drawConnectors, 150);
  window.setTimeout(drawConnectors, 1100);
  startAutoplay();
}

function renderInteractiveMethodDiagram() {
  renderSchemaDiagram({
    mount: '[data-method-demo]',
    type: 'method',
    eyebrow: '✦ MA MÉTHODE',
    title: 'Une méthode simple, <span>en 4 étapes</span>',
    subtitle: "Pas de jargon, pas d'usine à gaz. Voici comment je transforme votre idée en solution concrète — cliquez sur une étape pour voir comment ça se passe en détail.",
    detailLabel: 'Voir en détail',
    centerIcon: 'target',
    centerLines: ['Une méthode claire,', 'un résultat concret.'],
    ctaTitle: "Prêt à passer à l'étape 1 ?",
    ctaText: 'Discutons de votre projet, sans engagement.',
    ctaButton: 'Discutons de votre projet',
    items: [
      { id: 1, title: 'Comprendre', description: "Je prends le temps d'écouter votre activité et ce qui vous fait perdre du temps aujourd'hui.", icon: 'search', href: 'methode-details.html#comprendre' },
      { id: 2, title: 'Créer', description: "Je construis votre site et je mets en place les automatisations utiles à votre activité.", icon: 'code', href: 'methode-details.html#creer' },
      { id: 3, title: 'Lancer', description: 'Je teste tout, puis je mets votre solution en ligne, sans mauvaise surprise.', icon: 'rocket', href: 'methode-details.html#lancer' },
      { id: 4, title: 'Accompagner', description: 'Je reste disponible après le lancement pour ajuster et faire évoluer votre solution.', icon: 'chart', href: 'methode-details.html#accompagner' }
    ]
  });
}

function renderAudienceDiagram() {
  renderSchemaDiagram({
    mount: '[data-audience-diagram]',
    type: 'audience',
    eyebrow: '✦ POUR QUI ?',
    title: 'Des solutions digitales sur mesure pour <span>votre activité</span>',
    subtitle: "J'accompagne les entrepreneurs, indépendants et structures qui veulent gagner du temps grâce à l'automatisation et à des agents IA sur mesure — quel que soit leur métier.",
    detailLabel: 'Voir les détails',
    centerIcon: 'target',
    centerLines: ['Des sites, des automatisations', 'et des agents IA sur mesure.'],
    ctaTitle: 'Vous ne vous reconnaissez pas dans ces profils ?',
    ctaText: 'Parlons de votre projet, chaque activité a ses besoins.',
    ctaButton: 'Discutons de votre projet',
    items: audienceProfiles
  });
}

function renderProcessImageInteractions() {
  const detail = document.querySelector('[data-process-image-detail]');
  const buttons = Array.from(document.querySelectorAll('[data-process-image-step]'));
  if (!detail || !buttons.length) return;

  function renderImageDetail(step) {
    detail.innerHTML = `
      <div class="process-detail process-detail--image">
        <div class="process-detail-head">
          <span class="process-detail-number">${String(step.id).padStart(2, '0')}</span>
          <span class="process-detail-icon">${serviceIcon(step.icon)}</span>
        </div>
        <h3>${step.title}</h3>
        <p>${step.fullDescription}</p>
        <ul>
          ${step.keyPoints.map(point => `<li><span>✓</span>${point}</li>`).join('')}
        </ul>
      </div>
    `;
    detail.classList.add('is-visible');
  }

  buttons.forEach(button => {
    const step = processSteps.find(item => item.id === Number(button.dataset.processImageStep));
    if (!step) return;
    button.setAttribute('aria-label', `Afficher le détail : ${step.title}`);
    button.addEventListener('click', () => {
      buttons.forEach(item => item.classList.remove('is-active'));
      button.classList.add('is-active');
      renderImageDetail(step);
      detail.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  });
}

function renderServicesSection() {
  const list = document.querySelector('[data-services-list]');
  const panel = document.querySelector('[data-service-panel]');
  if (!list || !panel || !enasServices.length) return;

  function renderPanel(service) {
    panel.classList.remove('is-visible');
    window.setTimeout(() => {
      panel.innerHTML = `
        <div class="panel-icon">${serviceIcon(service.icon)}</div>
        <p class="panel-category">${service.category}</p>
        <h3>${service.headline}</h3>
        <p class="panel-description">${service.description}</p>
        <ul class="panel-points">
          ${service.keyPoints.map(point => `<li><span>✓</span>${point}</li>`).join('')}
        </ul>
        <div class="panel-stats">
          ${service.stats.map(stat => `<span><strong>${stat.value}</strong><small>${stat.label}</small></span>`).join('')}
        </div>
        <a class="panel-button" href="service.html?service=${service.slug}">En savoir plus →</a>
      `;
      panel.classList.add('is-visible');
    }, 110);
  }

  list.innerHTML = enasServices.map((service, index) => `
    <button class="service-nav-card${index === 0 ? ' active' : ''}" type="button" data-service-index="${index}">
      <span class="service-nav-icon">${serviceIcon(service.icon)}</span>
      <span class="service-nav-copy">
        <strong>${service.name}</strong>
        <small>${service.subtitle}</small>
      </span>
      <span class="service-arrow">→</span>
    </button>
  `).join('');

  list.querySelectorAll('.service-nav-card').forEach(button => {
    button.addEventListener('click', () => {
      const index = Number(button.dataset.serviceIndex);
      list.querySelectorAll('.service-nav-card').forEach(item => item.classList.remove('active'));
      button.classList.add('active');
      renderPanel(enasServices[index]);
    });
  });

  renderPanel(enasServices[0]);
}

function renderServiceDetailPage() {
  const mount = document.querySelector('[data-service-detail]');
  if (!mount || !enasServices.length) return;
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('service') || mount.dataset.serviceDetail || enasServices[0].slug;
  const service = enasServices.find(item => item.slug === slug) || enasServices[0];
  document.title = `${service.name} - Enas digital`;

  mount.innerHTML = `
    <section class="service-detail-hero">
      <div class="container">
        <a class="back-link service-back" href="offres.html">← Retour aux services</a>
        <div class="service-detail-hero-grid">
          <div class="service-detail-copy">
            <p class="detail-category">${service.category}</p>
            <h1>${service.headline}</h1>
            <p class="lead">${service.description}</p>
            <div class="service-detail-actions">
              <a class="panel-button hero-detail-button" href="index.html#contact">Demander un devis</a>
              <span class="detail-price">${service.price}</span>
            </div>
          </div>
          <div class="service-detail-visual" aria-hidden="true">
            <div class="detail-title-icon">${serviceIcon(service.icon)}</div>
            <strong>${service.name}</strong>
            <ul>
              ${service.keyPoints.map(point => `<li>${point}</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="service-benefits">
      <div class="container">
        <div class="detail-section-head">
          <h2>Ce que ce service améliore</h2>
          <p>Une vue claire des bénéfices concrets, avec des explications simples pour comprendre l’intérêt du service dans votre quotidien.</p>
        </div>
        <div class="service-benefit-grid">
          ${service.benefits.map(benefit => `
            <article class="benefit-card">
              <span class="benefit-icon">${serviceIcon(benefit.icon)}</span>
              <h2>${benefit.title}</h2>
              <p>${benefit.description}</p>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
    <section class="service-methodology">
      <div class="container service-method-grid">
        <div class="detail-section-head method-head">
          <p class="detail-category">Méthodologie</p>
          <h2>Comment se déroule ce service</h2>
          <p>Chaque service suit une méthode dédiée : on commence par clarifier le besoin, puis on construit une solution simple, testée et compréhensible.</p>
        </div>
        <div class="methodology-list">
          ${service.methodology.map((step, index) => `
            <article class="methodology-step">
              <span class="method-step-number">${String(index + 1).padStart(2, '0')}</span>
              <span class="benefit-icon">${serviceIcon(step.icon)}</span>
              <div>
                <h3>${step.title}</h3>
                <p>${step.description}</p>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
    <section class="service-usecases">
      <div class="container">
        <div class="detail-section-head">
          <p class="detail-category">Cas concrets</p>
          <h2>À quoi ça peut servir</h2>
          <p>Quelques situations simples pour visualiser comment ce service peut aider une petite activité, un indépendant ou une entreprise locale.</p>
        </div>
        <div class="usecase-grid">
          ${service.useCases.map(useCase => `
            <article class="usecase-card">
              <h3>${useCase.title}</h3>
              <p>${useCase.description}</p>
            </article>
          `).join('')}
        </div>
        <div class="tools-strip">
          ${service.tools.map(tool => `<span>${tool}</span>`).join('')}
        </div>
        <a class="panel-button detail-cta" href="index.html#contact">Demander un devis adapté</a>
      </div>
    </section>
  `;
}

renderServicesSection();
renderServiceDetailPage();
renderProcessSection();
renderInteractiveMethodDiagram();
renderAudienceDiagram();
renderProcessImageInteractions();

const searchToggle = document.querySelector('.search-toggle');
const siteSearch = document.querySelector('#site-search');
const siteSearchInput = document.querySelector('#site-search-input');
const siteSearchClose = document.querySelector('.site-search-close');
const siteSearchResults = document.querySelector('[data-search-results]');
const searchItems = [
  { title: 'Offres et accompagnement', description: 'Services, tarifs, site web, automatisation et agent IA', url: 'offres.html', keywords: 'offres tarifs prix service site automatisation agent ia accompagnement' },
  { title: 'Automatisation', description: 'Processus, formulaires, emails, suivi, Make et outils connectés', url: 'offres.html#service-automatisation', keywords: 'automatisation automatiser make formulaire email suivi workflow' },
  { title: 'Agent IA', description: 'Assistant, qualification, réponses simples et orientation des demandes', url: 'offres.html#service-agent-ia', keywords: 'agent ia intelligence artificielle chatbot assistant questions' },
  { title: 'Site web professionnel', description: 'Site vitrine, présence digitale et parcours de contact', url: 'offres.html#service-site-web-professionnel', keywords: 'site web vitrine wordpress landing page professionnel' },
  { title: 'Pour qui ?', description: 'Métiers, activités, artisans, santé, beauté, consultants et associations', url: '#creations', keywords: 'pour qui métier artisan santé beauté consultant association commerce' },
  { title: 'Méthode', description: 'Étapes, analyse, stratégie, développement, lancement et suivi', url: '#methode', keywords: 'méthode methode étapes processus analyse stratégie développement lancement suivi' },
  { title: 'Portfolio', description: 'Réalisations et projets créés', url: '#portfolio', keywords: 'portfolio réalisations projets exemples' },
  { title: 'Blog', description: 'Articles et conseils digitaux', url: 'blog.html', keywords: 'blog article conseil site internet landing page agents ia' },
  { title: 'FAQ', description: 'Questions fréquentes', url: 'faq.html', keywords: 'faq questions réponses coûts modification délai' },
  { title: 'Contact', description: 'Demande de devis, email, téléphone et disponibilités', url: '#contact', keywords: 'contact devis email téléphone disponibilités calendly rendez-vous' }
];

function normalizeSearch(text) {
  return String(text || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function renderSearchResults(query = '') {
  if (!siteSearchResults) return;
  const normalizedQuery = normalizeSearch(query);
  const results = searchItems.filter(item => {
    if (!normalizedQuery) return true;
    return normalizeSearch(`${item.title} ${item.description} ${item.keywords}`).includes(normalizedQuery);
  }).slice(0, 6);

  siteSearchResults.innerHTML = results.length
    ? results.map(item => `
        <a class="site-search-result" href="${item.url}">
          <span>
            <strong>${item.title}</strong>
            <small>${item.description}</small>
          </span>
          <span aria-hidden="true">→</span>
        </a>
      `).join('')
    : '<p class="site-search-empty">Aucun résultat. Essayez “automatisation”, “agent IA”, “tarifs” ou “contact”.</p>';

  siteSearchResults.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => setSearchOpen(false));
  });
}

function setSearchOpen(open) {
  if (!siteSearch || !searchToggle) return;
  siteSearch.hidden = !open;
  searchToggle.setAttribute('aria-expanded', String(open));
  if (open) {
    renderSearchResults(siteSearchInput?.value || '');
    setTimeout(() => siteSearchInput?.focus(), 60);
  }
}

searchToggle?.addEventListener('click', () => {
  setSearchOpen(siteSearch?.hidden ?? true);
});

siteSearchClose?.addEventListener('click', () => setSearchOpen(false));

siteSearchInput?.addEventListener('input', event => {
  renderSearchResults(event.target.value);
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && siteSearch && !siteSearch.hidden) setSearchOpen(false);
});

const contactForm = document.querySelector('.contact-form');
const contactStatus = document.querySelector('#contact-status');
const makeWebhookUrl = 'https://hook.eu2.make.com/ozhsbwv26y0jbaofubjcjagw1hiug4a4';

function buildContactMailto(formData) {
  const name = formData.get('name') || '';
  const email = formData.get('email') || '';
  const phone = formData.get('phone') || '';
  const service = formData.get('service') || '';
  const message = formData.get('message') || '';
  const subject = encodeURIComponent(`Demande de devis - ${service || 'Enas Digital'}`);
  const body = encodeURIComponent(`Bonjour Enas Digital,

Nom : ${name}
Email : ${email}
Téléphone : ${phone}
Service souhaité : ${service}

Message :
${message}`);

  return `mailto:contact@enasdigital.fr?subject=${subject}&body=${body}`;
}

function buildContactPayload(formData) {
  return {
    name: String(formData.get('name') || '').trim(),
    email: String(formData.get('email') || '').trim(),
    phone: String(formData.get('phone') || '').trim(),
    service: String(formData.get('service') || '').trim(),
    message: String(formData.get('message') || '').trim(),
    source: 'enasdigital.fr',
    page: window.location.href,
    sentAt: new Date().toISOString()
  };
}

function showContactFallback(formData) {
  if (!contactStatus) return;
  const fallbackLink = document.createElement('a');
  fallbackLink.href = buildContactMailto(formData);
  fallbackLink.textContent = 'Cliquez ici pour envoyer votre demande par email';

  contactStatus.className = 'contact-status error';
  contactStatus.textContent = 'L’envoi automatique est temporairement indisponible. ';
  contactStatus.append(fallbackLink, ' ou contactez-moi sur WhatsApp.');
}

contactForm?.addEventListener('submit', async event => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;

  const submitButton = contactForm.querySelector('button[type="submit"]');
  const originalButtonText = submitButton?.textContent || 'Envoyer ma demande';
  const formData = new FormData(contactForm);
  const payload = buildContactPayload(formData);

  if (contactStatus) {
    contactStatus.className = 'contact-status';
    contactStatus.textContent = 'Envoi en cours...';
  }

  if (submitButton) {
    submitButton.disabled = true;
    submitButton.textContent = 'Envoi en cours...';
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 12000);
    const response = await fetch(makeWebhookUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload),
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (!response.ok) throw new Error(`Make webhook HTTP ${response.status}`);

    if (contactStatus) {
      contactStatus.className = 'contact-status success';
      contactStatus.textContent = 'Votre demande a bien été transmise. Je vous répondrai sous 24 à 48h ouvrées.';
    }
    contactForm.reset();
  } catch (error) {
    showContactFallback(formData);
  } finally {
    if (submitButton) {
      submitButton.disabled = false;
      submitButton.textContent = originalButtonText;
    }
  }
});

const chatToggle = document.querySelector('.chat-toggle');
const chatPanel = document.querySelector('#chat-assistant');
const chatClose = document.querySelector('.chat-close');
const chatBody = document.querySelector('#chat-body');
const chatForm = document.querySelector('#chat-form');
const chatInput = document.querySelector('#chat-input');
const chatReplies = {
  site: "Pour un site professionnel, le plus simple est de partir sur un site vitrine clair : accueil, services, méthode, FAQ et contact. Vous pouvez m’expliquer votre activité via le formulaire et je vous réponds avec une proposition adaptée.",
  auto: "Les automatisations peuvent aider pour les formulaires, emails automatiques, prise de rendez-vous, suivi des demandes ou agents IA simples. L’idée est de gagner du temps sans rendre la relation froide.",
  price: "Les repères actuels : site vitrine à partir de 490 €, refonte à partir de 290 €, suivi à partir de 39 €/mois. Les automatisations et agents IA dépendent de la complexité, donc je prépare un devis précis.",
  contact: "Vous pouvez cliquer sur “Demander un devis”, utiliser WhatsApp ou écrire à contact@enasdigital.fr. Réponse sous 24 à 48h ouvrées.",
  delay: "Pour un site vitrine simple, la création se fait généralement en 7 à 14 jours selon les contenus disponibles, les pages à prévoir et les outils à connecter.",
  landing: "Une landing page convient si vous avez une offre précise à présenter. Un site vitrine est préférable si vous voulez présenter votre activité, plusieurs services, votre méthode et une FAQ.",
  edit: "Oui, votre site peut évoluer après la mise en ligne : textes, images, sections, nouvelles pages, formulaire, Calendly, WhatsApp ou automatisations.",
  ai: "Un agent IA peut aider à répondre à certaines demandes, qualifier un prospect, orienter vers le bon service ou préparer un suivi. Je conseille de commencer simplement, selon vos besoins réels.",
  wordpress: "Je peux travailler avec WordPress et Elementor, mais aussi créer un site statique léger selon le projet. Le choix dépend du besoin de modification, du budget et des outils à connecter.",
  default: "Je peux vous répondre sur les sites vitrines, landing pages, tarifs, délais, automatisations, agents IA et prise de contact. Pour une réponse précise, expliquez votre activité dans le formulaire de devis."
};

const answerRules = [
  { keywords: ['tarif', 'prix', 'cout', 'coût', 'combien', '€', 'budget'], reply: chatReplies.price },
  { keywords: ['automatisation', 'automatiser', 'zapier', 'make', 'email automatique', 'formulaire'], reply: chatReplies.auto },
  { keywords: ['agent ia', 'agents ia', 'ia', 'intelligence artificielle', 'chatbot'], reply: chatReplies.ai },
  { keywords: ['wordpress', 'elementor'], reply: chatReplies.wordpress },
  { keywords: ['landing', 'page de vente', 'landing page'], reply: chatReplies.landing },
  { keywords: ['site', 'vitrine'], reply: chatReplies.site },
  { keywords: ['delai', 'délai', 'temps', 'jours', 'livraison'], reply: chatReplies.delay },
  { keywords: ['modifier', 'modification', 'changer', 'evoluer', 'évoluer', 'maintenance', 'suivi'], reply: chatReplies.edit },
  { keywords: ['contact', 'devis', 'mail', 'email', 'telephone', 'téléphone', 'whatsapp', 'rendez-vous', 'calendly'], reply: chatReplies.contact }
];

function addChatMessage(text, type) {
  if (!chatBody) return;
  const message = document.createElement('p');
  message.className = `chat-message ${type}`;
  message.textContent = text;
  chatBody.appendChild(message);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function setChatOpen(open) {
  if (!chatPanel || !chatToggle) return;
  chatPanel.hidden = !open;
  chatToggle.setAttribute('aria-expanded', String(open));
  if (open) setTimeout(() => chatInput?.focus(), 80);
}

function getChatReply(question) {
  const normalized = question.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const match = answerRules.find(rule =>
    rule.keywords.some(keyword => normalized.includes(keyword.normalize('NFD').replace(/[\u0300-\u036f]/g, '')))
  );
  return match?.reply || chatReplies.default;
}

chatToggle?.addEventListener('click', () => {
  setChatOpen(chatPanel?.hidden ?? true);
});

chatClose?.addEventListener('click', () => setChatOpen(false));

document.querySelectorAll('.chat-options button').forEach(button => {
  button.addEventListener('click', () => {
    const key = button.dataset.reply;
    addChatMessage(button.textContent.trim(), 'user');
    addChatMessage(chatReplies[key] || chatReplies.contact, 'bot');
  });
});

chatForm?.addEventListener('submit', event => {
  event.preventDefault();
  const question = chatInput?.value.trim();
  if (!question) return;
  addChatMessage(question, 'user');
  chatInput.value = '';
  setTimeout(() => addChatMessage(getChatReply(question), 'bot'), 180);
});
