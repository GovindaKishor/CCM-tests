//Test which will upload the document to a task.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByLabel('Username *').fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Tasks' }).click();
  await page.locator('.css-mslw24').first().click({
    clickCount: 2
  });
  await page.getByRole('listitem').filter({ hasText: 'Qualification' }).locator('div').nth(2).click();
  await page.getByLabel('Action: Based on the behavior and pattern, please assess the alert with the following options *').click();
  await page.getByRole('option', { name: 'Possibly Unusual' }).click();
  await page.locator('form div').filter({ hasText: 'Question 1: Please comment and add a rationale for your selection *' }).nth(4).click();
  await page.getByLabel('Question 1: Please comment and add a rationale for your selection *').fill('Possibility');
  await page.getByLabel('Action: Is the investigation complete').click();
  await page.getByRole('option', { name: 'Yes' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Document Upload' }).locator('div').nth(2).click();
  await page.getByRole('button', { name: 'Upload' }).click();
  await page.getByRole('button', { name: 'Upload' }).setInputFiles('Screenshot from 2023-02-07 12-50-55.png');
});