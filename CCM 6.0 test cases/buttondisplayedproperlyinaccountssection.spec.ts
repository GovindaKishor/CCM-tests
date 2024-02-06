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
  await page.locator('.flex > .MuiButtonBase-root').click();
  await page.getByRole('textbox', { name: 'Account Number' }).click();
  await page.getByRole('textbox', { name: 'Account Number' }).fill('123');
  await page.getByRole('button', { name: 'Close' }).click();
});