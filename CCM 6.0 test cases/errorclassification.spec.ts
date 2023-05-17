//No run time error in add classification section.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox').nth(0).fill('SUPERUSER3');
  await page.getByRole('textbox').nth(1).fill('SUPERUSER3');
  await page.getByRole('button').nth(2).click();
  await page.locator('.css-mslw24').first().click();
  await page.getByRole('button').nth(19).click();
  await page.getByRole('button').nth(21).click();
  await expect(page.locator('text=Unexpected unknown runtime error: Cannot invoke "java.util.List.contains(Object)" because "classificationsFromDefinition" is null')).toHaveCount(0);
});