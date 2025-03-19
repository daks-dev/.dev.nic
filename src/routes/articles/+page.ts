import type { PageLoad } from './$types';

import placeholder from '$lib/assets/images/cube.webp?w=288&aspect=16:9&fit=contain&meta';

type Data = {
  metadata: {
    title: string;
    description: string;
    published: string | Date;
  };
};

const promises = {
  svx: import.meta.glob('$lib/content/articles/**/index.svx'),
  images: import.meta.glob(
    '$lib/content/articles/**/*.(avif|gif|heic|heif|jpeg|jpg|png|tiff|webp)',
    {
      query: { w: 288, aspect: '16:9', fit: 'cover', meta: true },
      import: 'default'
    }
  )
};

const filter = (obj: Record<string, unknown>, dir: string | undefined) =>
  Object.keys(obj).filter((x) => x.split('/').at(-2) === dir);

export const load: PageLoad = async () => {
  const items = await Promise.all(
    Object.keys(promises.svx)
      .sort((x, y) => (x > y ? -1 : 1))
      .map(async (path) => {
        const slug = path.split('/').at(-2);

        const {
          metadata: { title, description, published }
        } = (await promises.svx[path]()) as Data;

        const images: ImageMetadata[] = [];
        for (const image of filter(promises.images, slug))
          images.push((await promises.images[image]()) as ImageMetadata);
        if (!images.length) images[0] = placeholder;

        return { slug, title, description, published, images };
      })
  );
  return { items };
};
