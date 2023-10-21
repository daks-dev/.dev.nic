<script lang="ts">
  import { YandexMetrikaHit, Contacts, YandexMap } from '@daks.dev/svelte.sdk';

  import microdata from '$lib/configs/microdata';

  const data = {
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
  <header class="content mb-0">
    <h1 class="title">Контакты</h1>
  </header>

  <Contacts
    class="content"
    {microdata} />

  <div
    class="
      content xs:h-[35vmax] flex
      h-[40vmax] grow sm:h-[30vmax] md:h-[25vmax] lg:h-auto">
    <YandexMap
      class={[
        'min-h-full w-full overflow-hidden',
        'bg-waiting bg-25% sm:bg-20% md:bg-10% xl:bg-5% bg-gray-200 bg-center bg-no-repeat',
        'border-4 border-slate-400'
      ]}
      {data} />
  </div>
</main>
