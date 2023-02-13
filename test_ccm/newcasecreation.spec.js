//Automated test which creates new case.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByLabel('Username *').fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Reveal Password' }).click();
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('button', { name: 'New case' }).click();
  await page.getByLabel('Case type').click();
  await page.getByRole('option', { name: 'Compliance Review' }).click();
  await page.getByLabel('Company').check();
  await page.getByPlaceholder('Search...').click();
  await page.getByPlaceholder('Search...').fill('1');
  await page.getByRole('option', { name: 'BusinessId: CENL-1388684, Name: AYZ CORP' }).click();
  await page.getByRole('button', { name: 'Create' }).click();
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/case-manager/case/Y2FzZXM6Ly9jYXNlcy83ZjE4MTQ4MS1mODQ5LTRhOTAtOTY0ZS02YTJhOWMwZDhlNTI/');
  await expect(page.locator('text=Compliance Review')).not.toHaveCount(0);
});
