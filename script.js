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

const contactForm = document.querySelector('.contact-form');
const contactSubmitButton = contactForm ? contactForm.querySelector('button[type="submit"]') : null;
const contactEndpoint = contactForm ? contactForm.dataset.endpoint : null;

if (contactForm && contactSubmitButton && contactEndpoint) {
  contactForm.setAttribute('novalidate', '');
  contactForm.removeAttribute('action');
  const ajaxEndpoint = contactEndpoint.includes('/ajax/')
    ? contactEndpoint
    : contactEndpoint.replace('https://formsubmit.co/', 'https://formsubmit.co/ajax/');

  const successOverlay = document.createElement('div');
  successOverlay.className = 'form-success-overlay';
  successOverlay.innerHTML = `
    <div class="form-success-content" role="status" aria-live="polite">
      <div class="form-success-icon" aria-hidden="true">
        <svg viewBox="0 0 52 52" focusable="false">
          <circle cx="26" cy="26" r="25" fill="none"></circle>
          <path d="M16 27.5l6 6L36 20" fill="none"></path>
        </svg>
      </div>
      <h3>Message received</h3>
      <p>Thanks for your message. We'll reach out soon.</p>
    </div>
  `;
  successOverlay.setAttribute('hidden', '');
  contactForm.appendChild(successOverlay);

  const showSubmittingState = () => {
    contactSubmitButton.disabled = true;
    contactSubmitButton.dataset.loading = 'true';
  };

  const resetSubmittingState = () => {
    contactSubmitButton.disabled = false;
    delete contactSubmitButton.dataset.loading;
  };

  const showSuccessOverlay = () => {
    successOverlay.removeAttribute('hidden');
    requestAnimationFrame(() => {
      successOverlay.dataset.visible = 'true';
    });
  };

  const handleError = () => {
    resetSubmittingState();
    contactSubmitButton.textContent = 'Try again';
    setTimeout(() => {
      contactSubmitButton.textContent = 'Send';
    }, 4000);
  };

  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    event.stopImmediatePropagation();
    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }

    showSubmittingState();

    try {
      const formData = new FormData(contactForm);
      const response = await fetch(ajaxEndpoint, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      contactForm.reset();
      resetSubmittingState();
      showSuccessOverlay();
    } catch (error) {
      handleError();
      console.error('Contact form submission failed', error);
    }
  });
}
