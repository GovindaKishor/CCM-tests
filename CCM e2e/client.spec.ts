//As a logged in user I can select a customer and will see 2 inspectors, Related cases and Related entities.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox', { name: 'username' }).fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/case-manager/?sort=case.presentableId');
  await page.getByRole('link', { name: 'Clients' }).click();
  await page.locator('div:nth-child(4) > .css-1ssirbu > .css-mslw24').click();
  await expect(page.locator('text=Related cases')).not.toHaveCount(0);
  await expect(page.locator('text=Related entities')).not.toHaveCount(0);
  await page.getByRole('button', { name: 'Related cases' }).click();
  await page.getByRole('button', { name: 'Related entities' }).click();
});