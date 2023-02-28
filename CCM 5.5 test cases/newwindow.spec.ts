//Opening a case in new window.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-5-5-x.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox', { name: 'username' }).fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.locator('.css-mslw24').first().click({
    button : 'right'
  });
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('menuitem', { name: 'Open in new window Ctrl+Shift+O' }).click();
  const page1 = await page1Promise;
  await expect(page1.locator('text=Case C-1 -')).not.toHaveCount(0);
});