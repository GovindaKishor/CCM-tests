//Content of client 360 profile can selected for copying.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://ccm-ci-5-5-x.imtf-devops.com:8181/auth/login');
  await page.getByRole('textbox', { name: 'username' }).fill('SUPERUSER');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('SUPERUSER');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Clients' }).click();
  await page.getByText('CENL-1488602').dblclick();
  await page.getByRole('heading', { name: 'HOMER SIMPSON' }).click({
    clickCount: 3
  });
  await page.getByRole('heading', { name: 'HOMER SIMPSON' }).press('Control+c');
  await page.getByRole('heading', { name: 'CENL-1488602' }).click({
    clickCount: 3
  });
  await page.getByRole('heading', { name: 'CENL-1488602' }).press('Control+c');
  await page.getByText('Netherlands (the)').first().click({
    clickCount: 3
  });
  await page.getByText('Netherlands (the)').first().press('Control+c');
  await page.locator('section').getByTestId('__SCROLLER__').getByText('HOMER SIMPSON').click({
    clickCount: 3
  });
  await page.locator('section').getByTestId('__SCROLLER__').getByText('HOMER SIMPSON').press('Control+c');
  await page.getByText('ID CENL-1488602').click({
    clickCount: 3
  });
  await page.getByText('ID CENL-1488602').press('Control+c');
  await page.getByText('HOMER', { exact: true }).click({
    clickCount: 3
  });
  await page.getByText('HOMER', { exact: true }).press('Control+c');
  await page.getByText('SIMPSON', { exact: true }).click({
    clickCount: 3
  });
  await page.getByText('SIMPSON', { exact: true }).press('Control+c');
  await page.getByText('17/12/1936').click({
    clickCount: 3
  });
  await page.getByText('17/12/1936').press('Control+c');
  await page.getByTitle('Netherlands (the)').click({
    clickCount: 3
  });
  await page.getByTitle('Netherlands (the)').press('Control+c');
  await page.getByText('Employment Information').click({
    clickCount: 3
  });
  await page.getByText('Employment Information').press('Control+c');
  await page.getByText('BANKER').click({
    clickCount: 3
  });
  await page.getByText('BANKER').press('Control+c');
  await page.getByText('FINANCE').click({
    clickCount: 3
  });
  await page.getByText('FINANCE').press('Control+c');
  await page.getByText('Client group information').click({
    clickCount: 3
  });
  await page.getByText('Client group information').press('Control+c');
  await page.getByText('Part of no client group').click({
    clickCount: 3
  });
  await page.getByText('Part of no client group').press('Control+c');
  await page.getByText('AML Risk').click({
    clickCount: 3
  });
  await page.getByText('AML Risk').press('Control+c');
});