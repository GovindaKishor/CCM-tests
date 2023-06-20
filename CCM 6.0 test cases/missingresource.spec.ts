//Create file option for missing resources.

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
  await page.getByRole('cell', { name: 'Automation Testing' }).click();
  await page.getByRole('button').nth(4).click();
  await page.getByRole('link').nth(2).click();
  await page.getByRole('cell', { name: 'GOAML_REPORTING' }).click();
  await page.getByRole('button', { name: 'Create files' }).click();
  await page.getByRole('button', { name: 'Create' }).click();
  await expect(page.getByLabel('🇩🇪 German *')).toHaveCount(1);
});