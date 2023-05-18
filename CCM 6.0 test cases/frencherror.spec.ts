//No error in loading cases after changing system language to French.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/auth/login');
  await page.getByRole('textbox').nth(0).fill('SUPERUSER');
  await page.getByRole('textbox').nth(1).fill('SUPERUSER');
  await page.getByRole('button').nth(2).click();
  await page.getByRole('button').nth(0).click();
  await page.getByRole('menuitem').nth(1).click();
  await page.getByRole('button').nth(3).click();
  await page.getByRole('option').nth(3).click();
  await page.getByRole('link').nth(0).click();
  await expect(page.locator('text=Error: [@formatjs/intl Error FORMAT_ERROR] Error formatting message:')).toHaveCount(0);
  await page.getByRole('link').nth(1).click();
  await expect(page.locator('text=Error: [@formatjs/intl Error FORMAT_ERROR] Error formatting message:')).toHaveCount(0);
  await page.getByRole('link').nth(2).click();
  await expect(page.locator('text=Error: [@formatjs/intl Error FORMAT_ERROR] Error formatting message:')).toHaveCount(0);
});