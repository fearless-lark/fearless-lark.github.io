const navToggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('primary-navigation');
const navLinks = nav ? nav.querySelectorAll('a') : [];
const header = document.querySelector('.site-header');

const setInitialNavState = () => {
  if (!nav) {
    return;
  }
  if (window.matchMedia('(max-width: 768px)').matches) {
    nav.dataset.open = 'false';
    if (navToggle) {
      navToggle.setAttribute('aria-expanded', 'false');
    }
  } else {
    nav.dataset.open = 'true';
    if (navToggle) {
      navToggle.setAttribute('aria-expanded', 'true');
    }
  }
};

setInitialNavState();

if (navToggle && nav) {
  const closeMenu = () => {
    nav.dataset.open = 'false';
    navToggle.setAttribute('aria-expanded', 'false');
  };

  const openMenu = () => {
    nav.dataset.open = 'true';
    navToggle.setAttribute('aria-expanded', 'true');
  };

  navToggle.addEventListener('click', () => {
    const isOpen = nav.dataset.open === 'true';
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (window.matchMedia('(max-width: 768px)').matches) {
        closeMenu();
      }
    });
  });

  window.addEventListener('resize', () => {
    if (!window.matchMedia('(max-width: 768px)').matches) {
      nav.dataset.open = 'true';
      navToggle.setAttribute('aria-expanded', 'true');
    } else {
      closeMenu();
    }
  });
}

const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const enableSmoothScroll = () => {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href');
      if (!targetId || targetId === '#') {
        return;
      }
      const target = document.querySelector(targetId);
      if (target) {
        event.preventDefault();
        const headerOffset = header ? header.offsetHeight + 16 : 0;
        const elementPosition = target.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    });
  });
};

enableSmoothScroll();
