import { error } from '@sveltejs/kit';
// import { render } from 'svelte/server';
import type { PageLoad } from './$types';

interface DataLoad extends MdsvexLoad {
  metadata: {
    title: string;
    description: string;
    published: string | Date;
  };
}

const promises = {
  mds: import.meta.glob('$lib/content/articles/**/index.(svx|svelte\.md)'),
  sources: import.meta.glob(
    '$lib/content/articles/**/*.(avif|gif|heic|heif|jpeg|jpg|png|tiff|webp)',
    {
      query: { meta: true },
      import: 'default'
    }
  ),
  modifieds: import.meta.glob(
    '$lib/content/articles/**/*.(avif|gif|heic|heif|jpeg|jpg|png|tiff|webp)',
    {
      query: { w: 288, meta: true },
      import: 'default'
    }
  )
};

const filter = (obj: Record<string, unknown>, dir: string | undefined) =>
  Object.keys(obj).filter((x) => x.split('/').at(-2) === dir);

export const load: PageLoad = async ({ params }) => {
  if (/^[a-z0-9\-]+$/.test(params.slug)) {
    const { slug } = params;
    const path = filter(promises.mds, slug)[0];
    if (path) {
      const promise = promises.mds[path]() as Promise<DataLoad>;
      const {
        metadata: { title, description, published },
        default: Component
      } = await promise;
      // const { body: content } = render(Component);
      const sources: ImageMetainfo[] = [];
      for (const key of filter(promises.sources, slug)) {
        sources.push((await promises.sources[key]()) as ImageMetainfo);
      }
      const modifieds: ImageMetainfo[] = [];
      for (const key of filter(promises.modifieds, slug)) {
        modifieds.push((await promises.modifieds[key]()) as ImageMetainfo);
      }
      return {
        title,
        description,
        published,
        Component,
        // content,
        sources,
        modifieds
      };
    }
    throw error(404, 'Not found [data]');
  }
  throw error(404, 'Not found');
};
