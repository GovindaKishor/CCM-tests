//All the information like client details and risk,risk history must be there in client group.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox').nth(0).fill('SUPERUSER3');
  await page.getByRole('textbox').nth(1).fill('SUPERUSER3');
  await page.getByRole('button').nth(2).click();
  await page.getByRole('link').nth(2).click();
  await page.getByText('Client Group CENL 2 Test Client').dblclick();
  await expect(page.locator('text=Test Client - CENL')).not.toHaveCount(0);
  await expect(page.locator('text=Risk details')).not.toHaveCount(0);
  await expect(page.locator('text=AZZ CORP')).not.toHaveCount(0);
  await expect(page.locator('text=SKYNET CORP')).not.toHaveCount(0);
  await expect(page.locator('text=HOMER SIMPSON')).not.toHaveCount(0);
  await page.getByRole('tab').nth(1).click();
  await expect(page.locator('text=Calculated risk level High')).not.toHaveCount(0);
  await expect(page.locator('text=Calculated risk score550')).not.toHaveCount(0);
  await expect(page.locator('text=Calculation date17/05/2023')).not.toHaveCount(0);
  await page.getByRole('button').nth(7).click();
  await expect(page.locator('text=Risk history')).not.toHaveCount(0);
  await expect(page.locator('text=Associated risk')).toHaveCount(1);
  await expect(page.locator('text=Country of birth')).toHaveCount(1);
  await expect(page.locator('text=Country of domicile')).toHaveCount(1);
  await expect(page.locator('text=Number of active credit cards')).toHaveCount(1);
  await expect(page.locator('text=Occupation')).toHaveCount(1);
  await expect(page.locator('text=Total wealth')).toHaveCount(1);
  await expect(page.locator('text=Trading area')).toHaveCount(1);
});