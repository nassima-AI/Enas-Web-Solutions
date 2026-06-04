const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav a');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => nav.classList.remove('open'));
  });
}

const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

revealElements.forEach((element) => {
  if (!element.classList.contains('visible')) {
    revealObserver.observe(element);
  }
});

const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  if (!header) return;

  if (window.scrollY > 12) {
    header.style.background = 'rgba(255,255,255,0.95)';
    header.style.borderBottomColor = 'rgba(19,42,99,0.10)';
  } else {
    header.style.background = 'rgba(248,251,255,0.86)';
    header.style.borderBottomColor = 'rgba(19,42,99,0.06)';
  }
});

const glowA = document.querySelector('.glow-a');
const glowB = document.querySelector('.glow-b');

window.addEventListener('mousemove', (event) => {
  const x = event.clientX / window.innerWidth;
  const y = event.clientY / window.innerHeight;

  if (glowA) {
    glowA.style.transform = `translate(${x * 16}px, ${y * 14}px)`;
  }

  if (glowB) {
    glowB.style.transform = `translate(${-x * 14}px, ${-y * 10}px)`;
  }
});

const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach((item) => {
  item.addEventListener('toggle', () => {
    if (!item.open) return;
    faqItems.forEach((other) => {
      if (other !== item) other.open = false;
    });
  });
});

const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', () => {
    const submitButton = form.querySelector('button[type="submit"]');
    if (submitButton) {
      submitButton.textContent = 'Envoi en cours...';
      submitButton.disabled = true;
    }
  });
}