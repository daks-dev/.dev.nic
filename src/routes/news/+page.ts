import type { PageLoad } from './$types';

type Data = {
  metadata: {
    title: string;
    description: string;
    poster?: false | number;
  };
};

const promises = {
  mds: import.meta.glob('$lib/content/news/**/index.(svx|mdx|md)'),
  images: import.meta.glob('$lib/content/news/**/*.(avif|gif|heic|heif|jpeg|jpg|png|tiff|webp)', {
    query: { w: 288, aspect: '16:9', meta: true },
    import: 'default'
  })
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
          metadata: { title, description, poster = images.length ? 0 : false }
        } = (await promises.mds[path]()) as Data;
        return {
          slug,
          title,
          description,
          poster,
          images
        };
      })
  );
  return { items };
};
