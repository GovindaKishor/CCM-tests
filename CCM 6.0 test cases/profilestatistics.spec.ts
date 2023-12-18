import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/auth/login');
  await page.getByLabel('username').fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByRole('link', { name: 'Workbench' }).click();
  await page.locator('button').nth(3).click();
  await page.getByLabel('Name *').click();
  await page.getByLabel('Name *').fill('Testing');
  await page.getByLabel('Duplicate existing configuration').check();
  await page.locator('.MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click();
  await page.getByRole('option', { name: 'UCse' }).click();
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByRole('button', { name: 'Translations' }).click();
  await page.getByRole('link', { name: 'Translations' }).click();
  await page.getByRole('tab', { name: 'profiles-statistics' }).click();
  await page.getByRole('row', { name: 'expand row ANT_BAR_7T_SUM_UMS Translation done Translation done Translation done Translation done' }).getByLabel('expand row').click();
  await page.getByRole('cell', { name: 'Key 🇺🇸 English 🇫🇷 French 🇩🇪 German 🇮🇹 Italian' }).getByRole('button').click();
  await page.getByLabel('All Configs').click();
  await page.getByRole('row', { name: 'Testing 22 seconds Draft Config actions' }).getByTitle('Config actions').click();
  await page.getByText('Publish Test').click();
  await page.getByRole('button', { name: 'Publish-test' }).click();
  await page.getByRole('button', { name: 'Back to Application' }).click();
  await page.getByRole('link', { name: 'Client 360' }).click();
  await page.getByText('CEMT', { exact: true }).nth(1).click();
  await page.locator('.css-182mbxe > div:nth-child(3)').dblclick();
  await page.getByRole('tab', { name: 'Behavioral analysis' }).click();
  await page.getByText('Transaction overview').click();
  await page.getByRole('option', { name: 'Account profiles' }).click();
  await expect(page.getByText("ANT_BAR_7T_SUM_UMS")).toHaveCount(1);
});