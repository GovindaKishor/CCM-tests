// To open a case (case 3)in new window and will validate if opened case is expected one.
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox', { name: 'username' }).fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/case-manager/?sort=case.presentableId');
  await page.locator('div:nth-child(2) > .css-1ssirbu > .css-mslw24').click();
  await page.locator('[data-test-id="virtuoso-top-item-list"]').getByRole('button').first().click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('menuitem', { name: 'Open in a new window' }).click();
  const page1 = await page1Promise;
  await expect(page.locator('text=Case C-3 -')).not.toHaveCount(0);
});