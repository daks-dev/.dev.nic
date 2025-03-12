<script lang="ts">
  //import A from 'flowbite-svelte';
  import classNames from 'classnames';
  export let liClass = 'mr-4 last:mr-0 md:mr-6';
  export let aClass = 'hover:underline';
  export let href = '';
  export let target: undefined | string = undefined;
  export let role: undefined | string = undefined;
  export let itemprop: undefined | string = undefined;
  export let active: boolean;
</script>

<li class={classNames(liClass, $$props.class)}>
  {#if active}
    <span
      class="text-gray-300"
      role="none"
      {...$$restProps}>
      <slot />
    </span>
  {:else}
    <a
      {href}
      class={aClass}
      {target}
      {role}
      {itemprop}
      {...$$restProps}>
      <slot />
    </a>
  {/if}
</li>
