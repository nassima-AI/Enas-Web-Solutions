document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', event => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
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
