//As a logged in user I can see the following columns in the Case result List

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox', { name: 'username' }).fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.locator('[data-test-id="virtuoso-top-item-list"]').getByRole('button').click();
  await expect(page.locator('text=Id')).not.toHaveCount(0);
  await expect(page.locator('text=Case Type')).not.toHaveCount(0);
  await expect(page.locator('text=Status')).not.toHaveCount(0);
  await expect(page.locator('text=Main Client Id')).not.toHaveCount(0);
  await expect(page.locator('text=Origin')).not.toHaveCount(0);
  await expect(page.locator('text=Customer Type')).not.toHaveCount(0);
  await expect(page.locator('text=Name')).not.toHaveCount(0);
  await expect(page.locator('text=Classification')).not.toHaveCount(0);
  await expect(page.locator('text=Creation Date')).not.toHaveCount(0);
  await expect(page.locator('text=Elapsed Time')).not.toHaveCount(0);
  await expect(page.locator('text=Scenario Names')).not.toHaveCount(0);
  await expect(page.locator('text=Qual task Stat')).not.toHaveCount(0);
  await expect(page.locator('text=Hit ID')).not.toHaveCount(0);
  await page.getByRole('button', { name: 'Close' }).click();
});