<script lang="ts">
  import { onMount } from 'svelte';
  import { Button } from 'flowbite-svelte';
  import {
    Icon,
    CarouselKit,
    TestimonialPlaceholder,
    Video,
    YandexMetrikaHit
  } from '@daks.dev/svelte.sdk';

  import type { PageProps } from './$types';
  let { data }: PageProps = $props();
  const { gallery, customers } = data;

  import microdata from '$lib/configs/microdata';
  const { email, telephone, address } = microdata.organization;

  const title = 'НИЦ «СЭ» • Строительная экспертиза';
  const description = 'АО НИЦ «Строительная экспертиза», Москва';

  let opacity = $state(0);
  const video = {
    'data-src': '/assets/videos/00.720p.4^3.mp4',
    width: 480,
    height: 360,
    controls: true,
    controlsList: 'nofullscreen nodownload',
    muted: true,
    autoplay: true,
    loop: true,
    loaded: () => (opacity = 1)
  };

  const show = (x: number) => (x < 480 && 2) || (x < 1024 && 3) || 4;

  onMount(() => document?.lazyload.update());
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <header class="frame-xl mb-8">
    <div class="grid w-full gap-8 pt-8 lg:grid-cols-12">
      <div class="mr-auto place-self-center lg:col-span-7 2xl:col-span-8">
        <h1
          class={[
            'mb-8',
            'leading-tight font-extrabold',
            'text-4xl sm:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl',
            'text-slate-800 dark:text-slate-200',
            'shadow-gray-400 text-shadow-3 dark:shadow-gray-600'
          ]}>
          <span class="block text-[125%]">АО НИЦ</span>
          Строительная экспертиза
        </h1>
        <p
          class={[
            'mb-4',
            'font-light uppercase',
            'xs:text-md text-sm lg:text-lg',
            'text-gray-500 dark:text-gray-400'
          ]}>
          один из лидеров на строительном рынке в области консалтинга, лабораторного сопровождения
          строительства, обследования зданий и сооружений
        </p>
        <div class="flex justify-around xs:hidden">
          <Button
            href="tel://{telephone.replace(/[\s-()]/g, '')}"
            class="shadow-md shadow-slate-500/20"
            color="light"
            size="xl">
            <Icon
              icon="ic:round-phone-in-talk"
              class="h-16 w-16 text-cyan-600 dark:text-cyan-700" />
          </Button>
          <Button
            href="mailto:{email}"
            class="shadow-md shadow-slate-500/20"
            color="light"
            size="xl">
            <Icon
              icon="ic:round-mail-outline"
              class="h-16 w-16 text-cyan-600 dark:text-cyan-700" />
          </Button>
        </div>
        <div
          class="
            hidden flex-col gap-y-2 text-slate-600
            xs:flex dark:text-slate-400">
          <a
            class="
              text-3xl font-semibold transition duration-200
              ease-in-out hover:text-sky-500 xl:text-4xl"
            href="tel://{telephone.replace(/[\s-()]/g, '')}">
            {telephone}
          </a>
          <a
            rel="nofollow noreferrer"
            class="
              text-lg transition-all duration-200
              ease-in-out hover:text-sky-500 xl:text-xl"
            href={address.url}
            target="_blank"
            itemprop="url">
            {@html address.addressLocality}, {@html address.streetAddress}
          </a>
        </div>
      </div>
      <div
        class="
          hidden
          lg:col-span-5 lg:mt-0 lg:block 2xl:col-span-4">
        <Video
          class={[
            'lazy',
            'h-auto w-full max-w-full',
            'rounded-lg border border-gray-200 dark:border-gray-700',
            'transition-opacity duration-3000 ease-in'
          ]}
          style="opacity:{opacity}"
          {...video} />
      </div>
    </div>
  </header>

  <div class="frame readable mb-8">
    <p class="leader">Основными направлениями деятельности компании являются:</p>
    <ul>
      <li>
        Контроль качества при возведении зданий и сооружений, в т.ч. высотных, большепролетный и
        технически сложных;
      </li>
      <li>Обследование зданий и сооружений;</li>
      <li>Технический надзор;</li>
      <li>Лабораторное сопровождение строительства;</li>
      <li>Геодезическое сопровождение строительства;</li>
      <li>
        Мониторинг за возводимым зданием, а также за объектами, попадающими в геотехническую зону
        влияния;
      </li>
      <li>Выполнение работ по зимнему уходу за монолитными железобетонными конструкциями;</li>
      <li>Судебная экспертиза.</li>
    </ul>
  </div>

  <CarouselKit
    dataset={gallery}
    href="/projects"
    class={[
      'relative frame-xl mb-4 overflow-hidden',
      'rounded-xs shadow-sm shadow-gray-700 lg:rounded-sm dark:shadow-gray-900',
      'hover:shadow-lg'
    ]}
    alt="реализованный объект"
    {show}
    duration={20000}
    stream
    progress
    aria-label="реализованные проекты ниц «строительная экспертиза»" />

  <div class="frame readable mb-16">
    <p class="leader">
      Наиболее известными среди реализованных нами объектов за последние несколько лет являются:
    </p>
    <ul>
      <li>обследование комплекса жилых зданий на ул.Мосфильмовской в г.Москве;</li>
      <li>
        выполнение контроля качества и лабораторного сопровождения при возведении стадиона Спартак;
      </li>
      <li>проведение контроля качества при возведении жилого комплекса Сетунь;</li>
      <li>
        лабораторное сопровождение строительства при возведении гостиничного комплекса на ул.
        Бахрушина в Москве;
      </li>
      <li>обследование зданий Международного Центра на Кутузовском проспекте;</li>
      <li>лабораторный контроль при возведении жилого комплекса Алые Паруса;</li>
      <li>геодезическое сопровождение при возведении жилого комплекса «Правый берег»;</li>
      <li>
        лабораторное сопровождение строительства бизнес центра «Водный» и многофункционального
        комплекса «Лотос»;
      </li>
      <li>выполнение строительного контроля при возведении памятника П.А. Столыпину.</li>
    </ul>

    <div class="mt-8 flex flex-wrap justify-center gap-16 sm:flex-nowrap">
      <CarouselKit
        dataset={customers}
        class={[
          'w-60 shrink-0 place-self-center overflow-hidden',
          'rounded-xs shadow-sm shadow-gray-700 lg:rounded-sm dark:shadow-gray-900',
          'hover:shadow-lg'
        ]}
        href="/feedback"
        alt="реализованный объект"
        show={1}
        duration={1000}
        delay={5000}
        autoplay
        aria-label="отзывы заказчиков ниц «строительная экспертиза»" />
      <div class="placeholders">
        <p class="mb-8 text-sm text-accent">
          <span class="text-xl font-bold">&#10004;</span> Любая информация, представленная на данном
          сайте, носит исключительно информационный характер и ни при каких условиях не является публичной
          офертой, определяемой положениями статьи 437 ГК РФ.
        </p>
        <TestimonialPlaceholder />
      </div>
    </div>
  </div>
</main>
