import getter, { sources } from '$lib/content/partners/index.async';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => ({
  dataset: await getter(sources)
});
