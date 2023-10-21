<script lang="ts">
  import { page } from '$app/stores';
  import { Footer, FooterLinkGroup } from 'flowbite-svelte';
  import { IconTest } from '@daks.dev/svelte.sdk';
  import FooterCopyright from './FooterCopyright.svelte';
  import FooterLink from './FooterLink.svelte';
  import type { NavItem } from '@daks.dev/svelte.sdk';

  export let links: Partial<NavItem>[] = [];

  $: activeUrl = $page.url.pathname;
</script>

<Footer class="text-sm">
  <FooterCopyright
    href="/"
    by="НИЦ «Строительная экспертиза»&trade;"
    year={2022} />
  {#if links.length}
    <FooterLinkGroup
      ulClass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
      {#each links as link}
        <FooterLink
          href={link.href}
          target={link.target}
          itemprop="relatedLink"
          active={activeUrl === link.href || activeUrl.indexOf(`${link.href}/`) === 0}>
          <IconTest
            class="vector-non-scaling-stroke"
            icon={link.label}
            size="18" />
        </FooterLink>
      {/each}
    </FooterLinkGroup>
  {/if}
</Footer>

<!--Footer footerType="logo">
  <div class="sm:flex sm:items-center sm:justify-between">
    <FooterBrand
      href="https://flowbite.com"
      src="https://flowbite.com/docs/images/logo.svg"
      alt="Flowbite Logo"
      name="Flowbite"
    />
    <FooterLinkGroup ulClass="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
      <FooterLink href="/">About</FooterLink>
      <FooterLink href="/">Privacy Policy</FooterLink>
      <FooterLink href="/">Licensing</FooterLink>
      <FooterLink href="/">Contact</FooterLink>
    </FooterLinkGroup>
  </div>
  <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
  <FooterCopyright href="/" by="Flowbite™" />
</Footer-->
