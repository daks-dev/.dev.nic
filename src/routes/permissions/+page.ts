import getter from '$lib/content/permissions/index.async';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => ({
  ...(await getter())
});
