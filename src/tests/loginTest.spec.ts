import test from "@playwright/test";

import LoginPage from "../pages/LoginPage";


test("test1", async({page}) => {
  const Dashboard1 = new LoginPage(page);
  await Dashboard1.clickOnLoginBtn()
} )