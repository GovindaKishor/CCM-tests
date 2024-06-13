import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/');
  await page.getByLabel('Username').fill('SUPERUSER');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.locator('div:nth-child(5) > .MuiPaper-root > .css-vv8b04 > .css-0 > g > g:nth-child(9) > .MuiBarElement-root').isVisible();
  await page.locator('div:nth-child(6) > .MuiPaper-root > .css-vv8b04 > .css-0 > g > g > .MuiBarElement-root').first().isVisible();
});