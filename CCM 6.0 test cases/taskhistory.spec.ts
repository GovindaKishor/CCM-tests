import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/');
  await page.getByLabel('Username').fill('SUPERUSER');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByRole('link', { name: 'Cases' }).click();
  await page.getByTestId('virtuoso-item-list').getByText('Onboarding').click();
  await page.getByText('C-131OnboardingActive').dblclick();
  await page.getByTestId('virtuoso-item-list').getByText('Data Review').click();
  await page.getByText('HT-131').dblclick();
  await page.getByText('Natural Person').click();
  await page.locator('span').filter({ hasText: 'Govinda Kishor' }).click();
  await page.getByText('None').click();
  await page.getByRole('option', { name: 'All' }).click();
  await page.locator('._widgetWrapper_xe2sy_1 > button').first().click();
  expect(page.getByText('Currently displaying data comparison')).toHaveCount(1);
  expect(page.getByText('Govinda')).not.toHaveCount(0);
  await page.getByRole('button').click();
  await page.locator('div:nth-child(3) > ._widgetWrapper_xe2sy_1 > button').first().click();
  expect(page.getByText('Currently displaying data comparison')).toHaveCount(1);
  expect(page.getByText('Kishor')).not.toHaveCount(0);
  await page.getByRole('button').click();
});