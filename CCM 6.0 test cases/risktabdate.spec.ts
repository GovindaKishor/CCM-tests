//Risk calculated date and scoring date available in risk tab.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox').nth(0).fill('SUPERUSER');
  await page.getByRole('textbox').nth(1).fill('SUPERUSER');
  await page.getByRole('button').nth(2).click();
  await page.getByRole('button').nth(0).click();
  await page.getByRole('menuitem').nth(1).click();
  await page.getByRole('button').nth(3).click();
  await page.getByRole('option').nth(1).click();
  await page.getByRole('link', { name: 'Clients' }).click();
  await page.locator('.css-mslw24').first().dblclick();
  await page.getByRole('tab', { name: 'Risk' }).click();
  await expect(page.getByText('Last calculation date')).toHaveCount(1);
  await expect(page.getByText('Scoring date')).toHaveCount(1);
  await page.getByRole('button', { name: 'Show risk history' }).click();
  await expect(page.getByText('Scoring date')).toHaveCount(2);
});