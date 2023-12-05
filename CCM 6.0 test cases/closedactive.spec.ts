import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/auth/login');
  await page.getByLabel('username').fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByRole('link', { name: 'Client 360' }).click();
  await page.getByText('CENL-1488602').click();
  await page.getByText('Natural PersonCENLCENL-1488602HOMER SIMPSONSIMPSONHOMER230MEDIUM').dblclick();
  await page.getByRole('tab', { name: 'Behavioral analysis' }).click();
  await page.getByText('Transaction overview').click();
  await page.getByRole('option', { name: 'Account profiles' }).click();
  await page.getByText('All').click();
  await page.getByRole('option', { name: 'All' }).click();
  await page.getByText('22933091000 (Closed)').first().click();
  await page.getByText('22933092000 (Active)').nth(1).click();
});