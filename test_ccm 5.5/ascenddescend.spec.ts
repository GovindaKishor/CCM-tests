//Automation test which select all the columns of case in filter and and arranges it in ascending or descending order(CCM 5.5).
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-5-5-x.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox', { name: 'username' }).fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.locator('[data-test-id="virtuoso-top-item-list"]').getByRole('button').click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByTitle('Id', { exact: true }).locator('svg').click();
  await expect(page.locator('text=C-7')).not.toHaveCount(0);
  await expect(page.locator('text=C-12')).not.toHaveCount(0);
  await page.getByTitle('Id', { exact: true }).locator('svg').click();
  await expect(page.locator('text=C-7')).not.toHaveCount(0);
  await expect(page.locator('text=C-12')).not.toHaveCount(0);
});