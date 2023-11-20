export const sources = async () => [
  (await import('./00.jpg?meta')).default,
  (await import('./01.jpg?meta')).default,
  (await import('./02.jpg?meta')).default,
  (await import('./03.jpg?meta')).default,
  (await import('./04.jpg?meta')).default,
  (await import('./05.jpg?meta')).default,
  (await import('./06.jpg?meta')).default,
  (await import('./07.jpg?meta')).default,
  (await import('./08.jpg?meta')).default,
  (await import('./09.jpg?meta')).default,
  (await import('./10.jpg?meta')).default,
  (await import('./11.jpg?meta')).default,
  (await import('./12.jpg?meta')).default,
  (await import('./13.jpg?meta')).default,
  (await import('./14.jpg?meta')).default,
  (await import('./15.jpg?meta')).default,
  (await import('./16.jpg?meta')).default,
  (await import('./17.jpg?meta')).default,
  (await import('./18.jpg?meta')).default
];

export const screens = async () => [
  (await import('./00.jpg?w=320&h=180&meta')).default,
  (await import('./01.jpg?w=320&h=180&meta')).default,
  (await import('./02.jpg?w=320&h=180&meta')).default,
  (await import('./03.jpg?w=320&h=180&meta')).default,
  (await import('./04.jpg?w=320&h=180&meta')).default,
  (await import('./05.jpg?w=320&h=180&meta')).default,
  (await import('./06.jpg?w=320&h=180&meta')).default,
  (await import('./07.jpg?w=320&h=180&meta')).default,
  (await import('./08.jpg?w=320&h=180&meta')).default,
  (await import('./09.jpg?w=320&h=180&meta')).default,
  (await import('./10.jpg?w=320&h=180&meta')).default,
  (await import('./11.jpg?w=320&h=180&meta')).default,
  (await import('./12.jpg?w=320&h=180&meta')).default,
  (await import('./13.jpg?w=320&h=180&meta')).default,
  (await import('./14.jpg?w=320&h=180&meta')).default,
  (await import('./15.jpg?w=320&h=180&meta')).default,
  (await import('./16.jpg?w=320&h=180&meta')).default,
  (await import('./17.jpg?w=320&h=180&meta')).default,
  (await import('./18.jpg?w=320&h=180&meta')).default
];

export const squares = async () => [
  (await import('./00.jpg?w=320&h=320&meta')).default,
  (await import('./01.jpg?w=320&h=320&meta')).default,
  (await import('./02.jpg?w=320&h=320&meta')).default,
  (await import('./03.jpg?w=320&h=320&meta')).default,
  (await import('./04.jpg?w=320&h=320&meta')).default,
  (await import('./05.jpg?w=320&h=320&meta')).default,
  (await import('./06.jpg?w=320&h=320&meta')).default,
  (await import('./07.jpg?w=320&h=320&meta')).default,
  (await import('./08.jpg?w=320&h=320&meta')).default,
  (await import('./09.jpg?w=320&h=320&meta')).default,
  (await import('./10.jpg?w=320&h=320&meta')).default,
  (await import('./11.jpg?w=320&h=320&meta')).default,
  (await import('./12.jpg?w=320&h=320&meta')).default,
  (await import('./13.jpg?w=320&h=320&meta')).default,
  (await import('./14.jpg?w=320&h=320&meta')).default,
  (await import('./15.jpg?w=320&h=320&meta')).default,
  (await import('./16.jpg?w=320&h=320&meta')).default,
  (await import('./17.jpg?w=320&h=320&meta')).default,
  (await import('./18.jpg?w=320&h=320&meta')).default
];

export default async () => ({
  sources: await sources(),
  thumbnails: await squares()
});
