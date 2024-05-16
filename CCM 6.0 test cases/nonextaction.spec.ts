import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/');
  await page.goto('http://localhost:8181/auth');
  await page.goto('http://localhost:8181/auth/login');
  await page.getByLabel('Username').fill('SUPERUSER');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByText('CEDE-1018529').dblclick();
  await page.getByTestId('virtuoso-item-list').getByText('Investigation').click();
  await page.getByText('HT-1').dblclick();
  await expect(page.getByText('Next action:')).toHaveCount(0);
});