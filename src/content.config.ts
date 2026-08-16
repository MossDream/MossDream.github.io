import { defineCollection } from 'astro:content';
import type { Loader, LoaderContext } from 'astro/loaders';
import { z } from 'astro/zod';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const contentRoot = path.dirname(fileURLToPath(import.meta.url));

function decodeEntities(value: string): string {
  const named: Record<string, string> = {
    amp: '&',
    apos: "'",
    gt: '>',
    lt: '<',
    middot: '·',
    nbsp: ' ',
    quot: '"',
  };

  return value.replace(/&(#x[\da-f]+|#\d+|[a-z]+);/gi, (entity, code: string) => {
    if (code.startsWith('#x')) return String.fromCodePoint(Number.parseInt(code.slice(2), 16));
    if (code.startsWith('#')) return String.fromCodePoint(Number.parseInt(code.slice(1), 10));
    return named[code.toLowerCase()] ?? entity;
  });
}

function plainText(html: string): string {
  return decodeEntities(html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
}

function extractHeadings(html: string) {
  return [...html.matchAll(/<h([1-4])\b[^>]*\bid=(['"])(.*?)\2[^>]*>([\s\S]*?)<\/h\1>/gi)].map((match) => ({
    depth: Number(match[1]),
    id: decodeEntities(match[3] ?? ''),
    text: plainText(match[4] ?? ''),
  }));
}

function normalizeLegacyHtml(html: string): string {
  const ids = new Map<string, number>();
  return html
    .replace(/<pre><code>(\s*<figure class="highlight[\s\S]*?<\/figure>)\s*<\/code><\/pre>/gi, '$1')
    .replace(/<input\b(?![^>]*\bdisabled\b)/gi, '<input disabled')
    .replace(/<h1\b/gi, '<h2')
    .replace(/<\/h1>/gi, '</h2>')
    .replace(/\bid=(['"])(.*?)\1/gi, (attribute, quote: string, id: string) => {
      const occurrence = (ids.get(id) ?? 0) + 1;
      ids.set(id, occurrence);
      return occurrence === 1 ? attribute : `id=${quote}${id}-${occurrence}${quote}`;
    });
}

function parseSource(source: string, filePath: string): { metadata: Record<string, unknown>; body: string } {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)([\s\S]*)$/);
  if (!match) throw new Error(`${filePath} is missing its JSON frontmatter block.`);

  return {
    metadata: JSON.parse(match[1] ?? '{}') as Record<string, unknown>,
    body: (match[2] ?? '').replace(/^\r?\n/, '').trimEnd(),
  };
}

function markdownDirectory(directory: string, includeWordCount = false): Loader {
  const absoluteDirectory = path.join(contentRoot, directory);

  return {
    name: `mossdream-markdown:${directory}`,
    async load(context: LoaderContext) {
      const { store, logger, parseData, generateDigest, renderMarkdown, watcher } = context;

      const sync = async () => {
        store.clear();

        const files = (await fs.readdir(absoluteDirectory))
          .filter((file) => file.endsWith('.md'))
          .sort((left, right) => left.localeCompare(right));

        for (const file of files) {
          const filePath = path.join(absoluteDirectory, file);
          const storeFilePath = path.posix.join('src', directory.replaceAll('\\', '/'), file);
          const source = await fs.readFile(filePath, 'utf8');
          const { metadata, body } = parseSource(source, filePath);
          const rendered = await renderMarkdown(body, { fileURL: pathToFileURL(filePath) });
          const id = String(metadata.slug ?? path.basename(file, '.md'));
          const html = normalizeLegacyHtml(rendered.html);
          const raw = {
            ...metadata,
            html,
            headings: extractHeadings(html),
            ...(includeWordCount ? { wordCount: [...plainText(html).replace(/\s+/g, '')].length } : {}),
          };
          const data = await parseData({ id, data: raw, filePath });

          store.set({ id, data, body, rendered, digest: generateDigest(source), filePath: storeFilePath });
        }

        logger.info(`Loaded ${files.length} entries from ${directory}.`);
      };

      await sync();

      if (watcher) {
        watcher.add(absoluteDirectory);
        let queued = Promise.resolve();
        const refresh = (changedPath: string) => {
          if (path.dirname(path.resolve(changedPath)) !== path.resolve(absoluteDirectory) || !changedPath.endsWith('.md')) return;
          queued = queued.then(sync).catch((error: unknown) => logger.error(error instanceof Error ? error.message : String(error)));
        };
        watcher.on('add', refresh);
        watcher.on('change', refresh);
        watcher.on('unlink', refresh);
      }
    },
  };
}

const heading = z.object({
  depth: z.number().int().min(1).max(4),
  id: z.string(),
  text: z.string(),
});

const posts = defineCollection({
  loader: markdownDirectory('content/posts', true),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    description: z.string(),
    excerpt: z.string(),
    published: z.coerce.date(),
    updated: z.coerce.date(),
    tags: z.array(z.string()),
    categories: z.array(z.string()),
    headings: z.array(heading),
    wordCount: z.number().int().nonnegative(),
    html: z.string(),
  }),
});

const pages = defineCollection({
  loader: markdownDirectory('content/pages'),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    description: z.string(),
    headings: z.array(heading),
    html: z.string(),
  }),
});

export const collections = { posts, pages };
