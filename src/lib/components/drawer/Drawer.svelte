<script lang="ts">
  import { sineInOut } from 'svelte/easing';
  import { afterNavigate } from '$app/navigation';
  import { Drawer, Sidebar, SidebarBrand, SidebarWrapper } from 'flowbite-svelte';
  import { Icon } from '@daks.dev/svelte.sdk';
  import type { NavItem } from '@daks.dev/svelte.sdk';
  import SidebarGroup from './SidebarGroup.svelte';

  export let header: Partial<NavItem>[] = [];
  export let activity: Partial<NavItem>[] = [];
  export let footer: Partial<NavItem>[] = [];

  let hidden = true;
  export const open = () => (hidden = false);
  export const close = () => (hidden = true);

  import microdata from '$lib/configs/microdata';
  const { telephone } = microdata.organization;

  let transitionParams = {
    x: -384,
    duration: 300,
    easing: sineInOut
  };

  let site = {
    name: '', //'Строй Эксп',
    href: '/',
    img: '/assets/images/logo.small.webp'
  };

  afterNavigate(() => setTimeout(close, transitionParams.duration));
</script>

<button
  on:click={open}
  class={[
    'group',
    'fixed top-1/2 z-20 h-[35vmin] -translate-y-1/2 pr-6',
    'rounded-r-lg',
    'bg-neutral-400/70 dark:bg-gray-700/50 dark:hover:bg-gray-400/50',
    'hover:cursor-pointer hover:bg-gray-400 hover:pr-8',
    'transition-colors duration-100'
  ]}
  aria-label="drawer">
  <span
    class={[
      'absolute top-1/2 right-2.5 h-1/2 w-1 -translate-y-1/2 sm:h-1/3 lg:h-1/4',
      'bg-gray-100 dark:bg-gray-800',
      'rounded-lg',
      'animate-pulse group-oversee:animation-paused'
    ]}></span>
</button>

<Drawer
  bind:hidden
  width="w-80 bp:w-96 overflow-x-hidden"
  transitionType="fly"
  {transitionParams}
  id="driver">
  <Sidebar asideClass="w-auto">
    <SidebarWrapper divClass="overflow-y-auto py-4 px-3 rounded-sm">
      <SidebarGroup
        class="flex flex-col items-center"
        on:click={close}>
        <SidebarBrand
          aClass="py-2"
          imgClass="h-24 lg:h-24 drop-shadow-deep dark:drop-shadow-hard hover:!drop-shadow-lg"
          {site} />
        <a
          class="
            ransition rounded-full
            px-4 py-2
            text-2xl tracking-wider text-slate-600
            duration-200 ease-in-out
            select-none hover:bg-gray-500/50 hover:!text-white
            dark:text-slate-400"
          href="tel://{telephone.replace(/[\s-()]/g, '')}">
          {telephone}
        </a>
      </SidebarGroup>
      {#if header.length}
        <SidebarGroup
          links={header}
          border />
      {/if}
      {#if activity.length}
        <SidebarGroup
          links={activity}
          root="/activity"
          border />
      {/if}
      {#if footer.length}
        <SidebarGroup
          links={footer}
          border />
      {/if}
    </SidebarWrapper>
  </Sidebar>
  <button
    on:click={close}
    class="
      absolute top-5 right-5 rounded-full
      p-2 hover:bg-gray-200
      dark:hover:bg-gray-700">
    <Icon
      icon="ic:round-close"
      class="h-6 w-6" />
  </button>
</Drawer>
