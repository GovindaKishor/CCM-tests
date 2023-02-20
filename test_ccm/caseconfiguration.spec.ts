//To explore and validate Case configuration section of workbench.

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
  await page.getByRole('button', { name: 'Case Configurations' }).click();
  await page.getByRole('link', { name: 'Case Configurations' }).click();
  await expect(page.locator('text=Case Configurations')).not.toHaveCount(0);
  await expect(page.locator('text=Case Name')).not.toHaveCount(0);
  await expect(page.locator('text=Case Technical Key')).not.toHaveCount(0);
  await expect(page.locator('text=Trigger Type')).not.toHaveCount(0);
  await expect(page.locator('text=Default Case')).not.toHaveCount(0);
  await page.getByRole('link', { name: 'Task Configurations' }).click();
  await expect(page.locator('text=Task Configurations')).not.toHaveCount(0);
  await expect(page.locator('text=Task Name')).not.toHaveCount(0);
  await expect(page.locator('text=Task Technical Key')).not.toHaveCount(0);
  await page.getByRole('link', { name: 'Workflow Configurations' }).click();
  await expect(page.locator('text=Workflow Configurations')).not.toHaveCount(0);
  await expect(page.locator('text=Workflow Name')).not.toHaveCount(0);
  await expect(page.locator('text=Workflow Technical Key')).not.toHaveCount(0);
  await expect(page.locator('text=Last Modified')).not.toHaveCount(0);
});
