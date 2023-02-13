//Validate client profile automatically in client section(CEMT-1488601 PANTHERWHITE).

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
  await page.locator('[data-test-id="virtuoso-top-item-list"]').getByRole('checkbox').check();
  await page.locator('[data-test-id="virtuoso-top-item-list"]').getByRole('checkbox').uncheck();
  await page.getByRole('link', { name: 'Tasks' }).click();
  await page.getByRole('link', { name: 'Clients' }).click();
  await page.getByText('CEMT-1488601 PANTHERWHITE').click({
    clickCount: 2
  });
  await expect(page.locator('text=WHITE PANTHER')).not.toHaveCount(0);
  await expect(page.locator('text=PROFESSOR')).not.toHaveCount(0);
});