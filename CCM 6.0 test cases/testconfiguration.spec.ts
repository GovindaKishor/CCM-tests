//All actions should be available for test configuration other than delete. 

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/auth/login');
  await page.getByRole('textbox').nth(0).fill('SUPERUSER');
  await page.getByRole('textbox').nth(1).fill('SUPERUSER');
  await page.getByRole('button').nth(2).click();
  await page.getByRole('link').nth(3).click();
  await page.locator('button').nth(-1).click();
  await page.getByRole('textbox').nth(0).fill('Automation Testing');
  await page.getByRole('radio').nth(0).check();
  await page.getByRole('button').nth(0).click();
  await page.getByRole('option').nth(0).click();
  await page.getByRole('button').nth(3).click(); 
  await page.getByRole('button').nth(9).click();
  await page.getByRole('button').nth(1).click();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button').nth(0).click();
  await page.getByRole('button', { name: 'Publish' }).click();
  await page.getByRole('button').nth(0).click();
  await page.getByRole('button', { name: 'Edit' }).click();
  await page.getByRole('button').nth(0).click();
  await page.getByRole('main').getByRole('button', { name: 'Validate' }).click();
  await page.getByRole('button', { name: 'Export' }).click();
  await page.getByRole('button').nth(0).click();
  await page.getByRole('button', { name: 'Duplicate' }).click();
  await page.getByRole('button').nth(0).click();
});