//Edit a configuration under testing.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-5-5-x.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox').nth(0).fill('SUPERUSER');
  await page.getByRole('textbox').nth(1).fill('SUPERUSER');
  await page.getByRole('button').nth(2).click();
  await page.getByRole('link').nth(3).click();
  await page.getByRole('cell', { name: 'draft' }).nth(0).click();
  await page.getByRole('menuitem').nth(2).click();
  await page.getByRole('textbox').nth(0).fill('Automation-Testing');
  await page.getByRole('textbox').nth(1).fill('Automation-Testing');
  await page.getByRole('button').nth(1).click();
});