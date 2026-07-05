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
const chatReplies = {
  site: "Pour un site professionnel, le plus simple est de partir sur un site vitrine clair : accueil, services, méthode, FAQ et contact. Vous pouvez m’expliquer votre activité via le formulaire et je vous réponds avec une proposition adaptée.",
  auto: "Les automatisations peuvent aider pour les formulaires, emails automatiques, prise de rendez-vous, suivi des demandes ou agents IA simples. L’idée est de gagner du temps sans rendre la relation froide.",
  price: "Les repères actuels : site vitrine à partir de 490 €, refonte à partir de 290 €, suivi à partir de 39 €/mois. Les automatisations et agents IA dépendent de la complexité, donc je prépare un devis précis.",
  contact: "Vous pouvez cliquer sur “Demander un devis”, utiliser WhatsApp ou écrire à contact@enasdigital.fr. Réponse sous 24 à 48h ouvrées."
};

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
