//Edit content section

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
  await page.getByRole('cell', { name: 'Data Capture' }).click();
  await page.getByRole('tab', { name: 'Content' }).click();
  await page.getByRole('button', { name: 'Address' }).first().click();
  await page.locator('ul').filter({ hasText: /^Account DetailsAddress$/ }).locator('button').nth(2).click();
  await page.getByLabel('Section name *').click();
  await page.getByLabel('Section name *').fill('Address Testing');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Admin' }).click();
  await page.getByRole('link', { name: 'File Manager' }).click();
  await page.getByRole('treeitem', { name: 'questionnaires' }).getByRole('img').click();
  await page.getByText('Data_Capture_questionnaire.json').click();
  await page.getByText('bpm-catalogbpmncasescodesconnectorscustom-jsondefinitiondmndocument-guidancedocu').dblclick();
});