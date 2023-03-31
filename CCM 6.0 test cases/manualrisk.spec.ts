//As I user I want that when Risk for a Person is updated through a Case, I see in the Risk Section the Manual Risk Level, the date of the Change and the Person(person that completed last Task ?) that changed it.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox', { name: 'username' }).click();
  await page.getByRole('textbox', { name: 'username' }).fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Clients' }).click();
  await page.getByText('CEMT-1018529').click();
  await page.getByRole('group').getByRole('button').nth(1).click();
  await page.getByText('New case').click();
  await page.getByRole('button', { name: 'Open' }).click();
  await page.getByRole('option', { name: 'Manual Risk Level Change' }).click();
  await page.getByText('NaturalPerson').click();
  await page.locator('form').getByRole('button', { name: 'Open' }).click();
  await page.getByPlaceholder('Search...').fill('CEMT');
  await page.getByRole('option', { name: 'BusinessId: CEMT-1018529' }).click();
  await page.getByRole('button', { name: 'Create' }).click();
  await expect(page.getByText('Task delegatedThe task HT-18 Manual Risk Level Change (part of Case C-21) has be')).toHaveCount(1);
  await page.locator('[id="\\31 "] button').click();
  await page.getByText('HT-18').dblclick();
  await page.getByRole('button', { name: 'Open', exact: true }).click();
  await page.getByRole('option', { name: 'Low' }).click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.getByRole('link', { name: 'Clients' }).click();
  await page.getByText('CEMT-1018529').dblclick();
  await page.getByRole('tab', { name: 'Risk' }).click();
  await expect(page.getByText('Low')).not.toHaveCount(0);
  await expect(page.getByText('Updated on 31/03/2023, by SUPERUSER')).toHaveCount(1);
  await expect(page.getByText('High')).not.toHaveCount(0);
  await page.getByRole('button', { name: 'Show history' }).click();
  await expect(page.getByText('Low')).not.toHaveCount(0);
  await expect(page.getByText('Updated on 31/03/2023, by SUPERUSER')).toHaveCount(1);
  await expect(page.getByText('High')).not.toHaveCount(0);
}); 