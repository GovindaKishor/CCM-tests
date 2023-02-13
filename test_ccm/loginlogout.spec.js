//Simple login and logout actions done automatically. Test will also check if we are in corrrect page or not after each action.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await expect(page.locator('.MuiBox-root')).toHaveCount(1);
  await expect(page.locator('text=Compliance Case Management')).toHaveCount(1);
  await expect(page.locator('text=IMTF Compliance & Fraud Platform')).toHaveCount(1);
  await page.getByLabel('Username *').click();
  await page.getByLabel('Username *').fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Reveal Password' }).click();
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.locator('.MuiBox-root').first()).toHaveCount(1);
  await expect(page.locator('text=Cases')).not.toHaveCount(0);
  await page.getByRole('button', { name: 'SS' }).click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
  await page.getByRole('link', { name: 'Log in again' }).click();
  await expect(page.locator('.MuiBox-root')).toHaveCount(1);
  await expect(page.locator('text=Compliance Case Management')).toHaveCount(1);
  await expect(page.locator('text=IMTF Compliance & Fraud Platform')).toHaveCount(1);
});