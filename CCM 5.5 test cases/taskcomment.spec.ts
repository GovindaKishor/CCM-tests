//To add comment to a particular task and open a particular task.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-5-5-x.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox', { name: 'username' }).fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Tasks' }).click();
  await page.locator('div:nth-child(5) > .css-1ssirbu > .css-mslw24').click();
  await page.locator('[data-test-id="virtuoso-top-item-list"]').getByRole('button').first().click();
  await page.getByRole('menuitem', { name: 'Add comment' }).click();
  await page.getByRole('textbox', { name: 'Comment' }).fill('Testing');
  await page.getByRole('button', { name: 'Send' }).click();
});