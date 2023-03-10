//Adhoc Screening Validation message when match is not found
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox', { name: 'username' }).click();
  await page.getByRole('textbox', { name: 'username' }).fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('group').getByRole('button').nth(1).click();
  await page.getByText('Adhoc screening').click();
  await page.getByRole('combobox').first().click();
  await page.getByRole('option', { name: 'Individual' }).click();
  await page.locator('input[name="name"]').click();
  await page.locator('input[name="name"]').fill('Titi');
  await page.locator('input[name="firstName"]').click();
  await page.locator('input[name="firstName"]').fill('Toto');
  await page.getByRole('button', { name: 'Open' }).nth(3).click();
  await page.getByRole('option', { name: 'CE00' }).click();
  await page.getByRole('button', { name: 'Open' }).nth(4).click();
  await page.getByRole('option', { name: 'WORLD_CHECK' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.locator('text=No match found')).toHaveCount(1);
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Download report' }).click();
  const download = await downloadPromise;
});