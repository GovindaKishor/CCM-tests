//Test which will delegate a task.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox', { name: 'username' }).fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Tasks' }).click();
  await page.locator('div:nth-child(2) > .css-1ssirbu > .css-mslw24').click({
    button : 'right'
    });
  await page.getByRole('menuitem', { name: 'Delegate' }).click();
  await page.getByLabel('User or group').click();
  await page.getByRole('option', { name: 'CentralRegistry' }).click();
  await page.getByRole('button', { name: 'Delegate task' }).click();
});