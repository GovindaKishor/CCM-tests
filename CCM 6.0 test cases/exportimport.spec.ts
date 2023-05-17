//Import from zip file is allowed user with that privilage.
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/auth/login');
  await page.getByRole('textbox').nth(0).fill('SUPERUSER');
  await page.getByRole('textbox').nth(1).fill('SUPERUSER');
  await page.getByRole('button').nth(2).click();
  await page.getByRole('link').nth(3).click();
  await page.getByRole('cell', { name: 'Test' }).click();
  await page.getByRole('button').nth(11).click();
  await page.getByRole('button').nth(1).click();
  await page.getByRole('link').nth(3).click();
  await page.locator('button').nth(-1).click();
  await page.getByRole('textbox').nth(0).fill('Automation Testing');
  await page.getByRole('radio').nth(1).check();
  const fileChooserPromise1 = page.waitForEvent('filechooser');
  await page.locator('label').filter({ hasText: 'Click here to upload a file OR drag and drop your file here' }).click();
  const fileChooser1 = await fileChooserPromise1;
  await fileChooser1.setFiles('/home/gki/Downloads/Test.zip');
  await expect(page.getByText('Test.zip')).toHaveCount(1);
  await page.getByRole('button').nth(2).click(); 
});