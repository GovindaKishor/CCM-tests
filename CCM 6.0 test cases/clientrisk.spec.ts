//We can view Risk history in Client tab of a case.
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox').nth(0).fill('SUPERUSER');
  await page.getByRole('textbox').nth(1).fill('SUPERUSER');
  await page.getByRole('button').nth(2).click();
  await page.locator('div:nth-child(3) > .css-vd4mct > .css-mslw24').click();
  await page.getByRole('tab').nth(3).click();
  await page.getByRole('button').nth(13).click();
  await page.getByRole('button', { name: 'Risk history' }).click();
  await expect(page.locator('text=Risk history')).not.toHaveCount(0);
  await expect(page.locator('text=Associated risk')).toHaveCount(1);
  await expect(page.locator('text=Country of birth')).toHaveCount(1);
  await expect(page.locator('text=Country of domicile')).toHaveCount(1);
  await expect(page.locator('text=Number of active credit cards')).toHaveCount(1);
  await expect(page.locator('text=Occupation')).toHaveCount(1);
  await expect(page.locator('text=Total wealth')).toHaveCount(1);
  await expect(page.locator('text=Trading area')).toHaveCount(1);
});