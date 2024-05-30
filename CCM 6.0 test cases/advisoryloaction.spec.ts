import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-test.imtf-devops.com:8181/auth/login');
  await page.getByLabel('Username').fill('SUPERUSER');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByRole('link', { name: 'Cases' }).click();
  await page.getByText('Data Capture').last().dblclick();
  await page.locator('.css-182mbxe > .css-19j5pqj').click();
  await page.locator('.css-182mbxe > div:nth-child(4)').dblclick();
  await page.locator('span').filter({ hasText: 'Account' }).click();
  await page.getByRole('main').getByRole('button').click();
  await page.getByLabel('Account Number *').click();
  await page.getByLabel('Account Number *').fill('1234');
  await page.getByRole('button', { name: 'Close' }).click();
  await page.locator('li').filter({ hasText: '1234 ()' }).getByRole('button').click();
  await page.getByText('Address').click();
  await page.getByText('1234 ()').click();
  await page.getByLabel('Advisory Location *').click();
  await page.getByRole('option', { name: 'Dubai' }).click();
  await page.getByText('DFSA Requirements').click();
});