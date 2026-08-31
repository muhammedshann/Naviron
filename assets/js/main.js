/**
 * Naviron - Main JavaScript
 * Interactive functionality, mobile navigation drawer, animations, and form feedback
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Drawer Functionality
  const mobileToggle = document.getElementById('mobileToggle');
  const drawerClose = document.getElementById('drawerClose');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerOverlay = document.getElementById('drawerOverlay');

  function openDrawer() {
    if (mobileDrawer && drawerOverlay) {
      mobileDrawer.classList.add('active');
      drawerOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeDrawer() {
    if (mobileDrawer && drawerOverlay) {
      mobileDrawer.classList.remove('active');
      drawerOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (mobileToggle) mobileToggle.addEventListener('click', openDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);

  // Close drawer on pressing Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDrawer();
  });

  // 2. Active Link Highlighting
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const allNavLinks = document.querySelectorAll('.nav-links a, .drawer-nav a');
  
  allNavLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // 3. Animated Number Counters (About Page)
  const statNumbers = document.querySelectorAll('.stat-number[data-target]');
  
  if (statNumbers.length > 0) {
    const animateCounters = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-target'), 10);
          const suffix = el.getAttribute('data-suffix') || '';
          const duration = 1600; // ms
          const startTime = performance.now();

          const updateCount = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            // Ease out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.floor(easeOut * target);

            el.textContent = currentVal + suffix;

            if (progress < 1) {
              requestAnimationFrame(updateCount);
            } else {
              el.textContent = target + suffix;
            }
          };

          requestAnimationFrame(updateCount);
          observer.unobserve(el);
        }
      });
    };

    const counterObserver = new IntersectionObserver(animateCounters, {
      threshold: 0.2
    });

    statNumbers.forEach((counter) => counterObserver.observe(counter));
  }

  // 4. Contact Form Handler
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
        if (formStatus) {
          formStatus.className = 'form-status success';
          formStatus.textContent = 'Thank you! Your message has been sent successfully. We will get in touch with you shortly.';
          contactForm.reset();
        }
      }, 1000);
    });
  }

  // 5. Blog Comment Form Handler
  const commentForm = document.getElementById('commentForm');
  const commentStatus = document.getElementById('commentStatus');

  if (commentForm) {
    commentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = commentForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Posting...';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
        if (commentStatus) {
          commentStatus.className = 'form-status success';
          commentStatus.textContent = 'Your comment has been submitted and is awaiting moderation.';
          commentForm.reset();
        }
      }, 1000);
    });
  }
});
