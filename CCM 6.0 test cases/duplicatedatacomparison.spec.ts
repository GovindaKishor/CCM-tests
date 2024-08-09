import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/');
  await page.getByLabel('User name').fill('SUPERUSER');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByRole('link', { name: 'Tasks' }).click();
  await page.locator('input[name="task\\.definitionKey-data_review"]').check();
  await page.getByText('Data Review').nth(2).click();
  await page.getByText('HT-133Data ReviewOperationsOpen').dblclick();
  await page.getByText('Natural Person').click();
  await page.locator('span').filter({ hasText: 'Testing' }).click();
  await page.locator('div:nth-child(7) > ._widgetWrapper_xe2sy_1 > button').first().click();
  expect(page.getByText('updated by SUPERUSERUpdated to :Guernsey09/08/202')).toHaveCount(1);
  expect(page.getByText('Currently displaying data comparison from')).toHaveCount(1);
});