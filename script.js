// Scroll animation
const elements = document.querySelectorAll('.fade-in, .slide-in');

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < windowHeight - 100) {
      el.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Dark/light toggle
document.getElementById('modeToggle').addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  const isLight = document.body.classList.contains('light-mode');
  document.getElementById('modeToggle').textContent = isLight ? '☀️' : '🌙';
});

