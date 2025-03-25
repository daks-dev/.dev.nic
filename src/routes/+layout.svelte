<script lang="ts">
  import { browser } from '$app/environment';
  import {
    lazyload,
    Head,
    RouteTransition,
    ScreenBlock,
    YandexMetrikaInit
  } from '@daks.dev/svelte.sdk';
  import { Drawer, Footer, Navbar } from '$lib/components';

  import '../app.css';
  import '$iconify';

  import type { LayoutProps } from './$types';
  let { children, data }: LayoutProps = $props();

  import { app, nav, draver } from '$lib/configs';

  if (browser) document.lazyload ??= lazyload();
</script>

<Head {app} />

<RouteTransition
  class="flex grow flex-col"
  refresh={data.refresh}
  duration={275}
  delay={125}
  mode={1}>
  {@render children?.()}
</RouteTransition>

<Footer {...nav.footer} />

<Navbar {...nav.navbar} />

<Drawer {...draver} />

<ScreenBlock class="bg-neutral-100 dark:bg-gray-800" />

<YandexMetrikaInit />
