//No kind error after creating a task.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/auth/login');
  await page.getByLabel('username').fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByRole('link', { name: 'Workbench' }).click();
  await page.locator('button').nth(-1).click();
  await page.getByRole('textbox').nth(0).fill('Automation Testing');
  await page.getByRole('radio').nth(0).check();
  await page.getByRole('button').nth(0).click();
  await page.getByRole('option').nth(0).click();
  await page.getByRole('button').nth(3).click();
  await page.getByRole('button', { name: 'Case Definitions' }).click();
  await page.getByRole('link', { name: 'Task Definitions' }).click();
  await page.getByRole('button', { name: 'Add new item' }).click();
  await page.getByText('Create new Task').click();
  await page.getByLabel('Form (questionnaire)Task that contains questions and forms that you can customize').check();
  await page.getByLabel('Task name *').click();
  await page.getByLabel('Task name *').fill('Testing');
  await page.getByRole('button', { name: 'Create' }).click();
  await page.locator('[id="root\\/defaultOwner-label"] div').nth(1).click();
  await page.getByLabel('Open').click();
  await page.getByRole('option', { name: 'CentralRegistry' }).click();
  await page.getByRole('tab', { name: 'Content' }).click();
  await page.getByRole('button', { name: 'Add content' }).click();
  await page.getByRole('button', { name: 'Add Section' }).click();
  await page.getByLabel('Section name *').click();
  await page.getByLabel('Section name *').fill('Testing');
  await page.getByLabel('Entity type').click();
  await page.getByRole('option', { name: 'CasePayload' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Add Sub Section' }).click();
  await page.getByLabel('Section name *').click();
  await page.getByLabel('Section name *').fill('Account');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Add Screen Section' }).click();
  await page.locator('label').filter({ hasText: 'Form' }).click();
  await page.getByLabel('Label *').click();
  await page.getByLabel('Label *').fill('Account');
  await page.getByLabel('Entity type *').click();
  await page.getByRole('option', { name: 'AccountRiskFactors' }).click();
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByRole('button', { name: 'Validate' }).click();
  await expect(page.getByText('Kind is required but its missing')).toHaveCount(0);
});