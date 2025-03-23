<script lang="ts">
  import classNames from 'classnames';

  import type { ClassValue, SvelteHTMLElements } from 'svelte/elements';
  type Props = Omit<SvelteHTMLElements['span'], 'class'> & {
    class?: ClassValue;
    liClass?: ClassValue;
    aClass?: ClassValue;
    href?: string | null;
    target?: string | null;
    active?: boolean;
  };
  const {
    children,
    class: className,
    liClass = 'mr-4 last:mr-0 md:mr-6',
    aClass = 'hover:underline',
    href,
    target,
    role,
    itemprop,
    active = false,
    ...rest
  }: Props = $props();

  /*
  import classNames from 'classnames';
  export let liClass = 'mr-4 last:mr-0 md:mr-6';
  export let aClass = 'hover:underline';
  export let href: undefined | string | null = undefined;
  export let target: undefined | string | null = undefined;
  export let role: undefined | string | null = undefined;
  export let itemprop: undefined | string | null = undefined;
  export let active: boolean;
  */
</script>

<li class={classNames(liClass, className)}>
  {#if active}
    <span
      class="text-gray-300"
      role="none"
      {...rest}>
      {@render children?.()}
    </span>
  {:else}
    <a
      {href}
      class={aClass}
      {target}
      {role}
      {itemprop}
      {...rest}>
      {@render children?.()}
    </a>
  {/if}
</li>
