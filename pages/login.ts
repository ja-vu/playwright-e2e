import { ElementHandle, expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly getUsernameInput: Locator;
  readonly getPasswordInput: Locator;
  readonly getLoginButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getUsernameInput = page.locator('[data-test="username"]');
    this.getPasswordInput = page.locator('[data-test="password"]');
    this.getLoginButton = page.locator('[data-test="login-button"]');
    this.errorMessage = page.locator('[data-test="error"]');
  }

  async navigate() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username: string, password: string){
    await this.getUsernameInput.fill(username);
    await this.getPasswordInput.fill(password);
    await this.getLoginButton.click();
  }

  async isLoginFailed(){
    const errorMsg = 'Epic sadface: Username and password do not match any user in this service'
    await expect(this.errorMessage).toHaveText(errorMsg)
}
}