import type { APIRoute } from 'astro';
import { categoryHref, getPosts, postHref, tagHref, uniqueCategories, uniqueTags } from '../lib/content';

export const prerender = true;

const escapeXml = (value: string) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

export const GET: APIRoute = async ({ site }) => {
  const posts = await getPosts();
  const origin = site ?? new URL('https://mossdream.github.io');
  const paths = new Set<string>(['/', '/archives/', '/tags/', '/categories/', '/about/', '/log/']);

  posts.forEach((post) => paths.add(postHref(post)));
  uniqueTags(posts).forEach((tag) => paths.add(tagHref(tag.name)));
  uniqueCategories(posts).forEach((category) => paths.add(categoryHref(category.path)));

  const years = [...new Set(posts.map((post) => post.data.published.getFullYear()))];
  for (const year of years) {
    paths.add(`/archives/${year}/`);
    const yearPosts = posts.filter((post) => post.data.published.getFullYear() === year);
    for (const month of new Set(yearPosts.map((post) => post.data.published.getMonth() + 1))) {
      paths.add(`/archives/${year}/${String(month).padStart(2, '0')}/`);
    }
  }

  const body = [...paths].sort().map((path) => `  <url><loc>${escapeXml(new URL(path, origin).href)}</loc></url>`).join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
