import { test, expect } from '../../fixtures';

test('dashboard shows the signed-in customer', async ({ signedInUser, accountPage }) => {
  await expect(accountPage.title).toHaveText('My account');
  await expect(accountPage.menu).toContainText(signedInUser.firstName);
});