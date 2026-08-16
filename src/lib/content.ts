import { getCollection, type CollectionEntry } from 'astro:content';

export type PostEntry = CollectionEntry<'posts'>;
export type PageEntry = CollectionEntry<'pages'>;

export async function getPosts(): Promise<PostEntry[]> {
  const posts = await getCollection('posts');
  return posts.sort((a, b) => b.data.published.getTime() - a.data.published.getTime());
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date).replaceAll('/', '.');
}

export function formatMonth(date: Date): string {
  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: 'long',
  }).format(date);
}

export function readingMinutes(post: PostEntry): number {
  return Math.max(1, Math.ceil(post.data.wordCount / 420));
}

export function postHref(post: PostEntry): string {
  return `/${post.data.slug}/`;
}

export function taxonomySegment(value: string): string {
  return value.trim().replace(/[\s_]+/g, '-');
}

export function tagHref(tag: string): string {
  return `/tags/${encodeURIComponent(taxonomySegment(tag))}/`;
}

export function categoryHref(categories: string[]): string {
  return `/categories/${categories.map((category) => encodeURIComponent(taxonomySegment(category))).join('/')}/`;
}

export function uniqueTags(posts: PostEntry[]): Array<{ name: string; count: number }> {
  const counts = new Map<string, number>();
  for (const post of posts) {
    for (const tag of post.data.tags) counts.set(tag, (counts.get(tag) ?? 0) + 1);
  }
  return [...counts].map(([name, count]) => ({ name, count })).sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

export function uniqueCategories(posts: PostEntry[]): Array<{ path: string[]; name: string; count: number }> {
  const counts = new Map<string, { path: string[]; count: number }>();
  for (const post of posts) {
    post.data.categories.forEach((_, index) => {
      const categoryPath = post.data.categories.slice(0, index + 1);
      const key = categoryPath.join('/');
      counts.set(key, { path: categoryPath, count: (counts.get(key)?.count ?? 0) + 1 });
    });
  }
  return [...counts.values()]
    .map((item) => ({ ...item, name: item.path.at(-1) ?? '' }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

export function plainText(html: string): string {
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}
