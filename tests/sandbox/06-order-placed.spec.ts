import { test, expect } from '../../fixtures';

test('customer places an order', async ({ signedInUser, shopPage, checkoutPage }) => {
  await shopPage.goto();
  await shopPage.addFirstProductToCart();
  await checkoutPage.openCart();
  await checkoutPage.continueToPayment();
  await checkoutPage.payCashOnDelivery();
  await expect(checkoutPage.paymentSuccess).toBeVisible();
});