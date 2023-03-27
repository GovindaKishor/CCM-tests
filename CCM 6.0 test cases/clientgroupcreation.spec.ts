//Create a client group and verify it in Client 360 view profile and client section.

import { test, expect } from '@playwright/test';

test('client group creation', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/clients/search/customers?sort=LegalEntity.businessId');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox', { name: 'username' }).fill('SUPERUSER');
  await page.getByRole('textbox', { name: 'username' }).press('Tab');
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByLabel('Password *').press('Enter');
  await page.getByRole('link', { name: 'Clients' }).click();
  await page.getByRole('group').getByRole('button').nth(1).click();
  await page.getByTestId('__MENU__').getByText('New client group').click();
  await page.getByRole('button', { name: 'Open' }).click();
  await page.getByRole('option', { name: 'CEMT' }).click();
  await page.getByLabel('Name *').click();
  await page.getByLabel('Name *').fill('CEMTDIANA');
  await page.getByLabel('Description').click();
  await page.getByLabel('Description').fill('Diana Test');
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByRole('button', { name: 'Add client' }).click();
  await page.getByPlaceholder('Search for a client...').fill('CEMT');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('row', { name: 'CEMT-1018529 CEMT WONDER MAN AMSTERDAM MEDIUM' }).getByRole('button').click();
  await page.getByLabel('Audit message').fill('Diana Test Audit message');
  await page.getByRole('button', { name: 'Add client to group' }).click();
  await page.getByTestId('__SCROLLER__').getByRole('link', { name: 'Clients' }).click();
  await page.getByTitle(' CEMTDIANA', { exact: true }).click(); 
  await expect(page.getByTitle('CEMTDIANA')).not.toHaveCount(0);
  await page.getByText('CEMT-1018529').dblclick();
  await expect(page.locator('text=Client group information')).toHaveCount(1);
  await expect(page.locator('text=CEMTDIANA')).toHaveCount(1);
  await expect(page.locator('text=Diana Test')).toHaveCount(1);
});