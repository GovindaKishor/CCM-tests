//User can adapt the list of profiles by clicking the settings/gear icon. Users will then be presented with the same list which they can choose more or less from.

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
  await page.getByRole('link').nth(2).click();
  await page.locator('.css-mslw24').first().dblclick();
  await page.getByRole('tab').nth(1).click();
  await page.getByRole('button', { name: 'Overview of transactions' }).click();
  await page.getByRole('option', { name: 'Account profiles' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Maximum - foreign transaction (debit)' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'View Profiles' }).click();
  await page.locator('section').getByTestId('__SCROLLER__').locator('button').click();
  await page.getByRole('listitem').filter({ hasText: 'Maximum - transaction (debit, cash)' }).getByRole('checkbox').check();
  await page.getByRole('listitem').filter({ hasText: 'Maximum - transaction (cash)' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'View Profiles' }).click();
});