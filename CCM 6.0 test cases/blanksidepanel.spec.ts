//No blank screen in side panel configuration.

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
  await page.getByRole('link').nth(3).click();
  await page.getByRole('cell').nth(0).click();
  await page.getByRole('button', { name: 'Case Definitions' }).click();
  await page.getByRole('link', { name: 'Side Panel Configurations' }).click();
  await page.getByRole('cell', { name: 'Monitoring Side Panel' }).click();
  await expect(page.getByText('Monitoring Side Panel')).not.toHaveCount(0);
  await expect(page.getByText('Inspectors')).not.toHaveCount(0);
  await expect(page.getByText('Tabs')).not.toHaveCount(0);
});