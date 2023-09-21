//Duplicate task name in workbench

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/auth/login');
  await page.getByLabel('username').fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByRole('link', { name: 'Workbench' }).click();
  await page.locator('button').nth(-1).click();
  await page.getByRole('textbox').nth(0).fill('Automation Testing');
  await page.getByRole('radio').nth(0).check();
  await page.getByRole('button').nth(0).click();
  await page.getByRole('option').nth(0).click();
  await page.getByRole('button').nth(3).click();
  await page.getByRole('button', { name: 'Case Definitions' }).click();
  await page.getByRole('link', { name: 'Task Definitions' }).click();
  await page.getByRole('row', { name: 'Risk Review less than a minute ago File actions' }).getByTitle('File actions').click();
  await page.getByText('Duplicate').click();
  await page.getByLabel('New label *').click();
  await page.getByLabel('New label *').fill('Testing');
  await page.getByRole('button', { name: 'Duplicate' }).click();
  await page.getByRole('region').getByRole('link', { name: 'Task Definitions' }).click();
  await page.getByRole('row', { name: 'Risk Review less than a minute ago File actions' }).getByTitle('File actions').click();
  await page.getByText('Duplicate').click();
  await page.getByLabel('New label *').click();
  await page.getByLabel('New label *').fill('Testing 1');
  await page.getByRole('button', { name: 'Duplicate' }).click();
  await page.getByRole('region').getByRole('link', { name: 'Task Definitions' }).click();
  await expect(page.getByText('Testing')).toHaveCount(1);
  await expect(page.getByText('Testing 1')).toHaveCount(1);
});