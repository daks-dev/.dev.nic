export const sources = Object.values(
  import.meta.glob('./*.(avif|gif|heic|heif|jpeg|jpg|png|tiff|webp)', {
    eager: true,
    query: { meta: true },
    import: 'default'
  })
) as ImageMetainfo[];

export const videos = Object.values(
  import.meta.glob('./*.(avif|gif|heic|heif|jpeg|jpg|png|tiff|webp)', {
    eager: true,
    query: { w: 320, aspect: '16:9', meta: true },
    import: 'default'
  })
) as ImageMetainfo[];

export const squares = Object.values(
  import.meta.glob('./*.(avif|gif|heic|heif|jpeg|jpg|png|tiff|webp)', {
    eager: true,
    query: { w: 320, aspect: '1:1', meta: true },
    import: 'default'
  })
) as ImageMetainfo[];
