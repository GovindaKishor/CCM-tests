import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/auth/login');
  await page.getByLabel('username').fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.locator('#treeView-SEARCH > div').press('ArrowDown');
  await page.getByText('C-1AML Alert - Natural PersonActiveCENL-1488602').press('ArrowDown');
  await page.getByText('C-2AML Alert - Natural PersonActiveCEDE-1018529').press('ArrowDown');
  await page.getByText('C-3AML Alert - Natural PersonActiveCEDE-1085631').press('ArrowDown');
  await page.getByText('C-4AML Alert - Natural PersonActiveCEMT-1018529').press('ArrowDown');
  await page.getByText('C-5AML Alert - Natural PersonActiveCEMT-1085631').press('ArrowDown');
  await page.getByText('C-6AML Alert - Natural PersonActiveCEMT-1388678').press('ArrowDown');
  await page.getByText('C-7AML Alert - Natural PersonActiveCEMT-1388685').press('ArrowDown');
  await page.getByText('C-8AML Alert - Natural PersonActiveCEMT-1388687').press('Enter');
  await page.getByRole('link', { name: 'Tasks' }).click();
  await page.locator('#treeView-SEARCH > div').press('ArrowDown');
  await page.getByText('HT-1InvestigationOpen').press('ArrowDown');
  await page.getByText('HT-2InvestigationOpen').press('ArrowDown');
  await page.getByText('HT-3InvestigationOpen').press('ArrowDown');
  await page.getByText('HT-4InvestigationOpen').press('ArrowDown');
  await page.getByText('HT-5InvestigationOpen').press('ArrowDown');
  await page.getByText('HT-6InvestigationOpen').press('ArrowDown');
  await page.getByText('HT-7InvestigationOpen').press('Enter');
  await page.getByRole('link', { name: 'Client 360' }).click();
  await page.locator('#treeView-SEARCH > div').press('ArrowDown');
  await page.getByText('Natural PersonCEDECEDE-1018529WONDER MANMANWONDER430HIGH').press('ArrowDown');
  await page.getByText('Natural PersonCEMTCEMT-1388685ZYZ CORPZYZ CORP135LOW').press('ArrowDown');
  await page.getByText('Natural PersonCENLCENL-1488602HOMER SIMPSONSIMPSONHOMER230MEDIUM').press('ArrowDown');
  await page.getByText('Natural PersonCEMTCEMT-1388678SKYNET CORPSKYNET CORP135LOW').press('ArrowDown');
  await page.getByText('Natural PersonCENLCENL-1388687AZZ CORPAZZ CORP135LOW').press('ArrowDown');
  await page.getByText('Natural PersonCEMTCEMT-1488601WHITE PANTHERPANTHERWHITE230MEDIUM').press('Enter');
});