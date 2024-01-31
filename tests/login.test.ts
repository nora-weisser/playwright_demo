import { expect } from '@playwright/test';
import {test} from '../helpers/test-options'

test('login with existing username and valid password', async ({ page, targetUser }) => {
  await page.goto('/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill(targetUser["username"]);
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill(targetUser["password"]);
  await page.locator('[data-test="login-button"]').click();
  const currentURL = page.url();
  expect(currentURL).toBe('https://www.saucedemo.com/inventory.html')
  await expect(page.locator('#header_container')).toContainText('Swag Labs');
});
