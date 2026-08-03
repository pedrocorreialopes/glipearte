/* =========================================================
   Glipearte Pegue e Monte - FAQ Search & Accordion
   ========================================================= */

(function() {
  'use strict';

  const searchInput = document.getElementById('faq-search');
  const faqList = document.getElementById('faq-list');
  if (!searchInput || !faqList) return;

  const items = Array.from(faqList.querySelectorAll('.faq-item'));

  searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase().trim();
    items.forEach(item => {
      const text = item.textContent.toLowerCase();
      if (!query || text.includes(query)) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
        item.removeAttribute('open');
      }
    });
  });

  // Fecha outros itens ao abrir um (accordion)
  items.forEach(item => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        items.forEach(other => {
          if (other !== item && other.open) other.removeAttribute('open');
        });
      }
    });
  });
})();
