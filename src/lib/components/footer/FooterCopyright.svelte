<script lang="ts">
import classNames from 'classnames';
export let spanClass = 'block text-sm text-gray-500 sm:text-center dark:text-gray-400';
export let aClass = 'hover:underline';
export let year = new Date().getFullYear();
export let href = '';
export let by = '';
export let target: undefined | string = undefined;
export let rights = false
</script>

<span class={classNames(spanClass, $$props.class)}>
  &copy; {year}
  {#if href}
    <a {...$$restProps} {href} {target} class={aClass}>
      {@html by}
    </a>
  {:else}
    <span class="ml-1">{@html by}</span>
  {/if}
  {#if rights}
    . All Rights Reserved.
  {/if}
</span>
