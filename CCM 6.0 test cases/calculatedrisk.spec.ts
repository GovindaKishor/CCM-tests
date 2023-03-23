//Finding if calculated risk score is equal to displayed value. 

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox', { name: 'username' }).fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Clients' }).click();
  await page.locator('div:nth-child(2) > .css-1ssirbu > .css-mslw24').dblclick();
  await page.getByRole('tab', { name: 'Risk' }).click();
  var a = Number(page.getByRole('cell', { name: '' }).nth(2).textContent());
  var b = Number(page.getByRole('cell', { name: '' }).nth(5).textContent());
  var c = Number(page.getByRole('cell', { name: '' }).nth(8).textContent());
  var d = Number(page.getByRole('cell', { name: '' }).nth(11).textContent());
  var e = Number(page.getByRole('cell', { name: '' }).nth(14).textContent());
  var f = Number(page.getByRole('cell', { name: '' }).nth(17).textContent());
  var g = Number(page.getByRole('cell', { name: '' }).nth(20).textContent());
  var sum = a+b+c+d+e+f+g;
  await expect(page.getByText('550')).toHaveText(sum.toString());
});