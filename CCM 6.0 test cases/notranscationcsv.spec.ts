import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/');
  await page.goto('http://localhost:8181/auth');
  await page.goto('http://localhost:8181/auth/login');
  await page.getByLabel('Username').fill('SUPERUSER');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByRole('link', { name: 'Client 360' }).click();
  await page.locator('div:nth-child(3) > .css-vd4mct > div:nth-child(3)').click();
  await page.getByText('Natural PersonCEDECEDE-1018529WONDER MANMANWONDER430HIGH').dblclick();
  await page.getByRole('tab', { name: 'Behavioral analysis' }).click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Download CSV' }).click();
  const download = await downloadPromise;
});