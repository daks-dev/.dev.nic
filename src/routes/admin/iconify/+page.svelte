<script lang="ts">
  import { DEV } from 'esm-env';
  import { Head, Icon } from '@daks.dev/svelte.sdk';
  import Bundle from './Bundle.svelte';

  import type { PageData } from './$types';
  export let data: PageData;

  let waiting = false;
  $: iconset = {};

  const upload = async () => {
    waiting = true;
    const response = await fetch('/admin/iconify/upload');
    if (response.ok) {
      iconset = await response.json();
    } else alert('Ошибка HTTP: ' + response.status);
    setTimeout(() => (waiting = false), 300);
  };

  const robots = 'noindex, follow';
  const title = 'НИЦ СЭ • Admin [ Iconify ]';
</script>

<Head
  {robots}
  {title} />

<main>
  <header class="frame flex items-center gap-x-4">
    <a
      class="
        transition-easy text-slate-500 hover:scale-125
        hover:text-sky-600"
      href="/admin">
      <Icon
        class="-mt-4 h-8 w-8 drop-shadow-md"
        icon="ic:outline-settings" />
    </a>
    <h1 class="title grow">Iconify</h1>
    <a
      rel="noreferrer nofollow"
      class="w-24 transition-all duration-300
             ease-in-out hover:scale-110 sm:w-32"
      href="https://github.com/daks-dev/daks-nic"
      target="_blank">
      <img
        class="h-auto w-full"
        src="/assets/icons/github.svg"
        alt="GitHUB" />
    </a>
  </header>

  {#if DEV}
    <div class="frame mb-8 flex items-center justify-start">
      <button
        on:click|preventDefault={upload}
        type="button"
        class="mx-2 rounded-sm border-2 px-3 py-2"
        disabled={waiting}>
        UPLOAD
      </button>
      {#if waiting}
        <Icon
          icon="svg-spinners:180-ring-with-bg"
          class="h-8 w-8" />
      {:else}
        {#each Object.entries(iconset) as [key, val]}
          <div class="px-2">
            <i class="font-mono text-xl text-slate-500">{key}</i> : {val}
          </div>
        {/each}
      {/if}
    </div>
  {/if}

  <div class="frame divide-y divide-dotted">
    {#if data.custom.length}
      <Bundle
        prefix="custom"
        icons={data.custom} />
    {/if}
    {#each data.bundles as { prefix, icons }}
      <Bundle
        {prefix}
        icons={Object.keys(icons)} />
    {/each}
  </div>
</main>
