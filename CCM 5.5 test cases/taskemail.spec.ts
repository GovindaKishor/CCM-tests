//Send link by email for a task.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-5-5-x.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox', { name: 'username' }).fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Tasks' }).click();
  await page.locator('.css-mslw24').first().click({
    button : 'right'
  }
  );
  await page.getByRole('menuitem', { name: 'Send link by email Ctrl+Shift+E' }).click();
});