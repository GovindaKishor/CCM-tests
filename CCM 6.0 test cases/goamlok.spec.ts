import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/');
  await page.getByLabel('User name').fill('SUPERUSER');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByRole('link', { name: 'Cases' }).click();
  await page.getByText('C-9').dblclick();
  await page.getByText('HT-8').dblclick();
  await page.getByText('Qualification').click();
  await page.getByLabel('Action: Assess the alert by behavior and pattern using the following options *').click();
  await page.getByRole('option', { name: 'Unusual', exact: true }).click();
  await page.getByLabel('Question 1: Comment and add a reason for the selection *').fill('hello');
  await page.getByRole('button', { name: 'Unusual-Activity Report' }).click();
  await page.getByRole('link', { name: 'Cases' }).first().click();
  await page.getByRole('button', { name: 'Details Active' }).click();
  expect(page.getByText('OutcomeGo AML')).not.toHaveCount(0);
});