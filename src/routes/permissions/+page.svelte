<script lang="ts">
  import { YandexMetrikaHit, LightboxKit } from '@daks.dev/svelte.sdk';

  import type { PageProps } from './$types';
  let { data }: PageProps = $props();
  const { sources, modifieds } = data;

  const title = 'НИЦ «СЭ» • Допуски';
  const description = 'Допуски предпрятия АО НИЦ «Строительная экспертиза»';
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <header class="frame">
    <h1 class="title">Допуски</h1>
  </header>
  <LightboxKit
    {sources}
    {modifieds}
    class="frame gap-4"
    custom={{
      overlay: 'overflow-offset'
    }}
    options={{
      behaviour: 'loop'
    }}
    alt="допуск ниц «строительная экспертиза»"
    sign="ic:round-zoom-out-map"
    adaptive
    centered
    shadow
    scale />
</main>
