//Creating the legal entity client case

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/auth/login');
  await page.getByLabel('username').fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByRole('button', { name: 'New case' }).click();
  await page.getByLabel('Case type').click();
  await page.getByRole('option', { name: 'Manual Risk Level Change' }).click();
  await page.getByText('LegalEntity').click();
  await page.getByPlaceholder('Search...').click();
  await page.getByPlaceholder('Search...').fill('CENL');
  await page.getByRole('option', { name: 'BusinessId: CENL-1388678, Name: SKYNET CORP' }).click();
  await page.getByRole('button', { name: 'Create' }).click();
  await expect(page.getByText('Unexpected unknown runtime error')).toHaveCount(0);
});