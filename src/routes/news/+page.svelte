<script
  lang="ts"
  module>
  let mode = $state<'app' | 'list'>('app');
</script>

<script lang="ts">
  import { sineIn, sineOut } from 'svelte/easing';
  import { blur, fade } from 'svelte/transition';
  import { Figure, FormattedDate, ListMode, Sign, YandexMetrikaHit } from '@daks.dev/svelte.sdk';

  import placeholder from '$lib/assets/images/cube.webp?w=288&aspect=16:9&fit=contain&meta';

  // const random = (x?: unknown[]): number => (x?.length ? Math.floor(Math.random() * x.length) : -1);

  import type { PageProps } from './$types';
  let { data }: PageProps = $props();
  const { items } = data;

  const transition = {
    in: { duration: 150, delay: 50, easing: sineIn },
    out: { duration: 75, easing: sineOut }
  };

  const title = 'НИЦ «СЭ» • Новости';
  const description = 'Новости АО НИЦ «Строительная экспертиза»';
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <header class="frame">
    <h1 class="title">Новости</h1>
  </header>

  {#if items.length}
    <ListMode
      bind:mode
      length={items.length}
      class="frame -mt-9 mb-4"
      app
      list />

    {#if mode === 'app'}
      <div
        in:blur={transition.in}
        out:fade={transition.out}
        class={[
          'frame',
          'grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3',
          'place-content-start gap-8 lg:gap-12'
        ]}>
        {#each items as { slug, title, description, poster, images }, idx}
          {@const image = poster === false ? placeholder : images[poster]}
          <a
            class="group relative oversee:text-sky-500"
            href="/news/{slug}">
            <Sign
              icon="mdi:link-variant"
              class="top-9"
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
      <div
        in:blur={transition.in}
        out:fade={transition.out}
        class={['frame', 'flex flex-col']}>
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
