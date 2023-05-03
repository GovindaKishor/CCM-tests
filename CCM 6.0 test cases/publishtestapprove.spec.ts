//Status and actions after configuration in testing changed to draft. 

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/auth/login');
  await page.getByRole('textbox').nth(0).fill('SUPERUSER');
  await page.getByRole('textbox').nth(1).fill('SUPERUSER');
  await page.getByRole('button').nth(2).click();
  await page.getByRole('link').nth(3).click();
  await page.locator('button').nth(-1).click();
  await page.getByRole('textbox').nth(0).fill('Automation');
  await page.getByRole('radio').nth(0).check();
  await page.getByRole('button').nth(0).click();
  await page.getByRole('option').nth(0).click();
  await page.getByRole('button').nth(3).click();
  await page.getByRole('button').nth(9).click();
  await page.getByRole('button').nth(1).click();
  await page.getByRole('link').nth(3).click();
  await page.locator('button').nth(-1).click();
  await page.getByRole('textbox').nth(0).fill('Testing');
  await page.getByRole('radio').nth(0).check();
  await page.getByRole('button').nth(0).click();
  await page.getByRole('option').nth(0).click();
  await page.getByRole('button').nth(3).click();
  await page.getByRole('button').nth(8).click();
  await page.getByRole('textbox').nth(0).fill('Please approve');
  await page.getByRole('button').nth(1).click();
  await page.getByRole('button').nth(0).click();
  await page.getByRole('menuitem').nth(1).click();
  await page.getByRole('link').nth(0).click();
  await page.getByRole('textbox').nth(0).fill('SUPERUSER2');
  await page.getByRole('textbox').nth(1).fill('SUPERUSER2');
  await page.getByRole('button').nth(2).click();
  await page.getByRole('link').nth(3).click();
  await page.getByRole('row', { name: 'Testing' }).getByRole('button', { name: 'Config actions' }).click();
  await page.getByRole('menuitem').nth(0).click();
  await page.getByRole('textbox').nth(0).fill('Approved');
  await page.getByRole('button').nth(1).click();
  await page.getByRole('row', { name: 'Automation' }).getByRole('button', { name: 'Config actions' }).click();
  await expect(page.locator('text=Send for Approval')).toHaveCount(1);
  await expect(page.locator('text=Publish Test')).toHaveCount(1);
  await expect(page.locator('text=Edit')).toHaveCount(1);
  await expect(page.locator('text=Validate')).toHaveCount(1);
  await expect(page.locator('text=Export')).toHaveCount(1);
  await expect(page.locator('text=Duplicate')).toHaveCount(1);
  await expect(page.locator('text=Delete')).toHaveCount(1);
});