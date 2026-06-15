// ===== EXISTING FUNCTIONALITY =====
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
  });
});

// ===== GSAP ANIMATIONS =====
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.refresh();

// Hero entrance timeline
const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

heroTl
  .from('.hero-badge',        { y: -30, opacity: 0, duration: 0.6 })
  .from('.hero h1',           { y: 60, opacity: 0, duration: 0.8 },        '-=0.3')
  .from('.hero p',            { y: 40, opacity: 0, duration: 0.8 },        '-=0.5')
  .from('.hero-buttons a',    { y: 30, opacity: 0, duration: 0.5 },        '-=0.4')
  .from('.hero-image img',    { x: 80, opacity: 0, scale: 0.85, duration: 1, ease: 'power4.out' }, '-=0.7');

// Section headers stagger entrance
gsap.utils.toArray('.section-header').forEach(header => {
  gsap.fromTo(header.querySelectorAll('.section-tag, h2, p'), {
    opacity: 0, y: 30
  }, {
    y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: 'power2.out',
    scrollTrigger: { trigger: header, start: 'top 85%' }
  });
});

// Stats
gsap.from('.stat-item', {
  scrollTrigger: { trigger: '.stats', start: 'top 85%' },
  y: 50, opacity: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out'
});

// Count-up animation for stats
document.querySelectorAll('.stat-number').forEach(el => {
  const text = el.textContent;
  const isK = text.includes('K');
  const hasPlus = text.includes('+');
  const num = parseFloat(text);
  const obj = { val: 0 };
  gsap.to(obj, {
    val: num, duration: 2.2, ease: 'power2.out',
    scrollTrigger: { trigger: '.stats', start: 'top 85%' },
    onUpdate: () => {
      let v = num % 1 === 0 ? Math.round(obj.val) : obj.val.toFixed(1);
      el.textContent = v + (isK ? 'K' : '') + (hasPlus ? '+' : '');
    }
  });
});

// Brew cards – cascade pop-in
gsap.from('.brew-card', {
  scrollTrigger: { trigger: '.brew-grid', start: 'top 80%' },
  y: 80,
  opacity: 0,
  scale: 0.85,
  duration: 0.6,
  stagger: 0.06,
  ease: 'back.out(1.7)'
});

// About – side slide
gsap.from('.about-grid > div:first-child', {
  scrollTrigger: { trigger: '.about-grid', start: 'top 80%' },
  x: -80, opacity: 0, duration: 0.8, ease: 'power3.out'
});
gsap.from('.about-image', {
  scrollTrigger: { trigger: '.about-grid', start: 'top 80%' },
  x: 80, opacity: 0, duration: 0.8, ease: 'power3.out'
});

// About features stagger
gsap.from('.about-feature', {
  scrollTrigger: { trigger: '.about-features', start: 'top 85%' },
  x: -40, opacity: 0, duration: 0.5, stagger: 0.12, ease: 'power2.out'
});

// Visit – side slide
gsap.from('.visit-grid > div:first-child', {
  scrollTrigger: { trigger: '.visit-grid', start: 'top 80%' },
  x: -80, opacity: 0, duration: 0.8, ease: 'power3.out'
});
gsap.from('.visit-image', {
  scrollTrigger: { trigger: '.visit-grid', start: 'top 80%' },
  x: 80, opacity: 0, duration: 0.8, ease: 'power3.out'
});

// Visit info rows
gsap.from('.visit-row', {
  scrollTrigger: { trigger: '.visit-info', start: 'top 85%' },
  y: 30, opacity: 0, duration: 0.5, stagger: 0.15, ease: 'power2.out'
});

// Visit button
gsap.from('.visit .btn-primary', {
  scrollTrigger: { trigger: '.visit .btn-primary', start: 'top 90%' },
  y: 20, opacity: 0, duration: 0.5, ease: 'power2.out'
});

// Testimonials
gsap.from('.testimonial-card', {
  scrollTrigger: { trigger: '.testimonial-grid', start: 'top 80%' },
  y: 60, opacity: 0, scale: 0.95, duration: 0.7, stagger: 0.15,
  ease: 'power2.out'
});

// Footer
gsap.from('.footer-grid', {
  scrollTrigger: { trigger: 'footer', start: 'top 90%' },
  y: 40, opacity: 0, duration: 0.8, ease: 'power2.out'
});
