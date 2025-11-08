// playwright.config.js
import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 30_000,
  use: {
    baseURL: 'http://localhost:3000',
    headless: true,
  },
  webServer: {
    command: 'npm run dev',   // or 'yarn dev'
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },

  // THIS IS THE KEY
  reporter: [
    ['html', { open: 'never', outputFolder: 'playwright-report' }], // HTML report
    ['json', { outputFile: 'test-results/results.json' }],          // optional
  ],
});