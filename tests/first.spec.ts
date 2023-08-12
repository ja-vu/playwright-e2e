import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login';


test('Logging in', async ({ page }) => {
  const loginPage = new LoginPage(page);
    
    await loginPage.navigate();

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Swag Labs/);
    await loginPage.login('standard_user', 'secret_sauce')
  });

  test('Failed logging in', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const errorMsg = 'Epic sadface: Username and password do not match any user in this service'
      
      await loginPage.navigate();
  
      // Expect a title "to contain" a substring.
      await expect(page).toHaveTitle(/Swag Labs/);
      await loginPage.login('standard_user', 'abcd1234');
      await loginPage.isLoginFailed();
    });