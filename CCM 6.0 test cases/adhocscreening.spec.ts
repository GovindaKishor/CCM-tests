import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/');
  await page.goto('http://localhost:8181/auth');
  await page.goto('http://localhost:8181/auth/login');
  await page.getByLabel('Username').fill('SUPERUSER');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByRole('button', { name: 'Create...' }).click();
  await page.getByText('Ad-hoc screening').click();
  await page.getByLabel('Open').first().click();
  await page.getByRole('option', { name: 'Individual' }).click();
  await page.locator('input[name="name"]').click();
  await page.locator('input[name="name"]').fill('Magon');
  await page.locator('input[name="firstName"]').click();
  await page.locator('input[name="firstName"]').fill('Patrick');
  await page.getByRole('combobox').nth(3).click();
  await page.getByRole('option', { name: 'CE00' }).click();
  await page.getByLabel('Open').nth(4).click();
  await page.getByRole('option', { name: 'testPmg' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button').last().click();
  await page.getByText('C-17').click({
    button: 'right'
  });
  await page.getByTestId('GENERATE_REPORT').click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Generic MDM - customerDiligence' }).click();
  const download = await downloadPromise;
  await page.getByText('C-17').click({
    button: 'right'
  });
  await page.getByTestId('GENERATE_REPORT').click();
  const download1Promise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Customer screening - customerDiligence' }).click();
  const download1 = await download1Promise;
});