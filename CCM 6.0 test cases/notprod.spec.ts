//Checking its not production environment.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await expect(page.locator('text=version')).toHaveCount(1);
  await expect(page.locator('text=PROD')).toHaveCount(0);
});