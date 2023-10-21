<script lang="ts">
  import classNames from 'classnames';
  import { page } from '$app/stores';

  export let href = '';

  $: activeUrl = $page.url.pathname;
</script>

{#if activeUrl === href}
  <span
    class={classNames('flex items-center', $$props.class)}
    {...$$restProps}>
    <slot />
  </span>
{:else}
  <a
    on:click
    class={classNames('flex items-center', $$props.class)}
    {href}
    {...$$restProps}>
    <slot />
  </a>
{/if}
