//As a logged in user, I can filter the cases I have access to using the filters on the left side, this will adapt the Search result list.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-5-5-x.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox', { name: 'username' }).fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.locator('form div').filter({ hasText: 'Personal filtersMy cases My previous cases My role\'s cases' }).getByRole('radio').first().check();
  await page.locator('form div').filter({ hasText: 'Personal filtersMy cases My previous cases My role\'s cases' }).getByRole('radio').nth(1).check();
  await page.locator('form div').filter({ hasText: 'Personal filtersMy cases My previous cases My role\'s cases' }).getByRole('radio').nth(2).check();
  await page.getByRole('button', { name: 'Reset filter' }).click();
  await page.locator('form div').filter({ hasText: 'Customer typeIndividual 12Company 4' }).getByRole('checkbox').nth(1).check();
  await page.locator('form div').filter({ hasText: 'CusyRETAIL 2CORP 1FI 1' }).getByRole('checkbox').nth(2).check();
  await page.locator('form div').filter({ hasText: 'Creation dateLast week 4Last month 4Last year 4FromFromToTo' }).getByRole('radio').nth(1).click();
  await page.getByRole('button', { name: 'Reset filter' }).nth(2).click();
  await page.getByText('Reset').click();
});