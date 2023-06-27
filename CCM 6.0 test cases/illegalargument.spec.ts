//No ILLEGAL_ARGUMENT error is thrown In New Client Group RISK tab.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox').nth(0).fill('SUPERUSER3');
  await page.getByRole('textbox').nth(1).fill('SUPERUSER3');
  await page.getByRole('button').nth(2).click(); 
  await page.getByRole('button').nth(0).click();
  await page.getByRole('menuitem').nth(1).click();
  await page.getByRole('button').nth(3).click();
  await page.getByRole('option').nth(1).click();
  await page.getByRole('link').nth(2).click();
  await page.getByText('Client Group').nth(2).dblclick();
  await page.getByRole('tab').nth(1).click();
  await expect(page.getByText('ILLEGAL_ARGUMENT')).toHaveCount(0);
});