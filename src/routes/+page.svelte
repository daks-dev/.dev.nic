<script lang="ts">
  import { Button } from 'flowbite-svelte';
  import {
    YandexMetrikaHit,
    ImagePlaceholder,
    Skeleton,
    TestimonialPlaceholder,
    TextPlaceholder,
    VideoPlaceholder,
    Icon
  } from '@daks.dev/svelte.sdk';

  import microdata from '$lib/configs/microdata';
  const { email, telephone, address } = microdata.organization;

  const title = 'НИЦ СЭ • Строительная экспертиза';
  const description = 'АО НИЦ «Строительная экспертиза», Москва';
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <header class="frame-xl">
    <div class="grid w-full gap-8 pt-8 lg:grid-cols-12">
      <div class="mr-auto place-self-center lg:col-span-7 2xl:col-span-8">
        <h1
          class="
            dark:text-shadow
            mb-8 text-4xl
            leading-tight font-extrabold text-slate-800 sm:text-5xl lg:text-4xl
            xl:text-5xl 2xl:text-6xl dark:text-slate-200"
          style:--text-shadow-val="3px">
          <span class="block text-[125%]">АО&nbsp;НИЦ</span>
          Строительная экспертиза
        </h1>
        <p
          class="
            xs:text-md mb-4
            text-sm font-light text-gray-500 uppercase lg:text-lg dark:text-gray-400">
          один из лидеров на строительном рынке в области консалтинга, лабораторного сопровождения
          строительства, обследования зданий и сооружений
        </p>
        <div class="xs:hidden flex justify-around">
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
            xs:flex hidden flex-col gap-y-2
            text-slate-600 dark:text-slate-400">
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
          placeholders hidden
          lg:col-span-5 lg:mt-0 lg:flex 2xl:col-span-4">
        <VideoPlaceholder
          class="h-auto w-full max-w-full"
          size="48" />
      </div>
    </div>
  </header>

  <div class="placeholders frame">
    <div class="mb-16 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
      <ImagePlaceholder />
      <TextPlaceholder />
      <Skeleton />
      <ImagePlaceholder class="-scale-x-100" />
      <TextPlaceholder />
      <Skeleton />
      <TextPlaceholder class="lg:order-last lg:-scale-x-100" />
      <Skeleton class="lg:mr-auto lg:-scale-x-100" />
    </div>
    <TestimonialPlaceholder />
  </div>
</main>
