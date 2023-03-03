//Reset option on filter and selecting columns to displayed.
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox', { name: 'username' }).fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Clients' }).click();
  await page.locator('span').filter({ hasText: 'Natural Person' }).click();
  await page.locator('span').filter({ hasText: 'Legal Entity' }).click();
  await page.getByText('Client Group', { exact: true }).click();
  await page.getByRole('button', { name: 'Reset', exact: true }).click();
  await page.locator('[data-test-id="virtuoso-top-item-list"]').getByRole('button').click();
  await page.getByRole('listitem').filter({ hasText: 'Tenant' }).getByRole('checkbox').uncheck();
  await page.getByRole('listitem').filter({ hasText: 'Type' }).getByRole('checkbox').uncheck();
  await page.getByRole('button', { name: 'Reset' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
});