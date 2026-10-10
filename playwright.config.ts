import { defineConfig, devices } from '@playwright/test';
import 'dotenv/config';

const KF_URL = process.env.KF_BASE_URL ?? 'https://kellyfelder.com';
const SANDBOX_URL = process.env.SANDBOX_BASE_URL ?? 'https://practicesoftwaretesting.com';

export default defineConfig({
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: [['html', { open: 'never' }], ['list']],
  use: {
    trace: 'on-first-retry',
    screenshot: { mode: 'only-on-failure', fullPage: true },
  },
  projects: [
    {
      name: 'kellyfelder',
      testDir: './tests/kellyfelder',
      use: { ...devices['Desktop Chrome'], baseURL: KF_URL },
    },
    {
      name: 'sandbox-chromium',
      testDir: './tests/sandbox',
      use: { ...devices['Desktop Chrome'], baseURL: SANDBOX_URL, testIdAttribute: 'data-test' },
    },
    {
      name: 'sandbox-firefox',
      testDir: './tests/sandbox',
      use: { ...devices['Desktop Firefox'], baseURL: SANDBOX_URL, testIdAttribute: 'data-test' },
    },
  ],
})