/* =========================================================
   Glipearte Pegue e Monte - Main JavaScript
   Interatividade base: menu, reveal, carrossel, ano, botão topo
   ========================================================= */

(function() {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Atualiza ano no footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Menu mobile
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.getElementById('nav-menu');
  if (menuToggle && mainNav) {
    const focusableElements = mainNav.querySelectorAll('a, button');

    menuToggle.addEventListener('click', function() {
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !expanded);
      mainNav.classList.toggle('open');
      document.body.classList.toggle('menu-open');
      if (!expanded && focusableElements.length) {
        focusableElements[0].focus();
      }
    });

    // Fecha menu ao clicar em link
    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.setAttribute('aria-expanded', 'false');
        mainNav.classList.remove('open');
        document.body.classList.remove('menu-open');
      });
    });

    // Fecha com Escape
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && mainNav.classList.contains('open')) {
        menuToggle.setAttribute('aria-expanded', 'false');
        mainNav.classList.remove('open');
        document.body.classList.remove('menu-open');
        menuToggle.focus();
      }
    });
  }

  // Header scrolled state
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // Scroll reveal
  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length && !prefersReducedMotion) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    revealElements.forEach(el => observer.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('active'));
  }

  // Back to top button
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }, { passive: true });
  }

  // Inicializa Swiper para depoimentos
  if (typeof Swiper !== 'undefined') {
    const swiperEl = document.querySelector('.testimonials-slider');
    if (swiperEl) {
      new Swiper('.testimonials-slider', {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        },
        keyboard: {
          enabled: true
        },
        a11y: {
          prevSlideMessage: 'Depoimento anterior',
          nextSlideMessage: 'Próximo depoimento',
          paginationBulletMessage: 'Ir para depoimento {{index}}'
        }
      });
    }
  }

  // Filtros de categorias genéricos (portfolio, galeria, blog)
  const filterGroups = document.querySelectorAll('.filter-tags, .blog-categories');
  filterGroups.forEach(group => {
    const buttons = group.querySelectorAll('.filter-btn');
    const section = group.closest('section') || group.closest('.container');
    let items = [];
    const grid = section.querySelector('.portfolio-grid, .gallery-grid, .blog-grid, .services-grid, .service-detail-grid');
    if (grid) items = Array.from(grid.children);

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter || btn.dataset.category;

        items.forEach(item => {
          const category = item.dataset.category || 'all';
          if (!filter || filter === 'all' || category === filter || category === 'all') {
            item.style.display = '';
            item.classList.add('reveal');
            item.classList.add('active');
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  });

})();
