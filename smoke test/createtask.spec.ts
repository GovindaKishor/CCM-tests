//Creating a new task.
import { test, expect } from '@playwright/test';

test('new task', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox').nth(0).fill('SUPERUSER');
  await page.getByRole('textbox').nth(1).fill('SUPERUSER');
  await page.getByRole('button').nth(2).click();
  await page.getByRole('button').nth(0).click();
  await page.getByRole('menuitem').nth(1).click();
  await page.getByRole('button').nth(3).click();
  await page.getByRole('option').nth(1).click();
  await page.getByRole('link').nth(0).click();
  await page.getByRole('button', { name: 'New case' }).click();
  await page.getByRole('button', { name: 'Open' }).click();
  await page.getByRole('option', { name: 'Manual Risk Level Change' }).click();
  await page.getByLabel('NaturalPerson').check();
  await page.getByRole('dialog', { name: 'Create new case' }).locator('form').getByRole('button', { name: 'Open' }).click();
  await page.getByPlaceholder('Search...').fill('c');
  await page.getByRole('option', { name: 'BusinessId: CEMT-1085631' }).click();
  await page.getByRole('button', { name: 'Create' }).click();
  await page.locator('[data-test-id="virtuoso-top-item-list"]').getByRole('checkbox').check();
  await page.locator('[data-test-id="virtuoso-top-item-list"]').getByRole('checkbox').uncheck();
  await page.getByRole('link',).nth(1).click();
  await page.getByText('SUPERUSER SUPERUSER').nth(-1).click();
});