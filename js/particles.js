// ===== PARTICLES.JS — Floating ambient particles =====
(function () {
  const COLORS = ['#9FA1FF', '#B5BAFF', '#AEE2FF', '#D9F9DF'];
  const container = document.getElementById('particles');
  if (!container) return;

  // Fewer particles on mobile for performance
  const count = window.innerWidth < 480 ? 10 : 20;

  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const left   = Math.random() * 100;
    const dur    = 14 + Math.random() * 18;
    const delay  = Math.random() * 22;
    const drift  = (Math.random() - 0.5) * 130;
    const size   = 1 + Math.random() * 2;
    const color  = COLORS[Math.floor(Math.random() * COLORS.length)];
    p.style.cssText = [
      `left:${left}%`,
      `bottom:0`,
      `width:${size}px`,
      `height:${size}px`,
      `background:${color}`,
      `animation-duration:${dur}s`,
      `animation-delay:-${delay}s`,
      `--drift:${drift}px`,
      `opacity:${0.08 + Math.random() * 0.22}`
    ].join(';');
    container.appendChild(p);
  }
})();