//Task activities translated to Italino.
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-test.imtf-devops.com:8181/auth/login');
  await page.getByLabel('username').fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log on' }).click();
  await page.getByRole('button', { name: 'SS' }).click();
  await page.getByRole('menuitem', { name: 'Impostazioni' }).click();
  await page.getByRole('button', { name: 'Italiano' }).click();
  await page.getByRole('option', { name: 'Italiano' }).click();
  await page.getByRole('link', { name: 'Casi' }).click();
  await page.locator('.css-mslw24').first().click();
  await page.locator('[data-test-id="virtuoso-top-item-list"]').getByRole('button').first().click();
  await expect(page.getByText('Riavvia')).not.toHaveCount(0);
  await expect(page.getByText('Sospendi')).not.toHaveCount(0);
  await expect(page.getByText('Completato')).not.toHaveCount(0);
  await expect(page.getByText('Annulla caso')).not.toHaveCount(0);
  await expect(page.getByText('Aggiungi commento')).not.toHaveCount(0);
  await expect(page.getByText('Apri in nuova scheda')).not.toHaveCount(0);
  await expect(page.getByText('Apri in nuova finestra')).not.toHaveCount(0);
  await expect(page.getByText('Invia collegamento per posta elettronica')).not.toHaveCount(0);
  await expect(page.getByText('Crea processo ad-hoc')).not.toHaveCount(0);
  await expect(page.getByText('Genera rapporto')).not.toHaveCount(0);
  await expect(page.getByText('Vedi sequenza temporale')).not.toHaveCount(0);
  await expect(page.getByText('Dettagli')).not.toHaveCount(0);
});