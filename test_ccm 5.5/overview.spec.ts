//Quick navigation of Cases,Tasks and Client section.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-5-5-x.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox', { name: 'username' }).fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Reveal Password' }).click();
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.locator('section').filter({ hasText: 'CasesNew case' }).getByRole('button').nth(2).click();
  await page.locator('section').filter({ hasText: 'CasesNew case' }).getByRole('button').nth(2).click();
  await page.locator('div:nth-child(8) > .css-1ssirbu > .css-mslw24').click();
  await page.getByRole('button', { name: 'Details Active' }).click();
  await page.getByRole('button', { name: 'Details Active' }).click();
  await page.getByRole('button', { name: 'Timeline' }).click();
  await page.getByRole('button', { name: 'Timeline' }).click();
  await page.getByRole('button', { name: 'AML Alerts' }).click();
  await page.getByRole('button', { name: 'AML Alerts' }).click();
  await page.getByRole('button', { name: 'Classifications' }).click();
  await page.getByRole('button', { name: 'Classifications' }).click();
  await page.getByRole('link', { name: 'Tasks' }).click();
  await page.locator('div:nth-child(5) > .css-1ssirbu > .css-mslw24 > .MuiButtonBase-root > .PrivateSwitchBase-input').click();
  await page.getByRole('button', { name: 'Details open' }).click();
  await page.getByRole('button', { name: 'Details open' }).click();
  await page.getByRole('button', { name: 'Timeline' }).click();
  await page.getByRole('button', { name: 'Timeline' }).click();
  await page.getByRole('link', { name: 'Clients' }).click();
  await page.getByRole('navigation').getByRole('button').nth(1).click();
  await page.locator('.MuiBackdrop-root').click();
});