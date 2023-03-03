//Workbech section.
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-5-5-x.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox', { name: 'username' }).fill('SUPERUSER');
  await page.getByLabel('Password *').click({
    modifiers: ['Shift']
  });
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Reveal Password' }).click();
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Workbench' }).click();
  await page.goto('http://ccm-ci-5-5-x.imtf-devops.com:8181/workbench/');
  await page.goto('http://ccm-ci-5-5-x.imtf-devops.com:8181/workbench/auth');
  await page.goto('http://ccm-ci-5-5-x.imtf-devops.com:8181/workbench');
  await page.goto('http://ccm-ci-5-5-x.imtf-devops.com:8181/workbench/configs');
  await page.locator('button').nth(4).click();
  await page.getByLabel('Name *').click();
  await page.getByLabel('Name *').fill('Test1');
  await page.getByLabel('Description').click();
  await page.getByLabel('Description').fill('Example');
  await page.getByLabel('Duplicate existing configuration').check();
  await page.getByRole('button', { name: 'Open' }).click();
  await page.getByRole('listbox', { name: 'Duplicate from' }).getByText('Test').click();
  await page.getByRole('button', { name: 'Duplicate' }).click();
  await page.locator('button').nth(2).click();
  await page.getByRole('menuitem', { name: 'Publish Test' }).getByText('Publish Test').click();
  await page.locator('button').nth(2).click();
  await page.getByRole('menuitem', { name: 'Publish', exact: true }).getByText('Publish').click();
  await page.getByRole('button', { name: 'Publish' }).click();
  await page.locator('button').nth(2).click();
  await page.getByRole('menuitem', { name: 'Validate' }).getByText('Validate').click();
  await page.locator('button').nth(2).click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('menuitem', { name: 'Export' }).getByText('Export').click();
  const download = await downloadPromise;
  await page.locator('button').nth(2).click();
  await page.getByRole('menuitem', { name: 'Duplicate' }).getByText('Duplicate').click();
  await page.getByRole('button', { name: 'Duplicate' }).click();
  await page.getByLabel('Name *').click();
  await page.getByLabel('Name *').fill('Test2');
  await page.getByRole('button', { name: 'Duplicate' }).click();
  await page.getByRole('button', { name: 'Cancel' }).click();
});