//After task completion user is brought back to the list of all tasks in that case.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/auth/login');
  await page.getByLabel('username').fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByText('C-7').dblclick();
  await page.getByText('HT-7Investigation').dblclick();
  await page.locator('li').filter({ hasText: 'Qualification' }).locator('div').nth(2).click();
  await page.getByLabel('Open').first().click();
  await page.getByRole('option', { name: 'Possibly Unusual' }).click();
  await page.getByLabel('Question 1: Comment and add a reason for the selection *').click();
  await page.getByLabel('Question 1: Comment and add a reason for the selection *').fill('Possible');
  await page.locator('div').filter({ hasText: /^Action: Is the investigation complete$/ }).getByLabel('Open').click();
  await page.getByRole('option', { name: 'Yes' }).click();
  await page.getByRole('button', { name: 'Unusual-Activity Report' }).click();
  await expect(page.getByText('Case C-7 -')).not.toHaveCount(0);
  await expect(page.getByText('Saved')).not.toHaveCount(0);
});