<script lang="ts">
  import { YandexMetrikaHit } from '@daks.dev/svelte.sdk';
  import { ActivityCard } from '$lib/components';

  import { activity } from '$lib/configs';

  const title = 'НИЦ «СЭ» • Направления деятельности';
  const description = 'Направления деятельности АО НИЦ «Строительная экспертиза»';
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <header class="frame">
    <h1 class="title">Направления деятельности</h1>
  </header>

  <div class="frame">
    <div class={['mx-auto w-fit', 'grid grid-cols-none gap-8 md:grid-cols-2 lg:gap-16']}>
      {#each activity as { href, label }}
        <ActivityCard
          class="w-full oversee:bg-slate-300/20"
          href="/activity{href}">
          {#snippet header()}
            <div
              class={[
                'leader',
                'transition-easy text-accent dark:text-accent group-oversee:text-brand',
                'group-oversee:drop-shadow-md'
              ]}>
              {@html label}
            </div>
          {/snippet}
        </ActivityCard>
      {/each}
    </div>
  </div>
</main>
