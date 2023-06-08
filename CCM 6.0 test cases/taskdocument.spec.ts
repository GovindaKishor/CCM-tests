//Expanding and asserting text in task tab document inspector.

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
  await page.locator('.css-mslw24').first().click();
  await page.getByRole('tab', { name: 'Documents' }).click();
  await page.getByRole('button', { name: 'Documents' }).click();
  await expect(page.getByText('Document', { exact: true })).not.toHaveCount(0);
  await page.getByRole('button', { name: 'Documents' }).click();
});