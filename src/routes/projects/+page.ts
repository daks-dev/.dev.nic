import type { PageLoad } from './$types';

export const load: PageLoad = async () => ({
  thumbnails: await Promise.all(
    Object.values(
      import.meta.glob('$lib/assets/images/gallery/*.(avif|gif|heic|heif|jpeg|jpg|png|tiff|webp)', {
        query: { w: 320, h: 320, fit: 'cover', meta: true },
        import: 'default'
      })
    ).map(async (x) => (await x()) as ImageMetainfo)
  ),
  sources: await Promise.all(
    Object.values(
      import.meta.glob('$lib/assets/images/gallery/*.(avif|gif|heic|heif|jpeg|jpg|png|tiff|webp)', {
        query: { meta: true },
        import: 'default'
      })
    ).map(async (x) => (await x()) as ImageMetainfo)
  )
});
