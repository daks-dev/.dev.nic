import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

import placeholder from '$lib/assets/images/cube.webp?w=288&aspect=16:9&fit=contain&meta';

interface Data extends MDLoadData {
  metadata: {
    title: string;
    description: string;
  };
}

const promises = {
  svx: import.meta.glob('$lib/content/news/**/index.svx'),
  images: import.meta.glob('$lib/content/news/**/*.(avif|gif|heic|heif|jpeg|jpg|png|tiff|webp)', {
    query: { w: 288, meta: true },
    import: 'default'
  })
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
      const images: ImageMetadata[] = [];
      for (const image of filter(promises.images, slug))
        images.push((await promises.images[image]()) as ImageMetadata);
      if (!images.length) images[0] = placeholder;
      return {
        slug,
        title,
        description,
        component,
        images
      };
    }
    throw error(404, 'Not found [data]');
  }
  throw error(404, 'Not found');
};
