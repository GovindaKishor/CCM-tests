import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-test.imtf-devops.com:8181/auth/login');
  await page.getByLabel('Username').fill('SUPERUSER');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByRole('button', { name: 'Create...' }).click();
  await page.getByText('New case').click();
  await page.getByLabel('Open').click();
  await page.getByRole('option', { name: 'Onboarding Case' }).click();
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByTestId('virtuoso-item-list').getByText('Data Capture').click();
  await page.getByText('Data Capture').dblclick();
  await page.getByText('Natural Person').click();
  await page.getByRole('main').getByRole('button').click();
  await page.getByLabel('Full Name').click();
  await page.getByLabel('Full Name').fill('Testing');
  await page.getByRole('button', { name: 'Close' }).click();
  await page.locator('li').filter({ hasText: '(unnamed entry)' }).getByRole('button').click();
  await page.locator('div').filter({ hasText: /^N\(unnamed entry\)$/ }).getByRole('button').click();
  await page.getByRole('button', { name: 'OK' }).click();
});