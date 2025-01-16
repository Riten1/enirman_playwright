import test from "@playwright/test";

import LoginPage from "../pages/LoginPage";

test("test1", async ({ page }) => {
  const login = new LoginPage(page);
  await login.gotoEnirmanLoginPage();
  await login.fillEmailInput("yetilab3@gmail.com");
  await login.fillPasswordInput("12345678");
  await login.clickOnLoginBtn();
});
