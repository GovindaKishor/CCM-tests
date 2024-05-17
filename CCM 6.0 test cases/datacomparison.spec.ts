import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/');
  await page.getByLabel('Username').fill('SUPERUSER');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByRole('button', { name: 'Create...' }).click();
  await page.getByRole('menuitem', { name: 'New case' }).click();
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
  await page.locator('span').filter({ hasText: 'Natural Person' }).click();
  await page.getByText('Legal Entity').click();
  await page.getByText('Natural Person').click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.locator('li').filter({ hasText: 'Natural Person' }).getByRole('button').click();
  await page.getByText('(unnamed entry)').click();
  await page.getByLabel('First Name *').click();
  await page.getByLabel('First Name *').fill('Testing');
  await page.getByLabel('Last Name *').click();
  await page.getByLabel('Last Name *').fill('Team');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByTestId('virtuoso-item-list').getByText('Data Review').click();
  await page.getByText('Data ReviewOperations').dblclick();
  await page.getByRole('button', { name: 'Reject' }).click();
  await page.getByText('Data Capture').nth(2).dblclick();
  await page.locator('li').filter({ hasText: 'Natural Person' }).getByRole('button').click();
  await page.locator('li').filter({ hasText: 'Testing Team' }).getByRole('button').click();
  await page.getByText('Natural Person Details').click();
  await page.getByLabel('Male', { exact: true }).check();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByText('Data Review').nth(2).click();
  await page.getByText('Data ReviewOperationsOpen').dblclick();
  await page.getByText('From last task').click();
});