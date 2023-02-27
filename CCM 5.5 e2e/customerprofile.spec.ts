//As a logged in user I can open a Customer and see the Top Bar with Name, Nationality, Approved Risk, Blacklist, Sanctions, PEP HIT.
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-5-5-x.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox', { name: 'username' }).fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Clients' }).click();
  await page.locator('div:nth-child(10) > .css-1ssirbu > div:nth-child(3)').click({
    clickCount : 2
  });
  await expect(page.locator('text=Name')).not.toHaveCount(0);
  await expect(page.locator('text=Nationality')).not.toHaveCount(0);
  await expect(page.locator('text=Approved risk')).not.toHaveCount(0);
  await expect(page.locator('text=Blacklist')).not.toHaveCount(0);
  await expect(page.locator('text=Sanctions')).not.toHaveCount(0);
  await expect(page.locator('text=PEP Hit')).not.toHaveCount(0);
});