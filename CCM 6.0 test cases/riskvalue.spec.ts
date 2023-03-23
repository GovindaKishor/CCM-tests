//The values have to be also available for reporting.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox', { name: 'username' }).fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Clients' }).click();
  await page.locator('div:nth-child(2) > .css-1ssirbu > .css-mslw24').dblclick();
  await page.getByRole('tab', { name: 'Risk' }).click();
  await expect(page.getByRole('cell', { name: '' }).nth(1)).not.toHaveText('-');
  await expect(page.getByRole('cell', { name: '' }).nth(2)).not.toHaveText('-');
  await expect(page.getByRole('cell', { name: '' }).nth(5)).not.toHaveText('-');
  await expect(page.getByRole('cell', { name: '' }).nth(8)).not.toHaveText('-');
  await expect(page.getByRole('cell', { name: '' }).nth(10)).not.toHaveText('-');
  await expect(page.getByRole('cell', { name: '' }).nth(11)).not.toHaveText('-');
  await expect(page.getByRole('cell', { name: '' }).nth(13)).not.toHaveText('-');
  await expect(page.getByRole('cell', { name: '' }).nth(14)).not.toHaveText('-');
  await expect(page.getByRole('cell', { name: '' }).nth(16)).not.toHaveText('-');
  await expect(page.getByRole('cell', { name: '' }).nth(17)).not.toHaveText('-');
  await expect(page.getByRole('cell', { name: '' }).nth(19)).not.toHaveText('-');
  await expect(page.getByRole('cell', { name: '' }).nth(20)).not.toHaveText('-');
});