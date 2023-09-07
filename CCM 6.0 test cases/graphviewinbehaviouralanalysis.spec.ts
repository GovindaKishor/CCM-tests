//No error when clicking on Graph view in the Transactions Overview
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/auth/login');
  await page.getByLabel('username').fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByRole('link', { name: 'Clients' }).click();
  await page.getByText('CEMT-1018529').click();
  await page.getByText('Natural PersonCEMTCEMT-1018529WONDER MANMANWONDER430HIGH').dblclick();
  await page.getByRole('tab', { name: 'Behavioral analysis' }).click();
  await page.getByLabel('Choose date, selected date is 8 Aug 2023').click();
  await page.getByLabel('calendar view is open, switch to year view').click();
  await page.getByRole('button', { name: '2022' }).click();
  await page.locator('section').getByTestId('__SCROLLER__').locator('button').nth(3).click();
  await expect(page.getByText('RangeError: Invalid interval')).toHaveCount(0);
});