//Translation of client details into french.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-test.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox').nth(0).fill('SUPERUSER');
  await page.getByRole('textbox').nth(1).fill('SUPERUSER');
  await page.getByRole('button').nth(2).click();
  await page.getByRole('button').nth(0).click();
  await page.getByRole('menuitem').nth(1).click();
  await page.getByRole('button').nth(3).click();
  await page.getByRole('option').nth(3).click();
  await page.getByRole('link', { name: 'Clients' }).click();
  await page.locator('div:nth-child(5) > .css-vd4mct > .css-mslw24').dblclick();
  await expect(page.locator('text=Détails du client')).not.toHaveCount(0);
  await expect(page.locator('text=Analyse comportementale')).not.toHaveCount(0);
  await expect(page.locator('text=Risque')).not.toHaveCount(0);
  await expect(page.locator('text=Informations sur les groupes de clients')).not.toHaveCount(0);
  await expect(page.locator('text=Ne fait partie')).not.toHaveCount(0);
  await page.getByText('Analyse comportementale').click();
  await expect(page.locator('text=Télécharger le CSV')).not.toHaveCount(0);
  await expect(page.locator('text=Aperçu des transactions')).not.toHaveCount(0);
  await expect(page.locator('text=Tout')).not.toHaveCount(0);
  await expect(page.locator('text=Les 30 derniers jours')).not.toHaveCount(0);
  await expect(page.locator('text=Tous les paiements')).not.toHaveCount(0);
  await expect(page.locator('text=Date de valeur')).not.toHaveCount(0);
  await expect(page.locator('text=Compte')).not.toHaveCount(0);
  await expect(page.locator('text=Montant')).not.toHaveCount(0);
  await expect(page.locator('text=Monnaie')).not.toHaveCount(0);
  await expect(page.locator('text=Titulaire du compte de contrepartie')).not.toHaveCount(0);
  await expect(page.locator('text=Numéro du compte de contrepartie')).not.toHaveCount(0);
  await expect(page.locator('text=Aucune transaction trouvée')).not.toHaveCount(0);
  await expect(page.locator('text=Transactions principales')).not.toHaveCount(0);
  await expect(page.locator('text=Principaux pays')).not.toHaveCount(0);
  await expect(page.locator('text=Type de transactions')).not.toHaveCount(0);
  await expect(page.locator('text=Les 30 derniers jours')).not.toHaveCount(0);
  await page.getByRole('tab', { name: 'Risque' }).click();
  await expect(page.locator('text=Niveau de risque manuel')).not.toHaveCount(0);
  await expect(page.locator('text=Niveau de risque calculé')).not.toHaveCount(0);
  await expect(page.locator('text=Haut')).not.toHaveCount(0);
  await expect(page.locator('text=Score de risque calculé')).not.toHaveCount(0);
  await expect(page.locator('text=Date de calcul')).not.toHaveCount(0);
  await expect(page.locator('text=Facteur de risque')).not.toHaveCount(0);
  await expect(page.locator('text=Valeur')).not.toHaveCount(0);
  await expect(page.locator('text=Score')).not.toHaveCount(0);
  await expect(page.locator('text=Tendance historique du risque')).not.toHaveCount(0);
  await expect(page.locator('text=10 dernières entrées')).not.toHaveCount(0);
  await expect(page.locator('text=Risque associé')).not.toHaveCount(0);
  await expect(page.locator('text=Pays d')).not.toHaveCount(0);
  await expect(page.locator('text=Pays de résidence')).not.toHaveCount(0);
  await expect(page.locator('text=Nombre de cartes de crédit actives')).not.toHaveCount(0);
  await expect(page.locator('text=Profession')).not.toHaveCount(0);
  await expect(page.locator('text=Patrimoine total')).not.toHaveCount(0);
  await expect(page.locator('text=Domaine de négociation')).not.toHaveCount(0);
  await expect(page.locator('text=Afficher l')).not.toHaveCount(0);
  await expect(page.locator('text=Cas liées')).not.toHaveCount(0);
  await expect(page.locator('text=Entités liées')).not.toHaveCount(0);
  await page.getByText('Afficher l').click();
  await expect(page.locator('text=Niveau de risque manuel')).not.toHaveCount(0);
  await expect(page.locator('text=Niveau de risque calculé')).not.toHaveCount(0);
  await expect(page.locator('text=Score de risque calculé')).not.toHaveCount(0);
  await expect(page.locator('text=Date de calcul')).not.toHaveCount(0);
  await expect(page.locator('text=Historique des risques')).not.toHaveCount(0);
  await expect(page.locator('text=Risque associé')).not.toHaveCount(0);
  await expect(page.locator('text=Pays d')).not.toHaveCount(0);
  await expect(page.locator('text=Pays de résidence')).not.toHaveCount(0);
  await expect(page.locator('text=Nombre de cartes de crédit actives')).not.toHaveCount(0);
  await expect(page.locator('text=Profession')).not.toHaveCount(0);
  await expect(page.locator('text=Patrimoine total')).not.toHaveCount(0);
  await expect(page.locator('text=Domaine de négociation')).not.toHaveCount(0);
  await page.getByText('Fermer').click();
});