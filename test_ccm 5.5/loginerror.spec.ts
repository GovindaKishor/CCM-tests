//To validate the error message displayed while login fails.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-5-5-x.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox', { name: 'username' }).fill('SUPER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPER');
  await page.getByRole('button', { name: 'Reveal Password' }).click();
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.locator('text=An error occurred during login. Please try again and if the error persists contact your administrator')).toHaveCount(1);
  await expect(page.locator('.MuiBox-root')).toHaveCount(1);
  await expect(page.locator('text=Compliance Case Management')).toHaveCount(1);
  await expect(page.locator('text=IMTF Compliance & Fraud Platform')).toHaveCount(1);
});