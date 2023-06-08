//Expanding and asserting text in client tab all inspector.

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
  await page.getByRole('link').nth(2).click();
  await page.locator('.css-mslw24').first().click();
  await page.getByRole('button', { name: 'Related cases' }).click();
  await expect(page.getByText('ID')).not.toHaveCount(0);
  await expect(page.getByText('Status')).not.toHaveCount(0);
  await expect(page.getByText('Created')).not.toHaveCount(0);
  await page.getByRole('button', { name: 'Related cases' }).click();
  await page.getByRole('button', { name: 'Related entities' }).click();
  await expect(page.getByRole('list')).not.toBeEmpty();
  await page.getByRole('button', { name: 'Related entities' }).click();
});