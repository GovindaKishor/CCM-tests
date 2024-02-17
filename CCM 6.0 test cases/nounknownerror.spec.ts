import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-test.imtf-devops.com:8181/');
  await page.goto('http://ccm-test.imtf-devops.com:8181/auth');
  await page.goto('http://ccm-test.imtf-devops.com:8181/auth/login');
  await page.getByLabel('Username').fill('SUPERUSER');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await expect(page.getByText('Unknown Error')).toHaveCount(0);
  await page.locator('div:nth-child(4) > .css-vd4mct > div:nth-child(4)').click();
  await page.getByText('C-5AML Alert - Natural PersonActiveCEMT-1018529').dblclick();
  await page.getByRole('button', { name: 'Create...' }).click();
  await page.getByText('New case').click();
  await page.getByLabel('Open').click();
  await page.getByRole('option', { name: 'Onboarding Case' }).click();
  await page.getByRole('button', { name: 'Create' }).click();
  await expect(page.getByText('Unknown Error')).toHaveCount(0);
});