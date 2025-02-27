<script lang="ts">
  import { YandexMetrikaHit, LightboxKit } from '@daks.dev/svelte.sdk';

  import type { PageData } from './$types';
  export let data: PageData;

  const { sources, thumbnails } = data;

  const title = 'НИЦ СЭ • Проекты';
  const description = 'Проекты предпрятия АО НИЦ «Строительная экспертиза»';
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <header class="wrapper-lg">
    <h1 class="title">Недавние проекты</h1>
  </header>

  <LightboxKit
    class="gap-8 wrapper-xl"
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
