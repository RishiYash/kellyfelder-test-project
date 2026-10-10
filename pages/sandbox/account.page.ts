import { Page, Locator } from '@playwright/test';

export class AccountPage {
  readonly title: Locator;
  readonly menu: Locator;

  constructor(page: Page) {
    this.title = page.getByTestId('page-title');
    this.menu = page.getByTestId('nav-menu');
  }
}