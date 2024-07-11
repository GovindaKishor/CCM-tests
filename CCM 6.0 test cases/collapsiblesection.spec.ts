import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/');
  await page.getByLabel('User name').fill('SUPERUSER');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByRole('link', { name: 'Cases' }).click();
  await page.locator('div:nth-child(3) > .css-vd4mct > div:nth-child(4)').click();
  await page.getByRole('tab', { name: 'Customer' }).click();
  await page.getByRole('button', { name: 'Clients' }).first().click();
  await page.getByRole('button', { name: 'IRON MAN CEMT-1085631 High' }).click();
  await page.getByRole('button', { name: 'IRON MAN CEMT-1085631 High' }).click();
  await page.locator('._title_1bqza_10 > .MuiButtonBase-root').click();
  await page.locator('._title_1bqza_10 > .MuiButtonBase-root').click();
  await page.getByRole('link', { name: 'Tasks' }).click();
  await page.locator('div:nth-child(5) > .css-vd4mct > div:nth-child(4)').click();
  await page.getByRole('button', { name: 'Clients' }).click();
  await page.getByRole('button', { name: '086BEAC9D6B748B8FA23967FAA005BD1 6D92B57F9BBD42A92485CBA2023A7598 0001-2910196411' }).click();
  await page.getByRole('button', { name: '086BEAC9D6B748B8FA23967FAA005BD1 6D92B57F9BBD42A92485CBA2023A7598 0001-2910196411' }).click();
  await page.locator('._title_1bqza_10 > .MuiButtonBase-root').click();
  await page.locator('div').filter({ hasText: /^HT-68 - Investigation: ComplianceTaskCustomerDocumentsCommentsClients$/ }).getByRole('button').first().click();
});