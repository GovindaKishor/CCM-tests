//This test is basically intented to fill the Adhoc screening or Customer screening form automatically and will search for error in that activity.


import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByLabel('Username *').fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Reveal Password' }).click();
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('group').getByRole('button').nth(1).click();
  await page.getByText('Adhoc screening').click();
  await page.getByRole('combobox').first().click();
  await page.getByRole('option', { name: 'Individual' }).click();
  await page.getByRole('textbox').first().click();
  await page.getByRole('textbox').first().fill('1234');
  await page.locator('input[name="name"]').click();
  await page.locator('input[name="name"]').fill('Bond');
  await page.locator('input[name="firstName"]').click();
  await page.locator('input[name="firstName"]').fill('James');
  await page.getByRole('button', { name: 'Open' }).nth(1).click();
  await page.getByRole('option', { name: 'Antarctica' }).click();
  await page.getByRole('button', { name: 'Open' }).nth(2).click();
  await page.getByRole('option', { name: 'Male' }).first().click();
  await page.getByRole('button', { name: 'Choose date' }).click();
  await page.getByRole('row', { name: '1 2 3 4 5 6 7' }).getByRole('gridcell', { name: '1' }).click();
  await page.getByRole('button', { name: 'Open' }).nth(3).click();
  await page.getByRole('option', { name: 'CENL' }).click();
  await page.pause();
});