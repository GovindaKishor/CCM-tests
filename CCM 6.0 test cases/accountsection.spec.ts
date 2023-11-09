import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/auth/login');
  await page.getByLabel('username').fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByRole('link', { name: 'Client 360' }).click();
  await page.getByRole('tab', { name: 'Accounts' }).click();
  await expect(page.getByText('Accounts')).not.toHaveCount(0);
  await expect(page.getByText('Account')).not.toHaveCount(0);
  await page.getByRole('checkbox').check();
  await page.locator('[data-test-id="virtuoso-top-item-list"]').getByRole('checkbox').uncheck();
});