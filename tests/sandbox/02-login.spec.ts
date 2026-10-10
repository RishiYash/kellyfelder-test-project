import { test, expect } from '../../fixtures';

test('a registered customer can log in', async ({ newUser, loginPage, accountPage }) => {
  await loginPage.login(newUser.email, newUser.password);
  await expect(accountPage.title).toHaveText('My account');
});