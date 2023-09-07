//Perfect message for non siron clients.
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/auth/login');
  await page.getByLabel('username').fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByRole('link', { name: 'Clients' }).click();
  await page.getByText('CENL-1488602X').dblclick();
  await page.getByRole('tab', { name: 'Behavioral analysis' }).click();
  await expect(page.getByText('Module is not available as Client was not found in SIRON')).toHaveCount(1);
});