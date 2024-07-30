const { I } = inject();
const loginPage = require("./index");
const homeLocator = require("../home/locator");
const timeout = require("../common/timeout");

Feature("Login Viblo");

Scenario("Login with valid credentials", () => {
  loginPage.goto();
  loginPage.login("PhongNguyen123", "25032003phong");
  I.waitForElement(homeLocator.menu, timeout.loading);
  I.see("Welcome, PhongNguyen123");
});

Scenario("Login with invalid credentials", () => {
  loginPage.goto();
  loginPage.login("PhongNguyen", "25032003phong");
  I.see("Wrong username/email or password");
});

Scenario("Login with empty username", () => {
  loginPage.goto();
  loginPage.login("", "25032003phong");
  I.see("Tên người dùng/email là bắt buộc");
});

Scenario("Login with empty password", () => {
  loginPage.goto();
  loginPage.login("PhongNguyen123", "");
  I.see("Mật khẩu là bắt buộc");
});

Scenario("Login with SQL Injection attempt in username", ({ I }) => {
  loginPage.goto();
  loginPage.login("admin' OR '1'='1", "randomPassword");
  I.dontSee("Welcome, admin");
  I.see("Wrong username/email or password");
});

Scenario("Login with SQL Injection attempt in password", ({ I }) => {
  loginPage.goto();
  loginPage.login("PhongNguyen123", "admin' OR '1'='1");
  I.dontSee("Welcome, validUser");
  I.see("Wrong username/email or password");
});
