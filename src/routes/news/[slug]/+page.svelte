<script lang="ts">
  import { onMount } from 'svelte';
  import { FormattedDate, YandexMetrikaHit } from '@daks.dev/svelte.sdk';

  import type { PageProps } from './$types';
  let { data }: PageProps = $props();
  const { slug, title, description, content: Component, images } = data;

  /*
      <svelte:component this={content} />

      {#await import(`$lib/content/news/${slug}/index.md`) then { default: Component }}
        <Component />
      {/await}
  */

  onMount(() => document?.lazyload.update());
</script>

<YandexMetrikaHit
  title="{title} | СКМ • Новости"
  {description} />

<main itemprop="mainContentOfPage">
  <header class="frame">
    <h1 class="title mb-4">{title}</h1>
    <FormattedDate
      class="text-xl tracking-wide text-slate-600 dark:text-slate-400"
      date={slug}
      parse="YY-MM-DD" />
  </header>

  <div class="frame flex gap-8 max-sm:flex-col">
    <div
      class="mt-2 flex shrink-0 flex-wrap justify-around gap-5 max-sm:order-last sm:flex-col sm:justify-start">
      {#each images as { src, width, height }}
        <img
          class="rounded-md max-lg:w-48"
          {src}
          {width}
          {height}
          alt="" />
      {/each}
    </div>
    <div class="grow text-justify readable leading-relaxed bp:text-lg/relaxed">
      {#if Component}
        <Component />
      {/if}
    </div>
  </div>
</main>
