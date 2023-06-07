//Expanding and asserting text in case tab case inspector.

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
  await page.getByRole('link').nth(0).click();
  await page.locator('.css-mslw24').first().click();
  await page.getByRole('button', { name: 'Details Active' }).click();
  await expect(page.getByText('Case name')).not.toHaveCount(0);
  await expect(page.getByText('Due on')).not.toHaveCount(0);
  await expect(page.getByText('Activated on')).not.toHaveCount(0);
  await expect(page.getByText('Modified on')).not.toHaveCount(0);
  await page.getByRole('button', { name: 'Details Active' }).click();
  await page.getByRole('button', { name: 'AML Alerts' }).click();
  await expect(page.getByText('Total score')).not.toHaveCount(0);
  await expect(page.getByText('Scenarios')).not.toHaveCount(0);
  await expect(page.getByText('Close monitor')).not.toHaveCount(0);
  await page.getByRole('button', { name: 'AML Alerts' }).click();
  await page.getByRole('button', { name: 'Timeline' }).click();
  await expect(page.getByText('Today')).not.toHaveCount(0);
  await page.getByRole('button', { name: 'Timeline' }).click();
  await page.getByRole('button', { name: 'Classifications' }).click();
  await page.getByRole('button', { name: 'Classifications' }).click();
});