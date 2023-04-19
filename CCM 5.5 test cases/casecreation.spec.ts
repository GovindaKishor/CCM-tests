//Exploring Case creation section of risk engine.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-5-5-x.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox', { name: 'username' }).fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Workbench' }).click();
  await page.goto('http://ccm-ci-5-5-x.imtf-devops.com:8181/workbench/');
  await page.goto('http://ccm-ci-5-5-x.imtf-devops.com:8181/workbench/auth');
  await page.goto('http://ccm-ci-5-5-x.imtf-devops.com:8181/workbench');
  await page.goto('http://ccm-ci-5-5-x.imtf-devops.com:8181/workbench/configs');
  await page.getByRole('cell', { name: 'active' }).click();
  await page.getByRole('button', { name: 'Risk Configurations' }).click();
  await page.getByRole('link', { name: 'Risk Engines' }).click();
  await page.getByRole('cell', { name: 'Decision:CaseCreation' }).click();
  await page.locator('.dmn-icon-decision-table').first().click();
  await page.getByRole('button', { name: 'View DRD' }).click();
  await page.locator('div').filter({ hasText: 'Decision:CaseCreation' }).getByRole('button').nth(7).click();
  await page.getByRole('menuitem', { name: 'Open in Text Editor' }).click();
});