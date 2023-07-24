//Clear cache feature working fine.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByLabel('username').fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByRole('button', { name: 'SS' }).click();
  await page.getByRole('menuitem', { name: 'Settings' }).click();
  await page.locator('section button').click();
  await page.getByRole('button', { name: 'OK' }).click();
  await expect(page.getByText('Unknown process error')).toHaveCount(0);
});