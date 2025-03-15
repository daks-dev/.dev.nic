<script lang="ts">
  import { onMount } from 'svelte';
  import { twJoin } from 'tailwind-merge';
  import { YandexMetrikaHit } from '@daks.dev/svelte.sdk';

  const title = 'НИЦ СЭ • Регламент';
  const description =
    'Регламент АО НИЦ «Строительная экспертиза» по организации и проведения негосударственной экспертизы проектной документации и результатов инженерных изысканий';

  let node: HTMLObjectElement;

  /*
  const handle = () => {
    console.log('validity:', node.validity);
    node.classList.remove('opacity-0');
  };
  */

  onMount(() => {
    document?.lazyload.update();
    const timeout = setTimeout(() => node.classList.remove('opacity-0'), 150);
    return () => clearTimeout(timeout);
  });
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main
  class="frame mb-0 grow"
  itemprop="mainContentOfPage">
  <header class="sr-only frame">
    <h1 class="title">Регламент</h1>
  </header>

  <object
    bind:this={node}
    class={twJoin(
      'lazy',
      'md:pt-3',
      'flex grow',
      'bg-radial-c',
      'from-neutral-400 to-transparent',
      'dark:from-gray-600',
      'opacity-0',
      'transition-opacity duration-500'
    )}
    type="application/pdf"
    data-src="/docs/regulation.pdf"
    title="Регламент АО НИЦ «Строительная экспертиза»"
    aria-label="регламент">
    <!--embed
        class="h-full w-full"
        src="https://docs.google.com/viewer?url=https://stroyexp.info/docs/regulation.pdf&embedded=true" /-->
    <a
      class={twJoin(
        'mx-auto self-center',
        'tracking-wide sm:text-base',
        'button rounded-xs border border-slate-500',
        'bg-neutral-300 dark:bg-slate-700 oversee:bg-slate-500'
      )}
      href="/docs/regulation.pdf"
      target="_blank">
      загрузить
    </a>
  </object>
</main>
