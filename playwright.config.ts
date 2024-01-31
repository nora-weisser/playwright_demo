import { defineConfig, devices } from '@playwright/test';
import type { TestOptions } from './helpers/test-options';
import { USERS } from './test_data/login.data';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig<TestOptions>({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'https://www.saucedemo.com/',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'standard_user',
      use: { ...devices['Desktop Chrome'], targetUser: USERS['standard_user'] },
    },

    {
      name: 'locked_out_user',
      use: { ...devices['Desktop Chrome'], targetUser: USERS['locked_out_user'] },
    },

    {
      name: 'problem_user',
      use: { ...devices['Desktop Chrome'], targetUser: USERS['problem_user'] },
    },
    {
      name: 'performance_glitch_user',
      use: { ...devices['Desktop Chrome'], targetUser: USERS['performance_glitch_user'] },
    },
    {
      name: 'error_user',
      use: { ...devices['Desktop Chrome'], targetUser: USERS['error_user'] },
    },
    {
      name: 'visual_user',
      use: { ...devices['Desktop Chrome'], targetUser: USERS['visual_user'] },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
