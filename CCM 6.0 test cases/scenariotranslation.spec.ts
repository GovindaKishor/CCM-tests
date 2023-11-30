import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/auth/login');
  await page.getByLabel('username').fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByText('C-7').click();
  await page.getByRole('button', { name: 'AML Alerts' }).click();
  await expect(page.getByText('Testing')).not.toHaveCount(0);
  await page.getByRole('button', { name: 'View details' }).click();
  await page.getByRole('button', { name: 'Testing Score : 10 Trigger : 1 transaction' }).click();
  await expect(page.getByText('Manual')).not.toHaveCount(0);
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('banner').getByRole('button').nth(3).click();
  await page.getByRole('menuitem', { name: 'Settings' }).click();
  await page.getByText('English (GB)').click();
  await page.getByRole('option', { name: 'Deutsch' }).click();
  await page.getByRole('link', { name: 'Cases' }).click();
  await expect(page.getByText('Manual Testing')).not.toHaveCount(0);
  await page.getByRole('button', { name: 'Details anzeigen' }).click();
  await page.getByRole('button', { name: 'Manual Testing Score : 10 Auslöser : 1 Transaktion' }).click();
});