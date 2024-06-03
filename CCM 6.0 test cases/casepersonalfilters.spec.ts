import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/auth/login');
  await page.getByLabel('Username').fill('compliance1');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('2021');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByRole('link', { name: 'Cases' }).click();
  await page.getByText('My cases').click();
  await page.getByTestId('virtuoso-top-item-list').getByRole('checkbox').check();
  await page.locator('input[name="case\\.assignee-MY_TEAM_CASES_EXCL"]').check();
  await page.getByTestId('virtuoso-top-item-list').getByRole('checkbox').check();
  await page.locator('input[name="case\\.assignee-MY_PREVIOUS_CASES"]').check();
  await page.getByTestId('virtuoso-top-item-list').getByRole('checkbox').check();
  await page.locator('input[name="case\\.assignee-ALL_CASES"]').check();
  await page.getByTestId('virtuoso-top-item-list').getByRole('checkbox').check();
});