//Punteggio totale is not overlapped.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-test.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox').nth(0).fill('SUPERUSER');
  await page.getByRole('textbox').nth(1).fill('SUPERUSER');
  await page.getByRole('button').nth(2).click();
  await page.getByRole('button').nth(0).click();
  await page.getByRole('menuitem').nth(1).click();
  await page.getByRole('button').nth(3).click();
  await page.getByRole('option').nth(4).click();
  await page.getByRole('link', { name: 'Casi' }).click();
  await page.locator('.css-mslw24').first().click();
  await page.getByRole('button', { name: 'Avvisi AML' }).click();
  await expect(page.getByText('Punteggio totale')).toHaveCount(1);
  await expect(page.getByText('20 come di 20.10.2021')).toHaveCount(1);
});