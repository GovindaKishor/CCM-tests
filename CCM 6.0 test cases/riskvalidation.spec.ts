//Validating different text fields in risk section.

import { test, expect } from '@playwright/test';

test('Display diffferent values in risk section', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox', { name: 'username' }).fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Clients' }).click();
  await page.locator('div:nth-child(2) > .css-1ssirbu > .css-mslw24').dblclick();
  await page.getByRole('tab', { name: 'Risk' }).click();
  await expect(page.getByText('Manual risk levelN / A')).toHaveCount(1);
  await expect(page.getByText('Calculated risk levelHigh')).toHaveCount(1);
  await expect(page.getByText('Calculated risk score550')).toHaveCount(1);
  await expect(page.getByText('Calculation date23/03/2023')).toHaveCount(1);
  await page.getByRole('button', { name: 'Show history' }).click();
  await page.getByRole('button', { name: 'Manual risk level N / A Calculated risk level High Calculated risk score 550 Calculation date 23/03/2023' }).first().click();
  await page.getByRole('button', { name: 'Manual risk level N / A Calculated risk level High Calculated risk score 550 Calculation date 23/03/2023' }).nth(1).click();
  await page.getByRole('button', { name: 'Close' }).click();
});