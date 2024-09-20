import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/');
  await page.getByLabel('User name').fill('SUPERUSER');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('SUPERUSRR');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByLabel('Show password').click();
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByRole('link', { name: 'Cases' }).click();
  await page.getByText('C-2').dblclick();
  expect(page.getByText('C-2 - I_Am_Working_in_IMTF')).not.toHaveCount(0);
});