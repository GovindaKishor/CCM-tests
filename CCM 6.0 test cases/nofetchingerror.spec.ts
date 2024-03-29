//No fetching error in task creation section.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/auth/login');
  await page.getByLabel('username').fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByRole('link', { name: 'Workbench' }).click();
  await page.locator('button').nth(-1).click();
  await page.getByLabel('Name *').click();
  await page.getByLabel('Name *').fill('Automation testing');
  await page.getByLabel('Duplicate existing configuration').check();
  await page.getByLabel('Duplicate from *').click();
  await page.getByRole('option', { name: 'ccm 6.2.0-SNAPSHOT Mon Oct 30 13:45:09 IST 2023' }).click();
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByRole('button', { name: 'Case Definitions' }).click();
  await page.getByRole('link', { name: 'Task Definitions' }).click();
  await page.getByRole('button', { name: 'Add new item' }).click();
  await page.getByText('Create new Task').click();
  await page.getByLabel('Task name *').fill('Testing');
  await page.getByLabel('Form (questionnaire)Task that contains questions and forms that you can customize').check();
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByRole('button', { name: 'Validate' }).click();
  await expect(page.getByText('Error fetching validation')).toHaveCount(0);
  await page.getByLabel('Task owner  *').click();
  await page.getByRole('option', { name: 'CentralRegistry' }).click();
  await page.getByRole('button', { name: 'Validate' }).click();
  await expect(page.getByText('Error fetching validation')).toHaveCount(0);
  await page.getByRole('tab', { name: 'Content' }).click();
  await page.getByRole('button', { name: 'Add content' }).click();
  await page.getByRole('button', { name: 'Add Section' }).click();
  await page.getByLabel('Section name *').click();
  await page.getByLabel('Section name *').fill('Testing');
  await page.getByLabel('Entity type').click();
  await page.getByText('CasePayload').click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Validate' }).click();
  await expect(page.getByText('Error fetching validation')).toHaveCount(0);
  await page.getByRole('button', { name: 'Add Screen Section' }).click();
  await page.locator('label').filter({ hasText: 'Form' }).click();
  await page.getByLabel('Label *').click();
  await page.getByLabel('Label *').fill('Testing');
  await page.locator('.MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click();
  await page.getByText('AccountRiskParameters').click();
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByRole('button', { name: 'Validate' }).click();
  await expect(page.getByText('Error fetching validation')).toHaveCount(0);
});