//Uploading classification.json.mo file.
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
  await page.getByRole('button', { name: 'Admin' }).click();
  await page.getByRole('link', { name: 'File Manager' }).click();
  await page.getByText('webapp', { exact: true }).click({
    button: 'right'
  });
  const fileChooserPromise1 = page.waitForEvent('filechooser');
  await page.getByText('Upload file').click();
  const fileChooser1 = await fileChooserPromise1;
  await fileChooser1.setFiles('/Users/govinda.kishor/Downloads/classifications.json.mo');
  await page.getByText('webapp', { exact: true }).click();
  await page.getByText('classifications.json.mo').dblclick();
});