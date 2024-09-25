import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/');
  await page.getByLabel('User name').fill('SUPERUSER');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByRole('link', { name: 'Workbench' }).click();
  await page.locator('button').nth(3).click();
  await page.getByLabel('Name *').click();
  await page.getByLabel('Name *').fill('Testing');
  await page.getByLabel('Duplicate existing configuration').check();
  await page.getByLabel('Duplicate from *').click();
  await page.getByRole('listbox', { name: 'Duplicate from' }).locator('span').click();
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByRole('button', { name: 'Data' }).click();
  await page.getByRole('link', { name: 'Code Lists' }).click();
  await page.getByRole('button', { name: 'ccm.AdverseMediaEvaluationAction' }).click();
  await page.getByRole('button', { name: 'drag-initiator-0 Termination of business relationship (TERMINATION_BUSINESS_RELATIONSHIP)' }).click();
  expect(page.getByText('When a code entry is marked as inactive, the value will persist, but it will no longer be selectable from the user interface')).toBeVisible();
});