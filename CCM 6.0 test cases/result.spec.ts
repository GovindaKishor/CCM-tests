//Compare to number of items displayed.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox', { name: 'username' }).click();
  await page.getByRole('textbox', { name: 'username' }).fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/case-manager/?sort=case.presentableId');
  await expect(page.locator('text=16')).toHaveCount(5);
  await page.locator('[data-test-id="virtuoso-top-item-list"]').getByRole('checkbox').check();
  await expect(page.locator('text=16')).toHaveCount(6);
});