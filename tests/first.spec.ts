import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login';


test('Logging in', async ({ page }) => {
  const loginPage = new LoginPage(page);
    
    await loginPage.navigate();

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Swag Labs/);
    await loginPage.login('standard_user', 'secret_sauce')
  });