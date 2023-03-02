//Compare to number of items displayed.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-5-5-x.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox', { name: 'username' }).fill('SUPERUSER');
  await page.getByLabel('Password *').click({
    modifiers: ['Shift']
  });
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Tasks' }).click();
  await expect(page.locator('text=16')).toHaveCount(7);
  await page.locator('[data-test-id="virtuoso-top-item-list"]').getByRole('checkbox').check();
  await expect(page.locator('text=16')).toHaveCount(8);
});