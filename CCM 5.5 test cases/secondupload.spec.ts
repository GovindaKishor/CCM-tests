//Unable to upload the file a second time when the user selects the file and clicks on the cancel button, then again uploads the file(but works in automation).

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-5-5-x.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox', { name: 'username' }).fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Workbench' }).click();
  await page.goto('http://ccm-ci-5-5-x.imtf-devops.com:8181/workbench/');
  await page.goto('http://ccm-ci-5-5-x.imtf-devops.com:8181/workbench/auth');
  await page.goto('http://ccm-ci-5-5-x.imtf-devops.com:8181/workbench');
  await page.goto('http://ccm-ci-5-5-x.imtf-devops.com:8181/workbench/configs');
  await page.locator('button').nth(-1).click();
  await page.getByLabel('Name *').click();
  await page.getByLabel('Name *').fill('Automation test');
  await page.getByLabel('Import from a zip File').check();
  const fileChooserPromise1 = page.waitForEvent('filechooser');
  await page.locator('label').filter({ hasText: 'Click here to upload a file OR drag and drop your file here' }).click();
  const fileChooser1 = await fileChooserPromise1;
  await fileChooser1.setFiles('/home/gki/Downloads/Ameen-Test.zip');
  await expect(page.getByText('Ameen-Test.zip (378.58 kB)')).toHaveCount(1);
  await page.getByText('Ameen-Test.zip (378.58 kB)').click();
  const fileChooserPromise2 = page.waitForEvent('filechooser');
  await page.locator('label').filter({ hasText: 'Click here to upload a file OR drag and drop your file here' }).click();
  const fileChooser2 = await fileChooserPromise2;
  await fileChooser2.setFiles('/home/gki/Downloads/Ameen-Test.zip');
  await expect(page.getByText('Ameen-Test.zip (378.58 kB)')).toHaveCount(1);
});