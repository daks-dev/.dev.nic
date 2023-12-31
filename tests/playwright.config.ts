import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  webServer: {
    command: 'pnpm preview',
    port: 4173
  },
  testMatch: 'tests/**/.*(test|spec).(js|ts)'
};

export default config;
