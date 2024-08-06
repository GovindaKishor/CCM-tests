import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/');
  await page.getByLabel('User name').fill('SUPERUSER');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByRole('link', { name: 'Cases' }).click();
  await page.getByRole('button', { name: 'Load more' }).click();
  await page.getByRole('button', { name: 'Load more' }).click();
  await page.getByTestId('virtuoso-item-list').getByText('Onboarding').click();
  await page.getByText('C-131OnboardingActive').dblclick();
  await page.getByTestId('virtuoso-item-list').getByText('Data Capture').click();
  await page.getByText('HT-130Data CaptureRelationship ManagerCompletedSUPERUSER06/08/202406/08/2024').dblclick();
  await page.locator('span').filter({ hasText: '1233456 ()' }).click();
  await page.getByText('None').click();
  await page.getByRole('option', { name: 'All' }).click();
  await page.locator('div:nth-child(3) > ._widgetWrapper_xe2sy_1 > button').first().click();
  await page.getByText('Currently displaying data comparison from 06/08/2024, 18:21 until 06/08/2024, 18').click();
  await page.getByRole('button', { name: 'Show changes in between' }).click();
  await page.getByRole('button', { name: 'Hide changes in between' }).click();
});