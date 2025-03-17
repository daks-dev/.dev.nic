<script lang="ts">
  import { onMount } from 'svelte';
  import { YandexMetrikaHit } from '@daks.dev/svelte.sdk';

  const title = 'НИЦ СЭ • Регламент';
  const description =
    'Регламент АО НИЦ «Строительная экспертиза» по организации и проведения негосударственной экспертизы проектной документации и результатов инженерных изысканий';

  onMount(() => document?.lazyload.update());
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
    class={[
      'lazy',
      'md:pt-3',
      'flex grow',
      'bg-radial-c',
      'from-neutral-400 to-transparent',
      'dark:from-gray-600'
    ]}
    type="application/pdf"
    data-src="/docs/regulation.pdf"
    title="Регламент АО НИЦ «Строительная экспертиза»"
    aria-label="регламент">
    <a
      class={[
        'mx-auto self-center',
        'tracking-wide sm:text-base',
        'bg-neutral-300 dark:bg-slate-700 oversee:bg-slate-500',
        'button rounded-xs border border-slate-500'
      ]}
      href="/docs/regulation.pdf"
      target="_blank">
      загрузить
    </a>
  </object>
</main>
