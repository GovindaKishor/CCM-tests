//To validate text of text fields in Customer screening or Adhoc screening form.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByLabel('Username *').fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Reveal Password' }).click();
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('group').getByRole('button').nth(1).click();
  await page.getByRole('menuitem', { name: 'Adhoc screening' }).click();
  await expect(page.locator('text=Legal status')).toHaveCount(1);
  await expect(page.locator('text=Client ID')).not.toHaveCount(0);
  await expect(page.locator('text=Country of birth')).toHaveCount(1);
  await expect(page.locator('text=Last name')).toHaveCount(1);
  await expect(page.locator('text=Gender')).toHaveCount(1);
  await expect(page.locator('text=Date of birth')).toHaveCount(1);
  await expect(page.locator('text=Business unit')).toHaveCount(1);
  await expect(page.locator('text=List names')).toHaveCount(1);
  await page.getByRole('button', { name: 'Cancel' }).click();
});