//LOAD MORE button will be enabled if there are 50 or more related cases

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
  await page.getByRole('link').nth(0).click();
  await expect(page.getByRole('button', { name: 'Load more' })).toHaveCount(1);
  await page.getByRole('button', { name: 'Load more' }).click();
  const val=Number(String(await page.getByRole('heading').textContent()).split(" ",1)[0]);
  if(val<50)
  {
    test.fail();
  }
});