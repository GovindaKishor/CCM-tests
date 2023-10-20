//There is no kind error.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/auth/login');
  await page.getByLabel('username').fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByRole('link', { name: 'Workbench' }).click();
  await page.locator('button').nth(4).click();
  await page.getByLabel('Name *').click();
  await page.getByLabel('Name *').fill('Automation Testing');
  await page.getByLabel('Duplicate existing configuration').check();
  await page.getByLabel('Duplicate from *').click();
  await page.getByRole('option', { name: 'ccm 6.2.0-SNAPSHOT Fri Oct 20 15:52:59 IST 2023' }).locator('span').click();
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByRole('button', { name: 'Case Definitions' }).click();
  await page.getByRole('link', { name: 'Task Definitions' }).click();
  await page.getByRole('button', { name: 'Add new item' }).click();
  await page.getByText('Create new Task').click();
  await page.getByLabel('Task name *').fill('Testing');
  await page.getByLabel('Form (questionnaire)Task that contains questions and forms that you can customize').check();
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByLabel('Task owner  *').click();
  await page.getByText('S_DE_ACM_Compliance').click();
  await page.getByRole('tab', { name: 'Content' }).click();
  await page.getByRole('button', { name: 'Add content' }).click();
  await page.getByRole('button', { name: 'Add Section' }).click();
  await page.getByLabel('Section name *').click();
  await page.getByLabel('Section name *').fill('Adress');
  await page.getByLabel('Entity type').click();
  await page.getByText('CcmRisk').click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Add Screen Section' }).click();
  await page.getByText('Form', { exact: true }).click();
  await page.getByLabel('Label *').click();
  await page.getByLabel('Label *').fill('Adrress');
  await page.getByLabel('Entity type *').click();
  await page.getByText('WorkflowTF').click();
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByRole('button', { name: 'Validate' }).click();
  await expect(page.getByText('Validation was succesful')).toHaveCount(0);
});