//Creating new risk engine.

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
  await page.locator('button').nth(-1).click();
  await page.getByLabel('Name *').click();
  await page.getByLabel('Name *').fill('Automation Testing');
  await page.getByLabel('Description').click();
  await page.getByLabel('Duplicate existing configuration').check();
  await page.getByRole('button', { name: 'Open' }).click();
  await page.getByRole('listbox', { name: 'Duplicate from' }).getByText('ccm').click();
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByRole('button', { name: 'Risk Configurations' }).click();
  await page.getByRole('link', { name: 'Risk Engines' }).click();
  await page.getByRole('button', { name: 'Add new item' }).click();
  await page.getByText('Create new Risk Engine').click();
  await page.getByLabel('Risk Engine name *').click();
  await page.getByLabel('Risk Engine name *').fill('Testing');
  await page.getByRole('button', { name: 'Create' }).click();
  await expect(page.locator('text=Testing')).not.toHaveCount(0);
  await expect(page.locator('text=DRD')).not.toHaveCount(0);
});