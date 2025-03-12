//import { dev } from '$app/environment';
//export const csr = dev;
export const prerender = true;

import type { LayoutLoad } from './$types';
export const load: LayoutLoad = ({ url }) => ({
  refresh: url.pathname
});
