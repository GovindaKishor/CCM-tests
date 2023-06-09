//When users open behavioral analysis, they will see the current view. 

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
  await page.getByRole('link').nth(2).click();
  await page.locator('.css-mslw24').first().dblclick();
  await page.getByRole('tab').nth(1).click();
  await expect(page.getByText('Overview of transactions')).not.toHaveCount(0);
  await expect(page.getByText('All')).not.toHaveCount(0);
  await expect(page.getByText('Download CSV')).not.toHaveCount(0);
  await expect(page.getByText('Last 30 days')).not.toHaveCount(0);
  await expect(page.getByText('All payments')).not.toHaveCount(0);
  await expect(page.getByText('Value Date')).not.toHaveCount(0);
  await expect(page.getByText('Account')).not.toHaveCount(0);
  await expect(page.getByText('Amount')).not.toHaveCount(0);
  await expect(page.getByText('Currency')).not.toHaveCount(0);
  await expect(page.getByText('Contra Account Holder')).not.toHaveCount(0);
});