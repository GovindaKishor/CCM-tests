//Bookmark in client section.
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox', { name: 'username' }).fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/case-manager/search/simple_cases?sort=case.presentableId');
  await page.getByRole('link', { name: 'Clients' }).click();
  await page.locator('#treeView-SEARCH').getByRole('button').first().click();
  await page.getByLabel('Name').fill('Example');
  await page.getByRole('button', { name: 'Save' }).click();
});