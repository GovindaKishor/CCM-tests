//Automated creation of new configuration called Test 1.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-5-5-x.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox', { name: 'username' }).fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Reveal Password' }).click();
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Workbench' }).click();
  await page.goto('http://ccm-ci-5-5-x.imtf-devops.com:8181/workbench/');
  await page.goto('http://ccm-ci-5-5-x.imtf-devops.com:8181/workbench/auth');
  await page.goto('http://ccm-ci-5-5-x.imtf-devops.com:8181/workbench');
  await page.goto('http://ccm-ci-5-5-x.imtf-devops.com:8181/workbench/configs');
  await page.locator('button').nth(3).click();
  await page.getByLabel('Name *').click();
  await page.getByLabel('Name *').fill('Test 1');
  await page.getByLabel('Description').click();
  await page.getByLabel('Description').fill('Automation Testing');
  await page.getByLabel('Duplicate existing configuration').check();
  await page.getByLabel('Duplicate from *').click();
  await page.getByRole('listbox', { name: 'Duplicate from' }).getByText('ccm 5.5.0-SNAPSHOT Wed Mar 29 11:17:02 CEST 2023').click();
  await page.getByRole('button', { name: 'Duplicate' }).click();
  await expect(page.locator('text=Name')).not.toHaveCount(0);
  await expect(page.locator('text=Description')).not.toHaveCount(0);
  await expect(page.locator('text=Creation date')).not.toHaveCount(0);
  await expect(page.locator('text=Created by')).not.toHaveCount(0);
  await expect(page.locator('text=SUPERUSER')).not.toHaveCount(0);
  await expect(page.locator('text=Test 1')).not.toHaveCount(0);
  await expect(page.locator('text=Automation Testing')).not.toHaveCount(0);
  await expect(page.locator('text=WORKBENCH')).not.toHaveCount(0);
});