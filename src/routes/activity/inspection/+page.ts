import type { PageLoad } from './$types';

export const load: PageLoad = () => ({
  images: [
    Object.values(
      import.meta.glob(
        '$lib/content/activity/inspection/00/*.(avif|gif|heic|heif|jpeg|jpg|png|tiff|webp)',
        {
          eager: true,
          query: { w: 224, aspect: '3:4', fit: 'cover', meta: true },
          import: 'default'
        }
      )
    ) as ImageMetainfo[],
    Object.values(
      import.meta.glob(
        '$lib/content/activity/inspection/01/*.(avif|gif|heic|heif|jpeg|jpg|png|tiff|webp)',
        {
          eager: true,
          query: { w: 288, aspect: '16:9', fit: 'cover', meta: true },
          import: 'default'
        }
      )
    ) as ImageMetainfo[]
  ]
});
