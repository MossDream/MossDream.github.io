type SearchRecord = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  categories: string[];
  text: string;
};

const root = document.documentElement;
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function setTheme(theme: 'light' | 'dark') {
  root.dataset.theme = theme;
  const meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
  meta?.setAttribute('content', theme === 'dark' ? '#11110f' : '#f2efe7');
  document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]').forEach((button) => {
    button.setAttribute('aria-label', theme === 'dark' ? '切换到浅色主题' : '切换到深色主题');
  });
  try {
    localStorage.setItem('moss-theme', theme);
  } catch {
    // Theme persistence is an enhancement; the selected theme still applies.
  }
}

function initTheme() {
  const current = root.dataset.theme === 'dark' ? 'dark' : 'light';
  setTheme(current);
  document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]').forEach((button) => {
    button.addEventListener('click', () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));
  });
}

function initNavigation() {
  const button = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
  const nav = document.querySelector<HTMLElement>('[data-site-nav]');
  const header = document.querySelector<HTMLElement>('[data-site-header]');
  if (!button || !nav || !header) return;
  const mobileNavigation = window.matchMedia('(max-width: 68rem)');

  const syncNavigationState = () => {
    const collapsed = mobileNavigation.matches && !document.body.classList.contains('menu-open');
    nav.inert = collapsed;
    if (mobileNavigation.matches) nav.setAttribute('aria-hidden', String(collapsed));
    else nav.removeAttribute('aria-hidden');
  };

  const close = () => {
    if (nav.contains(document.activeElement)) button.focus();
    document.body.classList.remove('menu-open');
    button.setAttribute('aria-expanded', 'false');
    syncNavigationState();
  };

  button.addEventListener('click', () => {
    const opening = !document.body.classList.contains('menu-open');
    document.body.classList.toggle('menu-open', opening);
    button.setAttribute('aria-expanded', String(opening));
    syncNavigationState();
  });
  nav.addEventListener('click', (event) => {
    if ((event.target as Element).closest('a')) close();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') close();
  });
  mobileNavigation.addEventListener('change', () => {
    if (!mobileNavigation.matches) document.body.classList.remove('menu-open');
    syncNavigationState();
  });
  syncNavigationState();

  const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 24);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
}

function initProgress() {
  const bar = document.querySelector<HTMLElement>('[data-page-progress]');
  if (!bar) return;
  let scheduled = false;

  const update = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const value = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
    bar.style.transform = `scaleX(${value})`;
    scheduled = false;
  };

  window.addEventListener('scroll', () => {
    if (!scheduled) {
      scheduled = true;
      requestAnimationFrame(update);
    }
  }, { passive: true });
  update();
}

function initSectionPagination() {
  document.querySelectorAll<HTMLElement>('[data-section-pagination]').forEach((section) => {
    const pages = [...section.querySelectorAll<HTMLElement>('[data-section-page]')];
    const controls = section.querySelector<HTMLElement>('[data-section-pagination-controls]');
    const status = section.querySelector<HTMLElement>('[data-section-pagination-status]');
    if (pages.length < 2 || !controls) return;

    let current = 1;
    const total = pages.length;
    const pageLinks = [...controls.querySelectorAll<HTMLButtonElement>('[data-section-page-target]')];
    const previous = controls.querySelector<HTMLButtonElement>('[data-section-page-step="-1"]');
    const next = controls.querySelector<HTMLButtonElement>('[data-section-page-step="1"]');

    const updateDirection = (link: HTMLButtonElement | null, disabled: boolean) => {
      if (!link) return;
      link.classList.toggle('is-disabled', disabled);
      link.setAttribute('aria-disabled', String(disabled));
      link.disabled = disabled;
    };

    const show = (requested: number) => {
      const target = Math.min(total, Math.max(1, requested));
      if (target === current) return;

      pages.forEach((page, index) => {
        const active = index + 1 === target;
        page.classList.toggle('is-active', active);
        page.setAttribute('aria-hidden', String(!active));
        if (active) {
          page.querySelectorAll<HTMLElement>('.reveal').forEach((element) => element.classList.add('is-visible'));
        }
      });

      current = target;
      pageLinks.forEach((link) => {
        const active = Number(link.dataset.sectionPageTarget) === current;
        if (active) link.setAttribute('aria-current', 'page');
        else link.removeAttribute('aria-current');
      });
      updateDirection(previous, current === 1);
      updateDirection(next, current === total);
      if (status) status.textContent = `正在显示第 ${current} 页，共 ${total} 页`;
    };

    controls.addEventListener('click', (event) => {
      const link = (event.target as Element).closest<HTMLButtonElement>('button');
      if (!link) return;
      const pageTarget = Number(link.dataset.sectionPageTarget);
      const pageStep = Number(link.dataset.sectionPageStep);
      if (!Number.isFinite(pageTarget) && !Number.isFinite(pageStep)) return;
      event.preventDefault();
      show(Number.isFinite(pageTarget) ? pageTarget : current + pageStep);
    });
  });
}

function initReveal() {
  const elements = [...document.querySelectorAll<HTMLElement>('.reveal')];
  if (reducedMotion.matches || !('IntersectionObserver' in window)) {
    elements.forEach((element) => element.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  }, { threshold: 0.12, rootMargin: '0px 0px -7% 0px' });

  elements.forEach((element, index) => {
    element.style.setProperty('--reveal-delay', `${Math.min(index % 5, 4) * 55}ms`);
    observer.observe(element);
  });
}

function initMascot() {
  const stage = document.querySelector<HTMLElement>('[data-mascot-stage]');
  const mascot = document.querySelector<HTMLElement>('[data-mascot]');
  if (!stage || !mascot || reducedMotion.matches || !window.matchMedia('(pointer: fine)').matches) return;

  let frame = 0;
  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;

  const render = () => {
    currentX += (targetX - currentX) * 0.11;
    currentY += (targetY - currentY) * 0.11;
    stage.style.setProperty('--pointer-x', currentX.toFixed(3));
    stage.style.setProperty('--pointer-y', currentY.toFixed(3));

    if (Math.abs(targetX - currentX) > 0.002 || Math.abs(targetY - currentY) > 0.002) {
      frame = requestAnimationFrame(render);
    } else {
      frame = 0;
    }
  };

  const schedule = () => {
    if (!frame) frame = requestAnimationFrame(render);
  };

  window.addEventListener('pointermove', (event) => {
    const rect = stage.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > window.innerHeight) return;
    targetX = Math.max(-1, Math.min(1, (event.clientX / window.innerWidth - 0.5) * 2));
    targetY = Math.max(-1, Math.min(1, (event.clientY / window.innerHeight - 0.5) * 2));
    schedule();
  }, { passive: true });

  document.addEventListener('mouseleave', () => {
    targetX = 0;
    targetY = 0;
    schedule();
  });
}

function initSearch() {
  const dialog = document.querySelector<HTMLDialogElement>('[data-search-dialog]');
  const input = document.querySelector<HTMLInputElement>('[data-search-input]');
  const results = document.querySelector<HTMLOListElement>('[data-search-results]');
  const status = document.querySelector<HTMLElement>('[data-search-status]');
  const openButtons = document.querySelectorAll<HTMLButtonElement>('[data-search-open]');
  const closeButton = document.querySelector<HTMLButtonElement>('[data-search-close]');
  if (!dialog || !input || !results || !status) return;

  let records: SearchRecord[] | null = null;
  let loading: Promise<SearchRecord[]> | null = null;

  const load = () => {
    if (records) return Promise.resolve(records);
    if (!loading) {
      loading = fetch('/search-index.json', { credentials: 'same-origin' })
        .then((response) => {
          if (!response.ok) throw new Error(`Search index returned ${response.status}`);
          return response.json() as Promise<SearchRecord[]>;
        })
        .then((data) => (records = data));
    }
    return loading;
  };

  const render = (items: SearchRecord[], query: string) => {
    results.replaceChildren();
    for (const item of items.slice(0, 12)) {
      const listItem = document.createElement('li');
      const link = document.createElement('a');
      const meta = document.createElement('span');
      const title = document.createElement('strong');
      const description = document.createElement('span');
      link.href = `/${encodeURIComponent(item.slug)}/`;
      meta.className = 'search-result__meta';
      meta.textContent = `${item.date} · ${(item.categories.at(-1) ?? '笔记').toUpperCase()}`;
      title.textContent = item.title;
      description.textContent = item.description;
      link.append(meta, title, description);
      listItem.append(link);
      results.append(listItem);
    }
    status.textContent = query ? `找到 ${items.length} 篇匹配文章` : '最近文章';
  };

  const update = async () => {
    const query = input.value.trim().toLocaleLowerCase('zh-CN');
    status.textContent = '正在读取本地索引…';
    try {
      const data = await load();
      const matches = query
        ? data.filter((item) => `${item.title} ${item.description} ${item.tags.join(' ')} ${item.categories.join(' ')} ${item.text}`.toLocaleLowerCase('zh-CN').includes(query))
        : data.slice(0, 6);
      render(matches, query);
    } catch {
      status.textContent = '搜索索引暂时不可用，请从文章归档浏览。';
      results.replaceChildren();
    }
  };

  openButtons.forEach((button) => button.addEventListener('click', () => {
    if (!dialog.open) dialog.showModal();
    void update();
    requestAnimationFrame(() => input.focus());
  }));
  closeButton?.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
  input.addEventListener('input', () => void update());
}

function initCodeBlocks() {
  document.querySelectorAll<HTMLElement>('.article-body figure.highlight').forEach((figure) => {
    if (figure.querySelector('.code-copy')) return;
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'code-copy';
    button.textContent = 'COPY';
    button.setAttribute('aria-label', '复制代码');
    button.addEventListener('click', async () => {
      const source = figure.querySelector<HTMLElement>('td.code pre, .code pre, pre');
      if (!source) return;
      try {
        await navigator.clipboard.writeText(source.innerText);
        button.textContent = 'COPIED';
      } catch {
        button.textContent = 'FAILED';
      }
      window.setTimeout(() => { button.textContent = 'COPY'; }, 1600);
    });
    figure.append(button);
  });
}

function initTabs() {
  document.querySelectorAll<HTMLElement>('.article-body .tabs').forEach((tabs) => {
    const buttons = [...tabs.querySelectorAll<HTMLButtonElement>('.nav-tabs [data-href]')];
    const panels = [...tabs.querySelectorAll<HTMLElement>('.tab-item-content')];
    if (!buttons.length || !panels.length) return;

    const activate = (button: HTMLButtonElement) => {
      const targetId = button.dataset.href?.replace(/^#/, '');
      buttons.forEach((item) => {
        const active = item === button;
        item.closest('.tab')?.classList.toggle('active', active);
        item.setAttribute('aria-selected', String(active));
        item.tabIndex = active ? 0 : -1;
      });
      panels.forEach((panel) => {
        const active = panel.id === targetId;
        panel.classList.toggle('active', active);
        panel.hidden = !active;
      });
    };

    const tabList = tabs.querySelector<HTMLElement>('.nav-tabs');
    tabList?.setAttribute('role', 'tablist');
    buttons.forEach((button, index) => {
      button.setAttribute('role', 'tab');
      button.addEventListener('click', () => activate(button));
      button.addEventListener('keydown', (event) => {
        if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
        event.preventDefault();
        const next = (index + (event.key === 'ArrowRight' ? 1 : -1) + buttons.length) % buttons.length;
        buttons[next]?.focus();
        if (buttons[next]) activate(buttons[next]);
      });
    });
    activate(buttons.find((button) => button.closest('.tab')?.classList.contains('active')) ?? buttons[0]!);
  });
}

function initImageViewer() {
  const viewer = document.querySelector<HTMLDialogElement>('[data-image-viewer]');
  const view = viewer?.querySelector<HTMLImageElement>('[data-image-view]');
  const caption = viewer?.querySelector<HTMLElement>('[data-image-caption]');
  if (!viewer || !view || !caption) return;

  document.querySelectorAll<HTMLImageElement>('.article-body img').forEach((image) => {
    if (image.closest('a') || image.classList.contains('no-lightbox')) return;
    image.tabIndex = 0;
    image.setAttribute('role', 'button');
    image.setAttribute('aria-label', image.alt ? `查看大图：${image.alt}` : '查看大图');
    const open = () => {
      view.src = image.currentSrc || image.src;
      view.alt = image.alt;
      caption.textContent = image.alt;
      viewer.showModal();
    };
    image.addEventListener('click', open);
    image.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        open();
      }
    });
  });

  viewer.querySelector<HTMLButtonElement>('[data-image-close]')?.addEventListener('click', () => viewer.close());
  viewer.addEventListener('click', (event) => {
    if (event.target === viewer) viewer.close();
  });
}

function initToc() {
  const links = [...document.querySelectorAll<HTMLAnchorElement>('.toc a')];
  if (!links.length || !('IntersectionObserver' in window)) return;
  const headings = links.map((link) => {
    try {
      return document.getElementById(decodeURIComponent(link.hash.slice(1)));
    } catch {
      return null;
    }
  }).filter((heading): heading is HTMLElement => Boolean(heading));

  const observer = new IntersectionObserver((entries) => {
    const visible = entries.find((entry) => entry.isIntersecting);
    if (!visible) return;
    links.forEach((link) => {
      const active = decodeURIComponent(link.hash.slice(1)) === visible.target.id;
      link.classList.toggle('is-active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }, { rootMargin: '-18% 0px -72% 0px' });
  headings.forEach((heading) => observer.observe(heading));
}

initTheme();
initNavigation();
initProgress();
initSectionPagination();
initReveal();
initMascot();
initSearch();
initCodeBlocks();
initTabs();
initImageViewer();
initToc();
