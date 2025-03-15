import { read } from '$app/server';
import { promises as fs } from 'node:fs';
import { resolve } from 'node:path';
import type { PageServerLoad } from './$types';

const pkg = JSON.parse(await fs.readFile(resolve(process.cwd(), 'package.json'), 'utf8'));
const { version } = pkg;

/*
import { DEV } from 'esm-env';
import { imagetools } from '@daks.dev/svelte.sdk/server';
const { generate, variants } = imagetools;

DEV && generate('lib/assets/images/gallery', variants().gallery);
*/

export const load: PageServerLoad = async () => ({
  version
});
