//Checking breadcrumbs.


import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-5-5-x.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox', { name: 'username' }).fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByText('C-1', { exact: true }).click({
    clickCount: 2
  });
  await expect(page.locator('text=Cases')).not.toHaveCount(0);
  await expect(page.locator('text=Case C-1 - Default Siron Case')).not.toHaveCount(0);
});