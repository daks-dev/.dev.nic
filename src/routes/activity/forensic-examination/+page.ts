import type { PageLoad } from './$types';

export const load: PageLoad = async () => ({
  thumbnail: (await import('$lib/content/activity/forensic-examination/00.jpg?w=400&meta'))
    .default as ImageMetainfo,
  source: (await import('$lib/content/activity/forensic-examination/00.jpg?meta'))
    .default as ImageMetainfo
});
