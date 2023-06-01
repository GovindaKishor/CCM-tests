//Expand or collapse insepctors.

import { test, expect } from '@playwright/test';

test('expand collapse', async ({ page }) => {
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
  await page.getByRole('button', { name: 'Details Active' }).click();
  await page.getByRole('button', { name: 'Details Active' }).click();
  await page.getByRole('button', { name: 'AML Alerts' }).click();
  await page.getByRole('button', { name: 'AML Alerts' }).click();
  await page.getByRole('button', { name: 'Timeline' }).click();
  await page.getByRole('button', { name: 'Timeline' }).click();
  await page.getByRole('button', { name: 'Classifications' }).click();
  await page.getByRole('button', { name: 'Classifications' }).click();
  await page.getByRole('tab', { name: 'Customer' }).click();
  await page.getByRole('button', { name: 'Clients' }).click();
  await page.getByRole('button', { name: 'Clients' }).click();
  await page.getByRole('button', { name: 'Related cases' }).click();
  await page.getByRole('button', { name: 'Related cases' }).click();
  await page.getByRole('tab', { name: 'Documents' }).click();
  await page.getByRole('button', { name: 'Documents' }).click();
  await page.getByRole('link').nth(1).click();
  await page.locator('.css-mslw24').first().click();
  await page.getByRole('button', { name: 'Documents' }).click();
  await page.getByRole('tab', { name: 'Customer' }).click();
  await page.getByRole('tab', { name: 'Task' }).click();
  await page.getByRole('button', { name: 'Details Open' }).click();
  await page.getByRole('button', { name: 'Details Open' }).click();
  await page.getByRole('button', { name: 'Timeline' }).click();
  await page.getByRole('button', { name: 'Timeline' }).click();
  await page.getByRole('link').nth(2).click();
  await page.locator('.css-mslw24').first().click();
  await page.getByRole('button', { name: 'Related cases' }).click();
  await page.getByRole('button', { name: 'Related cases' }).click();
  await page.getByRole('button', { name: 'Related entities' }).click();
  await page.getByRole('button', { name: 'Related entities' }).click();
});