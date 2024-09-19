import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/');
  await page.getByLabel('User name').fill('SUPERUSER');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByRole('link', { name: 'Client 360' }).click();
  await page.locator('div:nth-child(4) > .css-vd4mct > div:nth-child(3)').click();
  await page.getByText('Natural PersonCENLCENL-1388687AZZ CORPAZZ CORP135LOW').dblclick();
  await page.getByRole('tab', { name: 'Behavioral analysis' }).click();
  await page.getByLabel('Choose date, selected date is 4 Sep 2024').first().click();
  await page.getByLabel('calendar view is open, switch to year view').click();
  await page.getByRole('radio', { name: '1983' }).click();
  await page.locator('.jss46 > .MuiButtonBase-root').click();
  await page.getByLabel('Skip empty dates').check();
  expect(page.getByText('Incoming')).toHaveCount(0);
  expect(page.getByText('Outgoing')).toHaveCount(0);
});