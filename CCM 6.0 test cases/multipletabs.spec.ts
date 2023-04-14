//Multiple tab processing simultaneously.

import { test,expect} from '@playwright/test';

test('test', async ({ page,context }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox', { name: 'username' }).click();
  await page.getByRole('textbox', { name: 'username' }).fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.locator('.css-mslw24').first().click();
  await page.locator('[data-test-id="virtuoso-top-item-list"]').getByRole('button').first().click();
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('menuitem', { name: 'Open in a new tab' }).click();
  const page2 = await page2Promise;
  await page2.getByRole('navigation').getByRole('link', { name: 'Cases' }).click();
  await page2.getByRole('button', { name: 'SS' }).click();
  await page2.getByRole('menuitem', { name: 'Logout' }).click();
  await expect(page2).toHaveURL('http://ccm-ci-develop.imtf-devops.com:8181/auth/logout');
  await page.bringToFront();
  await expect(page).toHaveURL('http://ccm-ci-develop.imtf-devops.com:8181/auth/logout');
  await page.getByRole('link', { name: 'Log in again' }).click();
  await page.getByRole('textbox', { name: 'username' }).click();
  await page.getByRole('textbox', { name: 'username' }).fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page).toHaveURL('http://ccm-ci-develop.imtf-devops.com:8181/case-manager/search/simple_cases?sort=case.presentableId');
  await page2.bringToFront();
  await expect(page2).toHaveURL('http://ccm-ci-develop.imtf-devops.com:8181/case-manager/search/simple_cases?sort=case.presentableId');
});