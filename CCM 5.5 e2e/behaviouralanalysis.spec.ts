//To explore behavioural analysis section of customer profile.It will validate/test drop downs, text fields,date fields present in that section.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-5-5-x.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox', { name: 'username' }).fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Clients' }).click();
  await page.getByText('CEMT-1388685').click({
    clickCount : 2
  });
  await page.getByRole('tab', { name: 'Behavioural analysis' }).click();
  await page.getByRole('button', { name: 'Overview of transactions' }).click();
  await page.getByRole('option', { name: 'Account profiles' }).click();
  await page.getByRole('button', { name: 'All', exact: true }).click();
  await page.getByRole('option', { name: 'CEMT-1388685-001-22933073-000-EUR' }).click();
  await page.getByRole('button', { name: 'Choose date, selected date is 28 Jan 2023' }).click();
  await page.getByRole('gridcell', { name: '6', exact: true }).click();
  await page.getByRole('button', { name: 'Choose date, selected date is 27 Feb 2023' }).click();
  await page.getByRole('gridcell', { name: '11' }).click();
  await page.getByRole('button', { name: 'All payments' }).click();
  await page.getByRole('option', { name: 'Credit' }).click();
  await page.getByRole('button', { name: 'Related cases' }).click();
  await page.getByRole('button', { name: 'Related entities' }).click();
  await page.getByRole('button', { name: 'Download CSV' }).click();
});