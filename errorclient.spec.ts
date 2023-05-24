//TRANSCATION ROLLBACK error after removing clients.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-test.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox').nth(0).fill('SUPERUSER');
  await page.getByRole('textbox').nth(1).fill('SUPERUSER');
  await page.getByRole('button').nth(2).click();
  await page.getByRole('button').nth(0).click();
  await page.getByRole('menuitem').nth(1).click();
  await page.getByRole('button').nth(3).click();
  await page.getByRole('option').nth(1).click();
  await page.getByRole('link').nth(2).click();
  await page.getByRole('button', { name: 'New client group' }).click();
  await page.getByRole('button', { name: 'Open' }).click();
  await page.getByRole('option', { name: 'CENL' }).click();
  await page.getByLabel('Name *').click();
  await page.getByLabel('Name *').fill('Automation Testing');
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByRole('button', { name: 'Add client' }).click();
  await page.getByPlaceholder('Search for a client...').fill('CENL');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('row', { name: 'CENL-1388678' }).getByRole('button').click();
  await page.getByLabel('Audit message').fill('Add');
  await page.getByRole('button', { name: 'Add client to group' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('row', { name: 'CENL-1018529' }).getByRole('button').click();
  await page.getByLabel('Audit message').fill('Add');
  await page.getByRole('button', { name: 'Add client to group' }).click();
  await page.locator('section').getByTestId('__SCROLLER__').getByRole('button').first().click();
  await page.getByLabel('Audit message').fill('remove');
  await page.getByRole('button', { name: 'Remove' }).click();
  await expect(page.locator('text=TRANSACTION_ROLLBACK:Transaction rollback')).toHaveCount(0);
});