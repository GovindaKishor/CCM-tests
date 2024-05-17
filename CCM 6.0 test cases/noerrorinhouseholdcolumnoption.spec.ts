import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/');
  await page.getByLabel('Username').fill('SUPERUSER');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByRole('link', { name: 'Client 360' }).click();
  await page.getByRole('tab', { name: 'Households' }).click();
  await page.getByTestId('virtuoso-top-item-list').getByRole('button').click();
  await page.locator('li').filter({ hasText: 'Type' }).getByRole('checkbox').uncheck();
  await page.locator('li').filter({ hasText: 'Tenant' }).getByRole('checkbox').uncheck();
  await page.getByRole('button', { name: 'Reset' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
  await expect(page.getByText('Your settings have been reset due to an error')).toHaveCount(0);
});