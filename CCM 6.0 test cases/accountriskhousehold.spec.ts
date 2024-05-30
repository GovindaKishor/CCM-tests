import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/');
  await page.getByLabel('Username').fill('SUPERUSER');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByRole('link', { name: 'Client 360' }).click();
  await page.getByRole('tab', { name: 'Households' }).click();
  await page.getByTestId('virtuoso-item-list').getByText('CENL').click();
  await page.getByText('HouseholdCENLHIGH').dblclick();
  await page.getByRole('link', { name: '12209992 (WONDER MAN)' }).click();
  await page.getByRole('link', { name: 'Client 360' }).first().click();
  await page.getByTestId('virtuoso-item-list').getByText('CENL').click();
  await page.getByText('HouseholdCENLHIGH').dblclick();
  await page.getByRole('tab', { name: 'Risk' }).click();
  await page.getByRole('row', { name: '12209992 (WONDER MAN) HIGH 0 View details' }).getByRole('button').click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('row', { name: '22933066 (SKYNET CORP) NORMAL 0 View details' }).getByRole('button').click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('link', { name: '12209992 (WONDER MAN)' }).click();
});