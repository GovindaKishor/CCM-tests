//Verify tasks are displayed.

import { test, expect } from '@playwright/test';

test('tasks', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox').nth(0).fill('SUPERUSER');
  await page.getByRole('textbox').nth(1).fill('SUPERUSER');
  await page.getByRole('button').nth(2).click();
  await page.getByRole('link').nth(1).click();
  await page.locator('.css-mslw24').first().click();
  await page.locator('[data-test-id="virtuoso-top-item-list"]').getByRole('checkbox').check();
});