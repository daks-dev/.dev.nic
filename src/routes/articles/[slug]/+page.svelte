<script lang="ts">
  import { onMount } from 'svelte';
  import { Figure, FormattedDate, YandexMetrikaHit } from '@daks.dev/svelte.sdk';

  import type { PageProps } from './$types';
  let { data }: PageProps = $props();
  const { title, description, published, component: Component, images } = data;

  /*
      {#await promise then { default: Component }}
        <Component />
      {/await}
  */

  onMount(() => document?.lazyload.update());
</script>

<YandexMetrikaHit
  title="{title} | НИЦ «СЭ» • Статьи"
  {description} />

<main itemprop="mainContentOfPage">
  <header class="frame">
    <h1 class="title mb-4">{title}</h1>
    <FormattedDate
      class="text-xl tracking-wide text-slate-600 dark:text-slate-400"
      date={published ?? '--'}
      parse="YY-MM-DD" />
  </header>

  <div class="frame flex gap-8 max-sm:flex-col">
    <div
      class="mt-2 flex shrink-0 flex-wrap justify-around gap-5 max-sm:order-last sm:flex-col sm:justify-start">
      {#each images as data, idx}
        <Figure
          {data}
          custom={{
            image: [
              'max-lg:w-48',
              'rounded-md',
              'hover:scale-105',
              'transition-transform duration-500 ease-in-out'
            ]
          }}
          alt={`${title.toLowerCase()} ${idx}`} />
        <link
          rel="image"
          href={data.src} />
      {/each}
    </div>
    <div class="readable grow text-justify leading-relaxed bp:text-lg/relaxed">
      <Component />
    </div>
  </div>
</main>
