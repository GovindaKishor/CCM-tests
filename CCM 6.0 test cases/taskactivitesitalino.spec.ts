//Task activities translated to Italino.
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-test.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox').nth(0).fill('SUPERUSER');
  await page.getByRole('textbox').nth(1).fill('SUPERUSER');
  await page.getByRole('button').nth(2).click();
  await page.getByRole('button').nth(0).click();
  await page.getByRole('menuitem').nth(1).click();
  await page.getByRole('button').nth(3).click();
  await page.getByRole('option').nth(4).click();
  await page.getByRole('link', { name: 'Clienti' }).click();
  await page.locator('.css-mslw24').first().click();
  await page.locator('[data-test-id="virtuoso-top-item-list"]').getByRole('button').first().click();
  await expect(page.getByText('Dettagli')).not.toHaveCount(0);
  await page.getByRole('menuitem', { name: 'Dettagli' }).click();
  await page.getByRole('button').click();
  await page.getByRole('link').nth(1).click();
  await page.locator('.css-mslw24').first().click();
  await page.locator('[data-test-id="virtuoso-top-item-list"]').getByRole('button').first().click();
  await expect(page.getByText('Delega')).not.toHaveCount(0);
  await expect(page.getByText('Assegna/annulla assegnazione')).not.toHaveCount(0);
  await expect(page.getByText('Reclamo')).not.toHaveCount(0);
  await expect(page.getByText('Aggiungi commento')).not.toHaveCount(0);
  await expect(page.getByText('Apri in nuova scheda')).not.toHaveCount(0);
  await expect(page.getByText('Apri in nuova finestra')).not.toHaveCount(0);
  await expect(page.getByText('Invia collegamento per posta elettronica')).not.toHaveCount(0);
  await expect(page.getByText('Dettagli')).not.toHaveCount(0);
});