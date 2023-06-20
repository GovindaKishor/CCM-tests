//Error message if field is empty.

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
  await page.getByLabel('🇺🇸 English *').clear();
  await page.getByRole('button', { name: 'Validate' }).click();
  await expect(page.getByText('The i18n property \'GOAML_REPORTING\' is not defined in \'i18n/case-classifications')).toHaveCount(1);
});