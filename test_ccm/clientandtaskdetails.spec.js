// To open a task and client and to validate fields present in that details.
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByLabel('Username *').fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Clients' }).click();
  await page.locator('div:nth-child(2) > .css-1ssirbu > .css-mslw24').click();
  await page.locator('[data-test-id="virtuoso-top-item-list"]').getByRole('button').first().click();
  await page.getByRole('menuitem', { name: 'Details' }).click();
  await page.getByRole('button').click();
  await page.getByRole('link', { name: 'Tasks' }).click();
  await page.locator('div:nth-child(4) > .css-1ssirbu > .css-mslw24').click();
  await page.locator('[data-test-id="virtuoso-top-item-list"]').getByRole('button').first().click();
  await page.getByRole('menuitem', { name: 'Details' }).click();
  await page.getByRole('button').click();
  await page.locator('[data-test-id="virtuoso-top-item-list"]').getByRole('button').first().click();
  await page.getByRole('menuitem', { name: 'Details' }).click();
  await page.getByRole('button').click();
  await page.getByRole('link', { name: 'Clients' }).click();
  await page.locator('div:nth-child(7) > .css-1ssirbu > .css-mslw24').click();
  await page.locator('[data-test-id="virtuoso-top-item-list"]').getByRole('button').first().click();
  await page.getByRole('menuitem', { name: 'Details' }).click();
});