<script lang="ts">
  import classNames from 'classnames';
  import { slide } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  //import { ChevronDown, ChevronUp } from 'flowbite-svelte';

  export let btnClass =
    'flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700';
  export let label = '';
  export let spanClass = 'flex-1 ml-3 text-left whitespace-nowrap';
  export let ulClass = 'py-2 space-y-2';
  export let isOpen = false;

  const handleDropdown = () => {
    isOpen = !isOpen;
  };
</script>

<li>
  <button
    {...$$restProps}
    on:click={() => handleDropdown()}
    on:dblclick
    type="button"
    class={classNames(btnClass, $$props.class)}
    aria-controls="sidebar-dropdown">
    <slot name="icon" />
    <span
      class={spanClass}
      data-sidebar-toggle-item>
      {label}
    </span>
    {#if isOpen}
      {#if $$slots.arrowup}
        <slot name="arrowup" />
      {/if}
    {:else if $$slots.arrowdown}
      <slot name="arrowdown" />
    {/if}
  </button>
  {#if isOpen}
    <ul
      class={ulClass}
      transition:slide={{ delay: 250, duration: 300, easing: quintOut }}>
      <slot />
    </ul>
  {/if}
</li>
