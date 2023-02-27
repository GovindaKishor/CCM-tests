//Adding classification to a case.
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-5-5-x.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox', { name: 'username' }).fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByText('C-6').click();
  await page.locator('[data-test-id="virtuoso-item-list"]').getByText('C-6').click();
  await page.getByRole('button', { name: 'Classifications' }).click();
  await page.getByRole('button', { name: 'Add classification' }).click();
  await page.getByRole('button', { name: 'Open' }).click();
  await page.getByRole('option', { name: 'GoAml Report' }).click();
  await page.getByLabel('Are you sure you want to create a new classification ?').check();
  await page.getByRole('button', { name: 'Create' }).click();
});