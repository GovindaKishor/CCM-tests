//Select all button working properly in behavioural anaysis section.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox').nth(0).fill('SUPERUSER');
  await page.getByRole('textbox').nth(1).fill('SUPERUSER');
  await page.getByRole('button').nth(2).click();
  await page.getByRole('button').nth(0).click();
  await page.getByRole('menuitem').nth(1).click();
  await page.getByRole('button').nth(3).click();
  await page.getByRole('option').nth(1).click();
  await page.getByRole('link').nth(2).click();
  await page.locator('.css-1dckd0x').first().dblclick();
  await page.getByRole('tab', { name: 'Behavioural analysis' }).click();
  await page.getByRole('button', { name: 'Overview of transactions' }).click();
  await page.getByRole('option', { name: 'Account profiles' }).click();
  await page.getByLabel('Toggle selection (0 selected)').check();
  await page.getByLabel('Toggle selection').uncheck();
  await page.getByLabel('Toggle selection (0 selected)').check();
  await page.getByRole('button', { name: 'View Profiles' }).click();
});