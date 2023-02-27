//As a logged in user I can select a case, the client Details inspector and click on "View Customer Profile", which will lead me to the Customer 360 profile of the client
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-5-5-x.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox', { name: 'username' }).fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.locator('.css-mslw24').first().click();
  await page.getByRole('tab', { name: 'Customer' }).click();
  await page.getByRole('button', { name: 'Client details' }).click();
  await page.getByRole('button', { name: 'VIEW CLIENT PROFILE' }).click();
  await expect(page.locator('text=Nationality')).toHaveCount(1);
  await expect(page.locator('text=Approved risk')).not.toHaveCount(0);
  await expect(page.locator('text=Blacklist')).toHaveCount(1);
  await expect(page.locator('text=Sanctions')).toHaveCount(1);
  await expect(page.locator('text=PEP Hit')).toHaveCount(1);
});