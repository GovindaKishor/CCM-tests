import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/auth/login');
  await page.getByLabel('username').fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByRole('link', { name: 'Client 360' }).click();
  await page.locator('.css-mslw24').first().click();
  await page.getByRole('button', { name: 'Related cases' }).click();
  await expect(page.getByText('undefined')).toHaveCount(0);
  await page.getByText('C-10 -').click();
});