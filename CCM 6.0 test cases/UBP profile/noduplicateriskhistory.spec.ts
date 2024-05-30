import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ubp-refsys-ccm-apac.imtf-devops.com:8181/');
  await page.getByLabel('Username or email').fill('SUPERUSER1');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('Secret123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Client 360' }).click();
  await page.getByText('R10901').first().dblclick();
  await page.getByRole('tab', { name: 'Risk' }).click();
  await page.getByRole('row', { name: '021.9990101 NR -1 View details' }).getByRole('button').click();
  await page.getByRole('button', { name: 'Manual risk level N/A Calculated risk level NR Calculated risk score -1 Scoring Date 23/05/2024' }).click();
  await page.getByRole('button', { name: 'Manual risk level N/A Calculated risk level High Risk Calculated risk score -1 Scoring Date 21/05/2024' }).click();
  await page.getByRole('button', { name: 'Manual risk level N/A Calculated risk level NR Calculated risk score -1 Scoring Date 15/05/2024' }).click();
});