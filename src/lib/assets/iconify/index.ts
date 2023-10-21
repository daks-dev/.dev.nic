import { DEV } from 'esm-env';
import { addCollection } from '@iconify/svelte/offline';

import bundles from './bundles.json';
bundles.forEach((bundle: any) => addCollection(bundle));

const custom = [
  // 'svelte-logo'
  // 'bars-scale-bottom',
  'blocks-scale'
  // 'blocks-wave',
  // 'dots-scale-rotate'
];

// BROWSER && custom.forEach(async (val) => await import(`./custom/${val}`));
/*
if (BROWSER)
  for (const file of custom)
    import(`./custom/${file}`).then(() => console.log(file)).catch((e) => console.error(e));
*/

// import './custom/svelte-logo';
// import './custom/bars-scale-bottom';
import './custom/blocks-scale';
// import './custom/blocks-wave';
// import './custom/dots-scale-rotate';

export default custom;

DEV && console.debug('CSR iconify');
