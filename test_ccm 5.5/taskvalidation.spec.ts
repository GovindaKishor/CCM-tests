//Test which will navigate and validate a particular task(HT-7).

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-5-5-x.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox', { name: 'username' }).fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Tasks' }).click();
  await page.getByText('HT-7').click();
  await page.locator('[data-test-id="virtuoso-item-list"]').getByText('HT-7').click({
    clickCount: 2
  });
  await expect(page.locator('text=Transactions')).not.toHaveCount(0);
  await expect(page.locator('text=Qualification')).not.toHaveCount(0);
  await expect(page.locator('text=Document Upload')).not.toHaveCount(0);
  await expect(page.locator('text=Date')).not.toHaveCount(0);
  await expect(page.locator('text=Amount')).not.toHaveCount(0);
  await expect(page.locator('text=Incoming?')).not.toHaveCount(0);
  await expect(page.locator('text=Add additional Transactions')).not.toHaveCount(0);
});