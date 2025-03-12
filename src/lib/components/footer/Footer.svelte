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

<Footer class="px-2 py-3 text-sm sm:px-4">
  <div class="wrapper-2xl mx-auto flex items-center max-sm:flex-col sm:justify-between">
    <FooterCopyright
      href="/"
      by="НИЦ «Строительная экспертиза»&trade;"
      year={2022} />
    {#if links.length}
      <FooterLinkGroup
        class="mt-3 flex flex-wrap items-center text-sm text-gray-500 sm:mt-0 dark:text-gray-400">
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
  </div>
</Footer>
