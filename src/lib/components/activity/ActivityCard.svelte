<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge, Icon, Sign } from '@daks.dev/svelte.sdk';

  import type { SvelteHTMLElements } from 'svelte/elements';
  type Props = Omit<SvelteHTMLElements['div'], 'class'> & {
    class?: ClassName;
    href?: string;
    size?: number | string;
    animate?: string;
    header?: Snippet;
  };
  const {
    children,
    class: className,
    href,
    size = '4em',
    animate, // 'animate-pulse oversee:animation-paused';
    header,
    ...rest
  }: Props = $props();
</script>

<svelte:element
  this={href ? 'a' : 'div'}
  class={twMerge(
    'group relative',
    'p-7 py-4',
    'flex flex-col',
    'text-slate-600 dark:text-slate-400',
    'rounded-sm border border-current shadow-sm',
    animate,
    className
  )}
  {href}
  {...rest}>
  <Sign
    icon="mdi:link-variant"
    link
    small />
  {@render header?.()}
  <div class="mt-2 mb-7 flex grow flex-col justify-center pl-4">
    {#if children}
      {@render children()}
    {:else}
      <div>
        Объектов реализовано:
        <span class="text-2xl text-brand">...</span>
      </div>
      <div>
        Объекты в работе:
        <span class="text-2xl text-brand">...</span>
      </div>
    {/if}
  </div>
  <div class="flex items-start gap-5">
    <Icon
      class="
        transition-easy drop-shadow-lg
        group-oversee:drop-shadow-md"
      icon="ic:round-account-circle"
      {size} />
    <div class="flex grow flex-col gap-3 opacity-75">
      <small>руководитель направления:</small>
      <div
        class="
          transition-easy flex grow flex-col
          gap-2
          opacity-75 drop-shadow-lg
          group-oversee:drop-shadow-none">
        <div class="h-2.5 w-3/4 rounded-full bg-current"></div>
        <div class="h-2 w-full rounded-full bg-current"></div>
      </div>
    </div>
  </div>
  <span class="sr-only">loading...</span>
</svelte:element>
