<script
  lang="ts"
  module>
  let mode = $state<'app' | 'list'>('app');
</script>

<script lang="ts">
  import { onMount } from 'svelte';
  import { Figure, ListMode, Sign, YandexMetrikaHit } from '@daks.dev/svelte.sdk';

  import placeholder from '$lib/assets/images/cube.webp?w=288&aspect=16:9&fit=contain&meta';

  import type { PageProps } from './$types';
  let { data }: PageProps = $props();
  const { items } = data;

  const title = 'НИЦ «СЭ» • Инфрмация';
  const description = 'Инфрмационная база АО НИЦ «Строительная экспертиза»';

  onMount(() => document?.lazyload.update());
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <header class="frame">
    <h1 class="title">Информационная база</h1>
  </header>

  {#if items.length}
    <ListMode
      bind:mode
      class="frame -mt-13 mb-4"
      length={items.length}
      app
      list />

    {#if mode === 'app'}
      <div
        class={[
          'frame',
          'grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3',
          'place-content-start gap-6 lg:gap-12'
        ]}>
        {#each items as { slug, title, description, poster, images }, idx}
          {@const image = poster === false ? placeholder : images[poster]}
          <a
            class="group relative oversee:text-sky-500"
            href="/articles/{slug}">
            <Sign
              icon="mdi:link-variant"
              link
              dark />
            <Figure
              custom={{
                image: [
                  'mb-2 aspect-video h-auto w-48 sm:w-64 lg:w-full',
                  'bg-neutral-500/10',
                  'rounded-md',
                  'grayscale group-oversee:grayscale-0',
                  poster === false && [
                    'p-2',
                    'border-2 border-slate-400 dark:border-slate-600 group-oversee:border-inherit'
                  ],
                  'transition duration-300 ease-in-out'
                ]
              }}
              data={{
                ...image,
                title,
                description
              }} />
            <link
              rel="image"
              href={image.src} />
          </a>
        {/each}
      </div>
    {:else}
      <div class={['frame', 'flex flex-col']}>
        {#each items as { slug, title, description }, idx}
          <a
            class={[
              'group',
              'px-2 py-4',
              'grid grid-cols-[32px_minmax(0,_1fr)] sm:grid-cols-[32px_288px_minmax(0,_1fr)]',
              'items-center',
              'odd:bg-slate-400/20',
              'oversee:!bg-slate-400/40 oversee:text-sky-500'
            ]}
            href="/articles/{slug}">
            <small>{idx + 1}</small>
            <span class="text-slate-600 dark:text-slate-400 group-oversee:!text-inherit">
              {title}
            </span>
            <span class="max-sm:hidden">{description}</span>
          </a>
        {/each}
      </div>
    {/if}
  {:else}
    <div class="frame text-center">Статей нет!</div>
  {/if}
</main>
