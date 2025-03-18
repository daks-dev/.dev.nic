import { map } from '$lib/configs/nav';
map.includes('/') || map.unshift('/');

const PRIORITY = [0.7, 0.5, 0.3];
const CHANGEFREG = 'weekly'; // daily weekly monthly
const TIMESTAMP = new Date().toISOString();

const canonical = process.env.PUBLIC_APP_CANONICAL
  ? new URL(process.env.PUBLIC_APP_CANONICAL).origin
  : '';

const news = Object.keys(import.meta.glob('$lib/content/news/**/index.md')).map(
  (x) => `/news/${x.split('/').at(-2)}`
);

const urlset =
  canonical &&
  map
    .concat(news)
    .sort()
    .map(
      (x) =>
        `
  <url>
    <loc>${canonical}${x === '/' ? '' : x}</loc>
    <lastmod>${`${TIMESTAMP}`}</lastmod>
    <changefreq>${CHANGEFREG}</changefreq>
    <priority>${x === '/' ? '1.0' : PRIORITY[x.split('/').length - 2]}</priority>
  </url>`
    )
    .join('');

export const prerender = true;

export async function GET() {
  return new Response(
    `
<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>${urlset}
</urlset>
    `
      .trim()
      .replace(/\n/g, '')
      .replace(/\s{2,}/g, ' ')
      .replace(/> </g, '><'),
    {
      headers: {
        'Content-Type': 'application/xml'
      }
    }
  );
}
