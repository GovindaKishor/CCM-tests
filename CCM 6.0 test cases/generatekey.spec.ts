//Generate missing key in translation.

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
  await page.locator('button').nth(-1).click();
  await page.getByRole('textbox').nth(0).fill('Automation-Testing');
  await page.getByRole('radio').nth(0).check();
  await page.getByRole('button').nth(0).click();
  await page.getByRole('option').nth(0).click();
  await page.getByRole('button').nth(3).click();
  await page.getByRole('button', { name: 'Translations' }).click();
  await page.getByRole('link', { name: 'Translations' }).click();
  await page.getByRole('tab', { name: 'cases' }).click();
  await page.getByRole('cell', { name: 'defaultSiron' }).click();
  await page.getByRole('cell', { name: 'Key 🇺🇸 English 🇫🇷 French 🇩🇪 German 🇮🇹 Italian' }).getByRole('button').click();
  await page.getByRole('button', { name: 'Generate missing keys' }).click();
  await page.getByRole('button', { name: 'Generate' }).click();
  await expect(page.getByRole('cell', { name: 'defaultSiron' })).toHaveCount(1);
});