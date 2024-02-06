import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/auth/login');
  await page.getByLabel('Username').fill('SUPERUSER');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByRole('link', { name: 'Tasks' }).click();
  await page.getByText('HT-6').click();
  await page.getByText('HT-6InvestigationOpen06/02/2024').dblclick();
  await page.locator('form div').filter({ hasText: 'ClientClient' }).getByRole('combobox').click();
  await page.getByRole('option', { name: 'SKYNET CORP' }).click();
  await page.getByLabel('From amount').click();
  await page.getByLabel('From amount').fill('0');
  await page.getByLabel('To amount').click();
  await page.getByLabel('To amount').fill('1000000');
  await page.getByRole('button', { name: 'Search view' }).click();
  await expect(page.getByText('TypeError:Cannot read properties')).toHaveCount(0);
})