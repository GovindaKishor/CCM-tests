import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/');
  await page.getByLabel('Username').fill('SUPERUSER');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByText('C-4').dblclick();
  await page.getByTestId('virtuoso-item-list').getByText('Investigation').click();
  await page.getByText('HT-4').dblclick();
  await page.getByText('Qualification').click();
  await page.getByLabel('Action: Assess the alert by behavior and pattern using the following options *').click();
  await page.getByRole('option', { name: 'Unusual', exact: true }).click();
  await page.getByLabel('Action: Is the investigation complete').click();
  await page.getByRole('option', { name: 'Yes' }).click();
  await page.getByLabel('Question 1: Comment and add a reason for the selection *').click();
  await page.getByLabel('Question 1: Comment and add a reason for the selection *').fill('Hello');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByText('HT-4').first().click({
    button: 'right'
  });
  await expect(page.getByText('Suspend')).toHaveCount(0);
});