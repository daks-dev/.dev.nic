<script lang="ts">
  import { YandexMetrikaHit, CardPlaceholder, TestimonialPlaceholder } from '@daks.dev/svelte.sdk';

  const title = 'НИЦ «СЭ» • Отзывы';
  const description = 'Отзывы заказчиков о предприятии АО НИЦ «Строительная экспертиза»';
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <header class="frame">
    <h1 class="title">Отзывы</h1>
  </header>

  <div class={['frame mb-16', 'flex flex-wrap justify-around gap-y-8']}>
    {#each Array(5) as _val}
      <CardPlaceholder
        class={['w-full max-w-sm', 'odd:bg-green-700/20 even:bg-red-700/20', 'snap-start']}
        animate="" />
    {/each}
  </div>
  <TestimonialPlaceholder class="wrapper-lg max-w-xl" />
</main>
