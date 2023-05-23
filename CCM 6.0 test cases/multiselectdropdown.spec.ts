//Multi select dropdown available in risk configuration section.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/auth/login');
  await page.getByRole('textbox').nth(0).fill('SUPERUSER');
  await page.getByRole('textbox').nth(1).fill('SUPERUSER');
  await page.getByRole('button').nth(2).click();
  await page.getByRole('link').nth(3).click();
  await page.locator('button').nth(-1).click();
  await page.getByRole('textbox').nth(0).fill('Automation Testing');
  await page.getByRole('radio').nth(0).check();
  await page.getByRole('button').nth(0).click();
  await page.getByRole('option').nth(0).click();
  await page.getByRole('button').nth(3).click();
  await page.getByRole('button').nth(3).click();
  await page.getByRole('link').nth(2).click();
  await page.locator('div:nth-child(6) > button:nth-child(2)').click();
  await page.getByRole('option', { name: 'naturalPersonMotherIdn' }).click();
  await page.getByText('naturalPersonNationalities').click();
  await page.getByRole('button', { name: 'Clear' }).click();
  await page.locator('div').filter({ hasText: 'Manual Risk Level ChangeManual update case type' }).getByRole('button', { name: 'Open' }).nth(2).click();
  await page.getByText('Transaction Monitoring (Real Time)').click();
  await page.getByText('Transaction Monitoring (Post)').click();
  await page.getByRole('button', { name: 'Clear' }).click();
});