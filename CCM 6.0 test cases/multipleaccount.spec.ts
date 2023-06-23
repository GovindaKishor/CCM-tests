//Multiple account filter in behavioural anaysis section.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-test.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox').nth(0).fill('SUPERUSER');
  await page.getByRole('textbox').nth(1).fill('SUPERUSER');
  await page.getByRole('button').nth(2).click();
  await page.getByRole('button').nth(0).click();
  await page.getByRole('menuitem').nth(1).click();
  await page.getByRole('button').nth(3).click();
  await page.getByRole('option').nth(1).click();
  await page.getByRole('link').nth(2).click();
  await page.getByText('HOMER SIMPSON').dblclick();
  await page.getByRole('tab', { name: 'Behavioural analysis' }).click();
  await page.getByRole('button', { name: 'Overview of transactions' }).click();
  await page.getByRole('option', { name: 'Account profiles' }).click();
  await page.getByLabel('Search').fill('b');
  await page.getByRole('listitem').filter({ hasText: 'Maximum - foreign transaction (debit)' }).getByRole('checkbox').check();
  await page.getByRole('listitem').filter({ hasText: 'Maximum - transaction (debit, cash)' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'View Profiles' }).click();
  await page.getByRole('button', { name: 'All' }).click();
  await page.getByRole('option', { name: 'CENL-1488602-001-22933091-000-EUR' }).click();
  await page.getByRole('button', { name: 'CENL-1488602-001-22933091-000-EUR' }).click();
  await page.getByRole('option', { name: 'CENL-1488602-001-22933092-000-EUR' }).click();
  await page.getByRole('button', { name: 'Account profiles' }).click();
  await page.getByRole('option', { name: 'Overview of transactions' }).click();
  await page.getByRole('button', { name: 'CENL-1488602-001-22933092-000-EUR' }).click();
  await page.getByRole('option', { name: 'CENL-1488602-001-22933091-000-EUR' }).click();
  await page.getByRole('button', { name: 'CENL-1488602-001-22933091-000-EUR' }).click();
  await page.getByRole('option', { name: 'CENL-1488602-001-22933092-000-EUR' }).click();
  await page.getByRole('button', { name: 'CENL-1488602-001-22933092-000-EUR' }).click();
  await page.getByRole('option', { name: 'All' }).click();
});