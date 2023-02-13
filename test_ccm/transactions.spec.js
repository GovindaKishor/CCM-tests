//Test which navigates through transactions section of a task.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByLabel('Username *').fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Tasks' }).click();
  await page.getByText('HT-14').click();
  await page.locator('[data-test-id="virtuoso-item-list"]').getByText('HT-14').click();
  await page.locator('[data-test-id="virtuoso-item-list"]').getByText('HT-14').click({
    clickCount: 3
  });
  await page.locator('form div').filter({ hasText: 'ClientClient' }).getByRole('button', { name: '​' }).click();
  await page.getByRole('option', { name: 'SKYNET CORP' }).click();
  await page.locator('#mui-component-select-account_id').click();
  await page.getByRole('option', { name: 'All' }).click();
  await page.getByRole('button', { name: 'All' }).nth(1).click();
  await page.getByRole('option', { name: 'Last 30 days' }).click();
  await page.getByLabel('From amount').click();
  await page.getByLabel('From amount').fill('0');
  await page.getByLabel('To amount').click();
  await page.getByLabel('To amount').fill('10000000');
  await page.getByRole('button', { name: 'Search' }).click();
});