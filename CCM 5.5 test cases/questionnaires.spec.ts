//Validating after uploading file to questionaire in workbench.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-5-5-x.imtf-devops.com:8181/auth/login');
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
  await page.pause();
  await page.getByRole('button').nth(4).click();
  await page.getByRole('link').nth(2).click();
  const fileChooserPromise1 = page.waitForEvent('filechooser');
  await page.getByRole('treeitem').nth(16).click({
    button: 'right'
  });
  await page.getByRole('menuitem').nth(1).click();
  const fileChooser1 = await fileChooserPromise1;
  await fileChooser1.setFiles('/home/gki/Desktop/GKN/example.json');
  await expect(page.locator('text=File uploaded successfully')).toHaveCount(1);
  await page.getByRole('button').nth(-1).click();
  await expect(page.locator('text=Validation was successful')).toHaveCount(1);
});