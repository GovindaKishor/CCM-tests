import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/');
  await page.goto('http://localhost:8181/auth');
  await page.goto('http://localhost:8181/auth/login');
  await page.getByLabel('Username').fill('SUPERUSER');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.locator('.MuiAvatar-root').first().click();
  await page.locator('.css-vd4mct > .css-1inxwa4 > .MuiAvatar-root').first().click();
  await page.locator('div:nth-child(3) > .css-vd4mct > .css-1inxwa4 > .MuiAvatar-root').click();
  await page.getByRole('link', { name: 'Tasks' }).click();
  await page.locator('div:nth-child(3) > .css-vd4mct > .css-1inxwa4 > .MuiAvatar-root > .css-ugzxxt > svg').click();
  await page.locator('div:nth-child(8) > .css-vd4mct > .css-1inxwa4 > .MuiAvatar-root > .css-ugzxxt > svg').click();
  await page.locator('div:nth-child(7) > .css-vd4mct > .css-1inxwa4 > .MuiAvatar-root > .css-ugzxxt > svg').click();
  await page.locator('div:nth-child(5) > .css-vd4mct > .css-1inxwa4 > .MuiAvatar-root > .css-ugzxxt > svg').click();
  await page.locator('div:nth-child(10) > .css-vd4mct > .css-1inxwa4 > .MuiAvatar-root > .css-ugzxxt > svg').click();
});