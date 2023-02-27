//As a logged in user I can open a customer and in the Customer Details tab see the Customer Details, Employment information and KYC details.
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-5-5-x.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox', { name: 'username' }).fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Clients' }).click();
  await page.locator('div:nth-child(10) > .css-1ssirbu > div:nth-child(3)').click({
    clickCount: 2
  });
  await expect(page.locator('text=CLIENT DETAILS')).not.toHaveCount(0);
  await expect(page.locator('text=Employment Information')).not.toHaveCount(0);
  await expect(page.locator('text=KYC')).not.toHaveCount(0);
});