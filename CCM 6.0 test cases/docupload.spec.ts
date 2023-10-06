//Uploading document successfully in task section.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/auth/login');
  await page.getByLabel('username').fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByText('C-2').dblclick();
  await page.getByText('HT-2').dblclick();
  await page.locator('li').filter({ hasText: 'Qualification' }).locator('div').nth(2).click();
  await page.getByLabel('Action: Assess the alert by behavior and pattern using the following options *').click();
  await page.getByRole('option', { name: 'Possibly Unusual' }).click();
  await page.getByLabel('Question 1: Comment and add a reason for the selection *').click();
  await page.getByLabel('Question 1: Comment and add a reason for the selection *').fill('yes');
  await page.getByLabel('Action: Is the investigation complete').click();
  await page.getByRole('option', { name: 'Yes' }).click();
  await page.locator('li').filter({ hasText: 'Document Upload' }).locator('div').nth(2).click();
  const fileChooserPromise1 = page.waitForEvent('filechooser');
  await page.getByRole('button', { name: 'Upload' }).click();
  const fileChooser1 = await fileChooserPromise1;
  await fileChooser1.setFiles('/Users/govinda.kishor/Downloads/certificate-vshq95psrgie-1692507869.pdf');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByText('HT-2').dblclick();
  await page.getByRole('tab', { name: 'Documents' }).click();
  await page.getByRole('button', { name: 'Documents' }).click();
  await page.getByText('certificate-vshq95psrgie-1692507869.pdf').click();
  await expect(page.getByText('Error')).toHaveCount(0);
});