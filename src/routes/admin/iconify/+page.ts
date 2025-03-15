import { DEV } from 'esm-env';
import type { PageLoad } from './$types';

export const prerender = !DEV;

import bundles from '$iconify/bundles.json';
import custom from '$iconify';

export const load: PageLoad = () => ({
  bundles,
  custom
});
