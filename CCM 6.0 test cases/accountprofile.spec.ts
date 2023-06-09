//When users switch the view from transactions to account profiles, we will first present a list of available profiles/statistics that they can choose from. 

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
  await page.getByLabel('Search').click();
  await page.getByLabel('Search').fill('b');
  await page.getByRole('listitem').filter({ hasText: 'Maximum - foreign transaction (debit)' }).getByRole('checkbox').check();
  await page.getByRole('listitem').filter({ hasText: 'Maximum - transaction (debit, cash)' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'View Profiles' }).click();
  await expect(page.getByText('Account profiles')).not.toHaveCount(0);
  await expect(page.getByText('All')).not.toHaveCount(0);
  await expect(page.getByText('Profiles')).not.toHaveCount(0);
  await expect(page.getByText('Account')).not.toHaveCount(0);
});