import type { APIRoute } from 'astro';
import { formatDate, getPosts, plainText } from '../lib/content';

export const prerender = true;

export const GET: APIRoute = async () => {
  const posts = await getPosts();
  const records = posts.map((post) => ({
    slug: post.data.slug,
    title: post.data.title,
    description: post.data.description,
    date: formatDate(post.data.published),
    tags: post.data.tags,
    categories: post.data.categories,
    text: plainText(post.data.html).slice(0, 5000),
  }));

  return new Response(JSON.stringify(records), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, immutable',
      'X-Content-Type-Options': 'nosniff',
    },
  });
};
