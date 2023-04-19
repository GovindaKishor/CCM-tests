//Exploring Account risk section of risk engine.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox', { name: 'username' }).fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Workbench' }).click();
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/workbench/');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/workbench/auth');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/workbench');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/workbench/configs');
  await page.getByRole('cell', { name: 'Active', exact: true }).click();
  await page.getByRole('button', { name: 'Risk Configurations' }).click();
  await page.getByRole('link', { name: 'Risk Engines' }).click();
  await page.getByRole('cell', { name: 'Decision:AccountRisk' }).click();
  await page.locator('.dmn-icon-decision-table').first().click();
  await page.getByRole('button', { name: 'View DRD' }).click();
  await page.getByRole('button', { name: 'File actions' }).click();
  await page.getByRole('menuitem', { name: 'Open in Text Editor' }).click();
  await page.getByRole('menuitem', { name: 'Open in Visual Editor' }).click();
});