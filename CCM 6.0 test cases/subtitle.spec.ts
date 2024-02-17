import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-test.imtf-devops.com:8181/');
  await page.goto('http://ccm-test.imtf-devops.com:8181/auth');
  await page.goto('http://ccm-test.imtf-devops.com:8181/auth/login');
  await page.getByLabel('Username').fill('SUPERUSER');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByText('Onboarding').nth(1).click();
  await page.getByText('C-20OnboardingActive').dblclick();
  await page.locator('[data-test-id="virtuoso-item-list"]').getByText('Data Review').click();
  await page.getByText('HT-22Data ReviewOperationsOpen16/02/2024').dblclick();
  await page.locator('ul').getByRole('button').click();
  await page.locator('ul').filter({ hasText: 'AccountNatural Person(unnamed entry)(unnamed entry)Legal Entity' }).getByRole('button').nth(1).click();
  await page.getByText('Address').click();
  await page.getByText('Natural Person Details').click();
  await page.getByRole('heading', { name: 'Please enter the address details' }).click();
  await page.getByText('Basic Details').click();
  await page.getByText('Nationalities & Domicile').click();
  await expect(page.getByText('Please enter the address details')).not.toHaveCount(0);
  await expect(page.getByText('Basic Details')).not.toHaveCount(0);
  await expect(page.getByText('Nationalities & Domicile')).not.toHaveCount(0);
});