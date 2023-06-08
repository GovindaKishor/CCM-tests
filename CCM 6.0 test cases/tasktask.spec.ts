//Expanding and asserting text in tasks tab task inspector.

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
  await page.getByRole('link').nth(1).click();
  await page.locator('.css-mslw24').first().click();
  await page.getByRole('button', { name: 'Details Open' }).click();
  await expect(page.getByText('Task type')).toHaveCount(1);
  await expect(page.getByText('Due on')).toHaveCount(1);
  await expect(page.getByText('Activated on')).toHaveCount(1);
  await expect(page.getByText('Modified on')).toHaveCount(1);
  await expect(page.getByText('Owner')).not.toHaveCount(0);
  await expect(page.getByText('Claim')).not.toHaveCount(0);
  await expect(page.getByText('Assignee')).not.toHaveCount(0);
  await page.getByRole('button', { name: 'Details Open' }).click();
  await page.getByRole('button', { name: 'Timeline' }).click();
  await expect(page.getByText('Today')).not.toHaveCount(0);
  await page.getByRole('button', { name: 'Timeline' }).click();
});