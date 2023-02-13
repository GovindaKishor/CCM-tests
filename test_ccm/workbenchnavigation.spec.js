//Quick navigation and validation through created Test 1 configuration.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByLabel('Username *').click();
  await page.getByLabel('Username *').fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByLabel('Password *').press('Enter');
  await page.getByRole('link', { name: 'Workbench' }).click();
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/workbench/');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/workbench/auth');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/workbench');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/workbench/configs');
  await page.getByRole('cell', { name: 'Test 1' }).click();
  await page.getByRole('link', { name: 'Validation' }).click();
  await page.getByRole('link', { name: 'Details' }).click();
  await page.getByRole('button', { name: 'Case Configurations' }).click();
  await page.getByRole('button', { name: 'Case Configurations' }).click();
  await page.getByRole('button', { name: 'Risk Configurations' }).click();
  await page.getByRole('link', { name: 'Risk Configurations' }).click();
  await page.getByRole('button', { name: '[DEV]' }).click();
  await page.getByRole('link', { name: 'Cases' }).click();
  await page.getByRole('link', { name: 'Rule Engine' }).click();
  await page.getByRole('link', { name: 'Tasks' }).click();
  await page.getByRole('link', { name: 'Questionnaires' }).click();
  await page.getByRole('link', { name: 'MdmEditors' }).click();
  await page.getByRole('link', { name: 'Forms' }).click();
  await page.getByRole('link', { name: 'Risk Configurations' }).click();
  await page.getByRole('button', { name: 'Back to CCM' }).click();
});