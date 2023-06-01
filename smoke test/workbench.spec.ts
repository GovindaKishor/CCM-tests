//Is workebench working and loading well.

import { test, expect } from '@playwright/test';

test('workbench', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox').nth(0).fill('SUPERUSER');
  await page.getByRole('textbox').nth(1).fill('SUPERUSER');
  await page.getByRole('button').nth(2).click();
  await page.getByRole('button').nth(0).click();
  await page.getByRole('menuitem').nth(1).click();
  await page.getByRole('button').nth(3).click();
  await page.getByRole('option').nth(1).click();
  await page.getByRole('link').nth(3).click();
  await page.getByRole('cell').nth(0).click();
  await expect(page.locator('text=Details')).not.toHaveCount(0);
  await expect(page.locator('text=active')).not.toHaveCount(0);
  await expect(page.locator('text=status')).not.toHaveCount(0);
  await expect(page.locator('text=name')).not.toHaveCount(0);
});