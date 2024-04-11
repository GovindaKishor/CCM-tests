import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/');
  await page.goto('http://localhost:8181/auth');
  await page.goto('http://localhost:8181/auth/login');
  await page.getByLabel('Username').fill('SUPERUSER');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByRole('link', { name: 'Tasks' }).click();
  await page.getByText('HT-7').dblclick();
  await page.getByText('Qualification').click();
  await page.getByLabel('Action: Assess the alert by behavior and pattern using the following options *').click();
  await page.getByRole('option', { name: 'Unusual', exact: true }).click();
  await page.getByLabel('Question 1: Comment and add a reason for the selection *').click();
  await page.getByLabel('Question 1: Comment and add a reason for the selection *').fill('hello');
  await page.getByLabel('Action: Is the investigation complete').click();
  await page.getByRole('option', { name: 'Yes' }).click();
  await page.getByText('Document Upload').click();
  await page.getByRole('button', { name: 'Upload' }).click();
  await page.getByRole('button', { name: 'Upload' }).setInputFiles('Core Infrastructure.pdf');
  await page.getByText('Core Infrastructure.pdf').click();
  await page.getByRole('button').nth(1).click();
  await page.getByRole('tab', { name: 'Documents' }).click();
  await page.getByRole('button', { name: 'Documents' }).click();
  await page.getByLabel('inspector').getByText('Core Infrastructure.pdf').click();
  await page.getByRole('button').nth(1).click();
});