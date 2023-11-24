import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/auth/login');
  await page.getByLabel('username').fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByRole('tab', { name: 'Cases', exact: true }).click();
  await page.locator('form div').filter({ hasText: 'Personal filtersMy cases My previous cases My role\'s cases' }).getByRole('radio').first().check();
  await expect(page).toHaveURL('http://localhost:8181/case-manager/search/cases?case.assignee=MY_CASES&sort=case.presentableId&tag=case.assignee');
  await page.getByText('My cases').click();
  await expect(page).toHaveURL('http://localhost:8181/case-manager/search/cases?sort=case.presentableId&tag=case.assignee');
  await page.getByText('My previous cases').click();
  await expect(page).toHaveURL('http://localhost:8181/case-manager/search/cases?case.assignee=MY_PREVIOUS_CASES&sort=case.presentableId&tag=case.assignee');
  await page.getByText('My previous cases').click();
  await expect(page).toHaveURL('http://localhost:8181/case-manager/search/cases?sort=case.presentableId&tag=case.assignee');
  await page.getByText('My role\'s cases').click();
  await expect(page).toHaveURL('http://localhost:8181/case-manager/search/cases?case.assignee=MY_TEAM_CASES&sort=case.presentableId&tag=case.assignee');
  await page.getByText('My role\'s cases').click();
  await expect(page).toHaveURL('http://localhost:8181/case-manager/search/cases?sort=case.presentableId&tag=case.assignee');
});