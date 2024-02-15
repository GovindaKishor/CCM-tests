import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/auth/login');
  await page.getByLabel('Username').fill('SUPERUSER');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByRole('link', { name: 'Workbench' }).click();
  await page.getByRole('cell', { name: 'ccm 6.3.0-SNAPSHOT Thu Feb 15 14:24:18 IST 2024' }).click();
  await page.getByRole('button', { name: 'Case Definitions' }).click();
  await page.getByRole('link', { name: 'Case Definitions' }).click();
  await page.getByRole('banner').getByRole('button').click();
  await page.locator('.MuiPopover-root > .MuiBackdrop-root').click();
  await page.getByRole('main').locator('div').filter({ hasText: /^Case Definitions$/ }).getByRole('button').click();
  await page.locator('.MuiPopover-root > .MuiBackdrop-root').click();
  await page.getByRole('list').getByRole('link', { name: 'Case Definitions' }).click();
  await page.getByText('Powered by').click();
});