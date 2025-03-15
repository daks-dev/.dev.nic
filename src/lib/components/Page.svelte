<script lang="ts">
  import {
    YandexMetrikaHit,
    ImagePlaceholder,
    Skeleton,
    TextPlaceholder,
    TestimonialPlaceholder
  } from '@daks.dev/svelte.sdk';

  export let title: string;
  export let description: string;
  export let name = title;
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <header class="frame">
    <h1 class="title">{name}</h1>
  </header>

  <div class="frame placeholders">
    <div class="mb-12 grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
      <ImagePlaceholder />
      <TextPlaceholder />
      <Skeleton />
      <ImagePlaceholder class="-scale-x-100" />
      <TextPlaceholder />
      <Skeleton />
      <TextPlaceholder class="lg:order-last lg:-scale-x-100" />
      <Skeleton class="lg:mr-auto lg:-scale-x-100" />
    </div>
    <TestimonialPlaceholder class="mx-auto max-w-xl" />
  </div>
</main>
