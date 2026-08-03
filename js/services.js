/* =========================================================
   Glipearte Pegue e Monte - Services & Portfolio Filters
   Busca avançada e filtros de serviços/portfólio
   ========================================================= */

(function() {
  'use strict';

  // Filtros de serviços por categoria
  const filterGroups = document.querySelectorAll('.filter-tags');
  filterGroups.forEach(group => {
    const buttons = group.querySelectorAll('.filter-btn');
    const section = group.closest('section') || group.closest('.container') || group.parentElement;
    const grids = section ? section.querySelectorAll('.service-detail-grid, .portfolio-grid, .gallery-grid') : [];

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;

        grids.forEach(grid => {
          Array.from(grid.children).forEach(item => {
            const category = item.dataset.category || 'all';
            if (filter === 'all' || category === filter || category === 'all') {
              item.style.display = '';
            } else {
              item.style.display = 'none';
            }
          });
        });
      });
    });
  });

  // Busca de serviços
  const searchInput = document.getElementById('service-search');
  const searchBtn = document.getElementById('service-search-btn');
  if (searchInput) {
    const grids = document.querySelectorAll('.service-detail-grid');

    function performSearch() {
      const query = searchInput.value.toLowerCase().trim();
      grids.forEach(grid => {
        Array.from(grid.children).forEach(item => {
          const text = item.textContent.toLowerCase();
          item.style.display = (!query || text.includes(query)) ? '' : 'none';
        });
      });
    }

    searchInput.addEventListener('input', performSearch);
    if (searchBtn) searchBtn.addEventListener('click', performSearch);
  }

  // URL params: preencher kit no agendamento
  if (window.location.pathname.includes('agendamento.html')) {
    const params = new URLSearchParams(window.location.search);
    const kit = params.get('kit');
    const kitSelect = document.getElementById('booking-kit');
    if (kit && kitSelect) {
      kitSelect.value = kit;
    }
  }
})();
