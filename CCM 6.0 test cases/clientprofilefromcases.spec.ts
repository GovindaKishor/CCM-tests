import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/auth/login');
  await page.getByLabel('username').fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.locator('div:nth-child(2) > .css-vd4mct > div:nth-child(4)').click();
  await page.getByText('C-2AML Alert - Natural PersonActiveCEDE-1018529').dblclick();
  await page.getByRole('tab', { name: 'Customer' }).click();
  await page.getByRole('button', { name: 'Clients' }).nth(1).click();
  await page.getByRole('link', { name: 'WONDER' }).click();
});