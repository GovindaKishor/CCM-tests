//Import from zip file is disabled for user without that privilage.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox').nth(0).fill('compliance1');
  await page.getByRole('textbox').nth(1).fill('2021');
  await page.getByRole('button').nth(2).click();
  await page.getByRole('link').nth(3).click();
  await page.getByRole('button').nth(-1).click();
  await expect(page.getByText('Import from a zip File')).toHaveCSS('color','rgba(0, 0, 0, 0.38)');
  await page.getByText('Import from a zip File').click();
});