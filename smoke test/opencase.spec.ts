//Open a case and verify if details loads properly.

import { test, expect } from '@playwright/test';

test('open a existing case', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox').nth(0).fill('SUPERUSER');
  await page.getByRole('textbox').nth(1).fill('SUPERUSER');
  await page.getByRole('button').nth(2).click();
  await page.getByRole('button').nth(0).click();
  await page.getByRole('menuitem').nth(1).click();
  await page.getByRole('button').nth(3).click();
  await page.getByRole('option').nth(1).click();
  await page.getByRole('link').nth(0).click();
  await page.locator('.css-mslw24').first().dblclick();
  await page.locator('[data-test-id="virtuoso-top-item-list"]').getByRole('checkbox').check();
  await expect(page.locator('text=Task')).not.toHaveCount(0);
  await expect(page.locator('text=Customer')).not.toHaveCount(0);
  await expect(page.locator('text=Document')).not.toHaveCount(0);
  await expect(page.locator('text=Case')).not.toHaveCount(0);
});