//Checking if date is displayed in relation tab.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox').nth(0).fill('SUPERUSER');
  await page.getByRole('textbox').nth(1).fill('SUPERUSER');
  await page.getByRole('button').nth(2).click();
  await page.getByRole('link').nth(0).click();
  await page.getByText('C-13').click();
  await page.getByRole('tab').nth(5).click();
  await page.getByRole('button').nth(13).click();
  await expect(page.getByText('16.07.2021')).toHaveCount(1);
  await expect(page.getByText('17.07.2021')).toHaveCount(1);
  const value = String(await page.getByText('16.07.2021').textContent());
  expect(value).toMatch(/^\d\d\.\d\d\.\d\d\d\d/);
});