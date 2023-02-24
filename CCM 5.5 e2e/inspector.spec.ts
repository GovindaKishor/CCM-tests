//As a logged in user, when I select a case, I will see the some of inspector Tabs and inspectors
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-5-5-x.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox', { name: 'username' }).fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.locator('.css-mslw24').first().click();
  await page.getByRole('tab', { name: 'Customer' }).click();
  await page.getByRole('tab', { name: 'Documents' }).click();
  await page.getByRole('tab', { name: 'Case' }).click();
  await page.getByRole('button', { name: 'Details Active' }).click();
  await page.getByRole('button', { name: 'Timeline' }).click();
  await page.getByRole('button', { name: 'Timeline' }).click();
  await page.getByRole('button', { name: 'Classifications' }).click();
  await page.getByRole('tab', { name: 'Customer' }).click();
  await page.getByRole('button', { name: 'Transaction details' }).click();
  await page.getByRole('button', { name: 'Transaction details' }).click();
  await page.getByRole('button', { name: 'Related cases' }).click();
  await page.getByRole('button', { name: 'Related cases' }).click();
  await page.getByRole('tab', { name: 'Documents' }).click();
  await page.getByRole('button', { name: 'Documents' }).click();
});