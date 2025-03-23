import type { PageLoad } from './$types';

export const load: PageLoad = async () => ({
  gallery: await Promise.all(
    Object.values(
      import.meta.glob('$lib/assets/images/gallery/*.(avif|gif|heic|heif|jpeg|jpg|png|tiff|webp)', {
        query: {
          w: 224,
          aspect: '16:9',
          meta: true
        },
        import: 'default'
      })
    ).map(async (x) => (await x()) as ImageMetainfo)
  ),
  customers: await Promise.all(
    Object.values(
      import.meta.glob('$lib/content/customers/*.(avif|gif|heic|heif|jpeg|jpg|png|tiff|webp)', {
        query: {
          aspect: '224:192',
          fit: 'contain',
          flatten: true,
          background: '#fff',
          meta: true
        },
        import: 'default'
      })
    ).map(async (x) => (await x()) as ImageMetainfo)
  ),
  partners: await Promise.all(
    Object.values(
      import.meta.glob('$lib/content/partners/*.(avif|gif|heic|heif|jpeg|jpg|png|tiff|webp)', {
        query: {
          w: 224,
          aspect: '480:250',
          meta: true
        },
        import: 'default'
      })
    ).map(async (x) => (await x()) as ImageMetainfo)
  )
});
