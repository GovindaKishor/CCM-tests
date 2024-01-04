import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/auth/login');
  await page.getByLabel('username').fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByRole('link', { name: 'Client 360' }).click();
  await page.getByText('HOMER SIMPSON').click();
  await page.getByText('Natural PersonCENLCENL-1488602HOMER SIMPSONSIMPSONHOMER230MEDIUM').dblclick();
  await page.getByRole('tab', { name: 'Related accounts' }).click();
  await expect(page.getByText('NATURAL_PERSON_HAS_ROLE_01_ACCOUNT')).toHaveCount(1);
});