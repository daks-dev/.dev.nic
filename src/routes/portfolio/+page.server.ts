import getter from '$lib/assets/images/content/portfolio/index.async';

import type { PageServerLoad } from './$types'
export const load: PageServerLoad = async () => ({
  ...await getter()
});
