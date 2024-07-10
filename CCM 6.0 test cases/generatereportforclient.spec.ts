import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/');
  await page.getByLabel('User name').fill('SUPERUSER');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByRole('link', { name: 'Client 360' }).click();
  await page.locator('.css-1dckd0x').first().click();
  await page.getByTestId('virtuoso-top-item-list').getByRole('button').first().click();
  await page.getByTestId('GENERATE_ENTITY_REPORT').click();
  await page.getByRole('button', { name: 'Client 360 - Natural Person' }).click();
  await page.getByTestId('virtuoso-top-item-list').getByRole('button').first().click();
  await page.getByTestId('GENERATE_ENTITY_REPORT').click();
  await page.getByRole('button', { name: 'Natural Person - Risk' }).click();
});