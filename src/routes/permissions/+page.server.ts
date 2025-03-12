import getter from '$lib/content/permissions/index.async';

import type { PageServerLoad } from './$types';
export const load: PageServerLoad = async () => ({
  ...(await getter())
});
