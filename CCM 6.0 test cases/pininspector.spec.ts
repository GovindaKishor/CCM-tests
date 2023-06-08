//Checking if every inspector can be pinned.

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
  await page.getByRole('link').nth(0).click();
  await page.locator('.css-mslw24').first().click();
  await page.getByRole('button', { name: 'Details Completed' }).getByRole('button').click();
  await page.getByRole('button', { name: 'Details Completed' }).getByRole('button').click();
  await page.getByRole('button', { name: 'AML Alerts' }).getByRole('button').click();
  await page.getByRole('button', { name: 'AML Alerts' }).getByRole('button').click();
  await page.getByRole('button', { name: 'Timeline' }).getByRole('button').click();
  await page.getByRole('button', { name: 'Timeline' }).getByRole('button').click();
  await page.getByRole('button', { name: 'Classifications' }).getByRole('button').click();
  await page.getByRole('button', { name: 'Classifications' }).getByRole('button').click();
  await page.getByRole('tab', { name: 'Customer' }).click();
  await page.getByRole('button', { name: 'Clients' }).getByRole('button').click();
  await page.getByRole('button', { name: 'Clients' }).getByRole('button').click();
  await page.getByRole('button', { name: 'Related cases' }).getByRole('button').click();
  await page.getByRole('button', { name: 'Related cases' }).getByRole('button').click();
  await page.getByRole('tab', { name: 'Documents' }).click();
  await page.getByRole('button', { name: 'Documents' }).getByRole('button').click();
  await page.getByRole('button', { name: 'Documents' }).getByRole('button').click();
  await page.getByRole('link').nth(1).click();
  await page.locator('.css-mslw24').first().click();
  await page.getByRole('button', { name: 'Documents' }).getByRole('button').click();
  await page.getByRole('button', { name: 'Documents' }).getByRole('button').click();
  await page.getByRole('tab', { name: 'Customer' }).click();
  await page.getByRole('tab', { name: 'Task' }).click();
  await page.getByRole('button', { name: 'Details Open' }).getByRole('button').click();
  await page.getByRole('button', { name: 'Details Open' }).getByRole('button').click();
  await page.getByRole('button', { name: 'Timeline' }).getByRole('button').click();
  await page.getByRole('button', { name: 'Timeline' }).getByRole('button').click();
  await page.getByRole('link').nth(2).click();
  await page.locator('.css-mslw24').first().click();
  await page.getByRole('button', { name: 'Related cases' }).getByRole('button').click();
  await page.getByRole('button', { name: 'Related cases' }).getByRole('button').click();
  await page.getByRole('button', { name: 'Related entities' }).getByRole('button').click();
  await page.getByRole('button', { name: 'Related entities' }).getByRole('button').click();
});