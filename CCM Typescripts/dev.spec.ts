//To explore and validate the Dev section in Workbench(for ccm 6.0.0-SNAPSHOT Tue Jan 24 09:28:15 CET 2023).

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox', { name: 'username' }).fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Workbench' }).click();
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/workbench/');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/workbench/auth');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/workbench');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/workbench/configs');
  await page.getByRole('cell', { name: 'ccm 6.0.0-SNAPSHOT Mon Feb 13 05:56:00 CET 2023' }).click();
  await page.getByRole('button', { name: '[DEV]' }).click();
  await page.getByRole('link', { name: 'Rule Engine' }).click();
  await expect(page.locator('text=Rule Engine')).not.toHaveCount(0);
  await expect(page.locator('text=Business Rules')).not.toHaveCount(0);
  await page.getByRole('link', { name: 'Cases' }).click();
  await expect(page.locator('text=Cases')).not.toHaveCount(0);
  await expect(page.locator('text=Rjsf Case Name')).not.toHaveCount(0);
  await expect(page.locator('text=Rjsf Case Technical Key')).not.toHaveCount(0);
  await page.getByRole('link', { name: 'Tasks' }).click();
  await expect(page.locator('text=Tasks')).not.toHaveCount(0);
  await expect(page.locator('text=Rjsf File Name')).not.toHaveCount(0);
  await expect(page.locator('text=Rjsf File Technical Key')).not.toHaveCount(0);
  await page.getByRole('link', { name: 'Questionnaires' }).click();
  await expect(page.locator('text=Questionnaires')).not.toHaveCount(0);
  await expect(page.locator('text=Rjsf Questionnaire Name')).not.toHaveCount(0);
  await expect(page.locator('text=Rjsf Questionnaire Technical Key')).not.toHaveCount(0);
  await page.getByRole('link', { name: 'MdmEditors' }).click();
  await expect(page.locator('text=MdmEditors')).not.toHaveCount(0);
  await expect(page.locator('text=Rjsf MdmEditor Name')).not.toHaveCount(0);
  await expect(page.locator('text=Rjsf MdmEditor Technical Key')).not.toHaveCount(0);
  await page.getByRole('link', { name: 'Forms' }).click();
  await expect(page.locator('text=Forms')).not.toHaveCount(0);
  await expect(page.locator('text=Rjsf Form Name')).not.toHaveCount(0);
  await expect(page.locator('text=Rjsf Form Technical Key')).not.toHaveCount(0);
  await page.getByRole('link', { name: 'Risk Configurations' }).click();
  await expect(page.locator('text=Risk Configurations')).not.toHaveCount(0);
  await expect(page.locator('text=Rjsf Risk Configuration Name')).not.toHaveCount(0);
  await expect(page.locator('text=Rjsf Risk Configuration Technical Key')).not.toHaveCount(0);
  await expect(page.locator('text=Last Modified')).not.toHaveCount(0);
  await page.getByRole('button', { name: 'Back to CCM' }).click();
});