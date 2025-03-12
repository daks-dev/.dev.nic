<script lang="ts">
  import { onMount } from 'svelte';
  import {
    Contacts,
    LightboxList,
    LightboxThumbnail,
    LightboxModal,
    Sign,
    YandexMap,
    YandexMetrikaHit
  } from '@daks.dev/svelte.sdk';

  import type { PageProps } from './$types';
  let { data }: PageProps = $props();
  const { thumbnail, sources } = data;

  import microdata from '$lib/configs/microdata';

  const dataset = {
    locations: [
      {
        geometry: [55.771174, 37.60589],
        properties: {
          iconContent: '<strong class="tracking-wider">АО НИЦ «СЭ»</strong>',
          balloonContentHeader: 'АО НИЦ «Строительная экспертиза»',
          balloonContentBody:
            '<img class=mx-auto src=/assets/images/ymap.webp width=192 height=192 />',
          balloonContentFooter:
            '<div class=text-center>время работы: 9 <sup>00</sup> -- 19 <sup>00</sup></div>'
        },
        options: {
          preset: 'islands#nightStretchyIcon'
        }
      }
    ],
    state: {
      center: [55.771174, 37.60589],
      zoom: 17,
      behaviors: ['drag', 'dblClickZoom', 'rightMouseButtonMagnifier', 'multiTouch'],
      controls: ['zoomControl', 'fullscreenControl']
    },
    options: {
      autoFitToViewport: 'always'
    }
  };

  const title = 'НИЦ СЭ • Контакты ';
  const description = 'Контакты АО НИЦ «Строительная экспертиза»';

  onMount(() => document?.lazyload.update());
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main
  class="grow gap-8"
  itemprop="mainContentOfPage">
  <header class="frame mb-0">
    <h1 class="title">Контакты</h1>
  </header>

  <div class="frame flex items-center justify-around gap-8">
    <Contacts
      class="frame"
      {microdata} />

    <LightboxList
      class="group relative max-sm:hidden md:shrink-0"
      custom={{ overlay: 'overflow-offset' }}
      options={{ behaviour: 'loop' }}
      loader={() => document?.lazyload.update()}
      title="«Строительная экспертиза»"
      description="АО Научно Исследовательский Центр">
      <svelte:fragment slot="thumbnail">
        <LightboxThumbnail>
          <Sign
            class="top-2 left-5"
            icon="ic:round-zoom-out-map"
            dark />
          <img
            class="
            transition-easy
            oversee:scale-105 oversee:drop-shadow-lg
            mx-3 rounded-md
            drop-shadow-md transition-transform duration-300"
            {...thumbnail}
            alt="" />
        </LightboxThumbnail>
      </svelte:fragment>
      {#each sources as source}
        <LightboxModal>
          <img
            {...source}
            alt="" />
        </LightboxModal>
      {/each}
    </LightboxList>
  </div>

  <div
    class="
      frame xs:h-[35vmax] flex
      h-[40vmax] grow sm:h-[30vmax] md:h-[25vmax] lg:h-auto">
    <YandexMap
      class={[
        'min-h-full w-full overflow-hidden',
        'bg--waiting bg-25% sm:bg-20% md:bg-10% xl:bg-5% bg-gray-200 bg-center bg-no-repeat',
        'border-4 border-slate-400'
      ]}
      data={dataset} />
  </div>
</main>
