//Details of a client.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-5-5-x.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox', { name: 'username' }).fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.goto('http://ccm-ci-5-5-x.imtf-devops.com:8181/case-manager/search/simple_cases?sort=case.presentableId');
  await page.getByRole('link', { name: 'Clients' }).click();
  await page.locator('.css-mslw24').first().click();
  await page.getByText('Legal EntityCENL CENL-1388684 AYZ CORP').press('Control+i');
  await expect(page.locator('text=Name')).not.toHaveCount(0);
  await expect(page.locator('text=Created on')).not.toHaveCount(0);
  await expect(page.locator('text=Oid')).not.toHaveCount(0);
  await expect(page.locator('text=Uri')).not.toHaveCount(0);
});