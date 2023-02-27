//As a logged in user I can view the History of a case, click on View all to view all details or export in order to download the history.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-5-5-x.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox', { name: 'username' }).fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.locator('div:nth-child(4) > .css-1kb69pq > .layout > .css-ocerz').click();
  await page.locator('div:nth-child(4) > .css-1kb69pq > .layout > .css-ocerz').fill('13');
  await page.locator('div:nth-child(4) > .css-1kb69pq > .layout > .MuiButtonBase-root').click();
  await page.getByText('C-13').click();
  await expect(page.locator('text=Timeline')).toHaveCount(1);
  await page.getByRole('button', { name: 'Timeline' }).click();
  await page.getByRole('button', { name: 'Add comment' }).click();
  await page.getByRole('textbox', { name: 'Comment' }).fill('comment');
  await page.getByRole('button', { name: 'Send' }).click();
  await page.getByRole('button', { name: 'Export' }).click();
});