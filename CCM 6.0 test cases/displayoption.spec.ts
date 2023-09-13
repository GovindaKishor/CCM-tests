//Display option in workbench

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/auth/login');
  await page.getByLabel('username').fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByRole('link', { name: 'Workbench' }).click();
  await page.locator('button').nth(-1).click();
  await page.getByRole('textbox').nth(0).fill('Automation Testing');
  await page.getByRole('radio').nth(0).check();
  await page.getByRole('button').nth(0).click();
  await page.getByRole('option').nth(0).click();
  await page.getByRole('button').nth(3).click();
  await page.getByRole('button', { name: 'Case Definitions' }).click();
  await page.getByRole('link', { name: 'Task Definitions' }).click();
  await page.getByRole('cell', { name: 'Data Capture' }).click();
  await page.getByRole('tab', { name: 'Content' }).click();
  await page.getByRole('button', { name: 'Account' }).nth(2).click();
  await page.getByRole('heading', { name: 'Display options' }).click();
  await expect(page.getByText('Display options')).not.toHaveCount(0);
  await page.getByRole('button', { name: 'Mode: basic' }).click();
  await expect(page.getByText('Display options')).not.toHaveCount(0);
});