//Mail sent if FI Compliance task is created.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://incore-email-service.imtf-devops.com:8181/auth/login');
  await page.getByLabel('username').fill('SUPERUSER1');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER1');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('button', { name: 'Reset filter' }).click();
  await page.getByText('C-3').click();
  await page.locator('[data-test-id="virtuoso-top-item-list"]').getByRole('button').first().click();
  await page.getByRole('menuitem', { name: 'Restart' }).click();
  await page.getByLabel('Audit message').fill('Testing');
  await page.getByRole('button', { name: 'Restart' }).click();
  await page.goto('http://incore-email-service.imtf-devops.com:8025/#');
  await page.getByText('monitoringcompliance@incorebank.ch FICOMPLIANCE1@imtf.com AML Alert regarding on').first().click();
  await expect(page.getByText('FICOMPLIANCE1@imtf.com')).not.toHaveCount(0);
  await expect(page.getByText('monitoringcompliance@incorebank.ch')).not.toHaveCount(0);
  await expect(page.getByText('Please let us know the purpose of the payment by completing the required information and adding supporting documentation/evidence via following link')).not.toHaveCount(0);
});