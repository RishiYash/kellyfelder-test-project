import { Page, Locator } from '@playwright/test';

export class ShopPage {
  private readonly page: Page;
  readonly cartCount: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartCount = page.getByTestId('cart-quantity');
  }

  async goto() {
    await this.page.goto('/');
  }

  async addFirstProductToCart() {
    await this.page.getByTestId('product-name').first().click();
    await this.page.getByTestId('add-to-cart').click();
  }
}