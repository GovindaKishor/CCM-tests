import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/');
  await page.getByLabel('User name').fill('SUPERUSER');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByRole('link', { name: 'Cases' }).click();
  await page.getByText('C-5').dblclick();
  await page.getByText('HT-5').dblclick();
  await page.getByText('Qualification').click();
  await page.getByLabel('Open').first().click();
  await page.getByRole('option', { name: 'Unusual', exact: true }).click();
  await page.locator('form div').filter({ hasText: 'Question 1: Comment and add a reason for the selection *' }).nth(4).click();
  await page.getByLabel('Question 1: Comment and add a reason for the selection *').fill('dsfdfg');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Details Active' }).click();
  expect(page.getByText('OutcomeOK')).not.toHaveCount(0);
});