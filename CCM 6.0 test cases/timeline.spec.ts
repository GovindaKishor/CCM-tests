//Exploring timeline of a case.
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox', { name: 'username' }).fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.locator('.css-mslw24').first().click({
    button : 'right'
  });
  await page.getByRole('menuitem', { name: 'View timeline' }).click();
  await page.getByRole('button', { name: 'Open' }).click();
  await page.getByRole('button', { name: 'Toggle all' }).click();
  await page.getByRole('button', { name: 'Toggle all' }).click();
  await page.getByRole('button', { name: 'Export' }).click();
});