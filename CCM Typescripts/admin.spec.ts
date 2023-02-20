//To explore and validate Admin section in workbench(for an active configuration).

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox', { name: 'username' }).fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Workbench' }).click();
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/workbench/');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/workbench/auth');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/workbench');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/workbench/configs');
  await page.getByRole('cell', { name: 'ccm 6.0.0-SNAPSHOT Fri Feb 10 05:55:25 CET 2023' }).click();
  await page.getByRole('button', { name: 'Admin' }).click();
  await page.getByRole('link', { name: 'File Manager' }).click();
  await page.getByRole('treeitem', { name: 'bpmn' }).locator('svg').click();
  await page.getByRole('treeitem', { name: 'custom-json' }).locator('div').first().click();
  await page.getByRole('treeitem', { name: 'dmn' }).locator('svg').click();
  await page.getByText('custom-json.json').click();
  await page.getByRole('treeitem', { name: 'i18n' }).locator('svg').first().click();
  await page.getByRole('treeitem', { name: 'i18n' }).locator('svg').first().click();
  await page.getByRole('link', { name: 'App Params' }).click();
  await expect(page.locator('text=App Params')).not.toHaveCount(0);
  await expect(page.locator('text=Translations')).not.toHaveCount(0);
  await expect(page.locator('text=Translations overrides')).not.toHaveCount(0);
  await expect(page.locator('text=Reload results interval')).not.toHaveCount(0);
  await expect(page.locator('text=Property panel overrides')).not.toHaveCount(0);
});