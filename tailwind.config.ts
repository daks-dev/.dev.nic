import colors from 'tailwindcss/colors.js';
import type { Config } from 'tailwindcss';

import common from '@daks.dev/svelte.sdk/tailwind/presets/common';
import { fontSans } from '@daks.dev/svelte.sdk/tailwind/font-family';

import screens from '@daks.dev/svelte.sdk/tailwind/screens';
const breakpoint = 768; // process.env.PUBLIC_BREAKPOINT ?? 1024;

export default {
  content: [
    './src/**/*.{html,js,ts,svelte}',
    ...common.content,
    './node_modules/flowbite-svelte/**/*.{html,js,ts,svelte}'
  ],

  presets: [common],

  theme: {
    screens: screens(breakpoint),
    extend: {
      fontFamily: fontSans(),
      colors: {
        primary: colors.slate
      }
    }
  },

  plugins: [require('flowbite/plugin')]
} satisfies Config;
