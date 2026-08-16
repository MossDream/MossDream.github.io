import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = fileURLToPath(new URL('../', import.meta.url));
const distRoot = path.join(projectRoot, 'dist');
const contentRoot = path.join(projectRoot, 'src', 'content', 'posts');
const errors = [];
const contentFiles = (await fs.readdir(contentRoot)).filter((file) => file.endsWith('.md'));
const expectedPostCount = contentFiles.length;

const requiredRoutes = [
  '/',
  '/archives/',
  '/archives/2023/',
  '/archives/2023/09/',
  '/archives/2023/10/',
  '/archives/2023/11/',
  '/tags/',
  '/tags/BUAA/',
  '/tags/C/',
  '/tags/CO/',
  '/tags/Data-Structure/',
  '/tags/Java/',
  '/tags/OOP/',
  '/categories/',
  '/categories/BUAA计算机课程/',
  '/categories/BUAA计算机课程/C-and-DS/',
  '/categories/BUAA计算机课程/CO/',
  '/categories/BUAA计算机课程/OOPre/',
  '/about/',
  '/log/',
  '/404.html',
  '/oopre1/',
  '/oopre2/',
  '/oopre3/',
  '/oopre4/',
  '/oopre6/',
  '/oopre7/',
  '/oopre8/',
  '/co1/',
  '/co2/',
  '/co3/',
  '/co4/',
  '/co5/',
  '/C-and-DS/',
  '/rss.xml',
  '/search-index.json',
  '/sitemap.xml',
  '/robots.txt',
  '/favicon.svg',
  '/theme-init.js',
  '/.nojekyll',
  '/google992839ef8d853034.html',
  '/baidu_verify_codeva-CZYWjPUNts.html',
  '/baidu_verify_codeva-MFdUS8tVLL.html',
  '/baidu_verify_codeva-d7GRg1y8fg.html',
];

function report(condition, message) {
  if (!condition) errors.push(message);
}

async function exists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

function safeDecode(value) {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function routeToFile(route) {
  const pathname = safeDecode(route.split(/[?#]/, 1)[0] || '/');
  const relative = pathname.replace(/^\/+/, '');
  if (!relative) return path.join(distRoot, 'index.html');
  if (pathname.endsWith('/')) return path.join(distRoot, relative, 'index.html');
  if (path.extname(relative) || path.basename(relative).startsWith('.')) return path.join(distRoot, relative);
  return path.join(distRoot, relative, 'index.html');
}

async function walk(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const resolved = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(resolved));
    else files.push(resolved);
  }
  return files;
}

report(await exists(distRoot), 'dist/ is missing; run npm run build first.');

if (await exists(distRoot)) {
  for (const route of requiredRoutes) {
    report(await exists(routeToFile(route)), `Missing required route or asset: ${route}`);
  }
  for (const obsoleteRoute of ['/link/', '/page/2/', '/archives/page/2/', '/archives/2023/page/2/', '/tags/BUAA/page/2/', '/categories/BUAA计算机课程/page/2/']) {
    report(!(await exists(routeToFile(obsoleteRoute))), `Obsolete standalone pagination route should not be generated: ${obsoleteRoute}`);
  }

  const allFiles = await walk(distRoot);
  const htmlFiles = allFiles.filter((file) => file.endsWith('.html'));
  const generatedPages = htmlFiles.filter((file) => !/\b(?:google992839ef8d853034|baidu_verify_codeva-)\b/.test(path.basename(file)));
  const pageDocuments = new Map();
  const titles = new Map();
  const canonicals = new Map();

  for (const file of generatedPages) {
    const html = await fs.readFile(file, 'utf8');
    pageDocuments.set(file, html);
    const relative = path.relative(distRoot, file).replaceAll('\\', '/');
    const title = html.match(/<title>([\s\S]*?)<\/title>/i)?.[1];
    const canonical = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i)?.[1]
      ?? html.match(/<link\s+href="([^"]+)"\s+rel="canonical"/i)?.[1];

    report(html.includes('<html lang="zh-CN"'), `${relative} is missing lang=zh-CN.`);
    report(html.includes('class="skip-link"'), `${relative} is missing the skip link.`);
    report(html.includes('<main id="main-content"'), `${relative} is missing the main landmark.`);
    report(/Content-Security-Policy[^>]+sha256-/i.test(html), `${relative} is missing the hashed CSP.`);
    report(Boolean(title), `${relative} is missing a title.`);
    report(Boolean(canonical), `${relative} is missing a canonical URL.`);

    const ids = [...html.matchAll(/\bid=(['"])(.*?)\1/gi)].map((match) => match[2]);
    const duplicateIds = [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))];
    report(duplicateIds.length === 0, `${relative} contains duplicate IDs: ${duplicateIds.join(', ')}`);
    report((html.match(/<h1\b/gi) ?? []).length === 1, `${relative} should contain exactly one h1.`);
    report(!/<pre>\s*<code>\s*<figure\b/i.test(html), `${relative} contains invalid nested pre/code/figure markup.`);
    report(!/(?:01|02|03)\s*\/\s*(?:ARCHIVE|ABOUT|LOG|TAG|TAGS|TRACK|TRACKS|ELSEWHERE)/i.test(html), `${relative} restores a removed section number.`);
    for (const input of html.matchAll(/<input\b[^>]*>/gi)) {
      report(/\bdisabled(?:\s|=|>)/i.test(input[0]) || /\bdata-search-input\b/i.test(input[0]), `${relative} contains a focusable decorative input.`);
    }

    if (title) {
      const previous = titles.get(title);
      report(!previous, `Duplicate title in ${previous} and ${relative}: ${title}`);
      titles.set(title, relative);
    }
    if (canonical && !html.includes('name="robots" content="noindex')) {
      const previous = canonicals.get(canonical);
      report(!previous, `Duplicate canonical in ${previous} and ${relative}: ${canonical}`);
      canonicals.set(canonical, relative);
    }
  }

  for (const [file, html] of pageDocuments) {
    const relative = path.relative(distRoot, file).replaceAll('\\', '/');
    const pageRoute = relative.endsWith('index.html')
      ? `/${relative.slice(0, -'index.html'.length)}`
      : `/${relative}`;
    const routeDirectory = pageRoute.endsWith('/') ? pageRoute : `${path.posix.dirname(pageRoute)}/`;
    for (const match of html.matchAll(/\b(?:href|src)=(['"])(.*?)\1/gi)) {
      const reference = match[2] ?? '';
      if (!reference || /^(?:[a-z]+:|\/\/|data:)/i.test(reference)) continue;

      const resolved = new URL(reference, `https://local.test${routeDirectory.endsWith('/') ? routeDirectory : `${routeDirectory}/`}`);
      const targetFile = routeToFile(resolved.pathname);
      report(await exists(targetFile), `${relative} links to missing local target ${reference}`);

      if (await exists(targetFile) && resolved.hash && resolved.hash !== '#') {
        const target = targetFile === file ? html : await fs.readFile(targetFile, 'utf8');
        const fragment = safeDecode(resolved.hash.slice(1));
        const hasFragment = target.includes(`id="${fragment}"`) || target.includes(`id='${fragment}'`);
        report(hasFragment, `${relative} links to missing fragment ${reference}`);
      }
    }
  }

  const homeFile = path.join(distRoot, 'index.html');
  const homeHtml = pageDocuments.get(homeFile) ?? await fs.readFile(homeFile, 'utf8');
  const expectedHomePanels = Math.max(1, Math.ceil(Math.max(0, expectedPostCount - 3) / 5));
  report((homeHtml.match(/data-section-page=/g) ?? []).length === expectedHomePanels, `Home article index should contain ${expectedHomePanels} in-place panels.`);
  report(homeHtml.includes('data-section-pagination-controls'), 'Home article index is missing in-place pagination controls.');
  report(!homeHtml.includes('href="/page/2/"'), 'Home article index still links to the obsolete standalone second page.');
  report(!homeHtml.includes('section-heading__index') && !homeHtml.includes('hero__serial'), 'Home section numbering should not return.');
  report(!homeHtml.includes('03 / ELSEWHERE'), 'Home footer should not use a section number.');
  report(homeHtml.includes('继续阅读，') && homeHtml.includes('也保持联系。'), 'Home footer should keep its Chinese-first statement.');
  report(homeHtml.includes('href="/log/"'), 'The changelog route should be reachable from the site footer.');

  const archivesHtml = pageDocuments.get(path.join(distRoot, 'archives', 'index.html')) ?? '';
  report(archivesHtml.includes('href="/archives/2023/"'), 'The yearly archive should be reachable from the archive index.');
  for (const month of ['09', '10', '11']) {
    report(archivesHtml.includes(`href="/archives/2023/${month}/"`), `The 2023.${month} archive should be reachable from the archive index.`);
  }

  const aboutHtml = pageDocuments.get(path.join(distRoot, 'about', 'index.html')) ?? '';
  report(aboutHtml.includes('id="elsewhere"') && aboutHtml.includes('href="/rss.xml"'), 'About should contain the integrated contact and index directory.');

  for (const [file, html] of pageDocuments) {
    if (file === homeFile) {
      report((html.match(/site-footer__inner/g) ?? []).length === 1, 'Home should contain one full footer.');
      report(!html.includes('site-footer__compact'), 'Home should not contain the compact inner-page footer.');
      continue;
    }
    const relative = path.relative(distRoot, file).replaceAll('\\', '/');
    report(!html.includes('site-footer__inner'), `${relative} should not repeat the full ELSEWHERE footer.`);
    report(html.includes('site-footer__compact'), `${relative} is missing the compact inner-page footer.`);
  }

  const searchIndex = JSON.parse(await fs.readFile(path.join(distRoot, 'search-index.json'), 'utf8'));
  report(Array.isArray(searchIndex) && searchIndex.length === expectedPostCount, `Search index should contain ${expectedPostCount} posts, found ${searchIndex.length}.`);
  report(new Set(searchIndex.map((entry) => entry.slug)).size === expectedPostCount, 'Search index contains duplicate post slugs.');

  const sitemap = await fs.readFile(path.join(distRoot, 'sitemap.xml'), 'utf8');
  for (const route of requiredRoutes.filter((route) => route.endsWith('/') && !route.includes('/page/'))) {
    report(sitemap.includes(new URL(route, 'https://mossdream.github.io').href), `Sitemap is missing ${route}`);
  }

  const sitemapLocations = new Set([...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]));
  for (const location of sitemapLocations) {
    const url = new URL(location);
    report(await exists(routeToFile(url.pathname)), `Sitemap links to a route that was not generated: ${url.pathname}`);
  }
  for (const [file, html] of pageDocuments) {
    if (html.includes('name="robots" content="noindex')) continue;
    const canonical = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i)?.[1]
      ?? html.match(/<link\s+href="([^"]+)"\s+rel="canonical"/i)?.[1];
    const relative = path.relative(distRoot, file).replaceAll('\\', '/');
    report(Boolean(canonical && sitemapLocations.has(canonical)), `Sitemap is missing indexable page ${relative}.`);
  }

  const rss = await fs.readFile(path.join(distRoot, 'rss.xml'), 'utf8');
  report((rss.match(/<item>/g) ?? []).length === expectedPostCount, `RSS should contain all ${expectedPostCount} posts.`);

  const textFiles = allFiles.filter((file) => /\.(?:html|css|js|json|xml|txt|svg)$/i.test(file));
  const forbidden = /css-doodle|Arrow\.cur|fireworks(?:\.min)?\.js|fluttering_ribbon|canvas_nest|POWERMODE|click-show-text|jquery@latest|hexo-butterfly-wowjs|font-awesome-animation|\/img\/(?:17|18)\.jpg|js\/custom\.js/i;
  for (const file of textFiles) {
    const value = await fs.readFile(file, 'utf8');
    report(!forbidden.test(value), `Legacy effect reference remains in ${path.relative(distRoot, file)}.`);
  }
}

const migratedFiles = ['oopre1.md', 'oopre2.md', 'oopre3.md', 'oopre4.md', 'oopre6.md', 'oopre7.md', 'oopre8.md', 'co1.md', 'co2.md', 'co3.md', 'co4.md', 'co5.md', 'C-and-DS.md'];
for (const file of migratedFiles) report(contentFiles.includes(file), `Migrated article source is missing: ${file}`);
const contentEntries = await Promise.all(contentFiles.map(async (file) => [file, await fs.readFile(path.join(contentRoot, file), 'utf8')]));
const content = contentEntries.map(([, value]) => value).join('\n');
const migratedContent = contentEntries.filter(([file]) => migratedFiles.includes(file)).map(([, value]) => value).join('\n');
const componentBaselines = [
  ['code blocks', /<figure class="highlight/g, 69],
  ['tables', /<table/g, 92],
  ['note blocks', /class="note(?:\s[^\"]*)?"/g, 55],
  ['tip blocks', /class="tip(?:\s[^\"]*)?"/g, 17],
  ['tab groups', /class="tabs"/g, 10],
  ['details blocks', /<details/g, 19],
  ['content inputs', /<input/g, 111],
];
for (const [label, pattern, expected] of componentBaselines) {
  const count = (migratedContent.match(pattern) ?? []).length;
  report(count >= expected, `Migrated article ${label} baseline fell below ${expected}; found ${count}.`);
}

for (const [file, value] of contentEntries) {
  const frontmatter = value.match(/^---\s*\r?\n([\s\S]*?)\r?\n---/)?.[1];
  if (!frontmatter) {
    report(false, `${file} is missing JSON frontmatter.`);
    continue;
  }
  try {
    const metadata = JSON.parse(frontmatter);
    report(new Date(metadata.updated).getTime() >= new Date(metadata.published).getTime(), `${file} has updated earlier than published.`);
  } catch {
    report(false, `${file} has invalid JSON frontmatter.`);
  }
}

const unsafeContent = /<script\b|<iframe\b|<object\b|<embed\b|\son[a-z]+\s*=|javascript:/i;
report(!unsafeContent.test(content), 'Unsafe executable markup remains in article content.');

const cat = await fs.readFile(path.join(projectRoot, 'src', 'assets', 'moss-cat.png'));
report(cat.subarray(1, 4).toString() === 'PNG', 'Mascot asset is not a PNG.');
report([4, 6].includes(cat[25]), `Mascot PNG must contain an alpha channel; color type is ${cat[25]}.`);

if (errors.length) {
  console.error(`Build verification failed with ${errors.length} issue(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log(`Build verification passed: ${requiredRoutes.length} routes/assets, ${expectedPostCount} posts, ${componentBaselines.length} migrated rich-content baselines.`);
}
