//As a logged in user I can open the documents in the Documents Tab (quick look) or download them.
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login\'');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox', { name: 'username' }).fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Cases' }).click();
  await page.locator('div:nth-child(10) > .css-1ssirbu > .css-mslw24').click();
  await page.getByRole('tab', { name: 'Documents' }).click();
  await page.getByRole('button', { name: 'Documents' }).click();
  await page.getByRole('listitem').getByRole('button').click();
  await page.getByRole('menuitem', { name: 'Quick look' }).click();
  await page.locator('.MuiToolbar-root > button:nth-child(3)').click();
});