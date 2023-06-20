//New module called translation and for four languages.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-test.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox').nth(0).fill('SUPERUSER');
  await page.getByRole('textbox').nth(1).fill('SUPERUSER');
  await page.getByRole('button').nth(2).click();
  await page.getByRole('button').nth(0).click();
  await page.getByRole('menuitem').nth(1).click();
  await page.getByRole('button').nth(3).click();
  await page.getByRole('option').nth(1).click();
  await page.getByRole('link').nth(3).click();
  await page.getByRole('cell').nth(0).click();
  await page.getByRole('button').nth(4).click();
  await page.getByRole('link').nth(2).click();
  await expect(page.getByText('Translation')).not.toHaveCount(0);
  await expect(page.getByText('DE')).not.toHaveCount(0);
  await expect(page.getByText('EN')).not.toHaveCount(0);
  await expect(page.getByText('IT')).not.toHaveCount(0);
  await expect(page.getByText('FR')).not.toHaveCount(0);
});