//Validation succesful after saving changes in mdm_investigation_default_siron.json file.
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
  await page.getByRole('treeitem', { name: 'mdm-editor-definitions' }).locator('svg').click();
  await page.getByText('mdm_investigation_default_siron.json').click({
    button: 'right'
  });
  await page.getByRole('menuitem').nth(0).click();
  await page.getByText('Please investigate the Alert and details and foll').dblclick();
  await page. keyboard. press('KeyA');
  await page.getByRole('main').getByRole('button').nth(1).click();
  await page.getByRole('button', { name: 'Validate' }).click();
  await expect(page.locator('text=Validation was successful')).toHaveCount(1);
});