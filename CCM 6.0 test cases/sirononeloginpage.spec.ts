import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/auth/login');
  await page.getByLabel('Username').click();
  await page.getByLabel('Password', { exact: true }).click();
  await expect(page.getByText('Siron®One - Onboarding')).toHaveCount(1);
  await expect(page.getByText('Powered by')).toHaveCount(1);
  await expect(page.getByText('© Informatique-MTF SA (IMTF)')).toHaveCount(1);
});