// ============================================================
// Client-side micro-interactions
//   · Lenis smooth scroll
//   · Motion One scroll-reveal (inView) + count-up
//   · Magnetic CTA hovers
// Re-bound on every Astro view-transition via astro:page-load.
// ============================================================
import Lenis from 'lenis';
import { inView, animate } from 'motion';

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---- Lenis (init once, survives view transitions) ---------- */
function initLenis() {
  if (reduce || window.__lenis) return;
  const lenis = new Lenis({
    duration: 1.05,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 0.9,
  });
  window.__lenis = lenis;
  const raf = (time) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);
}

/* ---- Anchor links → Lenis-aware smooth scroll -------------- */
function bindAnchors() {
  document.querySelectorAll('a[href^="#"]:not([data-anchor-bound])').forEach((a) => {
    a.dataset.anchorBound = 'true';
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 84;
      if (window.__lenis) window.__lenis.scrollTo(top, { duration: 1.1 });
      else window.scrollTo({ top, behavior: 'smooth' });
      history.replaceState(null, '', id);
    });
  });
}

/* ---- Scroll reveal ----------------------------------------- */
function bindReveals() {
  document.querySelectorAll('[data-reveal]:not([data-reveal-bound])').forEach((el) => {
    el.dataset.revealBound = 'true';
    if (reduce) {
      el.classList.add('is-visible');
      return;
    }
    inView(
      el,
      () => {
        el.classList.add('is-visible');
      },
      { amount: 0.18, margin: '0px 0px -8% 0px' }
    );
  });
}

/* ---- Count-up numbers -------------------------------------- */
function bindCounters() {
  document.querySelectorAll('[data-count]:not([data-count-bound])').forEach((el) => {
    el.dataset.countBound = 'true';
    const target = parseFloat(el.dataset.count);
    const decimals = (el.dataset.decimals && parseInt(el.dataset.decimals)) || 0;
    const fmt = (v) =>
      Number(v).toLocaleString('en-IN', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      });
    if (reduce) {
      el.textContent = fmt(target);
      return;
    }
    el.textContent = fmt(0);
    inView(
      el,
      () => {
        animate(0, target, {
          duration: 1.4,
          ease: [0.16, 1, 0.3, 1],
          onUpdate: (v) => {
            el.textContent = fmt(v);
          },
        });
      },
      { amount: 0.6 }
    );
  });
}

/* ---- Magnetic hover ---------------------------------------- */
function bindMagnetic() {
  if (reduce) return;
  document.querySelectorAll('[data-magnetic]:not([data-magnetic-bound])').forEach((el) => {
    el.dataset.magneticBound = 'true';
    const strength = parseFloat(el.dataset.magnetic) || 0.3;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) * strength;
      const y = (e.clientY - (r.top + r.height / 2)) * strength;
      el.style.transform = `translate(${x}px, ${y}px)`;
    };
    const reset = () => {
      el.style.transform = 'translate(0,0)';
    };
    el.addEventListener('pointerenter', () => {
      el.addEventListener('pointermove', onMove);
    });
    el.addEventListener('pointerleave', () => {
      reset();
      el.removeEventListener('pointermove', onMove);
    });
  });
}

function setup() {
  initLenis();
  bindAnchors();
  bindReveals();
  bindCounters();
  bindMagnetic();
}

document.addEventListener('astro:page-load', setup);
// Fallback for the very first load if the event already fired.
if (document.readyState !== 'loading') setup();
