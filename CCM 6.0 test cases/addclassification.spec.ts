//Error resolved in add classification.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox').nth(0).fill('SUPERUSER');
  await page.getByRole('textbox').nth(1).fill('SUPERUSER');
  await page.getByRole('button').nth(2).click();
  await page.locator('div:nth-child(2) > .css-vd4mct > .css-mslw24').click();
  await page.getByRole('button').nth(19).click();
  await page.getByRole('button').nth(21).click();
  await page.getByRole('button').nth(0).click();
  await expect(page.locator('text=Unexpected unknown runtime error:')).toHaveCount(0);
});