//Adding comment to a case.
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-5-5-x.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox', { name: 'username' }).fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.locator('.css-mslw24').first().click({
    button : 'right'
  });
  await page.getByRole('menuitem', { name: 'Add comment' }).click();
  await page.getByRole('textbox', { name: 'Comment' }).fill('Comment');
  await page.getByRole('button', { name: 'Send' }).click();
});