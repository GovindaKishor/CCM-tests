//Language of notification changes as per language of system.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox').nth(0).fill('SUPERUSER3');
  await page.getByRole('textbox').nth(1).fill('SUPERUSER3');
  await page.getByRole('button').nth(2).click();
  await page.getByRole('button').nth(0).click();
  await page.getByRole('menuitem').nth(1).click();
  await page.getByRole('button').nth(3).click();
  await page.getByRole('option').nth(1).click();
  await page.getByRole('button').nth(1).click();
  await expect(page.locator('text=You have been mentioned')).toHaveCount(2);
  await expect(page.locator('text=You have been mentioned in a comment related to C-12 Default Siron Case by SUPERUSER3 SUPERUSER3')).toHaveCount(1);
  await page.locator('.MuiBackdrop-root').click();
  await page.getByRole('button').nth(3).click();
  await page.getByRole('option').nth(2).click();
  await page.getByRole('button').nth(1).click();
  await expect(page.locator('text=Sie wurden erwähnt')).toHaveCount(1);
  await expect(page.locator('text=Sie wurden in einem Kommentar zu C-12 Default Siron Case erwähnt von SUPERUSER3 SUPERUSER3')).toHaveCount(1);
  await page.locator('.MuiBackdrop-root').click();
  await page.getByRole('button').nth(3).click();
  await page.getByRole('option').nth(3).click();
  await page.getByRole('button').nth(1).click();
  await expect(page.locator('text=Vous avez été mentionné')).toHaveCount(2);
  await expect(page.locator('text=Vous avez été mentionné dans un commentaire sur C-12 Cas par défaut Siron par SUPERUSER3 SUPERUSER3')).toHaveCount(1);
  await page.locator('.MuiBackdrop-root').click();
  await page.getByRole('button').nth(3).click();
  await page.getByRole('option').nth(4).click();
  await page.getByRole('button').nth(1).click();
  await expect(page.locator('text=Sei stato menzionato')).toHaveCount(2);
  await expect(page.locator('text=Sei stato menzionato in un commento su C-12 Default Siron Case da SUPERUSER3 SUPERUSER3')).toHaveCount(1);
});