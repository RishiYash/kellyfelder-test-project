import { Page } from '@playwright/test';
import { User } from '../../test-data/user.factory';

export class RegisterPage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('/auth/register');
  }

  async register(user: User) {
    await this.page.getByTestId('first-name').fill(user.firstName);
    await this.page.getByTestId('last-name').fill(user.lastName);
    await this.page.getByTestId('dob').fill(user.dob);
    await this.page.getByTestId('country').selectOption(user.country);
    await this.page.getByTestId('postal_code').fill(user.postcode);
    await this.page.getByRole('textbox', { name: 'House number' }).fill(user.houseNumber);
    await this.page.getByTestId('street').fill(user.street);
    await this.page.getByTestId('city').fill(user.city);
    await this.page.getByTestId('state').fill(user.state);
    await this.page.getByTestId('phone').fill(user.phone);
    await this.page.getByTestId('email').fill(user.email);
    await this.page.getByTestId('password').fill(user.password);
    await this.page.getByTestId('register-submit').click();
  }
}