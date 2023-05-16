//Langauge of alert message changes as language of system changes.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox').nth(0).fill('SUPERUSER3');
  await page.getByRole('textbox').nth(1).fill('SUPERUSER3');
  await page.getByRole('button').nth(2).click();
  await page.getByRole('button').nth(0).click();
  await page.getByRole('menuitem').nth(1).click();
  await page.getByRole('button').nth(3).click();
  await page.getByRole('option').nth(2).click();
  await page.getByRole('link').nth(1).click();
  await page.locator('.css-mslw24').first().click();
  await page.getByRole('button', { name: 'Zeitachse' }).click();
  await page.getByRole('button', { name: 'Kommentar hinzufügen' }).click();
  await page.getByRole('textbox', { name: 'Kommentar' }).fill('Ok I will');
  await page.getByRole('button', { name: 'Senden' }).click();
  await expect(page.locator('text=Kommentar hinzugefügt')).toHaveCount(1);
});