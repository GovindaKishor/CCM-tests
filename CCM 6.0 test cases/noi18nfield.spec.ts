// Remove all i18n fields.

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
  await page.getByRole('cell').nth(0).click();
  await page.getByRole('button', { name: 'Case Definitions' }).click();
  await page.getByRole('link', { name: 'Case Definitions' }).click();
  await page.getByRole('cell', { name: 'iMatch Transaction Screening' }).click();
  await expect(page.getByText('i18n')).toHaveCount(0);
  await page.getByRole('link', { name: 'Task Definitions' }).click();
  await page.getByRole('cell', { name: 'Investigation : FICDD', exact: true }).click();
  await expect(page.getByText('i18n')).toHaveCount(0);
  await page.getByRole('link', { name: 'Workflow Definitions' }).click();
  await page.getByRole('cell', { name: 'Sanctions - FICDD' }).click();
  await expect(page.getByText('i18n')).toHaveCount(0);
  await page.getByRole('link', { name: 'Side Panel Configurations' }).click();
  await page.getByRole('cell', { name: 'Client Group Side Panel' }).click();
  await expect(page.getByText('i18n')).toHaveCount(0);
  await page.getByRole('button', { name: 'Case Definitions' }).click();
  await page.getByRole('button', { name: 'Risk Configurations' }).click();
  await page.getByRole('link', { name: 'Risk Configurations' }).click();
  await expect(page.getByText('riskLevelDefinitions')).toHaveCount(0);
});