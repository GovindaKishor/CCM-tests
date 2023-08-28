//Check even after changing language there is toggle count in account profile section.
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/');
  await page.goto('http://localhost:8181/auth');
  await page.goto('http://localhost:8181/auth/login');
  await page.getByLabel('username').fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByRole('button', { name: 'SS' }).click();
  await page.getByRole('menuitem', { name: 'Settings' }).click();
  await page.getByRole('button', { name: 'English (GB)' }).click();
  await page.getByRole('option', { name: 'Français' }).click();
  await page.getByRole('link', { name: 'Clients' }).click();
  await page.getByText('Personne morale').nth(1).click();
  await page.getByText('Personne morale').nth(1).click();
  await page.getByText('Personne moraleCENLCENL-1388678SKYNET CORP').dblclick();
  await page.getByRole('tab', { name: 'Analyse comportementale' }).click();
  await page.getByRole('button', { name: 'Vue d\'ensemble des transactions' }).click();
  await page.getByRole('option', { name: 'Profils de compte' }).click();
  await page.getByLabel('Basculer la sélection (0 sélectionné)').check();
  await expect(page.getByText('94 sélectionné')).toHaveCount(1);
});