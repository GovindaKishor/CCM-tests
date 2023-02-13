//Test which explores document upload section as well as right hand side section of a particular task.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByLabel('Username *').fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Tasks' }).click();
  await page.getByText('HT-8').click({
    clickCount:2
  });
  await page.getByRole('listitem').filter({ hasText: 'Document Upload' }).locator('div').nth(2).click();
  await page.getByRole('button', { name: 'Details open' }).click();
  await page.getByRole('button', { name: 'Details open' }).click();
  await page.getByRole('button', { name: 'Timeline' }).click();
  await page.getByRole('button', { name: 'Add comment' }).click();
  await page.getByRole('textbox', { name: 'Comment' }).fill('Testing');
  await page.getByRole('button', { name: 'Send' }).click();
  await page.getByRole('button', { name: 'Export' }).click();
  await page.getByRole('button', { name: 'Timeline' }).click();
  await page.getByRole('tab', { name: 'Customer' }).click();
  await page.getByRole('tab', { name: 'Documents' }).click();
  await page.getByRole('link', { name: 'Tasks' }).click();
});