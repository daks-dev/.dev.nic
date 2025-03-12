// A4 dpi 75 : 620 × 877 px

export const sources = async () => [
  (await import('./00.png?meta')).default,
  (await import('./01.png?meta')).default,
  (await import('./02.png?meta')).default,
  (await import('./03.png?meta')).default,
  (await import('./04.png?meta')).default,
  (await import('./05.png?meta')).default,
  (await import('./06.png?meta')).default,
  (await import('./07.png?meta')).default
];
export const a4 = async () => [
  (await import('./00.png?w=224&h=320&meta')).default,
  (await import('./01.png?w=224&h=320&meta')).default,
  (await import('./02.png?w=224&h=320&meta')).default,
  (await import('./03.png?w=224&h=320&meta')).default,
  (await import('./04.png?w=224&h=320&meta')).default,
  (await import('./05.png?w=224&h=320&meta')).default,
  (await import('./06.png?w=224&meta')).default,
  (await import('./07.png?w=224&meta')).default
];

export default async () => ({
  sources: await sources(),
  thumbnails: await a4()
});
