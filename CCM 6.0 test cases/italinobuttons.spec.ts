//Buttons in Italino

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
  await page.getByRole('button').nth(0).click();
  await expect(page.getByText('Impostazioni')).not.toHaveCount(0);
  await expect(page.getByText('Disconnessione')).not.toHaveCount(0);
  await page.getByTestId('__MENU__').locator('div').first().click();
  await page.getByRole('link', { name: 'Casi' }).click();
  await page.getByRole('group').getByRole('button').nth(1).click();
  await expect(page.getByText('Nuovo caso')).not.toHaveCount(0);
  await expect(page.getByText('Nuovo gruppo di clienti')).not.toHaveCount(0);
});