/// <reference types="@daks.dev/svelte.sdk/types" />

declare module '*.svx' {
  import type { SvelteComponent } from 'svelte';
  export default class Comp extends SvelteComponent {}
  export const metadata: Record<string, unknown>;
}
declare module '*.svelte.md' {
  import type { SvelteComponent } from 'svelte';
  export default class Comp extends SvelteComponent {}
  export const metadata: Record<string, unknown>;
}

type ComponentType = import('svelte').ComponentType;
declare interface MdsvexLoad {
  default: ComponentType;
  metadata: Record<string, unknown>;
}

declare namespace App {
  // interface Locals {}
  // interface PageData {}
  // interface Error {}
  // interface Platform {}
}
