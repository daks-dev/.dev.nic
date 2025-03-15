import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

import placeholder from '$lib/assets/images/cube.webp?w=288&meta';

type MDData = {
  metadata: {
    title: string;
    description: string;
  };
  default: MDComponent;
};

const filter = (obj: Record<string, unknown>, dir: string | undefined) =>
  Object.keys(obj).filter((x) => x.split('/').at(-2) === dir);

export const load: PageLoad = async ({ params, data }) => {
  const { slug } = params;
  if (/^\d{2}-\d{2}-\d{2}$/.test(slug)) {
    const mds = import.meta.glob('$lib/content/news/**/index.md', {
      eager: true
    });
    const md = filter(mds, slug)[0];
    if (md) {
      const {
        metadata: { title, description },
        default: content
      } = mds[md] as MDData;

      const images: ImageMetadata[] = [];
      for (const image of filter(data.images, slug))
        images.push(data.images[image] as ImageMetadata);
      if (!images.length) images[0] = placeholder;

      return {
        slug,
        title,
        description,
        content,
        images
      };
    }
    throw error(404, `Not found [${slug}]`);
  }
  throw error(404, 'Not found');
};
