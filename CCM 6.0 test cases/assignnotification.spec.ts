import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/');
  await page.getByLabel('Username').fill('SUPERUSER');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByText('C-1').first().dblclick();
  await page.getByText('HT-1').click({
    button: 'right'
  });
  await page.getByTestId('ASSIGN_TASK').click();
  await page.getByLabel('Assignee').click();
  await page.getByRole('option', { name: 'compliance1' }).click();
  await page.getByRole('button', { name: 'Assign task' }).click();
  await page.getByRole('banner').getByRole('button').nth(3).click();
  await page.getByRole('menuitem', { name: 'Logoff' }).click();
  await page.getByRole('link', { name: 'Log on again' }).click();
  await page.getByLabel('Username').fill('compliance1');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('2021');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByRole('button', { name: '1' }).click();
  await expect(page.getByText('The task HT-1 Investigation: Compliance (part of Case C-1) has been assigned to you.')).not.toHaveCount(0);
});