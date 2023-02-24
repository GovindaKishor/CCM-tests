/*As a logged in user I can create following type of cases:
-Customer Diligence
- External Inquiry
- Compliance Review
for both individual and Companies*/

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-5-5-x.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox', { name: 'username' }).fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('button', { name: 'New case' }).click();
  await page.getByRole('button', { name: 'Open' }).click();
  await page.getByRole('option', { name: 'customer Diligence' }).click();
  await expect(page.locator('text=Individual')).not.toHaveCount(0);
  await expect(page.locator('text=Company')).not.toHaveCount(0);
  await page.getByRole('button', { name: 'Open' }).click();
  await page.getByRole('option', { name: 'Compliance Review' }).click();
  await expect(page.locator('text=Individual')).not.toHaveCount(0);
  await expect(page.locator('text=Company')).not.toHaveCount(0);
  await page.getByRole('button', { name: 'Open' }).click();
  await page.getByRole('option', { name: 'External Inquiry' }).click();
  await expect(page.locator('text=Individual')).not.toHaveCount(0);
  await expect(page.locator('text=Company')).not.toHaveCount(0);
});