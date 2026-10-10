import { test, expect } from '../../fixtures';

test('customer reaches the payment step', async ({ signedInUser, shopPage, checkoutPage }) => {
  await shopPage.goto();
  await shopPage.addFirstProductToCart();
  await checkoutPage.openCart();
  await checkoutPage.continueToPayment();
  await expect(checkoutPage.paymentMethod).toBeVisible();
});