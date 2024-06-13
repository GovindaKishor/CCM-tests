import { test } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/');
  await page.getByLabel('Username').fill('SUPERUSER');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.locator('svg').filter({ hasText: 'Compliance' }).locator('rect').nth(1).click();
  await page.locator('svg').filter({ hasText: 'Compliance' }).locator('rect').nth(1).isVisible();
});