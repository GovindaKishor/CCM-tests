//Each text field for each langauge.

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
  await page.getByRole('button').nth(4).click();
  await page.getByRole('link').nth(2).click();
  await page.getByRole('cell', { name: 'GOAML_REPORTING' }).click();
  await expect(page.getByLabel('🇺🇸 English *')).toHaveCount(1);
  await expect(page.getByLabel('🇫🇷 French *')).toHaveCount(1);
  await expect(page.getByLabel('🇩🇪 German *')).toHaveCount(1);
  await expect(page.getByLabel('🇮🇹 Italian *')).toHaveCount(1);
});