//Rename option in client group.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox').nth(0).fill('SUPERUSER');
  await page.getByRole('textbox').nth(1).fill('SUPERUSER');
  await page.getByRole('button').nth(2).click();
  await page.getByRole('button').nth(0).click();
  await page.getByRole('menuitem').nth(1).click();
  await page.getByRole('button').nth(3).click();
  await page.getByRole('option').nth(1).click();
  await page.getByRole('link').nth(2).click();
  await page.getByRole('button', { name: 'New client group' }).click();
  await page.getByLabel('Open').click();
  await page.getByRole('option', { name: 'CENL' }).click();
  await page.getByLabel('Name *').click();
  await page.getByLabel('Name *').fill('Automation testing');
  await page.getByRole('button', { name: 'Create' }).click();
  await page.locator('.MuiCardHeader-action > button').first().click();
  await page.getByLabel('Name *').click();
  await page.getByLabel('Name *').fill('');
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByText('This field is required')).toHaveCount(1);
  await page.getByLabel('Name *').click();
  await page.getByLabel('Name *').fill('Testing');
  await page.getByRole('button', { name: 'Save' }).click();
});