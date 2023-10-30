//Due date visible in details inspectors.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/auth/login');
  await page.getByLabel('username').fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByText('Default Siron Case').nth(1).click();
  await page.getByRole('button', { name: 'Details Active' }).click();
  await expect(page.getByText('Due on')).toHaveCount(1);
  await page.getByText('Due on30/10/2023').click();
});