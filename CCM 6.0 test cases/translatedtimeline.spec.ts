import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/auth/login');
  await page.getByLabel('Username').fill('SUPERUSER');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByRole('banner').getByRole('button').nth(3).click();
  await page.getByRole('menuitem', { name: 'Settings' }).click();
  await page.getByText('English (GB)').click();
  await page.getByRole('option', { name: 'Français' }).click();
  await page.getByRole('link', { name: 'Cas' }).click();
  await page.locator('div:nth-child(4) > .css-vd4mct > .css-mslw24').click();
  await page.getByRole('button', { name: 'Chronologie' }).click();
  await page.getByRole('link', { name: 'Tâches' }).click();
  await page.locator('div:nth-child(4) > .css-vd4mct > .css-mslw24').click();
  await page.getByRole('button', { name: 'Chronologie' }).click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Exporter' }).click();
  const download = await downloadPromise;
});