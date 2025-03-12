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
    focus:outline-hidden focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700`;
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
    overflow-offset dark:bg-primary-700 fixed top-0 left-0 z-40
    shadow-md"
  navContainerClass="wrapper-2xl"
  fluid
  color="navbar">
  {@const close = () => hidden || toggle()}

  <NavBrand
    on:click={close}
    href="/">
    <img
      src="/assets/images/logo.small.webp"
      class="mr-3 ml-1.5 h-6 border-transparent sm:h-9"
      alt="логотип АО Научно-Исследовательский Центр «Строительная экспертиза»" />
    <!--span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Строй Эксп
    </span-->
  </NavBrand>

  <DarkMode class="bp:order-last bp:ml-0 ml-auto cursor-pointer" />

  <NavHamburger
    on:click={toggle}
    class="ml-4" />

  <!-- FIXME: -->
  <!-- classUl="border-none bg-inherit dark:bg-inherit" -->
  <NavUl
    class="max-h-screen--navbar bp:block bp:w-auto w-full overflow-y-auto"
    ulClass="
      flex flex-col p-4 mt-4 bp:flex-row bp:space-x-8 rtl:space-x-reverse bp:mt-0 bp:text-sm bp:font-medium
      border-none bg-inherit dark:bg-inherit"
    {activeUrl}
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
            home && 'bp:block hidden'
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
