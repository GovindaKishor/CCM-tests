//Exploring qualification section of a tasks(didnt got expected result maybe due to browser issue in my side).

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByLabel('Username *').fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Tasks' }).click();
  await page.getByText('HT-14').click();
  await page.locator('[data-test-id="virtuoso-item-list"]').getByText('HT-14').click({
    clickCount: 2
  });
  await page.getByRole('listitem').filter({ hasText: 'Qualification' }).locator('div').nth(2).click();
  await page.getByLabel('Action: Based on the behavior and pattern, please assess the alert with the following options *').click();
  await page.locator('[id="\\32 _ptmRetail_01_1-option-0"]').click();
  await page.getByLabel('Question 1: Please comment and add a rationale for your selection *').click();
  await page.getByLabel('Question 1: Please comment and add a rationale for your selection *').fill('Unusual');
  await page.getByLabel('Action: Is the investigation complete').click();
  await page.getByRole('option', { name: 'Yes' }).click();
  await page.getByRole('button', { name: 'Report for Unusual Activities' }).click();
});