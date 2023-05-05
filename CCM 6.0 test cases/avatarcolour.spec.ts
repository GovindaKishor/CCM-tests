//Checking colour of user avatar.

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
  await page.getByRole('button').nth(15).click();
  await page.getByRole('textbox').nth(0).fill('Testing');
  await page.getByRole('button').nth(1).click();
  await expect(page.getByRole('main').getByText('GK')).toHaveCSS('background-color','rgb(189, 189, 189)');
  await page.getByRole('button').nth(8).click();
  await page.getByRole('textbox').nth(0).fill('Automation Testing');
  await page.getByRole('button').nth(1).click();
  await expect(page.getByText('GK').nth(1)).toHaveCSS('box-shadow','rgb(245, 124, 0) 0px 0px 0px 3px');
  await page.getByRole('button').nth(9).click();
  await page.getByRole('textbox').nth(0).fill('Rejected');
  await page.getByRole('button').nth(1).click();
  await expect(page.getByText('GK').nth(1)).toHaveCSS('box-shadow','rgb(211, 47, 47) 0px 0px 0px 3px');
  await page.getByRole('button').nth(8).click();
  await page.getByRole('textbox').nth(0).fill('Approve');
  await page.getByRole('button').nth(1).click();
  await page.getByRole('button').nth(0).click();
  await page.getByRole('menuitem').nth(1).click();
  await page.getByRole('link').nth(0).click();
  await page.getByRole('textbox').nth(0).fill('SUPERUSER2');
  await page.getByRole('textbox').nth(1).fill('SUPERUSER2');
  await page.getByRole('button').nth(2).click();
  await page.getByRole('link').nth(3).click();
  await page.getByRole('cell', { name: 'Automation Testing' }).click();
  await page.getByRole('button').nth(8).click();
  await page.getByRole('textbox').nth(0).fill('Approved');
  await page.getByRole('button').nth(1).click();
  await expect(page.getByRole('main').getByText('SS', { exact: true })).toHaveCSS('box-shadow','rgb(46, 125, 50) 0px 0px 0px 3px');
});