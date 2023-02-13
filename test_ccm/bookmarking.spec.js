// This test will explore additonal features in cases section like bookmarking,downloading search results, displaying only required fields etc.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByLabel('Username *').click();
  await page.getByLabel('Username *').fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.locator('.css-17ojvn7 > button').first().click();
  await page.getByLabel('Name').fill('Example');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Example' }).click();
  await page.locator('.css-17ojvn7 > button').first().click();
  await page.getByRole('button', { name: 'Ok' }).click();
  await page.locator('button:nth-child(4)').click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('menuitem', { name: 'Download search results' }).click();
  const download = await downloadPromise;
  await page.locator('[data-test-id="virtuoso-top-item-list"]').getByRole('button').click();
  await page.locator('.MuiListItemIcon-root > .MuiButtonBase-root > .PrivateSwitchBase-input').first().uncheck();
  await page.getByRole('listitem').filter({ hasText: 'Creation Date' }).getByRole('checkbox').uncheck();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.locator('[data-test-id="virtuoso-top-item-list"]').getByRole('button').click();
  await page.getByRole('button', { name: 'Reset' }).click();
  await page.locator('div').filter({ hasText: 'Select the columns to displayIdCase TypeStatusMain Client IdOriginCustomer TypeN' }).nth(1).click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.locator('[data-test-id="virtuoso-top-item-list"] svg').nth(1).click();
  await page.locator('[data-test-id="virtuoso-scroller"]').click();
  await page.locator('[data-test-id="virtuoso-top-item-list"] svg').nth(1).click();
  await page.locator('.css-ocerz').first().click();
  await page.locator('.css-ocerz').first().fill('s');
  await page.locator('.css-1kb69pq > .layout > .MuiButtonBase-root').first().click();
});