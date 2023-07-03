//Default save option in case difinition page.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox').nth(0).fill('SUPERUSER3');
  await page.getByRole('textbox').nth(1).fill('SUPERUSER3');
  await page.getByRole('button').nth(2).click(); 
  await page.getByRole('button').nth(0).click();
  await page.getByRole('menuitem').nth(1).click();
  await page.getByRole('button').nth(3).click();
  await page.getByRole('option').nth(1).click();
  await page.getByRole('link').nth(3).click();
  await page.locator('button').nth(-1).click();
  await page.getByRole('textbox').nth(0).fill('Automation Testing');
  await page.getByRole('radio').nth(0).check();
  await page.getByRole('button').nth(0).click();
  await page.getByRole('option').nth(0).click();
  await page.getByRole('button').nth(3).click();
  await page.getByRole('button', { name: 'Case Definitions' }).click();
  await page.getByRole('link', { name: 'Case Definitions' }).click();
  await page.getByRole('cell', { name: 'AML Alert - Natural Person' }).click();
  await page.getByRole('button', { name: 'New AND Rule' }).click();
  await page.getByRole('button', { name: 'Scenario ​', exact: true }).click();
  await page.getByRole('option', { name: 'AML Alert created with scenario number' }).click();
  await page.getByRole('button', { name: 'Operator ​' }).click();
  await page.getByRole('option', { name: 'In', exact: true }).click();
  await page.getByLabel('Values *').click();
  await page.getByLabel('Values *').fill('5');
  await page.getByRole('button', { name: 'Operator In' }).click();
  await page.getByRole('option', { name: 'Not In' }).click();
  await expect(page.getByText('5')).toHaveCount(1);
  await page.getByRole('button', { name: '5' }).click();
  await page.getByLabel('Values *').fill('5');
  await page.getByRole('button', { name: 'Scenario AML Alert created with scenario number' }).click();
  await page.getByRole('option', { name: 'AML Alert created with scenario number' }).click();
  await expect(page.getByText('5')).toHaveCount(1);
});