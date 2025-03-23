<script lang="ts">
  import { onMount } from 'svelte';
  import { Lightbox, Sign, Figure, YandexMetrikaHit } from '@daks.dev/svelte.sdk';

  import type { PageProps } from './$types';
  let { data }: PageProps = $props();
  const { modified, source } = data;

  const title = 'НИЦ «СЭ» • Судебная экспертиза';
  const description = 'Судебная экспертиза АО НИЦ «Строительная экспертиза»';

  onMount(() => document?.lazyload.update());
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <header class="frame">
    <h1 class="title">Судебная экспертиза</h1>
  </header>

  <div class={['readable', 'frame flex flex-col md:block', 'sm:text-justify']}>
    <Lightbox
      class={[
        'group relative',
        'order-2 mx-auto mt-6',
        'md:order-none md:float-right md:my-1 md:mr-auto md:ml-8'
      ]}
      custom={{ overlay: 'overflow-offset' }}
      title="НИЦ «Строительная экспертиза»"
      description="свидетельство Палаты судебных экспертов НП «СУДЭКС»">
      {#snippet thumbnail()}
        <Sign
          class="top-1 left-1"
          icon="ic:round-zoom-out-map"
          dark />
        <Figure
          data={modified}
          class={['relative', 'flex flex-col', 'items-center']}
          custom={{
            image: [
              'h-auto w-full max-w-full object-contain',
              'shadow-md hover:shadow-lg',
              'hover:scale-105',
              'transition duration-300 ease-in-out'
            ]
          }}
          alt="свидетельство палаты судебных экспертов" />
        <link
          rel="image"
          href={source.src} />
        <link
          rel="thumbnailUrl"
          href={modified.src} />
      {/snippet}
      <img
        class="bg--loading bg-10% bg-center bg-no-repeat"
        src={source.src}
        width={source.width}
        height={source.height}
        alt=""
        decoding="async"
        loading="lazy" />
    </Lightbox>

    <p>
      Научно-исследовательский центр «<b>Строительная экспертиза</b>» является членом
      <a
        href="//www.sudex.ru/"
        target="_blank">
        Палаты судебных экспертов НП «СУДЭКС»
      </a>
      и обладает большим опытом в проведении различных экспертиз, в том числе судебных и досудебных.
    </p>
    <p class="leader">
      Наши сотрудники являются дипломированными судебно-техническими экспертами, имеют научные
      степени, высшее специальное образование и многолетний опыт работ в:
    </p>
    <ul>
      <li>
        анализе смет (проектно-сметной документации) на строительство и ремонт, а также составление
        строительных смет;
      </li>
      <li>
        строительном конструировании, анализе, контроле качества строительных работ и надежности
        конструкций, экспертизе технологии, организации производства работ, экономики строительства;
      </li>
      <li>
        сборе и обработке информации об использовании энергетических ресурсов для энергетического
        паспорта;
      </li>
      <li>
        проведении исследований строительных объектов и территорий, функционально связанных с ними,
        подготовке заключения по поставленным компетентными органами вопросам;
      </li>
      <li>
        оценке безопасности эксплуатации зданий, сооружений, попадающих под действие закона «о
        промышленной безопасности опасных производственных объектов» РД 22-01.97;
      </li>
      <li>экспертном заключении о готовности здания или сооружения к сдаче в эксплуатацию;</li>
      <li>инженерно-техническом обследовании зданий и сооружений различного назначения;</li>
      <li>
        технадзоре при строительстве крупных промышленных или административных объектов, при
        строительстве и ремонте частных коттеджей;
      </li>
      <li>проверке всех строительных работ;</li>
      <li>оценке и переоценке недвижимой собственности.</li>
    </ul>
    <p>
      Также мы предоставляем весь комплекс работ по лабораторному сопровождению на объектах
      строительства с проведением испытаний и контролем качества материалов, изделий и конструкций.
    </p>
  </div>
</main>
