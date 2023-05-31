//Task section not going blank.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox').nth(0).fill('SUPERUSER');
  await page.getByRole('textbox').nth(1).fill('SUPERUSER');
  await page.getByRole('button').nth(2).click();
  await page.getByRole('button').nth(0).click();
  await page.getByRole('menuitem').nth(1).click();
  await page.getByRole('button').nth(3).click();
  await page.getByRole('option').nth(1).click();
  await page.getByRole('link').nth(1).click();
  await page.locator('.css-mslw24').first().dblclick();
  await expect(page.getByRole('heading', { name: 'Triggering Transaction' })).toHaveCount(1);
  await expect(page.getByRole('heading', { name: 'Add additional Transactions' })).toHaveCount(1);
  await expect(page.getByRole('heading', { name: 'Investigation : Compliance' })).toHaveCount(1);
});