import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/');
  await page.goto('http://localhost:8181/auth');
  await page.goto('http://localhost:8181/auth/login');
  await page.getByLabel('Username').fill('SUPERUSER');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByRole('link', { name: 'Client 360' }).click();
  await page.getByRole('tab', { name: 'Households' }).click();
  await page.getByText('CENL').click();
  await page.getByText('HouseholdCENLHIGH').dblclick();
  await page.getByRole('link', { name: '12209992 (WONDER MAN)' }).click();
  await page.getByRole('link', { name: 'Client 360' }).first().click();
  await page.getByText('Household').nth(2).click();
  await page.getByText('HouseholdCENLHIGH').dblclick();
  await page.getByRole('tab', { name: 'Risk' }).click();
  await page.getByRole('link', { name: '12209992 (WONDER MAN)' }).click();
  await page.getByRole('tab', { name: 'Related persons' }).click();
});