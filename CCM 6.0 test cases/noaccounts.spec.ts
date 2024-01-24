import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/auth/login');
  await page.getByLabel('username').fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByRole('link', { name: 'Workbench' }).click();
  await page.getByRole('cell', { name: 'ccm 6.2.0-SNAPSHOT Wed Jan 24 14:16:09 IST 2024' }).click();
  await page.getByRole('button', { name: 'Admin' }).click();
  await page.getByRole('link', { name: 'File Manager' }).click();
  await page.getByRole('treeitem', { name: 'definition', exact: true }).getByRole('img').click();
  await expect(page.getByText('accounts.json')).toHaveCount(0);
  await page.getByRole('button', { name: 'Back to Application' }).click();
  await page.getByRole('link', { name: 'Client 360' }).click();
  await page.getByRole('tab', { name: 'Accounts' }).click();
  await page.locator('div:nth-child(4) > .css-vd4mct > div:nth-child(3)').click();
  await page.getByText('AccountCENLHOMER SIMPSONMEDIUM').first().dblclick();
  await page.getByRole('tab', { name: 'Related persons' }).click();
  await page.getByRole('button', { name: 'View details' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
});