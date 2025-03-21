import type { Thumbnails } from 'flowbite-svelte';
import type { PageLoad } from './$types';

export const load: PageLoad = () => ({
  dataset: Object.values(
    import.meta.glob(
      '$lib/content/activity/inspection/00/*.(avif|gif|heic|heif|jpeg|jpg|png|tiff|webp)',
      {
        eager: true,
        query: { w: 224, aspect: '3:4', meta: true },
        import: 'default'
      }
    )
  ) as ImageMetainfo[],
  thumbnails: Object.values(
    import.meta.glob(
      '$lib/content/activity/inspection/01/*.(avif|gif|heic|heif|jpeg|jpg|png|tiff|webp)',
      {
        eager: true,
        query: { w: 288, aspect: '16:9', meta: true },
        import: 'default'
      }
    )
  ) as ImageMetainfo[],
  sources: Object.values(
    import.meta.glob(
      '$lib/content/activity/inspection/01/*.(avif|gif|heic|heif|jpeg|jpg|png|tiff|webp)',
      {
        eager: true,
        query: { meta: true },
        import: 'default'
      }
    )
  ) as ImageMetainfo[]
});
