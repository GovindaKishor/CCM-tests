//Workbench: Risk Configurations: For business unit with no configuration, +ADD ITEM loads page with new item.
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
  await page.getByRole('cell', { name: '1', exact: true }).click();
  await page.getByRole('button', { name: 'Risk Configurations' }).click();
  await page.getByRole('link', { name: 'Risk Configurations' }).click();
  await page.getByRole('tab', { name: 'CECH' }).click();
  await page.getByRole('button', { name: 'Create' }).click();
  await expect(page.locator('text=Entity type')).toHaveCount(1);
  await expect(page.locator('text=Risk engine name')).toHaveCount(1);
  await expect(page.locator('text=Case creation engine name')).toHaveCount(1);
});