<script lang="ts">
  import { onMount } from 'svelte';
  import { LightboxKit, FormattedDate, YandexMetrikaHit } from '@daks.dev/svelte.sdk';

  import type { PageProps } from './$types';
  let { data }: PageProps = $props();
  const { slug, title, description, content, sources, modifieds } = data;

  onMount(() => document?.lazyload.update());
</script>

<YandexMetrikaHit
  title={`${title} [${slug}] • Новости`}
  description={`[${slug}]: ${description}`} />

<main itemprop="mainContentOfPage">
  <header class="frame">
    <h1 class="title mb-4">{title}</h1>
    <FormattedDate
      class="text-xl tracking-wide text-slate-600 dark:text-slate-400"
      date={slug}
      parse="YY-MM-DD" />
  </header>

  <div class="frame flex gap-8 max-sm:flex-col">
    {#if sources.length}
      <LightboxKit
        {sources}
        {modifieds}
        class={['mt-1', 'flex shrink-0 flex-col justify-around gap-y-5', 'max-sm:order-last']}
        custom={{
          overlay: 'overflow-offset'
        }}
        options={{
          behaviour: 'loop'
        }}
        {title}
        {description}
        alt={title.toLowerCase()}
        sign="ic:round-zoom-out-map"
        adaptive
        centered
        rounded
        shadow
        scale />
    {/if}
    <div class="readable grow">
      {@html content}
    </div>
  </div>
</main>
