//To explore and validate Risk Configurations section in Work bench.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-5-5-x.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox', { name: 'username' }).fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Workbench' }).click();
  await page.goto('http://ccm-ci-5-5-x.imtf-devops.com:8181/workbench/');
  await page.goto('http://ccm-ci-5-5-x.imtf-devops.com:8181/workbench/auth');
  await page.goto('http://ccm-ci-5-5-x.imtf-devops.com:8181/workbench');
  await page.goto('http://ccm-ci-5-5-x.imtf-devops.com:8181/workbench/configs');
  await page.getByRole('cell', { name: 'system' }).first().click();
  await page.getByRole('button', { name: 'Risk Configurations' }).click();
  await page.getByRole('link', { name: 'Risk Configurations' }).click();
  await page.getByRole('tab', { name: 'CECH' }).click();
  await page.getByRole('tab', { name: 'CENL' }).click();
  await page.getByRole('tab', { name: 'CENL' }).click();
  await page.getByRole('link', { name: 'Risk Engines' }).click();
  await expect(page.locator('text=Risk Engines')).not.toHaveCount(0);
  await expect(page.locator('text=Risk Engine Name')).not.toHaveCount(0);
  await expect(page.locator('text=Risk Engine Technical Key')).not.toHaveCount(0);
  await expect(page.locator('text=Last Modified')).not.toHaveCount(0);
});