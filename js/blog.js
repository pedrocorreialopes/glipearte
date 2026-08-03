/* =========================================================
   Glipearte Pegue e Monte - Blog Filters & Search
   ========================================================= */

(function() {
  'use strict';

  const blogGrid = document.getElementById('blog-grid');
  const searchInput = document.getElementById('blog-search');
  const searchBtn = document.getElementById('blog-search-btn');
  const categoryButtons = document.querySelectorAll('.blog-categories .filter-btn');

  if (!blogGrid) return;

  const posts = Array.from(blogGrid.querySelectorAll('.blog-card'));

  function filterPosts() {
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const activeCategory = document.querySelector('.blog-categories .filter-btn.active');
    const category = activeCategory ? activeCategory.dataset.category : 'all';

    posts.forEach(post => {
      const text = post.textContent.toLowerCase();
      const postCategory = post.dataset.category || 'all';
      const matchesSearch = !query || text.includes(query);
      const matchesCategory = category === 'all' || postCategory === category;
      post.style.display = (matchesSearch && matchesCategory) ? '' : 'none';
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', filterPosts);
  }
  if (searchBtn) {
    searchBtn.addEventListener('click', filterPosts);
  }

  categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterPosts();
    });
  });

  // Parâmetros de URL para tag/categoria
  const params = new URLSearchParams(window.location.search);
  const tag = params.get('tag');
  if (tag) {
    const btn = document.querySelector(`.blog-categories .filter-btn[data-category="${tag}"]`);
    if (btn) btn.click();
    if (searchInput) searchInput.value = tag;
    filterPosts();
  }
})();
