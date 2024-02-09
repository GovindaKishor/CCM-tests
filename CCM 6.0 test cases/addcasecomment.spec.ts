import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/auth/login');
  await page.getByLabel('Username').fill('SUPERUSER');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.locator('.css-mslw24').first().click();
  await page.getByRole('tab', { name: 'Comments' }).click();
  await page.getByRole('button', { name: 'Add Comment' }).click();
  await page.getByRole('textbox', { name: 'Comment' }).fill('Testing');
  await page.getByRole('button', { name: 'Send' }).click();
  await expect(page.getByText('Testing')).not.toHaveCount(0);
  await page.getByText('C-1', { exact: true }).dblclick();
  await page.getByText('HT-1').click();
  await page.getByText('HT-1InvestigationOpen09/02/2024').dblclick();
  await page.getByText('Qualification').click();
  await page.getByLabel('Open').first().click();
  await page.getByRole('option', { name: 'Possibly Unusual' }).click();
  await page.locator('._widgetWrapper_11vrr_1 > button').first().click();
  await page.getByLabel('Comment', { exact: true }).fill('automation');
  await expect(page.getByText('automation')).not.toHaveCount(0);
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('link', { name: 'Cases' }).first().click();
});