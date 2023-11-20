import type { PageLoad } from './$types';

export const load = (async () => ({
  thumbnail: (await import('$lib/content/contacts/0.webp?w=320&meta')).default,
  sources: [
    (await import('$lib/content/contacts/0.webp?meta')).default,
    (await import('$lib/content/contacts/1.webp?meta')).default
  ]
})) satisfies PageLoad;
