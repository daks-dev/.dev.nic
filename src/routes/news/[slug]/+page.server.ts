import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => ({
  images: import.meta.glob('$lib/content/news/**/*.(avif|gif|heic|heif|jpeg|jpg|png|tiff|webp)', {
    eager: true,
    query: { w: 288, meta: true },
    import: 'default'
  })
});
