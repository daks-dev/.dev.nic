import { promises as fs } from 'node:fs';
import { resolve } from 'node:path';

import app from '$lib/configs/app';

const pkg = JSON.parse(await fs.readFile(resolve(process.cwd(), 'package.json'), 'utf8'));
const { version } = pkg;

const canonical = process.env.PUBLIC_APP_CANONICAL
  ? new URL(process.env.PUBLIC_APP_CANONICAL).origin
  : '';

const data = {
  version,
  api_version: 1,
  layout: {
    logo: `${canonical}/favicon/tableau/60.png?v=${version}`, //encodeURIComponent()
    color: app.tileColor,
    show_title: true
  }
};

export const prerender = true;

export async function GET() {
  return new Response(JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
