//Error displayed properly when we remove the name of client group.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-test.imtf-devops.com:8181/auth/login');
  await page.getByLabel('username').fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByRole('link', { name: 'Clients' }).click();
  await page.getByRole('button', { name: 'New client group' }).click();
  await page.getByLabel('Tenant *').click();
  await page.getByRole('option', { name: 'CENL' }).click();
  await page.getByLabel('Name *').click();
  await page.getByLabel('Name *').fill('Test');
  await page.getByRole('button', { name: 'Create' }).click();
  await page.locator('.MuiCardHeader-action > button').first().click();
  await page.getByLabel('Name *').click();
  await page.getByLabel('Name *').fill('');
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByText('This field is not the correct type, string')).toHaveCount(1);
  await expect(page.getByText('Unexpected unknown runtime error')).toHaveCount(0);
  await expect(page.getByText('An unknown error occurred')).toHaveCount(0);
  await page.getByLabel('Name *').click();
  await page.getByLabel('Name *').fill('Automation Testing');
  await page.getByRole('button', { name: 'Save' }).click();
});