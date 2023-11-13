<script lang="ts">
  import classNames from 'classnames';
  import { page } from '$app/stores';
  import { Navbar, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
  import { Nav, Swiping, Icon } from '@daks.dev/svelte.sdk';
  import { DarkMode } from '$lib/components';
  import NavBrand from './NavBrand.svelte';
  import Dropdown from './NavDropdown.svelte';
  import type { NavItem } from '@daks.dev/svelte.sdk';

  export let links: Partial<NavItem>[];
  export let scope = Nav.map(links, true);
  export let paging = false;

  /*
  const darkmodebtn = `
    p-2.5 rounded-lg text-lg text-gray-500 dark:text-gray-400
    hover:bg-gray-100 dark:hover:bg-gray-700
    focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700`;
  */

  //const color: any = 'primary';

  $: activeUrl = $page.url.pathname;
  $: current = (href: Attribute) =>
    $page.url.pathname === href || $page.url.pathname === `${href}/`
      ? 'page'
      : $page.url.pathname.indexOf(`${href}/`) >= 0
      ? 'step'
      : undefined;
</script>

{#if scope.length}
  <Swiping
    {scope}
    {paging} />
{/if}

<Navbar
  let:hidden
  let:toggle
  class="
    overflow-offset fixed left-0 top-0 z-40 shadow-md
    dark:bg-primary-700"
  color="navbar">
  {@const close = () => hidden || toggle()}

  <NavBrand
    on:click={close}
    href="/">
    <img
      src="/assets/images/logo.small.webp"
      class="ml-1.5 mr-3 h-6 border-transparent sm:h-9"
      alt="логотип АО Научно-Исследовательский Центр «Строительная экспертиза»" />
    <!--span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Строй Эксп
    </span-->
  </NavBrand>

  <DarkMode class="ml-auto bp:order-last bp:ml-0" />

  <NavHamburger
    on:click={toggle}
    class="ml-4" />

  <NavUl
    class="
      max-h-screen--navbar w-full overflow-y-auto
      bp:block bp:w-auto"
    classUl="border-none bg-inherit dark:bg-inherit"
    {hidden}>
    {#each links as link}
      {@const active = activeUrl === link.href}
      {#if link.links}
        {@const step = activeUrl.indexOf(`${link.href}/`) === 0}
        <Dropdown
          on:close={close}
          {link}
          {active}
          {step}
          offset={32} />
      {:else}
        {@const home = link.href === '/'}
        <NavLi
          on:click={close}
          class={classNames(
            'page:text-cyan-700 page:disabled page:dark:text-gray-200',
            'cursor-pointer select-none',
            home && 'hidden bp:block'
          )}
          href={link.href}
          target={link.target}
          aria-current={current(link.href)}>
          {#if home}
            <Icon
              icon={`line-md:home-simple${active ? '-twotone' : ''}`}
              class="-mt-0.5 h-6 w-6" />
          {:else}
            {@html link.label}
          {/if}
        </NavLi>
      {/if}
    {/each}
  </NavUl>
</Navbar>
