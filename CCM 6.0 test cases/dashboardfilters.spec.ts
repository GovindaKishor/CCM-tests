import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/');
  await page.getByLabel('Username').fill('SUPERUSER');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByText('No filter').click();
  await page.getByRole('option', { name: 'Default Risk Case' }).click();
  await page.getByText('Default Risk Case').click();
  await page.getByRole('option', { name: 'Adhoc SIRON Case' }).click();
  await page.getByText('Adhoc SIRON Case').click();
  await page.getByRole('option', { name: 'Transaction Monitoring Post' }).click();
  await page.getByText('Transaction Monitoring Post').click();
  await page.getByRole('option', { name: 'Transaction Monitoring Real Time' }).click();
});