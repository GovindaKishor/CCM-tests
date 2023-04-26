//Even after changing system language to Fench "No result found" is in english for all the task.

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
  await page.getByRole('link').nth(1).click();
  await page.locator('.MuiChip-label').first().dblclick();
  await expect(page.locator('text=No results found')).toHaveCount(1);
});