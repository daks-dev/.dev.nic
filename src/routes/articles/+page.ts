import type { PageLoad } from './$types';

import placeholder from '$lib/assets/images/cube.webp?w=288&aspect=16:9&fit=contain&meta';

type Data = {
  metadata: {
    title: string;
    description: string;
    published: string | Date;
    poster?: false | number;
  };
};

const promises = {
  mds: import.meta.glob('$lib/content/articles/**/index.(svx|mdx|md)'),
  images: import.meta.glob(
    '$lib/content/articles/**/*.(avif|gif|heic|heif|jpeg|jpg|png|tiff|webp)',
    {
      query: { w: 288, aspect: '16:9', meta: true },
      import: 'default'
    }
  )
};

const filter = (obj: Record<string, unknown>, dir: string | undefined) =>
  Object.keys(obj).filter((x) => x.split('/').at(-2) === dir);

export const load: PageLoad = async () => {
  const items = await Promise.all(
    Object.keys(promises.mds)
      .sort((x, y) => (x > y ? -1 : 1))
      .map(async (path) => {
        const slug = path.split('/').at(-2);
        const images: ImageMetadata[] = [];
        for (const image of filter(promises.images, slug))
          images.push((await promises.images[image]()) as ImageMetadata);
        const {
          metadata: { title, description, published, poster = images.length ? 0 : false }
        } = (await promises.mds[path]()) as Data;
        return {
          slug,
          title,
          description,
          published,
          poster,
          images
        };
      })
  );
  return { items };
};
