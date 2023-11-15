import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/auth/login');
  await page.getByLabel('username').fill('SUPERUSER1');
  await page.getByLabel('Passwort *').click();
  await page.getByLabel('Passwort *').fill('SUPERUSER1');
  await page.getByRole('button', { name: 'Anmelden' }).click();
  await page.getByRole('link', { name: 'Kunden' }).click();
  await page.getByPlaceholder('enthält...').click();
  await page.getByPlaceholder('enthält...').fill('5804439575');
  await page.getByPlaceholder('enthält...').press('Enter');
  await page.locator('[data-test-id="virtuoso-item-list"]').getByText('Juristische Person').click();
  await page.getByText('Juristische Person1045 58044395758F139CE1DB6DF3D0E1C901379B6D1CA4').dblclick();
  await page.getByRole('tab', { name: 'Verhaltensanalyse' }).click();
  await page.getByLabel('Choose date, selected date is 16. Sep. 2023').first().click();
  await page.getByLabel('calendar view is open, switch to year view').click();
  await page.getByRole('radio', { name: '2015' }).click();
  await expect(page.getByText('5804439575')).toHaveCount(1);
});