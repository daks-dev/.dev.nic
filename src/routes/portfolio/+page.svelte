<script lang="ts">
  import { YandexMetrikaHit, LightboxKit } from '@daks.dev/svelte.sdk';

  import type { PageProps } from './$types';
  let { data }: PageProps = $props();
  const { sources, thumbnails } = data;

  const title = 'НИЦ СЭ • Проекты';
  const description = 'Проекты предпрятия АО НИЦ «Строительная экспертиза»';
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <header class="frame">
    <h1 class="title">Недавние проекты</h1>
  </header>

  <LightboxKit
    class="frame gap-8"
    custom={{
      overlay: 'overflow-offset'
    }}
    options={{
      behaviour: 'loop'
    }}
    {sources}
    {thumbnails}
    sign
    centered
    rounded
    shadow
    scale
    grayscale />
</main>
