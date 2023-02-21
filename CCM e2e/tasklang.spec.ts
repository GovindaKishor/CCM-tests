//Test which will validate if content of report indicator field of a GoAml task have been translated after superuser language is changed.
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth');
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox', { name: 'username' }).fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByText('C-6').click();
  await page.locator('[data-test-id="virtuoso-item-list"]').getByText('C-6').click();
  await page.getByRole('button', { name: 'Classifications' }).click();
  await page.getByRole('button', { name: 'Add classification' }).click();
  await page.getByRole('button', { name: 'Open' }).click();
  await page.getByRole('option', { name: 'GoAml Report' }).click();
  await page.getByLabel('Are you sure you want to create a new classification ?').check();
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByRole('link', { name: 'Tasks' }).click();
  await page.getByText('GoAml Report – Fill 1').click();
  await page.getByText('HT-17').click();
  await page.locator('[data-test-id="virtuoso-item-list"]').getByText('HT-17').click({
    clickCount: 2
  });
  await page.getByLabel('Report Indicators *').click();
  await expect(page.locator('text=A transaction in respect of which the institution has reason to suspect that it may be connected with money laundering or terrorism financing.')).not.toHaveCount(0);
  await page.getByRole('button', { name: 'SS', exact: true }).click();
  await page.getByRole('menuitem', { name: 'Settings' }).click();
  await page.getByRole('button', { name: 'English (GB)' }).click();
  await page.getByRole('option', { name: 'Deutsch' }).click();
  await page.getByRole('link', { name: 'Aufgaben' }).click();
  await expect(page.locator('text=Aufgaben')).not.toHaveCount(0);
  await expect(page.locator('text=Kunden')).not.toHaveCount(0);
  await page.locator('[data-test-id="virtuoso-item-list"]').getByText('HT-17').click({
    clickCount: 2
  });
  await page.getByLabel('Report Indicators *').click();
  await expect(page.locator('text=Eine Transaktion, bei der das Institut Grund zu der Annahme hat, dass sie mit Geldwäsche oder Terrorismusfinanzierung in Verbindung stehen könnte.')).not.toHaveCount(0);
  await page.getByRole('button', { name: 'SS', exact: true }).click();
  await page.getByRole('menuitem', { name: 'Einstellungen' }).click();
  await page.getByRole('button', { name: 'Deutsch' }).click();
  await page.getByRole('option', { name: 'Français' }).click();
  await page.getByRole('link', { name: 'Tâches' }).click();
  await expect(page.locator('text=Cas')).not.toHaveCount(0);
  await expect(page.locator('text=Tâches')).not.toHaveCount(0);
  await page.locator('[data-test-id="virtuoso-item-list"]').getByText('HT-17').click({
    clickCount: 2
  });
  await page.getByLabel('Report Indicators *').click();
  await expect(page.locator('text=Une opération dont l\'établissement a des raisons de soupçonner qu\'elle peut être liée au blanchiment de capitaux ou au financement du terrorisme.')).not.toHaveCount(0);
  await page.getByRole('button', { name: 'SS', exact: true }).click();
  await page.getByRole('menuitem', { name: 'Paramètres' }).click();
  await page.getByRole('button', { name: 'Français' }).click();
  await page.getByRole('option', { name: 'Italiano' }).click();
  await page.getByRole('link', { name: 'Compiti' }).click();
  await expect(page.locator('text=Casi')).not.toHaveCount(0);
  await expect(page.locator('text=Compiti')).not.toHaveCount(0);
  await expect(page.locator('text=Clienti')).not.toHaveCount(0);
  await page.locator('[data-test-id="virtuoso-item-list"]').getByText('HT-17').click({
    clickCount: 2
  });
  await page.getByLabel('Report Indicators *').click();
  await expect(page.locator('text=Un\'operazione rispetto alla quale l\'ente ha motivo di sospettare che possa essere collegata al riciclaggio di denaro o al finanziamento del terrorismo.')).not.toHaveCount(0);
  await page.getByRole('button', { name: 'SS', exact: true }).click();
  await page.getByRole('menuitem', { name: 'Impostazioni' }).click();
  await page.getByRole('button', { name: 'Italiano' }).click();
  await page.getByRole('option', { name: 'English (GB)' }).click();
  await page.getByRole('link', { name: 'Tasks' }).click();
  await expect(page.locator('text=Cases')).not.toHaveCount(0);
  await expect(page.locator('text=Tasks')).not.toHaveCount(0);
  await expect(page.locator('text=Clients')).not.toHaveCount(0);
  await page.locator('[data-test-id="virtuoso-item-list"]').getByText('HT-17').click({
    clickCount: 2
  });
  await page.getByLabel('Report Indicators *').click();
  await expect(page.locator('text=A transaction in respect of which the institution has reason to suspect that it may be connected with money laundering or terrorism financing.')).not.toHaveCount(0);
});