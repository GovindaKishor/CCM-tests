//Task text is translated to Frech when we change system language to French.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox', { name: 'username' }).fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSR');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('button', { name: 'SS' }).click();
  await page.getByRole('menuitem').nth(1).click();
  await page.getByRole('button').nth(3).click();
  await page.getByRole('option', { name: 'English (GB)' }).click();
  await page.getByRole('link').nth(1).click();
  await page.locator('.MuiChip-label').first().dblclick();
  await expect(page.locator('text=Investigation : Compliance')).not.toHaveCount(0);
  await expect(page.locator('text=CONTINUE')).toHaveCount(1);
  await expect(page.locator('text=REPORT FOR UNUSUAL ACTIVITIES')).toHaveCount(1);
  await page.getByRole('button', { name: 'SS' }).click();
  await page.getByRole('menuitem').nth(1).click();
  await page.getByRole('button').nth(3).click();
  await page.getByRole('option', { name: 'Français' }).click();
  await page.getByRole('link').nth(1).click();
  await page.locator('.MuiChip-label').first().dblclick();
  await expect(page.locator('text=Investigation : Conformité')).not.toHaveCount(0);
  await expect(page.locator('text=Continuer')).toHaveCount(1);
  await expect(page.locator('text=Rapport sur les activités inhabituelles')).toHaveCount(1);
});