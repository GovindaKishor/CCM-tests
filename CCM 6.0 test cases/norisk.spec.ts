//Risk history and risk tabs are not available.

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
  await page.locator('[data-test-id="virtuoso-item-list"]').getByText('Client Group').nth(0).dblclick();
  await expect(page.getByText('No clients are yet part of this group')).toHaveCount(1);
  await expect(page.getByRole('tab', { name: 'Risk' })).toHaveCount(0);
  await page.getByRole('link').nth(0).click();
  await page.getByText('C-12').click();
  await page.getByRole('tab', { name: 'Customer' }).click();
  await page.getByRole('button', { name: 'Clients' }).click();
  await expect(page.getByText('RISK HISTORY')).toHaveCount(0);
});