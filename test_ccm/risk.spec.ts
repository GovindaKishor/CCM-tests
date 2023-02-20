//Test which explores risk section of a client.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox', { name: 'username' }).fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Clients' }).click();
  await page.getByText('CEMT-1388687').click({
    clickCount: 2
  });
  await page.getByRole('tab', { name: 'Risk' }).click();
  await page.getByRole('button', { name: 'last ten entries' }).click();
  await page.getByRole('option', { name: 'last twenty entries' }).click();
  await page.getByText('Risk historical trendinglast twenty entries').click();
  await page.getByRole('option', { name: 'last fifty entries' }).click();
  await page.getByRole('button', { name: 'Show history' }).click();
  await page.getByRole('button', { name: 'Manual risk level - Calculated risk level High Calculated risk score 650 Calculation date 10/02/2023' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
});