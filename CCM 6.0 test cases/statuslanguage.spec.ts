//Status must be translated when I change user language.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox', { name: 'username' }).fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('tab', { name: 'Cases', exact: true }).click();
  await page.locator('div:nth-child(3) > .css-1ssirbu > .css-mslw24').click();
  await expect(page.locator('text=Complete')).not.toHaveCount(0);
  await expect(page.locator('text=Active')).not.toHaveCount(0);
  await page.getByRole('button', { name: 'SS', exact: true }).click();
  await page.getByRole('menuitem', { name: 'Settings' }).click();
  await page.getByRole('button', { name: 'English (US)' }).click();
  await page.getByRole('option', { name: 'Deutsch' }).click();
  await page.getByRole('link', { name: 'Cases' }).click();
  await expect(page.locator('text=Vollständig')).not.toHaveCount(0);
  await expect(page.locator('text=Aktiv')).not.toHaveCount(0);
  await page.getByRole('button', { name: 'SS', exact: true }).click();
  await page.getByRole('menuitem', { name: 'Einstellungen' }).click();
  await page.getByRole('button', { name: 'Deutsch' }).click();
  await page.getByRole('option', { name: 'Français' }).click();
  await page.getByRole('link', { name: 'Cas' }).click();
  await expect(page.locator('text=Complété')).not.toHaveCount(0);
  await expect(page.locator('text=Actif')).not.toHaveCount(0);
  await page.getByRole('button', { name: 'SS', exact: true }).click();
  await page.getByRole('menuitem', { name: 'Paramètres' }).click();
  await page.getByRole('button', { name: 'Français' }).click();
  await page.getByRole('option', { name: 'Italiano' }).click();
  await page.getByRole('link', { name: 'Casi' }).click();
  await expect(page.locator('text=Completato')).not.toHaveCount(0);
  await expect(page.locator('text=Active')).not.toHaveCount(0);
});