//Unable to create AML Alert - Natural Person and Null issue happened. 

import { test, expect } from '@playwright/test';

test('Error wile creating natural person', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox', { name: 'username' }).fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('button', { name: 'New case' }).click();
  await page.getByRole('button', { name: 'Create' }).click();
  await expect(page.locator('text=Unknown error during process')).toHaveCount(1);
});