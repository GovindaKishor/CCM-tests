import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/auth/login');
  await page.getByLabel('username').fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByRole('button', { name: 'SS' }).click();
  await page.getByRole('menuitem', { name: 'Settings' }).click();
  await page.locator('div').filter({ hasText: /^Language$/ }).first().click();
  await page.getByRole('button', { name: 'English (GB)' }).click();
  await page.getByRole('option', { name: 'Deutsch' }).click();
  await page.getByRole('link', { name: 'Client 360' }).click();
  await page.locator('div:nth-child(5) > .css-vd4mct > div:nth-child(3)').click();
  await page.getByText('Natürliche PersonCENLCENL-1488602HOMER SIMPSONSIMPSONHOMER230MEDIUM').dblclick();
  await page.getByRole('tab', { name: 'Verhaltensanalyse' }).click();
  await page.getByRole('button', { name: 'Transaktionsübersicht' }).click();
  await page.getByRole('option', { name: 'Kontoprofile' }).click();
  await expect(page.getByText('Profile')).not.toHaveCount(0);
  await expect(page.getByText('Konto')).not.toHaveCount(0);
});