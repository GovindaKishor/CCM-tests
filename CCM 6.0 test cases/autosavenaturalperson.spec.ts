import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-test.imtf-devops.com:8181');
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('SUPERUSER');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByRole('button', { name: 'Create...' }).click();
  await page.getByRole('menuitem', { name: 'New case' }).click();
  await page.getByLabel('Open').click();
  await page.getByRole('option', { name: 'Onboarding Case' }).click();
  await page.getByRole('button', { name: 'Create' }).click();
  await page.locator('[data-test-id="virtuoso-item-list"]').getByText('Data Capture').click();
  await page.locator('[data-test-id="virtuoso-item-list"]').getByText('Data Capture').dblclick();
  await page.getByText('Natural Person').click();
  await page.locator('section').filter({ hasText: /^Natural Person$/ }).getByRole('button').click();
  await page.getByLabel('Full Name').click();
  await page.getByLabel('Full Name').fill('Testing');
  await expect(page.getByText('Saved')).toHaveCount(1);
  await expect(page.getByText('Add')).toHaveCount(0);
  await expect(page.getByText("'Cancel'")).toHaveCount(0);
  await page.getByRole('button', { name: 'Close' }).click();
  await page.locator('span').filter({ hasText: '(unnamed entry)' }).click();
  await page.getByText('Natural Person Details').click();
  await page.getByText('Account').click();
  await page.getByText('Natural Person').click();
  await page.locator('span').filter({ hasText: '(unnamed entry)' }).click();
  await page.getByText('Natural Person Details').click();
  await expect(page.getByText('TypeError')).toHaveCount(0);
});