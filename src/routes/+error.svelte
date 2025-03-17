<script lang="ts">
  import { page } from '$app/state';

  const online = typeof navigator !== 'undefined' ? navigator.onLine : true;
</script>

<svelte:head>
  <title>НИЦ СЭ • {page.status}</title>
  <meta
    name="description"
    content="Ошибка в работе приложения" />
</svelte:head>

<main class="frame flex flex-col items-center">
  {#if online}
    <h1 class={['w-full', 'font-mono text-[35vh] font-bold text-slate-500']}>
      {page.status}
    </h1>
    <p class={['w-full px-12 py-8', 'bg-rose-600 text-xl text-gray-200', 'rounded-sm']}>
      {#if page.error?.message}
        {page.error.message}
      {:else}
        Обнаружена ошибка
      {/if}
      <small class="block text-sm text-slate-300">{page.url.href}</small>
    </p>
  {:else}
    <h1 class={['mt-auto w-full', 'text-4xl leading-loose']}>
      Похоже отсутствует подключение к интернету
    </h1>
    <p class="mb-auto w-full">Перегрузите страницу при восстановлении соединения.</p>
  {/if}
</main>
