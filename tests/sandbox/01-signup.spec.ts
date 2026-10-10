import { test, expect } from '../../fixtures';
import { buildUser } from '../../test-data/user.factory';

test('a new customer can sign up', async ({ registerPage, page }) => {
  await registerPage.goto();
  await registerPage.register(buildUser());
  await expect(page).toHaveURL(/\/auth\/login/);
});