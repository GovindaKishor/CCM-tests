import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/auth/login');
  await page.getByLabel('Username').fill('SUPERUSER');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.locator('.css-mslw24').first().click();
  await page.locator('[data-test-id="virtuoso-top-item-list"]').getByRole('button').first().click();
  await page.getByTestId('CASE_ADD_COMMENT').click();
  await page.getByRole('textbox', { name: 'Comment' }).fill('Xiǎo');
  await page.getByRole('button', { name: 'Send' }).click();
  await page.getByRole('button', { name: 'Timeline' }).click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Export' }).click();
  const download = await downloadPromise;
});