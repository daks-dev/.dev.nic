import { DEV } from 'esm-env';

export const prerender = !DEV;

import bundles from '$iconify/bundles.json';
import custom from '$iconify';

import type { PageLoad } from './$types';
export const load: PageLoad = () => ({
  bundles,
  custom
});
