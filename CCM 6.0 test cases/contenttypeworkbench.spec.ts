//Change type in content tab

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
  await page.getByRole('button', { name: 'Natural Person Details' }).click();
  await page.getByRole('button', { name: 'Natural Person' }).nth(2).click();
  await page.getByRole('button', { name: 'Nationalities Multiselect (Codelist)' }).click();
  await page.getByLabel('Open').nth(4).click();
  await page.getByRole('option', { name: 'Checkbox List (Codelist)' }).click();
  await page.getByLabel('Open').nth(4).click();
  await page.getByRole('option', { name: 'Multiselect (Codelist)' }).click();
});