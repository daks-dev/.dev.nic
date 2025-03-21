import type { PageLoad } from './$types';

export const load: PageLoad = () => ({
  thumbnails: Object.values(
    import.meta.glob(
      '$lib/content/activity/certification-accreditation/*.(avif|gif|heic|heif|jpeg|jpg|png|tiff|webp)',
      {
        eager: true,
        query: { w: 288, meta: true },
        import: 'default'
      }
    )
  ) as ImageMetainfo[],
  sources: Object.values(
    import.meta.glob(
      '$lib/content/activity/certification-accreditation/*.(avif|gif|heic|heif|jpeg|jpg|png|tiff|webp)',
      {
        eager: true,
        query: { meta: true },
        import: 'default'
      }
    )
  ) as ImageMetainfo[]
});
