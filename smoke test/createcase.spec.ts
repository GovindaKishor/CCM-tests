//Creating new case.

import { test, expect } from '@playwright/test';

test('creating a case', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox').nth(0).fill('SUPERUSER');
  await page.getByRole('textbox').nth(1).fill('SUPERUSER');
  await page.getByRole('button').nth(2).click();
  await page.getByRole('button').nth(0).click();
  await page.getByRole('menuitem').nth(1).click();
  await page.getByRole('button').nth(3).click();
  await page.getByRole('option').nth(1).click();
  await page.getByRole('link').nth(0).click();
  await page.getByRole('button', { name: 'New case' }).click();
  await page.getByLabel('Case type').click();
  await page.getByRole('option', { name: 'Compliance Review' }).click();
  await page.getByText('Individual').click();
  await page.getByPlaceholder('Search...').click();
  await page.getByPlaceholder('Search...').fill('c');
  await page.getByRole('option', { name: 'BusinessId: CEMT-1085631' }).click();
  await page.getByRole('button', { name: 'Create' }).click();
  await expect(page.getByText('text=Compliance Review')).toHaveCount(1);
});