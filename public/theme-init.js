(() => {
  let theme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

  try {
    const stored = localStorage.getItem('moss-theme');
    if (stored === 'dark' || stored === 'light') theme = stored;
  } catch {
    // Keep the system preference when storage is unavailable.
  }

  document.documentElement.dataset.theme = theme;
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', theme === 'dark' ? '#11110f' : '#f2efe7');
})();
