//Open a client and verify if details loads properly.

import { test, expect } from '@playwright/test';

test('open a existing client', async ({ page }) => {
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
  await expect(page.locator('text=Client details')).not.toHaveCount(0);
  await expect(page.locator('text=Behavioural analysis')).not.toHaveCount(0);
  await expect(page.locator('text=Risk')).not.toHaveCount(0);
  await expect(page.locator('text=Company profile')).not.toHaveCount(0);
  await expect(page.locator('text=KYC')).not.toHaveCount(0);
  await expect(page.locator('text=Counterparty profile')).not.toHaveCount(0);
  await expect(page.locator('text=Client group information')).not.toHaveCount(0);
  await expect(page.locator('text=Sanctions')).not.toHaveCount(0);
  await expect(page.locator('text=Aml risk')).not.toHaveCount(0);
});