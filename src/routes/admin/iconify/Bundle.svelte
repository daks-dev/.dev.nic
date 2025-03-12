<script lang="ts">
  import { Icon } from '@daks.dev/svelte.sdk';

  export let prefix: string;
  export let icons: string[];

  const handle = (ev: Event) => {
    const text = (ev.target as HTMLElement).dataset.icon;
    if (text) navigator.clipboard.writeText(text).then(() => console.log(text));
  };
</script>

<div
  class="
    grid grid-cols-2 gap-8
    py-4 text-neutral-600 sm:grid-cols-3 md:grid-cols-4
    lg:grid-cols-5 dark:text-neutral-400">
  {#each icons as icon}
    {@const name = `${prefix}:${icon}`}
    <button
      on:click={handle}
      class="
        flex cursor-grab flex-col items-center
        justify-start hover:text-slate-500"
      title="copy to clipboard"
      data-icon={name}>
      <Icon
        icon={name}
        class="
          pointer-events-none
          h-24 w-24 md:h-32 md:w-32 xl:h-36 xl:w-36" />
      <span
        class="
          pointer-events-none
          text-center text-sm">
        <b class="block text-slate-500">{prefix}</b>
        {icon}
      </span>
    </button>
  {/each}
</div>
