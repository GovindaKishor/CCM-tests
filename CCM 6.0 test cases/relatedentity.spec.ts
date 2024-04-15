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
  await page.getByPlaceholder('contains...').click();
  await page.getByPlaceholder('contains...').fill('CENL-1018529');
  await page.locator('form').getByRole('button').click();
  await page.getByText('CENL-1018529').click();
  await page.getByText('Natural PersonCENLCENL-1018529WONDER MANMANWONDER430HIGH').dblclick();
  await page.getByRole('button', { name: 'Related entities' }).click();
  await page.getByRole('button', { name: 'SC SKYNET CORP - CENL-1388678 Has natural person as beneficial owner' }).click();
  await page.getByRole('button', { name: 'WM WONDER MAN - CENL-1018529 Has natural person as beneficial owner' }).click();
});