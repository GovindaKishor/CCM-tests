import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/auth/login');
  await page.getByLabel('username').fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByRole('link', { name: 'Client 360' }).click();
  await page.locator('[data-test-id="virtuoso-item-list"]').getByText('Client Group').click();
  await page.getByText('Client GroupCENL1Testing - CENL').dblclick();
  await expect(page.getByText("Risk")).toHaveCount(0);
  await page.getByRole('link', { name: 'Client 360' }).first().click();
  await page.locator('[data-test-id="virtuoso-item-list"]').getByText('Legal Entity').click();
  await page.getByText('Legal EntityCENLCENL-1388684AYZ CORPTesting').dblclick();
  await expect(page.getByText("Risk")).toHaveCount(0);
  await page.getByRole('link', { name: 'Cases' }).click();
  await page.getByText('C-1').click();
  await page.getByRole('tab', { name: 'Customer' }).click();
  await page.getByRole('button', { name: 'Clients' }).first().click();
  await expect(page.getByText("Risk History")).toHaveCount(0);
});