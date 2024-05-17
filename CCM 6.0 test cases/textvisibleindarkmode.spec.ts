import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/');
  await page.getByLabel('Username').fill('SUPERUSER');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByRole('banner').getByRole('button').nth(3).click();
  await page.getByRole('menuitem', { name: 'Settings' }).click();
  await page.getByText('Auto').click();
  await page.getByRole('option', { name: 'Dark' }).click();
  await page.getByRole('link', { name: 'Cases' }).click();
  await page.getByRole('link', { name: 'Cases' }).click();
  await page.getByRole('link', { name: 'Tasks' }).click();
  await page.getByRole('link', { name: 'Client 360' }).click();
});