import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/');
  await page.getByLabel('User name').fill('SUPERUSER');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByRole('link', { name: 'Cases' }).click();
  await page.getByTestId('virtuoso-item-list').getByText('Onboarding').click();
  await page.getByText('C-131OnboardingActive').click();
  await page.getByTestId('virtuoso-item-list').getByText('Onboarding').dblclick();
  await page.getByTestId('virtuoso-item-list').getByText('Data Capture').click();
  await page.getByText('HT-130').dblclick();
  await page.getByText('Natural Person').click();
  await page.locator('li').filter({ hasText: 'Kishor Kishor' }).getByRole('button').click();
  await page.getByText("Natural Person Details").click();
  await page.getByLabel('First Name *').fill('Kishor');
  await page.getByLabel('Male', { exact: true }).check();
  expect(page.getByText('saved')).toHaveCount(1);
});