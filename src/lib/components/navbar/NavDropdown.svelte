<script lang="ts">
  import classNames from 'classnames';
  import { createEventDispatcher } from 'svelte';
  import { outside } from '@daks.dev/svelte.sdk/utils';
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  // import { clickOutside } from 'flowbite-svelte/dist/utils/clickOutside';
  import type { NavItem } from '@daks.dev/svelte.sdk';

  export let liButtonClass = 'flex items-center justify-between w-full cursor-pointer';
  //export let name;
  //export let child = [];

  export let dropdownDiv = `
    bp:absolute z-10
    w-full bp:w-max bp:max-w-xs mt-2 bp:mt-12
    text-gray-700 dark:text-gray-400
    bp:rounded-sm
    bp:bg-white dark:bp:bg-gray-700
    outline-hidden
    divide-y divide-gray-100 dark:divide-gray-600`;

  export let dropdownLinkClassWithChild = `
    block py-2 px-4
    bp:font-medium bp:text-sm
    hover:bg-gray-100 dark:hover:bg-gray-600`;

  export let rel: Attribute = undefined;

  export let link: Partial<NavItem>;

  export let offset: undefined | number = undefined;
  export let active: boolean;
  export let step: boolean;

  const dispatch = createEventDispatcher();

  let hidden = true; // !step
  let block = false;

  const close = () => {
    hidden = true;
    block = false;
  };
  const toggle = () => {
    hidden = !hidden;
    block = !block;
  };

  const handleClick = () => {
    close();
    dispatch('close');
  };
  const handleDblClick = () => {
    if (link.href && !active) {
      close();
      dispatch('close');
      goto(link.href);
    }
  };

  const liClass = `
    flex flex-col items-center py-2 pr-4 pl-3 bp:p-0
    text-gray-700 dark:text-gray-400 bp:dark:hover:text-white dark:hover:text-white
    border-b border-gray-100 bp:border-0 dark:border-gray-700
    bp:hover:text-blue-700 select-none`;
  const activeClass = 'text-gray-400 dark:text-gray-300';

  $: activeUrl = $page.url.pathname;
</script>

<li
  use:outside={() => !hidden && toggle()}
  class={liClass}>
  <button
    on:click|preventDefault={toggle}
    on:dblclick|preventDefault={handleDblClick}
    class={classNames(liButtonClass, (active || step) && 'text-cyan-700 dark:text-gray-200')}>
    {link.label}
    <svg
      class={classNames(
        'pointer-events-none ml-1 h-4 w-4 origin-center',
        hidden ? active && 'rotate-90' : 'rotate-180'
      )}
      viewBox="0 0 20 20"
      fill="currentColor"
      fill-rule="evenodd"
      clip-rule="evenodd">
      <path
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
    </svg>
  </button>

  {#if link.links}
    <!-- Dropdown menu -->
    <div
      class:hidden
      class={classNames(dropdownDiv, $$restProps.class)}
      style:top={offset && `${offset}px`}>
      <slot>
        <ul
          class="
            border-dotted border-gray-700 max-bp:ml-1
            max-bp:border-l-2 bp:pt-1 bp:pb-2 dark:border-gray-500"
          aria-labelledby="dropdownLargeButton">
          {#each link.links as item}
            {@const href = `${link.href}${item.href}`}
            {#if activeUrl === href}
              <li class={activeClass}>
                <span
                  on:blur
                  on:focus
                  on:mouseleave
                  on:mouseover
                  role="listitem"
                  class={dropdownLinkClassWithChild}>
                  {@html item.label}
                </span>
              </li>
            {:else}
              <li class={activeUrl.indexOf(`${href}/`) === 0 ? activeClass : undefined}>
                <a
                  on:blur
                  on:change
                  on:click={handleClick}
                  on:focus
                  on:keydown
                  on:keypress
                  on:keyup
                  on:mouseenter
                  on:mouseleave
                  on:mouseover
                  class={dropdownLinkClassWithChild}
                  {rel}
                  {href}
                  target={item.target}>
                  {@html item.label}
                </a>
              </li>
            {/if}
          {/each}
        </ul>
      </slot>
    </div>
  {/if}
</li>
