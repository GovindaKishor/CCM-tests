import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/');
  await page.getByLabel('User name').fill('SUPERUSER');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByRole('link', { name: 'Cases' }).click();
  await page.getByRole('tab', { name: 'Cases', exact: true }).click();
  await page.getByText('Onboarding 1').click();
  await page.getByTestId('virtuoso-item-list').getByText('Onboarding').click();
  await page.getByTestId('virtuoso-top-item-list').getByRole('button').first().click();
  await page.getByTestId('CREATE_AD_HOC_PROCESS').click();
  await page.getByLabel('Type').click();
  expect(page.getByText('Onboarding Process')).not.toHaveCount(0);
  expect(page.getByText('Account Update')).not.toHaveCount(0);
});