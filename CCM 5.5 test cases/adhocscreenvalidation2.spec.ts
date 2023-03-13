//Adhoc screening Case is created instead of the error message.
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-5-5-x.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox', { name: 'username' }).fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('group').getByRole('button').nth(1).click();
  await page.getByText('Adhoc screening').click();
  await page.getByRole('combobox').first().click();
  await page.getByRole('option', { name: 'Individual' }).click();
  await page.locator('input[name="name"]').click();
  await page.locator('input[name="name"]').fill('Muller');
  await page.locator('input[name="firstName"]').click();
  await page.locator('input[name="firstName"]').fill('Hans');
  await page.getByRole('button', { name: 'Open' }).nth(3).click();
  await page.getByRole('option', { name: 'CE00' }).click();
  await page.getByRole('button', { name: 'Open' }).nth(4).click();
  await page.getByRole('option', { name: 'test01' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.locator('text=Match found : a case has been created')).toHaveCount(1);
});