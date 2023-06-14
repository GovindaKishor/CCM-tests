//When user changed language to Deustch and Italino YYY,XXX is displayed instead of data.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-test.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox').nth(0).fill('SUPERUSER');
  await page.getByRole('textbox').nth(1).fill('SUPERUSER');
  await page.getByRole('button').nth(2).click();
  await page.getByRole('button').nth(0).click();
  await page.getByRole('menuitem').nth(1).click();
  await page.getByRole('button').nth(3).click();
  await page.getByRole('option').nth(2).click();
  await page.getByRole('link').nth(0).click();
  await expect(page.getByText('YYY')).toHaveCount(0);
  await page.getByRole('link').nth(1).click();
  await expect(page.getByText('YYY')).toHaveCount(0);
  await page.getByRole('link').nth(2).click();
  await expect(page.getByText('YYY')).toHaveCount(0);
  await expect(page.getByText('XXX')).toHaveCount(0);
  await page.getByRole('button').nth(0).click();
  await page.getByRole('menuitem').nth(1).click();
  await page.getByRole('button').nth(3).click();
  await page.getByRole('option').nth(4).click();
  await page.getByRole('link').nth(0).click();
  await expect(page.getByText('YYY')).toHaveCount(0);
  await page.getByRole('link').nth(1).click();
  await expect(page.getByText('YYY')).toHaveCount(0);
  await page.getByRole('link').nth(2).click();
  await expect(page.getByText('YYY')).toHaveCount(0);
  await expect(page.getByText('XXX')).toHaveCount(0);
});