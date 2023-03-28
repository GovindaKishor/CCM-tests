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
  await page.locator('div:nth-child(3) > .css-1ssirbu > .css-mslw24').dblclick();
  await page.getByRole('tab', { name: 'Risk' }).click();
  const a = parseInt(String(await page.getByRole('cell', { name: '' }).nth(2).textContent()));
  const b = parseInt(String(await page.getByRole('cell', { name: '' }).nth(5).textContent()));
  const c = parseInt(String(await page.getByRole('cell', { name: '' }).nth(8).textContent()));
  const d = parseInt(String(await page.getByRole('cell', { name: '' }).nth(11).innerText()));
  const e = parseInt(String(await page.getByRole('cell', { name: '' }).nth(14).innerText()));
  const f = parseInt(String(await page.getByRole('cell', { name: '' }).nth(17).innerText()));
  const g = parseInt(String(await page.getByRole('cell', { name: '' }).nth(20).innerText()));
  const sum = a+b+c+d+e+f+g;
  await expect(page.getByText('550')).toHaveText(sum.toString());
});