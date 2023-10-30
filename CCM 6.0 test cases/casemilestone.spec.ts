//Case milestone inspector.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/auth/login');
  await page.getByLabel('username').fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.locator('div:nth-child(4) > .css-vd4mct > .css-mslw24').click();
  await page.getByRole('button', { name: 'Case Milestones' }).click();
  await page.getByLabel('milestones').click();
});