<script lang="ts">
  import { YandexMetrikaHit, LightboxKit } from '@daks.dev/svelte.sdk';

  import type { PageProps } from './$types';
  let { data }: PageProps = $props();
  const { sources, modifieds } = data;

  const title = 'НИЦ «СЭ» • Отзывы';
  const description = 'Отзывы заказчиков о предприятии АО НИЦ «Строительная экспертиза»';
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <header class="frame">
    <h1 class="title">Отзывы заказчиков</h1>
  </header>

  <LightboxKit
    {sources}
    {modifieds}
    class="frame gap-8"
    custom={{
      overlay: 'overflow-offset'
    }}
    options={{
      behaviour: 'loop'
    }}
    alt="отзыв заказчика"
    sign="ic:round-zoom-out-map"
    adaptive
    centered
    shadow
    scale />
</main>
