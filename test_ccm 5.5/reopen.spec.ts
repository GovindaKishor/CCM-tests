//Test which will reopen a particular case automatically(case 10).

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-5-5-x.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox', { name: 'username' }).fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Reveal Password' }).click();
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('tab', { name: 'Cases', exact: true }).click();
  await page.locator('div:nth-child(4) > .css-1kb69pq > .layout > .css-ocerz').click();
  await page.locator('div:nth-child(4) > .css-1kb69pq > .layout > .css-ocerz').fill('10');
  await page.locator('div:nth-child(4) > .css-1kb69pq > .layout > .MuiButtonBase-root').click();
  await page.getByText('C-10').click();
  await page.locator('[data-test-id="virtuoso-top-item-list"]').getByRole('button').first().click();
  await page.getByRole('menuitem', { name: 'Reopen' }).click();
  await page.getByLabel('Audit message').fill('Reopen');
  await page.getByRole('button', { name: 'Reopen' }).click();
});