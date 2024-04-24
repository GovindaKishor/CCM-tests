import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/');
  await page.getByLabel('Username').fill('SUPERUSER');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByRole('link', { name: 'Workbench' }).click();
  await page.locator('button').nth(-1).click();
  await page.getByLabel('Name *').click();
  await page.getByLabel('Name *').fill('automation testing');
  await page.getByLabel('Duplicate existing configuration').check();
  await page.getByLabel('Open').click();
  await page.getByRole('option', { name: 'ccm 6.3.0-SNAPSHOT Wed Apr 24 20:15:09 IST 2024' }).click();
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByRole('button', { name: 'Case Definitions' }).click();
  await page.getByRole('link', { name: 'Task Definitions' }).click();
  await page.getByRole('cell', { name: 'Investigation : Compliance', exact: true }).click();
  await page.getByRole('button', { name: 'Mode: basic' }).click();
  await page.getByLabel('Require audit message on assignment').check();
  await page.getByLabel('Require audit message on delegation').check();
  await page.getByLabel('All Configs').click();
  await page.getByRole('row', { name: 'automation testing 36 seconds Draft Config actions' }).getByTitle('Config actions').click();
  await page.getByRole('menuitem', { name: 'Publish Test' }).click();
  await page.getByRole('button', { name: 'Publish-test' }).click();
  await page.getByRole('button', { name: 'Back to Application' }).click();
  await page.getByText('C-1', { exact: true }).click();
  await page.getByText('C-1AML Alert - Natural PersonActiveCEDE-1085631').dblclick();
  await page.locator('[data-test-id="virtuoso-item-list"]').getByText('Investigation').click();
  await page.getByTestId('DELEGATE_TASK').click({
    button: 'right'
  });
  await page.getByTestId('DELEGATE_TASK').click();
  await page.getByLabel('Audit message *').click();
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.getByTestId('DELEGATE_TASK').click({
    button: 'right'
  });
  await page.getByTestId('ASSIGN_TASK').click();
  await page.getByLabel('Assignee').click();
  await page.getByRole('option', { name: 'compliance1' }).click();
  await page.getByLabel('Audit message *').click();
  await page.getByLabel('Audit message *').fill('dfdfgdf');
  await page.getByRole('button', { name: 'Assign task' }).click();
});