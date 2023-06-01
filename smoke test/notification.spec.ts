//Notification section.

import { test, expect } from '@playwright/test';

test('notification section', async ({ page }) => {
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
  await page.getByRole('button', { name: 'Timeline' }).click();
  await page.getByRole('button', { name: 'Add comment' }).click();
  await page.getByRole('textbox', { name: 'Comment' }).fill('@');
  await page.getByRole('option', { name: 'SUPERUSER', exact: true }).click();
  await page.getByRole('textbox', { name: 'Comment' }).fill('@SUPERUSER I am testing');
  await page.getByRole('button', { name: 'Send' }).click();
  await expect(page.getByText('text=You have been mentioned')).toHaveCount(1);
  await page.locator('[id="\\32 "] button').click();
  await page.getByRole('button', { name: '1', exact: true }).click();
  await expect(page.getByText('text=You have been mentioned')).toHaveCount(1);
  await page.getByRole('button', { name: 'Clear all' }).click();
});