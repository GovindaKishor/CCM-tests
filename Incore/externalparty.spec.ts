//Creating external party email in incore.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://incore-email-service.imtf-devops.com:8181/auth/login');
  await page.getByLabel('username').fill('SUPERUSER1');
  await page.getByLabel('Password *').fill('SUPERUSER1');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('button', { name: 'Reset filter' }).click();
  await page.getByText('C-17').dblclick();
  await expect(page.getByText('Investigation for InCore Compliance')).not.toHaveCount(0);
  await page.getByText('Investigation for InCore Compliance').dblclick();
  await page.getByLabel('Please let us know the purpose of the payment. *').click();
  await page.getByLabel('Please let us know the purpose of the payment. *').fill('Testing');
  await page.getByRole('button', { name: 'Process' }).click();
  await expect(page.getByText('Escalation/Closure Task')).not.toHaveCount(0);
  await page.getByText('Escalation/Closure Task').dblclick();
  await page.getByLabel('Yes').check();
  await page.getByText('External Party').check();
  await page.getByLabel('Open').click();
  await page.getByRole('option', { name: 'EXT_PARTY1' }).click();
  await page.getByLabel('InCore Compliance Comment *').click();
  await page.getByLabel('InCore Compliance Comment *').fill('Testing');
  await page.getByRole('button', { name: 'Process' }).click();
  await expect(page.getByText('Investigation for External Party')).not.toHaveCount(0);
  await page.getByText('Investigation for External Party').click();
  await page.goto('http://incore-email-service.imtf-devops.com:8025/#');
  await page.getByText('monitoringcompliance@incorebank.ch extparty1@imtf.com AML Alert regarding one of').first().click();
  await expect(page.getByText('extparty1@imtf.com')).not.toHaveCount(0);
  await expect(page.getByText('monitoringcompliance@incorebank.ch')).not.toHaveCount(0);
});