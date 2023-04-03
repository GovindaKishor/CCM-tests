//Show Calculated Risk Level, Risk Score and Maual Risk in C360 view and also in different columns of client section.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox', { name: 'username' }).fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Clients' }).click();
  await page.locator('[data-test-id="virtuoso-top-item-list"]').getByRole('button').click();
  await page.getByRole('listitem').filter({ hasText: 'Type' }).getByRole('checkbox').uncheck();
  await page.getByRole('listitem').filter({ hasText: 'Tenant' }).getByRole('checkbox').uncheck();
  await page.getByRole('listitem').filter({ hasText: 'Last Name' }).getByRole('checkbox').uncheck();
  await page.getByRole('listitem').filter({ hasText: 'First Name' }).getByRole('checkbox').uncheck();
  await page.getByRole('listitem').filter({ hasText: 'Group Name' }).getByRole('checkbox').uncheck();
  await page.getByRole('button', { name: 'Close' }).click();
  await expect(page.getByText('Risk Score')).toHaveCount(1);
  await expect(page.locator('text="Risk Level"')).not.toHaveCount(0);
  await expect(page.getByText('Manual Risk Level')).toHaveCount(1);
  await expect(page.getByText('550 HIGH NORMAL')).not.toHaveCount(0);
  await page.getByText('CENL-1488602').dblclick();
  await page.getByRole('tab', { name: 'Risk' }).click();
  await expect(page.getByText('Manual risk levelNORMAL')).toHaveCount(1);
  await expect(page.getByText('Calculated risk levelHigh')).toHaveCount(1);
  await expect(page.getByText('Calculated risk score550')).toHaveCount(1);
});