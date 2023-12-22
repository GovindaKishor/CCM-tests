import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/auth/login');
  await page.getByLabel('username').fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByRole('tab', { name: 'Cases', exact: true }).click();
  await page.getByText('30 days', { exact: true }).click();
  await page.locator('div:nth-child(14) > .css-vd4mct > div:nth-child(13)').click();
});