document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', event => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

const enasServices = window.enasServices || [];

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
  rocket: '<path d="M4 14c3.4-8 8-10 16-10-1 8-3 12.6-11 16l-1-5z"/><path d="M7 17 4 20"/><path d="M15 9h.01"/>'
};

function serviceIcon(name, className = 'service-svg') {
  return `<svg class="${className}" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${iconPaths[name] || iconPaths.web}</svg>`;
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
        <a class="back-link service-back" href="index.html#services">← Retour aux services</a>
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
