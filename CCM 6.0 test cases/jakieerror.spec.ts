//jackie/case_manual_rick_level_chang error is thrown.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-test.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox').nth(0).fill('SUPERUSER');
  await page.getByRole('textbox').nth(1).fill('SUPERUSER');
  await page.getByRole('button').nth(2).click();
  await page.getByRole('button').nth(2).click();
  await page.getByRole('button').nth(0).click();
  await page.getByRole('option').nth(1).click();
  await page.getByRole('radio').nth(1).check();
  await page.getByRole('button').nth(1).click();
  await page.getByPlaceholder('Search...').fill('CENL');
  await page.getByRole('option').nth(0).click();
  await page.getByRole('button').nth(-1).click();
  await expect(page.locator('text=jackie/case_manual_rick_level_chang')).not.toHaveCount(0);
});