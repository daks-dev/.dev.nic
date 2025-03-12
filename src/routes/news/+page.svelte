<script lang="ts">
  import { onMount } from 'svelte';
  import { Figure, FormattedDate, Sign, YandexMetrikaHit } from '@daks.dev/svelte.sdk';

  import type { PageProps } from './$types';
  let { data }: PageProps = $props();
  const { items } = data;

  const title = 'СКМ • Новости';
  const description = 'Новости предприятия СКМ';

  // const random = (x?: unknown[]): number => (x?.length ? Math.floor(Math.random() * x.length) : -1);

  onMount(() => document?.lazyload.update());
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage snap-start">
  <header class="frame">
    <h1 class="title">Новости</h1>
  </header>

  <div class="frame xs:grid-cols-2 grid grid-cols-1 gap-8 md:grid-cols-3">
    {#each items as { slug, title, description, images }}
      {#if slug}
        <a
          class="group oversee:text-sky-500 relative place-self-center"
          href="/news/{slug}">
          <Sign
            class="top-10 left-2"
            link
            dark />
          <Figure
            custom={{
              image: [
                'mb-2 aspect-video w-48 lg:w-auto',
                'group-oversee:scale-105 rounded-md bg-neutral-500/10',
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
                date={slug}
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
