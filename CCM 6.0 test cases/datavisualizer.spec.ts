//Datavisualizer in case and task tab.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8181/auth/login');
  await page.getByLabel('username').fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.locator('.css-mslw24').first().click();
  await page.getByRole('button', { name: 'Case Datavizualizer' }).click();
  await page.getByRole('button', { name: 'Case Datavizualizer' }).getByRole('button').first().click();
  await page.getByLabel('NaturalPerson').uncheck();
  await page.getByLabel('CcmRisk').uncheck();
  await page.getByLabel('AmlAlert', { exact: true }).uncheck();
  await page.getByLabel('Scenario', { exact: true }).uncheck();
  await page.getByLabel('AMLALERT_HAS_SCENARIO').uncheck();
  await page.getByLabel('NATURAL_PERSON_HAS_CCM_RISK').uncheck();
  await page.getByLabel('NATURAL_PERSON_HAS_AMLALERT').uncheck();
  await page.getByLabel('NaturalPerson').check();
  await page.getByLabel('CcmRisk').check();
  await page.getByLabel('AmlAlert', { exact: true }).check();
  await page.getByLabel('Scenario', { exact: true }).check();
  await page.getByLabel('AMLALERT_HAS_SCENARIO').check();
  await page.getByLabel('NATURAL_PERSON_HAS_CCM_RISK').check();
  await page.getByLabel('NATURAL_PERSON_HAS_AMLALERT').check();
  await page.getByLabel('Skip orphans').check();
  await page.getByLabel('Skip orphans').uncheck();
  await page.getByRole('button', { name: 'Reset' }).click();
  await page.getByRole('button', { name: 'Recenter' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('link', { name: 'Tasks' }).click();
  await page.locator('.css-mslw24').first().click();
  await page.getByRole('button', { name: 'Task Datavizualizer' }).getByRole('button').first().click();
  await page.getByLabel('AmlAlert').uncheck();
  await page.getByLabel('AmlAlert').check();
  await page.getByLabel('Skip orphans').check();
  await page.getByLabel('Skip orphans').uncheck();
  await page.getByRole('button', { name: 'Reset' }).click();
  await page.getByRole('button', { name: 'Recenter' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
});