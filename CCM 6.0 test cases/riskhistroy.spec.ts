import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/auth/login');
  await page.getByLabel('username').fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByRole('link', { name: 'Client 360' }).click();
  await page.getByText('LOW').nth(3).click();
  await page.getByText('Natural PersonCEMTCEMT-1388687AZZ CORPAZZ CORP135LOW').dblclick();
  await page.getByText('CEMT-1388687', { exact: true }).click();
  await page.getByRole('link', { name: 'Cases' }).click();
  await page.getByRole('button', { name: 'New case' }).click();
  await page.getByLabel('Open').click();
  await page.getByRole('option', { name: 'Manual Risk Level Change' }).click();
  await page.getByLabel('NaturalPerson').check();
  await page.getByPlaceholder('Search...').click();
  await page.getByPlaceholder('Search...').fill('1388687');
  await page.getByRole('option', { name: 'BusinessId: CEMT-1388687' }).click();
  await page.getByRole('button', { name: 'Create' }).click();
  await page.locator('[data-test-id="virtuoso-item-list"]').getByText('Manual Risk-Level Change').click();
  await page.getByText('HT-24Manual Risk-Level ChangeOpen07/11/2023').dblclick();
  await page.getByLabel('Fill out the Manual Risk Level of the Client of this Case').click();
  await page.getByRole('option', { name: 'High' }).click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.getByRole('tab', { name: 'Customer' }).click();
  await page.getByRole('button', { name: 'Clients' }).click();
  await page.getByRole('link', { name: 'Client 360' }).click();
  await page.getByText('CEMT-1388687').dblclick();
  await page.getByRole('tab', { name: 'Risk' }).click();
  await page.getByRole('button', { name: 'Show risk history' }).click();
  await page.getByRole('button', { name: 'Manual risk level High Calculated risk level Low Calculated risk score 135 Scoring Date 07/11/2023' }).click();
  await page.getByRole('button', { name: 'Manual risk level High Calculated risk level Low Calculated risk score 135 Scoring Date 07/11/2023' }).click();
});