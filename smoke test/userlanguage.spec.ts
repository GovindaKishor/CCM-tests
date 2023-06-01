//Change user language.

import { test, expect } from '@playwright/test';

test('user language', async ({ page }) => {
  await page.goto('http://ccm-ci-develop.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox').nth(0).fill('SUPERUSER');
  await page.getByRole('textbox').nth(1).fill('SUPERUSER');
  await page.getByRole('button').nth(2).click();
  await page.getByRole('button').nth(0).click();
  await page.getByRole('menuitem').nth(1).click();
  await page.getByRole('button').nth(3).click();
  await page.getByRole('option').nth(3).click();
  await expect(page.getByRole('link', { name: 'Cas' })).toHaveCount(1);
  await expect(page.getByRole('link', { name: 'Tâches' })).toHaveCount(1);
  await expect(page.locator('text=Paramètres utilisateur')).toHaveCount(2);
  await expect(page.locator('text=Changer de langue')).toHaveCount(1);
  await expect(page.locator('text=Prénom')).toHaveCount(1);
  await expect(page.locator('text="Nom"')).toHaveCount(1);
  await expect(page.locator('text=Groupes')).toHaveCount(1);
  await expect(page.locator('text="Paramètres de l\'application"')).toHaveCount(1);
  await expect(page.locator('text="Apparence"')).toHaveCount(1);
  await expect(page.locator('text=Vue par défaut des dossiers')).toHaveCount(1);
  await expect(page.locator('text=Supprimer les paramètres de l\'application')).toHaveCount(1);
  await expect(page.locator('text=Auto')).toHaveCount(1);
  await expect(page.locator('text="Recherche"')).toHaveCount(1);
  await expect(page.locator('text=Données persistantes du navigateur (recherche sauvegardée, apparence, dossiers e')).toHaveCount(1);
});
