import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/auth/login');
  await page.getByLabel('username').fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByRole('button', { name: 'SS' }).click();
  await page.getByRole('menuitem', { name: 'Settings' }).click();
  await page.getByRole('button', { name: 'English (GB)' }).click();
  await page.getByRole('option', { name: 'Italiano' }).click();
  await page.getByRole('link', { name: 'Casi' }).click();
  await page.locator('div:nth-child(3) > .css-vd4mct > .css-mslw24').click();
  await page.getByRole('button', { name: 'Allerte AML' }).click();
  await page.getByRole('button', { name: 'Visualizza dettagli' }).click();
  await expect(page.getByText('Error: [@formatjs/intl')).toHaveCount(0);
  await expect(page.getByText('Dettagli di allerta')).toHaveCount(1);
});