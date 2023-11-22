import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/auth/login');
  await page.getByLabel('username').fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByRole('link', { name: 'Client 360' }).click();
  await page.getByText('Legal Entity').nth(1).click();
  await page.getByText('Legal EntityCENLCENL-1388678SKYNET CORP').dblclick();
  await page.getByRole('tab', { name: 'Behavioral analysis' }).click();
  await page.getByRole('button', { name: 'Download CSV' }).click();
});