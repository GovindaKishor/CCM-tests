import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/auth/login');
  await page.getByLabel('username').fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByRole('link', { name: 'Client 360' }).click();
  await page.getByRole('tab', { name: 'Accounts' }).click();
  await page.locator('div:nth-child(5) > .css-vd4mct > div:nth-child(3)').click();
  await page.getByText('AccountCEDEWONDER MANHIGH').dblclick();
  await page.getByRole('tab', { name: 'Related persons' }).click();
  await page.getByRole('button', { name: 'View details' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('link', { name: 'WONDER MAN' }).click();
});