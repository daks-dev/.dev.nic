import type { PageLoad } from './$types';

export const load: PageLoad = async () => ({
  sources: await Promise.all(
    Object.values(
      import.meta.glob('$lib/content/feedback/*.(avif|gif|heic|heif|jpeg|jpg|png|tiff|webp)', {
        query: { meta: true },
        import: 'default'
      })
    ).map(async (x) => (await x()) as ImageMetainfo)
  ),
  modifieds: await Promise.all(
    Object.values(
      import.meta.glob('$lib/content/feedback/*.(avif|gif|heic|heif|jpeg|jpg|png|tiff|webp)', {
        query: { w: 320, aspect: '620:877', meta: true },
        import: 'default'
      })
    ).map(async (x) => (await x()) as ImageMetainfo)
  )
});
