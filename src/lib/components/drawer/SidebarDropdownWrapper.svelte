<script lang="ts">
  import classNames from 'classnames';
  import { slide } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

  export let btnClass =
    'flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:cursor-pointer hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700';
  export let label = '';
  export let spanClass = 'flex-1 ml-3 text-left whitespace-nowrap';
  export let ulClass = 'py-2 space-y-2';
  export let active = false;
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
    <svg
      class={classNames(
        'pointer-events-none ml-1 h-4 w-4 origin-center',
        !isOpen ? active && 'rotate-90' : 'rotate-180'
      )}
      viewBox="0 0 20 20"
      fill="currentColor"
      fill-rule="evenodd"
      clip-rule="evenodd">
      <path
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
    </svg>
  </button>
  {#if isOpen}
    <ul
      class={ulClass}
      transition:slide={{ delay: 250, duration: 300, easing: quintOut }}>
      <slot />
    </ul>
  {/if}
</li>
