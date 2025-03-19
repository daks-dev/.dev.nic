/// <reference types="@daks.dev/svelte.sdk/types" />

type ComponentType = import('svelte').ComponentType;
declare interface MDComponent extends ComponentType {
  $$prop_def: NonNullable<unknown>;
}
declare interface MDLoadData {
  metadata: Record<string, unknown>;
  default: MDComponent;
}
declare module '*.svx' {
  const Component: MDComponent;
  export default Component;
  export const metadata: Record<string, unknown>;
}

declare namespace App {
  // interface Locals {}
  // interface PageData {}
  // interface Error {}
  // interface Platform {}
}
