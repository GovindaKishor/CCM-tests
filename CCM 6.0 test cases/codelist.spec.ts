import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/');
  await page.getByLabel('User name').fill('SUPERUSER');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByRole('link', { name: 'Workbench' }).click();
  await page.getByRole('cell', { name: 'ccm 6.4.0-SNAPSHOT Tue Aug 27 14:04:16 IST 2024' }).click();
  await page.getByRole('button', { name: 'Data' }).click();
  await page.getByRole('link', { name: 'Code Lists' }).click();
  await page.getByRole('heading', { name: 'Code Lists' }).click();
  await page.getByRole('button', { name: 'ccm.Gender' }).click();
  await page.getByRole('button', { name: 'drag-initiator-0 Undisclosed (-)' }).click();
  await page.getByRole('button', { name: 'drag-initiator-0 Undisclosed (-)' }).click();
  await page.getByRole('button', { name: 'drag-initiator-1 Female (F)' }).click();
  await page.getByRole('button', { name: 'drag-initiator-1 Female (F)' }).click();
  await page.getByRole('button', { name: 'drag-initiator-2 Male (M)' }).click();
  await page.getByRole('button', { name: 'drag-initiator-2 Male (M)' }).click();
});