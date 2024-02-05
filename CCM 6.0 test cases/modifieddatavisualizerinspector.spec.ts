import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-test.imtf-devops.com:8181/');
  await page.goto('http://ccm-test.imtf-devops.com:8181/auth');
  await page.goto('http://ccm-test.imtf-devops.com:8181/auth/login');
  await page.getByLabel('Username').fill('SUPERUSER');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.locator('div:nth-child(2) > .css-vd4mct > .css-mslw24').click();
  await expect(page.getByText('Case data visualizer')).toHaveCount(1);
  await page.getByRole('button', { name: 'Case data visualizer' }).click();
  await page.getByRole('link', { name: 'Tasks' }).click();
  await page.locator('div:nth-child(2) > .css-vd4mct > .css-mslw24').click();
  await expect(page.getByText('Task data visualizer')).toHaveCount(1);
});