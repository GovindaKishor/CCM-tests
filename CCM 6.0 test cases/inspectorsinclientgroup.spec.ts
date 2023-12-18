import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/auth/login');
  await page.getByLabel('username').fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByRole('link', { name: 'Client 360' }).click();
  await page.locator('[data-test-id="virtuoso-item-list"]').getByText('Client Group').click();
  await page.getByText('Client GroupCENL1Automation Testing - CENL').click();
  await page.getByText('Automation Testing - CENL').dblclick();
  await page.getByRole('button', { name: 'Related cases' }).click();
  await page.getByRole('button', { name: 'Related cases' }).click();
  await page.getByRole('button', { name: 'Timeline' }).click();
  await page.getByRole('button', { name: 'Timeline' }).click();
});