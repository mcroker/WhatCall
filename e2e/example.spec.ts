import { test, expect } from '@playwright/test';

test.describe('Start Page', () => {
  test('has welcome message', async ({ page }, testInfo) => {
    await page.goto('/');

    const screenshot = await page.screenshot();
    await testInfo.attach('screenshot', { body: screenshot, contentType: 'image/png' });

    await expect(page.getByTestId('start-page-welcome-message'))
        .toContainText('Explore our scenarios and test your responses.');
  });
});

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Whatcall/);
});

/*
test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
*/
