<script lang="ts">
  import { onMount } from 'svelte';
  import { Figure, FormattedDate, Sign, YandexMetrikaHit } from '@daks.dev/svelte.sdk';

  import type { PageProps } from './$types';
  let { data }: PageProps = $props();
  const { items } = data;

  const title = 'НИЦ СЭ • Статьи';
  const description = 'Статьи АО НИЦ «Строительная экспертиза»';

  // const random = (x?: unknown[]): number => (x?.length ? Math.floor(Math.random() * x.length) : -1);

  onMount(() => document?.lazyload.update());
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage snap-start">
  <header class="frame">
    <h1 class="title">Статьи</h1>
  </header>

  <div class="frame grid grid-cols-1 gap-8 xs:grid-cols-2 md:grid-cols-3">
    {#each items as { slug, title, description, published, images }}
      {#if slug}
        <a
          class="group relative place-self-center oversee:text-sky-500"
          href="/articles/{slug}">
          <Sign
            class="top-10 left-2"
            link
            dark />
          <Figure
            custom={{
              image: [
                'mb-2 aspect-video w-48 lg:w-auto',
                'rounded-md bg-neutral-500/10 group-oversee:scale-105',
                'transition-transform duration-300'
              ]
            }}
            data={{
              ...images[0],
              title,
              description
            }}>
            {#snippet before()}
              <FormattedDate
                class="mb-2 block tracking-wide text-slate-600 dark:text-slate-400"
                date={published}
                parse="YY-MM-DD" />
            {/snippet}
          </Figure>
        </a>
      {/if}
    {:else}
      <p>Новостей нет!</p>
    {/each}
  </div>
</main>
