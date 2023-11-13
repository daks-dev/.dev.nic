<script lang="ts">
  import { onMount } from 'svelte';
  import { YandexMetrikaHit } from '@daks.dev/svelte.sdk';

  const title = 'НИЦ СЭ • Регламент';
  const description =
    'Регламент АО НИЦ «Строительная экспертиза» по организации и проведения негосударственной экспертизы проектной документации и результатов инженерных изысканий';

  let node: HTMLElement;
  const onload = () => node.classList.remove('opacity-0');

  onMount(() => document?.lazyload.update());
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main
  class="mb-0 min-h-screen"
  itemprop="mainContentOfPage">
  <header class="content sr-only">
    <h1 class="title">Регламент</h1>
  </header>

  <div
    class="
      wrapper
      bg-waiting bg-25% bg-center bg-no-repeat sm:bg-20% lg:bg-10%">
    <object
      bind:this={node}
      on:load={onload}
      class="
        lazy
        max-h-screen--navbar h-screen w-inherit opacity-0
        shadow-lg shadow-slate-500
        transition-opacity duration-500 md:pt-3"
      type="application/pdf"
      data-src="/docs/regulation.pdf"
      title="Регламент АО НИЦ «Строительная экспертиза»"
      aria-label="регламент" />
    <link href="/docs/regulation.pdf" />
  </div>
</main>
