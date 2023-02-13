//Test which will cancel a particular case automatically(case 18).

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByLabel('Username *').fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.locator('div:nth-child(4) > .css-1kb69pq > .layout > .css-ocerz').click();
  await page.locator('div:nth-child(4) > .css-1kb69pq > .layout > .css-ocerz').fill('18');
  await page.locator('div:nth-child(4) > .css-1kb69pq > .layout > .MuiButtonBase-root').click();
  await page.locator('.css-mslw24').click();
  await page.locator('[data-test-id="virtuoso-top-item-list"]').getByRole('button').first().click();
  await page.getByRole('menuitem', { name: 'Cancel case' }).click();
  await page.getByLabel('Audit message').fill('Testing');
  await page.getByRole('button', { name: 'Cancel case' }).click();
});