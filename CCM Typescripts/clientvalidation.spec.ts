//Validate client profile automatically in client section(CEMT-1488601 PANTHERWHITE).

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
  await page.getByRole('link', { name: 'Clients' }).click();
  await page.locator('div:nth-child(3) > .css-1ssirbu > div:nth-child(3)').click();
  await page.getByText('Natural Person CEMT CEMT-1488601 WHITE PANTHER PANTHERWHITE').dblclick();
  await expect(page.locator('text=WHITE PANTHER')).not.toHaveCount(0);
  await expect(page.locator('text=PROFESSOR')).not.toHaveCount(0);
});