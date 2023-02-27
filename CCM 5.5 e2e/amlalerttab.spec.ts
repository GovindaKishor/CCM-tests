//As a logged in user I Can click on View Details in the AML Alerts Tab and see all the Information related to Alert Scenarrios and Transactions (if any).

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-5-5-x.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox', { name: 'username' }).fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.locator('div:nth-child(4) > .css-1ssirbu > .css-mslw24').click();
  await page.getByRole('button', { name: 'AML Alerts' }).click();
  await page.getByRole('button', { name: 'View details' }).click();
  await expect(page.locator('text=Alert details')).toHaveCount(1);
  await page.getByRole('button', { name: 'Related party transactions Score : 10 Trigger : 1 transaction' }).click();
  await page.getByRole('button', { name: 'Related party transactions Score : 10 Trigger : 1 transaction' }).click();
  await page.getByRole('button', { name: 'Retail Keyword Matching Alert Score : 10 Trigger : 1 transaction' }).click();
  await page.getByRole('button', { name: 'Retail Keyword Matching Alert Score : 10 Trigger : 1 transaction' }).click();
});