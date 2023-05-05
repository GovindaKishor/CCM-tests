//Have a mechanism to translate a Questionnaire and Form into More languages. This should be ideally done from the Workbench.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/auth/login');
  await page.getByRole('textbox').nth(0).fill('SUPERUSER');
  await page.getByRole('textbox').nth(1).fill('SUPERUSER');
  await page.getByRole('button').nth(2).click();
  await page.getByRole('link').nth(3).click();
  await page.locator('button').nth(-1).click();
  await page.getByRole('textbox').nth(0).fill('Automation Testing');
  await page.getByRole('radio').nth(0).check();
  await page.getByRole('button').nth(0).click();
  await page.getByRole('option').nth(0).click();
  await page.getByRole('button').nth(3).click(); 
  await page.getByRole('button').nth(9).click();
  await page.getByRole('button').nth(1).click();
  await page.getByRole('button').nth(4).click();
  await page.getByRole('link').nth(2).click();
  await page.getByRole('treeitem', { name: 'i18n' }).locator('svg').click();
  await page.getByRole('treeitem', { name: 'i18n' }).getByRole('treeitem', { name: 'questionnaires' }).locator('svg').click();
  await page.getByText('resources_fr.properties').click({
    button: 'right'
  });
  await page.getByText('Duplicate').click();
  await page.getByRole('textbox').nth(0).fill('resources_de');
  await page.getByRole('button').nth(1).click();
  await page.getByRole('button').nth(-1).click();
  await page.getByRole('link').nth(3).click();
  await page.getByRole('cell', { name: 'Automation Testing' }).click();
  await page.getByRole('button').nth(8).click();
  await page.getByRole('button').nth(1).click();
  await page.getByRole('button').nth(8).click();
  await page.getByRole('button').nth(1).click();
  await page.getByRole('button').nth(6).click();
  await page.getByRole('button').nth(0).click();
  await page.getByRole('menuitem').nth(1).click();
  await page.getByRole('button').nth(3).click();
  await page.getByRole('option', { name: 'Deutsch' }).click();
  await page.getByRole('link').nth(1).click();
  await page.locator('.MuiChip-label').first().dblclick();
  await expect(page.locator('text=Transaktionen')).not.toHaveCount(0);
  await expect(page.locator('text=Qualifikation')).not.toHaveCount(0);
  await expect(page.locator('text=Dokument Upload')).not.toHaveCount(0);
});