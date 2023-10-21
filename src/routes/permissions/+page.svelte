<script lang="ts">
  import { YandexMetrikaHit, LightboxKit } from '@daks.dev/svelte.sdk';

  import type { PageData } from './$types';
  export let data: PageData;

  const { sources, thumbnails } = data;

  const title = 'НИЦ СЭ • Допуски';
  const description = 'Допуски предпрятия АО НИЦ «Строительная экспертиза»';
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <header class="content">
    <h1 class="title">Допуски</h1>
  </header>

  <LightboxKit
    class="content gap-8"
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
    shadow
    scale />
</main>
