//Reset button disable functionality not working properly in task page.

import { test, expect } from '@playwright/test';

test('Color changing of reset button', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox', { name: 'username' }).fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('tab', { name: 'Cases', exact: true }).click();
  await page.getByText('My previous cases').click();
  await expect(page.getByRole('button', { name: 'Reset', exact: true })).toHaveCSS('color','rgb(255, 255, 255)');
  await page.getByRole('button', { name: 'Reset', exact: true }).click();
  await expect(page.getByRole('button', { name: 'Reset', exact: true })).toHaveCSS('color','rgb(255, 255, 255)');
});