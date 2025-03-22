import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

interface Data extends MDLoadData {
  metadata: {
    title: string;
    description: string;
  };
}

const promises = {
  svx: import.meta.glob('$lib/content/news/**/index.svx'),
  sources: import.meta.glob('$lib/content/news/**/*.(avif|gif|heic|heif|jpeg|jpg|png|tiff|webp)', {
    query: { meta: true },
    import: 'default'
  }),
  thumbnails: import.meta.glob(
    '$lib/content/news/**/*.(avif|gif|heic|heif|jpeg|jpg|png|tiff|webp)',
    {
      query: { w: 288, meta: true },
      import: 'default'
    }
  )
};

const filter = (obj: Record<string, unknown>, dir: string | undefined) =>
  Object.keys(obj).filter((x) => x.split('/').at(-2) === dir);

export const load: PageLoad = async ({ params }) => {
  if (/^\d{2}-\d{2}-\d{2}$/.test(params.slug)) {
    const { slug } = params;
    const path = filter(promises.svx, slug)[0];
    if (path) {
      const promise = promises.svx[path]() as Promise<Data>;
      const {
        metadata: { title, description },
        default: component
      } = await promise;
      const sources: ImageMetainfo[] = [];
      for (const key of filter(promises.sources, slug)) {
        sources.push((await promises.sources[key]()) as ImageMetainfo);
      }
      const thumbnails: ImageMetainfo[] = [];
      for (const key of filter(promises.thumbnails, slug)) {
        thumbnails.push((await promises.thumbnails[key]()) as ImageMetainfo);
      }
      return {
        slug,
        title,
        description,
        component,
        sources,
        thumbnails
      };
    }
    throw error(404, 'Not found [data]');
  }
  throw error(404, 'Not found');
};
