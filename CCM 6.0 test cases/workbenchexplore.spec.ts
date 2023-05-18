//Exploring structure of workbench.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/auth/login');
  await page.getByRole('textbox').nth(0).fill('SUPERUSER');
  await page.getByRole('textbox').nth(1).fill('SUPERUSER');
  await page.getByRole('button').nth(2).click();
  await page.getByRole('link').nth(3).click();
  await expect(page.getByRole('link', { name: 'WORKBENCH' })).toHaveCount(1);
  await expect(page.locator('text=Configurations')).not.toHaveCount(0);
  await expect(page.locator('text=Active & Open Approvals')).not.toHaveCount(0);
  await expect(page.locator('text=Drafts')).not.toHaveCount(0);
  await expect(page.locator('text=Inactives')).not.toHaveCount(0);
  await expect(page.locator('text=Name')).not.toHaveCount(0);
  await expect(page.locator('text=Last Modification')).not.toHaveCount(0);
  await expect(page.locator('text=Status')).not.toHaveCount(0);
  await page.getByRole('cell', { name: 'Config actions' }).nth(1).click();
  await expect(page.getByText('Validate')).toHaveCount(1);
  await expect(page.getByText('Export')).toHaveCount(1);
  await expect(page.getByText('Duplicate')).toHaveCount(1);
  await page.locator('.MuiPopover-root > .MuiBackdrop-root').click();
  await page.getByRole('cell', { name: 'Config actions' }).nth(0).click();
  await expect(page.getByText('Validate')).toHaveCount(1);
  await expect(page.getByText('Export')).toHaveCount(1);
  await expect(page.getByText('Duplicate')).toHaveCount(1);
  await expect(page.getByText('Approve & Publish')).toHaveCount(1);
  await expect(page.getByText('Reject')).toHaveCount(1);
  await expect(page.getByText('Delete')).toHaveCount(1);
  await page.locator('.MuiPopover-root > .MuiBackdrop-root').click();
  await page.getByRole('cell', { name: 'Config actions' }).nth(2).click();
  await expect(page.getByText('Validate')).toHaveCount(1);
  await expect(page.getByText('Export')).toHaveCount(1);
  await expect(page.getByText('Duplicate')).toHaveCount(1);
  await expect(page.getByText('Publish Test')).toHaveCount(1);
  await expect(page.getByText('Edit')).toHaveCount(1);
  await expect(page.getByText('Delete')).toHaveCount(1);
  await page.locator('.MuiPopover-root > .MuiBackdrop-root').click();
  await page.getByRole('cell', { name: 'Config actions' }).nth(3).click();
  await expect(page.getByText('Validate')).toHaveCount(1);
  await expect(page.getByText('Export')).toHaveCount(1);
  await expect(page.getByText('Duplicate')).toHaveCount(1);
  await expect(page.getByText('Delete')).toHaveCount(1);
  await page.locator('.MuiPopover-root > .MuiBackdrop-root').click();
  await page.getByRole('button').nth(-1).click();
  await page.getByRole('button').nth(0).click();
});