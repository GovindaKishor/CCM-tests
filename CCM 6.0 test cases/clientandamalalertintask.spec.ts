import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/auth/login');
  await page.getByLabel('username').fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByRole('link', { name: 'Tasks' }).click();
  await page.locator('div:nth-child(3) > .css-vd4mct > .css-1inxwa4').click();
  await page.getByRole('button', { name: 'AML Alerts' }).click();
  await page.getByRole('button', { name: 'AML Alerts' }).click();
  await page.getByRole('tab', { name: 'Customer' }).click();
  await page.getByRole('button', { name: 'Clients' }).click();
  await page.getByRole('button', { name: 'Clients' }).click();
});