//Automatically create a client group.


import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-5-5-x.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox', { name: 'username' }).fill('SUPER');
  await page.getByRole('textbox', { name: 'username' }).click({
    modifiers: ['Shift']
  });
  await page.getByRole('textbox', { name: 'username' }).fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('group').getByRole('button').nth(1).click();
  await page.getByText('New client group').click();
  await page.getByRole('button', { name: 'Open' }).click();
  await page.getByRole('option', { name: 'CENL' }).click();
  await page.getByLabel('Name *').click();
  await page.getByLabel('Name *').fill('Test');
  await page.getByLabel('Description').click();
  await page.getByLabel('Description').fill('Testing');
  await page.getByRole('button', { name: 'Create' }).click();
});