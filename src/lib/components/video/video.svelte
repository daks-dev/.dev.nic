<script lang="ts">
  import { twMerge } from '@daks.dev/svelte.sdk/tailwind-merge';

  import type { HTMLVideoAttributes } from 'svelte/elements';
  type Props = Omit<HTMLVideoAttributes, 'class'> & {
    src: string;
    class?: ClassName;
    type?: string;
    loaded?: (x?: Event) => void;
  };
  const {
    children,
    src,
    class: className,
    type = 'video/mp4',
    loaded = () => {},
    ...rest
  }: Props = $props();
</script>

<video
  onloadeddata={loaded}
  class={twMerge(className)}
  {...rest}>
  <source
    {src}
    {type} />
  {#if children}
    {@render children()}
  {:else}
    Your browser does not support the video tag.
  {/if}
</video>
