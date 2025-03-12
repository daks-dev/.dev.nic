<script lang="ts">
  import { page } from '$app/stores';
  import { Dropdown, DropdownItem } from 'flowbite-svelte';
  import type { NavItem } from '@daks.dev/svelte.sdk';

  export let link: Partial<NavItem>;

  //const active = (href: string) => $page.url.pathname === href || $page.url.pathname.indexOf(`${href}/`) === 0;
  $: activeUrl = $page.url.pathname;
</script>

{#if link.links}
  <Dropdown {...$$restProps}>
    {#each link.links as item}
      {@const href = `${link.href}${item.href}`}
      {@const active = activeUrl === href || activeUrl.indexOf(`${href}/`) === 0 || undefined}
      <DropdownItem
        class={active && 'text-blue-700 dark:text-gray-200'}
        {href}>
        {@html item.label}
      </DropdownItem>
    {/each}
  </Dropdown>
{/if}
