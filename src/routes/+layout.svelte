<script lang="ts">
  import { BROWSER } from 'esm-env';
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

  import type { LayoutData } from './$types';
  export let data: LayoutData;

  import { app, nav, draver } from '$lib/configs';

  if (BROWSER) document.lazyload ??= lazyload();
</script>

<Head {app} />

<RouteTransition
  class="flex grow flex-col"
  refresh={data.refresh}
  mode="1">
  <slot />
</RouteTransition>

<Footer {...nav.footer} />

<Navbar {...nav.navbar} />

<Drawer {...draver} />

<ScreenBlock class="bg-neutral-100 dark:bg-gray-800" />

<YandexMetrikaInit />
