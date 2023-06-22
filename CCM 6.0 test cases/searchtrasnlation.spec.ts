//Serach bar in Trasnlation tab.

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
  await page.getByRole('link').nth(3).click();
  await page.locator('button').nth(-1).click();
  await page.getByRole('textbox').nth(0).fill('Automation-Testing');
  await page.getByRole('radio').nth(0).check();
  await page.getByRole('button').nth(0).click();
  await page.getByRole('option').nth(0).click();
  await page.getByRole('button').nth(3).click();
  await page.getByRole('button').nth(4).click();
  await page.getByRole('link').nth(2).click();
  await page.getByRole('tab', { name: 'codes' }).click();
  await page.getByPlaceholder('Search').click();
  await page.getByPlaceholder('Search').fill('Gender.value.M');
  await page.getByRole('cell', { name: 'Gender.value.M' }).click();
  await expect(page.getByText('Gender.value.M')).not.toHaveCount(0);
  await page.getByRole('button', { name: 'Clear search' }).click();
  await page.getByPlaceholder('Search').fill('Male');
  await expect(page.getByText('Gender.value.M')).not.toHaveCount(0);
  await page.getByRole('button', { name: 'Clear search' }).click();
  await page.getByPlaceholder('Search').fill('Homme');
  await expect(page.getByText('Gender.value.M')).not.toHaveCount(0);
  await page.getByRole('tab', { name: 'columns' }).click();
  await page.getByRole('tab', { name: 'commons' }).click();
});