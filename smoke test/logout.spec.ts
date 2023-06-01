//Login into and logout from the system.

import { test, expect } from '@playwright/test';

test('logout', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox').nth(0).fill('SUPERUSER');
  await page.getByRole('textbox').nth(1).fill('SUPERUSER');
  await page.getByRole('button').nth(2).click();
  await page.getByRole('button').nth(0).click();
  await page.getByRole('menuitem').nth(2).click();
  await expect(page).toHaveURL('http://ccm-ci-develop.imtf-devops.com:8181/auth/logout');
});
