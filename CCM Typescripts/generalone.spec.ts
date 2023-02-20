// This is a general test on a particular case (case 3) in which it will try to validate the details of case, export timeline of the case,check different check boxes,to add comment ot the case etc.
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox', { name: 'username' }).fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.locator('div:nth-child(2) > .css-1ssirbu > .css-mslw24').click();
  await page.locator('[data-test-id="virtuoso-top-item-list"]').getByRole('button').first().click();
  await page.getByRole('menuitem', { name: 'Details' }).click();
  await expect(page.locator('text=Name')).not.toHaveCount(0);
  await expect(page.locator('text=Created on')).not.toHaveCount(0);
  await expect(page.locator('text=Oid')).not.toHaveCount(0);
  await expect(page.locator('text=Uri')).not.toHaveCount(0);
  await page.getByRole('button').click();
  await page.locator('[data-test-id="virtuoso-top-item-list"]').getByRole('button').first().click();
  await page.getByRole('menuitem', { name: 'Generate a report' }).click();
  await page.getByRole('button').click();
  await page.locator('[data-test-id="virtuoso-top-item-list"]').getByRole('button').first().click();
  await page.getByRole('menuitem', { name: 'Add comment' }).click();
  await page.getByRole('textbox', { name: 'Comment' }).click();
  await page.getByRole('textbox', { name: 'Comment' }).fill('Case 3');
  await page.getByRole('button', { name: 'Send' }).click();
  await page.locator('[data-test-id="virtuoso-top-item-list"]').getByRole('button').first().click();
  await page.getByRole('menuitem', { name: 'View timeline' }).click();
  await page.getByRole('button', { name: 'Export' }).click();
  await page.getByRole('button', { name: 'Open' }).click();
  await page.getByRole('button', { name: 'Toggle all' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Toggle all' }).getByRole('checkbox').uncheck();
  await page.getByRole('option', { name: 'Task events' }).getByRole('checkbox').check();
  await page.getByRole('option', { name: 'Task events' }).getByRole('checkbox').uncheck();
  await page.getByRole('heading', { name: 'Case timeline' }).getByRole('button').click();
});