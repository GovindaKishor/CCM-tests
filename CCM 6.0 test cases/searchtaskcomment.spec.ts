import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/auth/login');
  await page.getByLabel('Username').fill('SUPERUSER');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByRole('link', { name: 'Tasks' }).click();
  await page.locator('div:nth-child(6) > .css-vd4mct > .css-19j5pqj').click();
  await page.getByRole('tab', { name: 'Comments' }).click();
  await page.getByRole('button', { name: 'Add comment' }).click();
  await page.getByRole('textbox', { name: 'Comment' }).fill('hello');
  await page.getByRole('button', { name: 'Send' }).click();
  await page.getByLabel('Search').click();
  await page.getByLabel('Search').fill('hello');
  await expect(page.getByText('hello')).not.toHaveCount(0);
});