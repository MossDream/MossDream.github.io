(() => {
  try {
    const stored = localStorage.getItem('moss-theme');
    const theme = stored === 'dark' || stored === 'light'
      ? stored
      : matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    document.documentElement.dataset.theme = theme;
  } catch {
    document.documentElement.dataset.theme = 'light';
  }
})();
