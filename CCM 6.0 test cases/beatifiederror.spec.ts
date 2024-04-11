import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/');
  await page.goto('http://localhost:8181/auth');
  await page.goto('http://localhost:8181/auth/login');
  await page.getByLabel('Username').fill('SUPERUSER');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.locator('[data-test-id="virtuoso-item-list"]').getByText('Onboarding').click();
  await page.locator('[data-test-id="virtuoso-item-list"]').getByText('Onboarding').dblclick();
  await page.locator('[data-test-id="virtuoso-item-list"]').getByText('Data Capture').click();
  await page.getByText('HT-23Data CaptureOpen11/04/2024').dblclick();
  await page.locator('li').filter({ hasText: '123 ()' }).getByRole('button').click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.locator('li').filter({ hasText: 'Natural Person' }).getByRole('button').click();
  await page.locator('div').filter({ hasText: /^\(unnamed entry\)$/ }).click();
  await page.getByText('This field is required').first().click();
  await page.getByText('This field is required').nth(1).click();
});