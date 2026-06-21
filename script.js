// ── Mobile Menu ──
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

// Fecha o menu ao clicar fora
document.addEventListener('click', (e) => {
  const menu = document.getElementById('mobileMenu');
  if (!e.target.closest('nav') && !e.target.closest('#mobileMenu')) {
    menu.classList.remove('open');
  }
});

// ── Fade-in ao rolar ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
