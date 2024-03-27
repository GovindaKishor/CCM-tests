import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByLabel('Username').fill('SUPERUSER');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByText('C-19OnboardingActive').dblclick();
  await page.locator('[data-test-id="virtuoso-item-list"]').getByText('Data Capture').dblclick();
  await page.locator('ul div').filter({ hasText: 'Natural Person' }).click();
  await page.getByText('None').click();
  await page.getByRole('option', { name: 'All' }).click();
  await page.locator('form').getByRole('button').first().click();
  await expect(page.getByText('Currently displaying data comparison from')).toHaveCount(1);
});