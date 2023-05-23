//Status changes from pendingApproval to active after clicking approve and publish.
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/auth/login');
  await page.getByRole('textbox').nth(0).fill('SUPERUSER');
  await page.getByRole('textbox').nth(1).fill('SUPERUSER');
  await page.getByRole('button').nth(2).click();
  await page.getByRole('link').nth(3).click();
  await page.locator('button').nth(-1).click();
  await page.getByRole('textbox').nth(0).fill('Automation Testing');
  await page.getByRole('radio').nth(0).check();
  await page.getByRole('button').nth(0).click();
  await page.getByRole('option').nth(0).click();
  await page.getByRole('button').nth(3).click();
  await page.getByRole('button').nth(8).click();
  await page.getByRole('textbox').nth(0).fill('Please approve');
  await page.getByRole('button').nth(1).click();
  await page.getByRole('button').nth(0).click();
  await page.getByRole('menuitem').nth(1).click();
  await page.getByRole('link').nth(0).click();
  await page.getByRole('textbox').nth(0).fill('SUPERUSER2');
  await page.getByRole('textbox').nth(1).fill('SUPERUSER2');
  await page.getByRole('button').nth(2).click();
  await page.getByRole('link').nth(3).click();
  await page.getByRole('row', { name: 'Automation Testing' }).click();
  await expect(page.getByRole('cell', { name: 'Pending Approval' }).getByText('Pending Approval')).toHaveCount(1);
  await page.getByRole('button').nth(8).click();
  await page.getByRole('textbox').nth(0).fill('Approved');
  await page.getByRole('button').nth(1).click();
  await expect(page.getByRole('cell', { name: 'Active' }).getByText('Active')).toHaveCount(1);
});