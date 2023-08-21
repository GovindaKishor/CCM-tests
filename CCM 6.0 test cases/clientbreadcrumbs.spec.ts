//Translated breadcrumbs.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/');
  await page.goto('http://localhost:8181/auth');
  await page.goto('http://localhost:8181/auth/login');
  await page.getByLabel('username').fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByRole('link', { name: 'Clients' }).click();
  await page.locator('.css-1dckd0x').first().dblclick();
  await expect(page.getByText("Clients")).not.toHaveCount(0);
  await page.getByRole('button', { name: 'SS' }).click();
  await page.getByRole('menuitem', { name: 'Settings' }).click();
  await page.getByRole('button', { name: 'English (GB)' }).click();
  await page.getByRole('option', { name: 'Deutsch' }).click();
  await page.getByRole('link', { name: 'Kunden' }).click();
  await page.locator('.css-1dckd0x').first().dblclick();
  await expect(page.getByText("Kunden")).not.toHaveCount(0);
  await page.getByRole('button', { name: 'SS' }).click();
  await page.getByRole('menuitem', { name: 'Einstellungen' }).click();
  await page.getByRole('button', { name: 'Deutsch' }).click();
  await page.getByRole('option', { name: 'Français' }).click();
  await page.getByRole('link', { name: 'Clients' }).click();
  await page.locator('.css-1dckd0x').first().dblclick();
  await expect(page.getByText("Clients")).not.toHaveCount(0);
  await page.getByRole('button', { name: 'SS' }).click();
  await page.getByRole('menuitem', { name: 'Paramètres' }).click();
  await page.getByRole('button', { name: 'Français' }).click();
  await page.getByRole('option', { name: 'Italiano' }).click();
  await page.getByRole('link', { name: 'Clienti' }).click();
  await page.locator('.css-1dckd0x').first().dblclick();
  await expect(page.getByText("Clienti")).not.toHaveCount(0);
});