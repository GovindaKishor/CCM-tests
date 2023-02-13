// This is a failed test which automatically create a ad hoc process.
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByLabel('Username *').fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/case-manager/?sort=case.presentableId');
  await page.locator('div:nth-child(14) > .css-1ssirbu > .css-mslw24').click();
  await page.locator('[data-test-id="virtuoso-top-item-list"]').getByRole('button').first().click();
  await page.getByRole('menuitem', { name: 'Create new ad hoc process' }).click();
  await page.getByRole('button', { name: 'Open' }).click();
  await page.getByLabel('Type').click();
  await expect(page.locator('Create new ad hoc process')).not.toHaveCount(0);
  await page.getByLabel('Type').fill('');
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('button', { name: 'Open' }).click();
  await page.getByRole('button', { name: 'Cancel' }).click();
});