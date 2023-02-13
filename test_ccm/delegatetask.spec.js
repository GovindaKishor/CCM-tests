//Test which will delegate a task.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByLabel('Username *').fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByText('C-4').click({
    clickCount: 2
  });
  await page.locator('.css-mslw24').click();
  await page.locator('[data-test-id="virtuoso-top-item-list"]').getByRole('button').first().click();
  await page.getByRole('menuitem', { name: 'Delegate' }).click();
  await expect(page.locator('text=Delegate task')).not.toHaveCount(0);
  await page.getByLabel('User or group').click();
  await page.getByRole('option', { name: 'ACM_ADHOC' }).click();
  await page.getByRole('button', { name: 'Delegate task' }).click();
});