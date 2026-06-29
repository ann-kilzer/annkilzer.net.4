import { defineConfig, devices } from '@playwright/test'

const baseURL = process.env.BASE_URL ?? 'http://localhost:5174'

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: 'html',
  use: {
    baseURL,
    trace: 'on-first-retry',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],
  webServer: process.env.BASE_URL ? undefined : {
    command: 'npm run dev -- --port 5174',
    url: 'http://localhost:5174',
    reuseExistingServer: true,
  },
})
