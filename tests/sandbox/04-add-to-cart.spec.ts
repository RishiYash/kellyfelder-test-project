import { test, expect } from '../../fixtures';

test('adding a product updates the cart counter', async ({ shopPage }) => {
  await shopPage.goto();
  await shopPage.addFirstProductToCart();
  await expect(shopPage.cartCount).toHaveText('1');
});