//The "Cases" checkbox automatically unchecks when the user selects the "Cases (Simplified)" checkbox. When "Cases" is checked, "Cases (Simplified)" automatically de-checks itself.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-5-5-x.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox', { name: 'username' }).fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('checkbox').check();
  await page.getByRole('tab', { name: 'Cases', exact: true }).click();
  await page.locator('[data-test-id="virtuoso-top-item-list"]').getByRole('checkbox').check();
  await page.getByRole('tab', { name: 'Cases (Simplified)' }).click();
  expect(await page.getByRole('checkbox').isChecked()).toBeTruthy();
  await page.getByRole('tab', { name: 'Cases', exact: true }).click();
  await page.locator('[data-test-id="virtuoso-top-item-list"]').getByRole('checkbox').uncheck();
  expect(await page.locator('[data-test-id="virtuoso-top-item-list"]').getByRole('checkbox').isChecked()).toBeFalsy();
});