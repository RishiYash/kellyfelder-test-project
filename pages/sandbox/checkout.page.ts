import { Page, Locator, expect } from '@playwright/test';

export class CheckoutPage {
  readonly paymentMethod: Locator;
  readonly paymentSuccess: Locator;

  constructor(private page: Page) {
    this.paymentMethod = page.getByTestId('payment-method');
    this.paymentSuccess = page.getByTestId('payment-success-message');
  }

  async openCart() {
    await this.page.getByTestId('nav-cart').click();
  }

  async fillBillingAddress() {
    await this.page.getByTestId('street').fill('123 Test Street');

    // Newer versions of the site have a required house number field
    const houseNumber = this.page.getByTestId('house_number');
    if (await houseNumber.count()) {
      await houseNumber.fill('12');
    }

    await this.page.getByTestId('city').fill('Colombo');
    await this.page.getByTestId('state').fill('Western');
    await this.page.getByTestId('country').selectOption({ label: 'Sri Lanka' });
    await this.page.getByTestId('postal_code').fill('00100');
  }

  async continueToPayment() {
    await this.page.getByTestId('proceed-1').click();
    await this.page.getByTestId('proceed-2').click();
    await this.fillBillingAddress();

    const proceed3 = this.page.getByTestId('proceed-3');
    await expect(proceed3).toBeEnabled();
    await proceed3.click();
  }

  async payCashOnDelivery() {
    await this.paymentMethod.selectOption('cash-on-delivery');
    await this.page.getByTestId('finish').click();
  }
}