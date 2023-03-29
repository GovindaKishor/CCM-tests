//Test which will open a task in new tab.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-5-5-x.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox', { name: 'username' }).fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Tasks' }).click();
  await page.locator('div:nth-child(5) > .css-1ssirbu > .css-mslw24').click();
  await page.locator('[data-test-id="virtuoso-top-item-list"]').getByRole('button').first().click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('menuitem', { name: 'Open in new window' }).click();
  const page1 = await page1Promise;
  await expect(page1.locator('text=Transactions')).not.toHaveCount(0);
  await expect(page1.locator('text=Qualification')).not.toHaveCount(0);
  await expect(page1.locator('text=Document Upload')).not.toHaveCount(0);
  await expect(page1.locator('text=Date')).not.toHaveCount(0);
  await expect(page1.locator('text=Amount')).not.toHaveCount(0);
  await expect(page1.locator('text=Incoming?')).not.toHaveCount(0);
  await expect(page1.locator('text=Add additional Transactions')).not.toHaveCount(0);
});