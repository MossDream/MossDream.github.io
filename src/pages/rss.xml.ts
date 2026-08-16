import type { APIRoute } from 'astro';
import { getPosts, postHref } from '../lib/content';

export const prerender = true;

const escapeXml = (value: string) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&apos;');

export const GET: APIRoute = async ({ site }) => {
  const posts = await getPosts();
  const origin = site ?? new URL('https://mossdream.github.io');
  const items = posts.map((post) => `
    <item>
      <title>${escapeXml(post.data.title)}</title>
      <link>${new URL(postHref(post), origin).href}</link>
      <guid isPermaLink="true">${new URL(postHref(post), origin).href}</guid>
      <description>${escapeXml(post.data.description)}</description>
      <pubDate>${post.data.published.toUTCString()}</pubDate>
    </item>`).join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>MossDream&apos;s Blog</title>
    <link>${new URL('/', origin).href}</link>
    <description>MossDream 的计算机科学学习笔记与个人档案。</description>
    <language>zh-CN</language>${items}
  </channel>
</rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
