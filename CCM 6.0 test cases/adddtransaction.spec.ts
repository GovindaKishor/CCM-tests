import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/auth/login');
  await page.getByLabel('username').fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByRole('button', { name: 'Create...' }).click();
  await page.getByRole('menuitem', { name: 'New case' }).click();
  await page.getByLabel('Business ID *').click();
  await page.getByLabel('CENL').click();
  await page.getByRole('option', { name: 'CEDE' }).click();
  await page.getByLabel('Business ID *').click();
  await page.getByLabel('Business ID *').fill('1085631');
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Create' }).click();
  await page.locator('[data-test-id="virtuoso-item-list"]').getByText('Investigation').click();
  await page.getByText('InvestigationOpen').dblclick();
  await page.locator('form div').filter({ hasText: 'ClientClient' }).getByRole('combobox').click();
  await page.getByRole('option', { name: 'IRON MAN' }).click();
  await page.getByLabel('All').getByText('All').click();
  await page.locator('#menu-account_id div').first().click();
  await page.getByRole('button', { name: 'Search view' }).click();
  await page.getByRole('row', { name: '12933066000 + 18,000.00 EUR 1294356001000976 1234567890 BOTCOIN' }).getByRole('button').click();
  await page.locator('td:nth-child(4)').first().click();
  await expect(page.getByText('12933066000')).not.toHaveCount(0);
});