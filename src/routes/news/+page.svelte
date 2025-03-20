<script lang="ts">
  import { onMount } from 'svelte';
  import { Figure, FormattedDate, Sign, YandexMetrikaHit } from '@daks.dev/svelte.sdk';
  import { ListMode } from '$lib/components';

  import { modes } from '$lib/state';

  import placeholder from '$lib/assets/images/cube.webp?w=288&aspect=16:9&fit=contain&meta';

  import type { PageProps } from './$types';
  let { data }: PageProps = $props();
  const { items } = data;

  const title = 'НИЦ «СЭ» • Новости';
  const description = 'Новости АО НИЦ «Строительная экспертиза»';

  onMount(() => document?.lazyload.update());
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage snap-start">
  <header class="frame">
    <h1 class="title">Новости</h1>
  </header>

  {#if items.length}
    <ListMode
      bind:mode={modes.news}
      class="frame -mt-12 mb-3"
      length={items.length}
      app
      list />

    {#if modes.news === 'app'}
      <div
        class={[
          'frame',
          'grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3',
          'place-content-start gap-8'
        ]}>
        {#each items as { slug, title, description, poster, images }, idx}
          {@const image = poster === false ? placeholder : images[poster]}
          <a
            class="group relative oversee:text-sky-500"
            href="/news/{slug}">
            <Sign
              class="top-10 left-2"
              link
              dark />
            <Figure
              custom={{
                image: [
                  'mb-2 aspect-video h-auto w-48 lg:w-full',
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
              }}>
              {#snippet before()}
                <FormattedDate
                  class={[
                    'mb-2 block',
                    'font-mono tracking-wide',
                    'text-slate-600 dark:text-slate-400 group-oversee:text-inherit'
                  ]}
                  date={slug ?? ''}
                  parse="YY-MM-DD" />
              {/snippet}
            </Figure>
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
              'grid grid-cols-[32px_minmax(0,_1fr)_160px] md:grid-cols-[32px_288px_minmax(0,_1fr)_160px]',
              'items-center',
              'odd:bg-slate-400/20',
              'oversee:!bg-slate-400/40 oversee:text-sky-500'
            ]}
            href="/news/{slug}">
            <small>{idx + 1}</small>
            <span class="text-slate-600 dark:text-slate-400 group-oversee:!text-inherit">
              {title}
            </span>
            <small class="max-md:hidden">{description}</small>
            <FormattedDate
              class="text-right font-mono"
              date={slug ?? ''}
              parse="YY-MM-DD" />
          </a>
        {/each}
      </div>
    {/if}
  {:else}
    <div class="frame text-center">Новостей нет!</div>
  {/if}
</main>
