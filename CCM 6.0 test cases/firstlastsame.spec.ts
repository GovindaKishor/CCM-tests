//Testing first name and last name of superuser when both names are same.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/auth/login');
  await page.getByRole('textbox').nth(0).fill('SUPERUSER2');
  await page.getByRole('textbox').nth(1).fill('SUPERUSER2');
  await page.getByRole('button').nth(2).click();
  await page.getByRole('button').nth(0).click();
  await page.getByRole('menuitem').nth(1).click();
  await page.getByRole('link').nth(3).click();
  await page.locator('button').nth(-1).click();
  await page.getByRole('textbox').nth(0).fill('Automation Testing');
  await page.getByRole('radio').nth(0).check();
  await page.getByRole('button').nth(0).click();
  await page.getByRole('option').nth(0).click();
  await page.getByRole('button').nth(3).click(); 
  await page.getByRole('button').nth(15).click();
  await page.getByRole('textbox').nth(0).fill('Testing');
  await page.getByRole('button').nth(1).click();
  await expect(page.locator('text=SS')).not.toHaveCount(0);
  await expect(page.locator('text=SUPERUSER2')).not.toHaveCount(0);
});