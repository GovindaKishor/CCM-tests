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
  await page.getByLabel('Name *').fill('Automation Testing');
  await page.getByLabel('Duplicate existing configuration').check();
  await page.getByLabel('Open').click();
  await page.getByRole('option', { name: 'ccm 6.4.0-SNAPSHOT Fri May 17 14:10:20 IST 2024' }).click();
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByRole('button', { name: 'Risk Configurations' }).click();
  await page.getByRole('link', { name: 'Risk Engines' }).click();
  await page.getByRole('cell', { name: 'Decision:FinalScore' }).first().click();
  await page.locator('div:nth-child(6) > .djs-overlay > .drill-down-overlay > .dmn-icon-decision-table').click();
  await page.getByText('100').click();
  await page.getByRole('textbox').fill('150');
  await page.getByRole('button', { name: 'Validate' }).click();
  await page.getByLabel('All Configs').click();
  await page.getByRole('cell', { name: 'Automation Testing' }).click();
});