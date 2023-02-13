//To explore behavioural analysis section of customer profile.It will validate/test drop downs, text fields,date fields present in that section.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByLabel('Username *').click();
  await page.getByLabel('Username *').fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Reveal Password' }).click();
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Clients' }).click();
  await page.getByText('CEDE-1018529 MANWONDER').click({
    clickCount: 2
  });
  await page.getByRole('tab', { name: 'Behavioural analysis' }).click();
  await page.getByRole('button', { name: 'Overview of transactions' }).click();
  await page.getByRole('option', { name: 'Account profiles' }).click();
  await page.getByRole('button', { name: 'Account profiles' }).click();
  await page.getByRole('option', { name: 'Overview of transactions' }).click();
  await page.locator('span').filter({ hasText: 'Overview of transactionsAllDownload CSV' }).getByRole('button', { name: 'All' }).click();
  await page.getByRole('option', { name: 'CEDE-1018529-394-12209992-000-EUR' }).click();
  await page.getByRole('button', { name: 'CEDE-1018529-394-12209992-000-EUR' }).click();
  await page.getByRole('option', { name: 'All' }).click();
  await page.getByRole('button', { name: 'Download CSV' }).click();
  await page.locator('[id="\\31 "]').getByRole('button').click();
  await page.getByRole('button', { name: 'Last 30 days' }).first().click();
  await page.getByRole('option', { name: 'Last 30 days' }).click();
  await page.getByRole('button', { name: 'Choose date, selected date is Dec 20, 2022' }).click();
  await page.getByRole('gridcell', { name: '27' }).click();
  await page.getByRole('button', { name: 'Choose date, selected date is Jan 19, 2023' }).click();
  await page.getByRole('gridcell', { name: '28' }).click();
  await page.getByRole('button', { name: 'All payments' }).click();
  await page.getByRole('option', { name: 'Credit' }).click();
  await page.getByRole('button', { name: 'Credit' }).click();
  await page.getByRole('option', { name: 'Debit' }).click();
  await page.getByRole('tab', { name: 'Client details' }).click();
  await page.getByText('View more').click();
  await page.getByText('View less').click();
});