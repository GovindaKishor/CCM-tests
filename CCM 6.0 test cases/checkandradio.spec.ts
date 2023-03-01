//As a logged in user, I can filter the cases I have access to using the filters on the left side, this will adapt the Search result list.

//To test checkboxes and radio buttons in CCM Cases section.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox', { name: 'username' }).click();
  await page.getByRole('textbox', { name: 'username' }).fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.locator('form div').filter({ hasText: 'Personal filtersMy cases My previous cases My role\'s cases' }).getByRole('radio').first().check();
  await page.locator('form div').filter({ hasText: 'Personal filtersMy cases My previous cases My role\'s cases' }).getByRole('radio').nth(1).check();
  await page.locator('form div').filter({ hasText: 'Personal filtersMy cases My previous cases My role\'s cases' }).getByRole('radio').nth(2).check();
  await page.getByRole('button', { name: 'Reset filter' }).click();
  await page.locator('.css-ocerz').first().click();
  await page.locator('.css-ocerz').first().fill('CEMT');
  await page.locator('.css-1kb69pq > .layout > .MuiButtonBase-root').first().click();
  await page.getByRole('button', { name: 'Reset filter' }).click();
  await page.locator('div:nth-child(3) > .css-1kb69pq > .layout > .css-ocerz').click();
  await page.locator('div:nth-child(3) > .css-1kb69pq > .layout > .css-ocerz').fill('SUPERUSER');
  await page.locator('div:nth-child(3) > .css-1kb69pq > .layout > .MuiButtonBase-root').click();
  await page.getByRole('button', { name: 'Reset filter' }).click();
  await page.locator('div:nth-child(4) > .css-1kb69pq > .layout > .css-ocerz').click();
  await page.locator('div:nth-child(4) > .css-1kb69pq > .layout > .css-ocerz').fill('11');
  await page.locator('div:nth-child(4) > .css-1kb69pq > .layout > .MuiButtonBase-root').click();
  await page.getByRole('button', { name: 'Reset filter' }).click();
  await page.getByText('Active 13').click();
  await page.getByRole('button', { name: 'Reset filter' }).click();
  await page.getByText('Individual 12').click();
  await page.getByRole('button', { name: 'Reset filter' }).click();
  await page.getByText('CORP 2').click();
  await page.getByRole('button', { name: 'Reset filter' }).click();
  await page.getByText('SironAML 16').click();
  await page.getByRole('button', { name: 'Reset filter' }).click();
  await page.getByText('Default Siron Case 4').click();
  await page.getByRole('button', { name: 'Reset filter' }).click();
  await page.getByText('Last week 16').click();
  await page.getByRole('button', { name: 'Reset filter' }).click();
  await page.locator('div:nth-child(12) > .css-1kb69pq > .layout > .css-ocerz').click();
  await page.locator('div:nth-child(12) > .css-1kb69pq > .layout > .css-ocerz').fill('unusual');
  await page.locator('div:nth-child(12) > .css-1kb69pq > .layout > .MuiButtonBase-root').click();
  await page.getByRole('button', { name: 'Reset', exact: true }).click();
});