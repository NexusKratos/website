(() => {
  'use strict';
  const THEME_KEY = 'nexuskratos-theme';
  const THEMES = ['system', 'light', 'dark'];
  let theme = 'system';
  // Storage may be unavailable in private or restricted browsing contexts.
  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (THEMES.includes(saved)) theme = saved;
  } catch {
    // System preference is the fallback when saved preferences are inaccessible.
  }
  document.documentElement.dataset.theme = theme;
  document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('theme');
    if (!select) return;
    select.value = theme;
    select.closest('.theme-control').hidden = false;
    select.addEventListener('change', () => {
      if (!THEMES.includes(select.value)) return;
      document.documentElement.dataset.theme = select.value;
      try {
        localStorage.setItem(THEME_KEY, select.value);
      } catch {
        // The chosen theme still works for this page when storage is blocked.
      }
    });
  });
})();
