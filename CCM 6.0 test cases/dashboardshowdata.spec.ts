import { test } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/');
  await page.getByLabel('User name').click();
  await page.getByLabel('User name').fill('SUPERUSER');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.locator('._cardHeaderMenuButton_bj3kw_13 > div > .MuiButtonBase-root').first().click();
  await page.getByRole('menuitem', { name: 'Show data' }).click();
  await page.getByRole('link', { name: 'Dashboard' }).click();
  await page.locator('div:nth-child(3) > div > .MuiButtonBase-root').click();
  await page.getByRole('menuitem', { name: 'Show data' }).click();
});