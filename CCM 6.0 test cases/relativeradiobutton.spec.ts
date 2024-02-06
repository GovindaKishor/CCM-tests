import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/auth/login');
  await page.getByLabel('Username').fill('SUPERUSER');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.locator('[data-test-id="virtuoso-item-list"]').getByText('Onboarding').click();
  await page.getByText('C-18OnboardingActive').dblclick();
  await page.locator('[data-test-id="virtuoso-item-list"]').getByText('Data Capture').click();
  await page.getByText('HT-17Data CaptureOpen06/02/2024').dblclick();
  await page.getByText('Natural Person').click();
  await page.locator('li').filter({ hasText: '(unnamed entry)' }).getByRole('button').click();
  await page.getByText('Natural Person Details').click();
  await page.getByLabel('Female').check();
  await page.getByLabel('Male', { exact: true }).check();
  await page.getByText('Address', { exact: true }).click();
  await page.locator('section').filter({ hasText: /^AddressTypeCityCountryPrivatePrivate$/ }).getByRole('button').nth(-1).click();
  await page.getByLabel('Unknown').check();
  await page.getByLabel('Business').check();
  await page.getByLabel('Private').check();
  await page.getByRole('button', { name: 'Close' }).click();
});