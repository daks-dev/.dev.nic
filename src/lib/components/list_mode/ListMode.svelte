<script lang="ts">
  import { twMerge, Icon, scroll } from '@daks.dev/svelte.sdk';

  type Props = {
    class?: ClassName;
    classButton?: ClassName;
    app?: boolean;
    list?: boolean;
    map?: boolean;
    length: number;
    mode: 'app' | 'list' | 'map';
  };
  let {
    class: className,
    classButton,
    app = false,
    list = false,
    map = false,
    length,
    mode = $bindable()
  }: Props = $props();

  let innerWidth = $state(0);

  const buttonClass = [
    'rounded-sm p-1.5',
    'disabled:text-cyan-600 dark:disabled:text-cyan-700',
    'oversee:bg-gray-300 dark:oversee:bg-gray-700',
    'hover:cursor-pointer'
  ];

  $effect.pre(() => {
    if (mode === 'map' && innerWidth < 640) mode = 'app';
  });
  $effect(() => {
    if (mode === 'app') document?.lazyload.update();
    if (mode === 'map')
      setTimeout(() => scroll.toObj('#ymap', { offset: -96, duration: 2100 }), 700);
  });
</script>

<svelte:window bind:innerWidth />

<div class={twMerge('overflow-hidden', 'flex items-center gap-4', className)}>
  <span class="mr-auto p-1.5 pl-0">[ <small>{length}</small> ]</span>
  {#if app}
    <button
      onclick={() => (mode = 'app')}
      class={twMerge(buttonClass, classButton)}
      type="button"
      disabled={mode === 'app' || undefined}>
      <Icon
        icon="ic:round-apps"
        size="1.5em" />
    </button>
  {/if}
  {#if list}
    <button
      onclick={() => (mode = 'list')}
      class={twMerge(buttonClass, classButton)}
      type="button"
      disabled={mode === 'list' || undefined}>
      <Icon
        icon="ic:round-format-list-bulleted"
        size="1.5em" />
    </button>
  {/if}
  {#if map}
    <button
      onclick={() => (mode = 'map')}
      class={twMerge(buttonClass, classButton)}
      type="button"
      disabled={mode === 'map' || undefined}>
      <Icon
        icon="ic:round-map"
        size="1.5em" />
    </button>
  {/if}
</div>
