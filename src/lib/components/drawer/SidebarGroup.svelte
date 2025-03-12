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

  const itemClass =
    'text-sm dark:!text-gray-400 select-none page:disabled page:!text-cyan-700 page:dark:!text-gray-200';
  /*{
    'text-base': false,
    'text-sm': true,
    'dark:text-white': false,
    'dark:text-gray-400': true
  }*/
  const itemStepClass = 'text-sm select-none';
  /*{
    'text-base': false,
    'text-sm': true
  }*/

  $: activeUrl = $page.url.pathname;
  $: current = (href: Attribute) =>
    $page.url.pathname === href || $page.url.pathname === `${href}/`
      ? 'page'
      : $page.url.pathname.indexOf(`${href}/`) >= 0
        ? 'step'
        : undefined;
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
            {@const __href = `${href}${item.href}`}
            <SidebarDropdownItem
              color="custom"
              class={itemClass}
              label={item.label}
              href={__href}
              target={item.target}
              aria-current={current(__href)}
              active={activeUrl === __href} />
          {/each}
        </SidebarDropdownWrapper>
      {:else}
        <!-- FIXME: -->
        <!-- {active} -->
        <SidebarItem
          color="form"
          class={itemClass}
          label={link.label}
          {href}
          target={link.target}
          aria-current={current(href)} />
      {/if}
    {/each}
  {:else}
    <slot />
  {/if}
</SidebarGroup>
