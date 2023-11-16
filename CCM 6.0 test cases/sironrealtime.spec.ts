import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/auth/login');
  await page.getByLabel('username').fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByRole('button', { name: 'Create...' }).click();
  await page.getByText('New case').click();
  await page.getByLabel('Open').click();
  await page.getByRole('option', { name: 'Transaction Monitoring (Siron Real Time)' }).click();
  await page.getByLabel('Business ID *').click();
  await page.getByLabel('Business ID *').fill('1018529');
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Create' }).click();
  await expect(page.getByText('Transaction Monitoring (Siron Real Time)')).not.toHaveCount(0);
});