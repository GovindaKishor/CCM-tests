import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByLabel('Username').fill('SUPERUSER');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/case-manager/search/simple_cases?sort=case.presentableId');
  await page.getByRole('link', { name: 'Client 360' }).click();
  await page.getByText('Legal Entity').nth(1).click();
  await page.getByText('Legal EntityCENLCENL-1388678SKYNET CORP').dblclick();
  await page.getByRole('tab', { name: 'Behavioral analysis' }).click();
  await page.getByLabel('Choose date, selected date is 4 Mar 2024').first().click();
  await page.getByLabel('calendar view is open, switch to year view').click();
  await page.getByRole('radio', { name: '1971' }).click();
  await page.locator('.jss122 > .MuiButtonBase-root').click();
  await page.getByLabel('Skip empty dates').check();
  await page.locator('section').getByTestId('__SCROLLER__').click();
});