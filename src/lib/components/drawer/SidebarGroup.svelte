<script lang="ts">
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import {
    SidebarDropdownItem,
    //SidebarDropdownWrapper,
    SidebarGroup,
    SidebarItem
  } from 'flowbite-svelte';
  import SidebarDropdownWrapper from './SidebarDropdownWrapper.svelte';
  import type { NavItem } from '@daks.dev/svelte.sdk';

  export let links: Partial<NavItem>[] = [];
  export let root = '';

  const itemClass = '!text-sm dark:!text-gray-400 select-none';
  /*{
    'text-base': false,
    'text-sm': true,
    'dark:text-white': false,
    'dark:text-gray-400': true
  }*/
  const itemStepClass = '!text-sm select-none';
  /*{
    'text-base': false,
    'text-sm': true
  }*/

  $: activeUrl = $page.url.pathname;
</script>

<SidebarGroup {...$$restProps}>
  {#if links.length}
    {#each links as link}
      {@const href = root + link.href}
      {@const active = activeUrl === href}
      {@const step = activeUrl.indexOf(`${href}/`) === 0}
      {#if link.links}
        <SidebarDropdownWrapper
          on:dblclick={() => active || goto(href)}
          class={active || step ? itemStepClass : itemClass}
          label={link.label}
          {active}
          isOpen={step}>
          {#each link.links as item}
            <SidebarDropdownItem
              color="custom"
              class={itemClass}
              label={item.label}
              href={href + item.href}
              target={item.target}
              active={activeUrl === href + item.href} />
          {/each}
        </SidebarDropdownWrapper>
      {:else}
        <SidebarItem
          color="form"
          class={itemClass}
          label={link.label}
          {href}
          target={link.target}
          {active} />
      {/if}
    {/each}
  {:else}
    <slot />
  {/if}
</SidebarGroup>
