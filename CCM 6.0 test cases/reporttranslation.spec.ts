//Report will be translated to respective language according to language of system.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox').nth(0).fill('SUPERUSER');
  await page.getByRole('textbox').nth(1).fill('SUPERUSER');
  await page.getByRole('button').nth(2).click();
  await page.getByRole('button').nth(0).click();
  await page.getByRole('menuitem').nth(1).click();
  await page.getByRole('button').nth(3).click();
  await page.getByRole('option', { name: 'Français' }).click();
  await page.getByRole('link', { name: 'Cas' }).click();
  await page.locator('div:nth-child(2) > .css-vd4mct > .css-mslw24').click();
  await page.locator('[data-test-id="virtuoso-top-item-list"]').getByRole('button').first().click();
  await page.getByRole('menuitem', { name: 'Générer un rapport' }).click();
  await page.getByRole('button', { name: 'MDM générique - aml_alert_natural_person' }).click();
});