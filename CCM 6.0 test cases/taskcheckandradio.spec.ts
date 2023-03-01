//Exploring checkboxes,radio buttons in task section.
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox', { name: 'username' }).fill('SUPERUSER');
  await page.getByLabel('Password *').click({
    modifiers: ['Shift']
  });
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Tasks' }).click();
  await page.getByText('Investigation 16').click();
  await page.getByRole('button', { name: 'Reset filter' }).click();
  await page.getByText('Open 13').click();
  await page.getByRole('button', { name: 'Reset filter' }).click();
  await page.getByText('Last day 2').click();
  await page.getByRole('button', { name: 'Reset filter' }).click();
  await page.getByText('Last week 18').click();
  await page.getByRole('button', { name: 'Reset filter' }).click();
  await page.getByText('Last month 18').click();
  await page.getByRole('button', { name: 'Reset filter' }).click();
  await page.getByText('Last year 18').click();
  await page.getByRole('button', { name: 'Reset filter' }).click();
  await page.getByLabel('From').click();
  await page.getByLabel('From').fill('11/10/2022');
  await page.getByLabel('To', { exact: true }).click();
  await page.getByLabel('To', { exact: true }).fill('13/11/2022');
  await page.locator('form').getByRole('button').nth(2).click();
  await page.getByRole('button', { name: 'Reset', exact: true }).click();
});