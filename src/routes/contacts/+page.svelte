<script lang="ts">
  import {
    Contacts,
    Figure,
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

  <div class="frame flex items-center justify-between gap-8">
    <Contacts
      class="h-fit py-4"
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
          <Figure
            data={thumbnail}
            class={['relative', 'flex flex-col', 'items-center']}
            custom={{
              image: [
                'h-auto w-full max-w-full object-contain',
                'rounded-md',
                'shadow-md hover:shadow-lg',
                'hover:scale-105',
                'transition duration-300 ease-in-out'
              ]
            }}
            alt="контактная информация" />
          {#each sources as source}
            <link
              rel="image"
              href={source.src} />
          {/each}
          <link
            rel="thumbnailUrl"
            href={thumbnail.src} />
        </LightboxThumbnail>
      </svelte:fragment>
      {#each sources as source}
        <LightboxModal>
          <img
            {...source}
            alt=""
            decoding="async"
            loading="lazy" />
        </LightboxModal>
      {/each}
    </LightboxList>
  </div>

  <div
    class="
      frame flex h-[40vmax]
      grow xs:h-[35vmax] sm:h-[30vmax] md:h-[25vmax] lg:h-auto">
    <YandexMap
      class={[
        'min-h-full w-full overflow-hidden',
        'bg-gray-200 bg--waiting bg-25% bg-center bg-no-repeat sm:bg-20% md:bg-10% xl:bg-5%',
        'border-4 border-slate-400'
      ]}
      data={dataset} />
  </div>
</main>
