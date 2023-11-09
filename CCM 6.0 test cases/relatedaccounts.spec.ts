import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/auth/login');
  await page.getByLabel('username').fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByRole('link', { name: 'Client 360' }).click();
  await page.locator('div:nth-child(3) > .css-vd4mct > div:nth-child(3)').click();
  await page.getByText('Natural PersonCENLCENL-1488602HOMER SIMPSONSIMPSONHOMER230MEDIUM').dblclick();
  await page.getByRole('tab', { name: 'Related accounts' }).click();
  await page.getByRole('link', { name: '22933091' }).click();
  await expect(page.getByText('Customer')).not.toHaveCount(0);
  await expect(page.getByText('Account Balance')).not.toHaveCount(0);
  await expect(page.getByText('Number')).not.toHaveCount(0);
  await expect(page.getByText('Currency')).not.toHaveCount(0);
  await expect(page.getByText('Name')).not.toHaveCount(0);
  await expect(page.getByText('Created at')).not.toHaveCount(0);
});