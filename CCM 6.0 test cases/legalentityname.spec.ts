import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/auth/login');
  await page.getByLabel('Username').fill('SUPERUSER');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByRole('link', { name: 'Client 360' }).click();
  await page.locator('[data-test-id="virtuoso-item-list"]').getByText('Client Group').click();
  await page.getByText('Client GroupCENL1').first().dblclick();
  await page.getByRole('tab', { name: 'Risk' }).click();
  await expect(page.getByText('SKYNET CORP')).not.toHaveCount(0);
  await page.getByRole('link', { name: 'SKYNET CORP' }).click();
  await page.getByRole('link', { name: 'Workbench' }).click();
  await page.getByRole('cell', { name: 'Testing3' }).click();
  await page.getByRole('button', { name: 'Admin' }).click();
  await page.getByRole('link', { name: 'File Manager' }).click();
  await page.getByRole('treeitem', { name: 'icos' }).getByRole('img').click();
  await page.getByRole('treeitem', { name: 'entities' }).getByRole('img').click();
  await page.getByText('entities-config.json').click();
  await page.getByText('bpm-catalogbpmncasescases-milestonescodesconnectorscustom-jsondefinitiondmndocum').dblclick();
  await expect(page.getByText('{{{legalEntityName}}}')).not.toHaveCount(0);
});