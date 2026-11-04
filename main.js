// Portfolio Premium Motion 2026 — runs only when motion is allowed.
(() => {
  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (motionQuery.matches || !('IntersectionObserver' in window)) return;
  const selector = [
    '.hero-copy > *', '.hero-visual',
    '#about .section-number', '#about h2', '#about .about-grid > *',
    '#projects .section-heading', '#projects .project-card',
    '#experience .section-number', '#experience h2',
    '#experience .timeline-item', '#experience .experience-education',
    '#contact .contact-panel'
  ].join(',');
  const nodes = Array.from(document.querySelectorAll(selector));
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.remove('motion-pending');
      entry.target.classList.add('motion-visible');
      observer.unobserve(entry.target);
    }
  }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });
  for (const [index, node] of nodes.entries()) {
    node.classList.add('motion-reveal');
    // Elements already on screen must not disappear or flash during initial load.
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      node.classList.add('motion-visible');
    } else {
      node.classList.add('motion-pending');
      observer.observe(node);
    }
  }
  const revealAll = () => {
    observer.disconnect();
    nodes.forEach(node => {node.classList.remove('motion-pending');node.classList.add('motion-visible');});
  };
  motionQuery.addEventListener?.('change', event => { if (event.matches) revealAll(); });
  document.addEventListener('visibilitychange', () => { if (!document.hidden) {
    nodes.forEach(node => {if (node.classList.contains('motion-pending') && node.getBoundingClientRect().top < window.innerHeight) {
      node.classList.remove('motion-pending');node.classList.add('motion-visible');observer.unobserve(node);
    }});
  }});
})();
