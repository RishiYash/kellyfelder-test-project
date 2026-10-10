import { test as base, expect } from '@playwright/test';
import { RegisterPage } from '../pages/sandbox/register.page';
import { LoginPage } from '../pages/sandbox/login.page';
import { AccountPage } from '../pages/sandbox/account.page';
import { ShopPage } from '../pages/sandbox/shop.page';
import { CheckoutPage } from '../pages/sandbox/checkout.page';
import { buildUser, User } from '../test-data/user.factory';

type Fixtures = {
  registerPage: RegisterPage;
  loginPage: LoginPage;
  accountPage: AccountPage;
  shopPage: ShopPage;
  checkoutPage: CheckoutPage;
  newUser: User;
  signedInUser: User;
};

export const test = base.extend<Fixtures>({
  registerPage: async ({ page }, use) => {
    await use(new RegisterPage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  accountPage: async ({ page }, use) => {
    await use(new AccountPage(page));
  },
  shopPage: async ({ page }, use) => {
    await use(new ShopPage(page));
  },
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },

  // A customer who has just signed up
  newUser: async ({ registerPage, page }, use) => {
    const user = buildUser();
    await registerPage.goto();
    await registerPage.register(user);
    await expect(page).toHaveURL(/\/auth\/login/);
    await use(user);
  },

  // A customer who has signed up AND logged in
  signedInUser: async ({ newUser, loginPage, accountPage }, use) => {
    await loginPage.goto(); // load the login page fresh and wait for the form
    await loginPage.login(newUser.email, newUser.password);
    await expect(accountPage.title).toHaveText('My account', { timeout: 15000 });
    await use(newUser);
  },
});

export { expect } from '@playwright/test';