import { Page } from "@playwright/test";
export default class LoginPage {
  private readonly emailInputSelector = "#email";
  private readonly passwordInputSelector = "#password";
  private readonly loginButtonSelector = ".primary-btn";
  
  constructor(private page: Page) {}

  async gotoEnirmanLoginPage() {
    await this.page.goto("https://app.enirman.com/login/admin");
  }

  async fillEmailInput(email: string) {
    await this.page.locator(this.emailInputSelector).fill(email);
  }

  async fillPasswordInput(password: string) {
    await this.page.locator(this.passwordInputSelector).fill(password);
  }

  async clickOnLoginBtn() {
    await this.page.locator(this.loginButtonSelector).click();
  }
}
