//Exploring all the actions that can be performed on active configuration.

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
  await page.getByRole('row', { name: 'Automation Testing' }).getByRole('button', { name: 'Config actions' }).click();
  await page.getByRole('menuitem').nth(0).click();
  await page.getByRole('textbox').nth(0).fill('Approved');
  await page.getByRole('button').nth(1).click();
  await page.getByRole('cell', { name: 'Automation Testing' }).click();
  await page.getByRole('main').getByRole('button', { name: 'Validate' }).click();
  await page.getByRole('button', { name: 'Export' }).click();
  await page.getByRole('button').nth(0).click();
  await page.getByRole('button', { name: 'Duplicate' }).click();
  await page.getByRole('button').nth(0).click();
});