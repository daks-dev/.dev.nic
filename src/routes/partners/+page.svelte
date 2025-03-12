<script lang="ts">
  import { YandexMetrikaHit, GalleryKit } from '@daks.dev/svelte.sdk';

  import type { PageProps } from './$types';
  let { data }: PageProps = $props();

  const { dataset } = data;

  const title = 'НИЦ СЭ • Партнёры';
  const description = 'Партнёры АО НИЦ «Строительная экспертиза»';
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <header class="frame">
    <h1 class="title">Наши партнеры</h1>
  </header>

  <GalleryKit
    class="frame gap-x-8 gap-y-12 lg:grid-cols-2"
    custom={{
      caption: 'text-lg text-slate-700 dark:text-slate-400'
    }}
    {dataset}
    centered
    grid
    scale
    shadow />
</main>
