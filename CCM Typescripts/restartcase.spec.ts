//Restarting a case(case 17).

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
  await page.locator('div:nth-child(4) > .css-1kb69pq > .layout > .css-ocerz').click();
  await page.locator('div:nth-child(4) > .css-1kb69pq > .layout > .css-ocerz').fill('17');
  await page.locator('div:nth-child(4) > .css-1kb69pq > .layout > .MuiButtonBase-root').click();
  await page.getByText('C-17').click();
  await page.locator('[data-test-id="virtuoso-top-item-list"]').getByRole('button').first().click();
  await page.getByRole('menuitem', { name: 'Restart' }).click();
  await page.getByLabel('Audit message').fill('Restart');
  await page.getByRole('button', { name: 'Restart' }).click();
});