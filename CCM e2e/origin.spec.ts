//As a SUPERUSER I have access to all types of Cases for all entities.(case type and origin).

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox', { name: 'username' }).fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.locator('text=SironAML')).not.toHaveCount(0);
  await expect(page.locator('text=Default Siron Case')).not.toHaveCount(0);
  await expect(page.locator('text=AML Alert')).not.toHaveCount(0);
});