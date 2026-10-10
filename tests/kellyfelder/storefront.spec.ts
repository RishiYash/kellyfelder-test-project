import { test, expect, Page } from '@playwright/test';
import fs from 'node:fs';

const AUTH_FILE = '.auth/kellyfelder.json';

async function addFirstProductToCart(page: Page) {
  await page.goto('/collections/all');
  await page.locator('a[href*="/products/"]').first().click();
  await page.getByRole('button', { name: /add to (cart|bag)/i }).first().click();
}

function checkoutControl(page: Page) {
  return page
    .getByRole('button', { name: /check ?out/i })
    .or(page.getByRole('link', { name: /check ?out/i }))
    .first();
}

test.describe('kellyfelder storefront (read-only)', () => {
  test('home page loads', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/.+/);
  });

  test('login page asks for an email', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /log ?in|sign ?in|account/i }).first().click();
    await expect(page.getByLabel(/email/i)).toBeVisible();
  });

  test('a product can be added to the cart', async ({ page }) => {
    await addFirstProductToCart(page);
    await page.goto('/cart');
    await expect(checkoutControl(page)).toBeVisible();
  });

  test('checkout page opens (we stop here, no payment)', async ({ page }) => {
    await addFirstProductToCart(page);
    await page.goto('/cart');
    await checkoutControl(page).click();
    await expect(page).toHaveURL(/checkout/);
  });
});

test.describe('kellyfelder signed-in area', () => {
  test.skip(!fs.existsSync(AUTH_FILE), 'Run "npm run auth:kf" once to save your login');
  test.use({ storageState: AUTH_FILE });

  test('dashboard opens when already logged in', async ({ page }) => {
    await page.goto('/account');
    await expect(page).not.toHaveURL(/authentication\/login/);
  });
});