//Rejecting the pending request of a configuration in workbench.

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
  await page.getByLabel('Duplicate existing configuration').check();
  await page.getByRole('button', { name: 'Open' }).click();
  await page.getByRole('listbox', { name: 'Duplicate from' }).getByText('ccm').click();
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByRole('button', { name: 'Send for Approval' }).click();
  await page.getByLabel('Comment *').click();
  await page.getByLabel('Comment *').fill('Automation Testing');
  await page.getByRole('button', { name: 'Send for Approval' }).click();
  await page.getByRole('button', { name: 'SS' }).click();
  await page.getByText('Logout').click();
  await page.getByRole('link', { name: 'Log in again' }).click();
  await page.getByRole('textbox', { name: 'username' }).click();
  await page.getByRole('textbox', { name: 'username' }).fill('SUPERUSER2');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER2');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Workbench' }).click();
  await page.getByRole('row', { name: 'Automation Testing' }).getByRole('button', { name: 'Config actions' }).click();
  await page.getByRole('menuitem', { name: 'Reject' }).click();
  await page.getByLabel('Comment *').click();
  await page.getByLabel('Comment *').fill('Automation Testing');
  await page.getByRole('button', { name: 'Reject' }).click();
});