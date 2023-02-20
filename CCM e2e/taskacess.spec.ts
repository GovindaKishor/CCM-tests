//As a  logged in user with access to a case,  I can process all tasks to which I have access to.
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox', { name: 'username' }).fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Tasks' }).click();
  await page.locator('div:nth-child(3) > .css-1ssirbu > .css-mslw24').click();
  await page.getByRole('button', { name: 'Details open' }).click();
  await page.getByRole('button', { name: 'Timeline' }).click();
  await expect(page.locator('text=ADD COMMENT')).not.toHaveCount(0);
  await expect(page.locator('text=EXPORT')).not.toHaveCount(0);
  await page.getByRole('button', { name: 'Details open' }).click();
  await page.getByRole('tab', { name: 'Customer' }).click();
  await page.getByRole('tab', { name: 'Documents' }).click();
  await page.getByRole('link', { name: 'Cases' }).click();
  await page.getByText('C-6').click();
  await page.getByText('C-6Default Siron CaseActiveCENL-1388688SironAMLCompanyLKM CORP20/02/20230 dayCol').dblclick();
  await page.locator('.css-mslw24').click();
  await page.getByRole('tab', { name: 'Customer' }).click();
  await page.getByRole('tab', { name: 'Task' }).click();
  await expect(page.locator('text=ADD COMMENT')).not.toHaveCount(0);
  await expect(page.locator('text=EXPORT')).not.toHaveCount(0);
});