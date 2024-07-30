const { I } = inject();
const loginLocator = require("./locator");
const homeLocator = require("../home/locator");
const timeout = require("../common/timeout");

module.exports = {
  goto() {
    I.amOnPage(loginLocator.url);
  },
  login(username, password) {
    I.fillField(loginLocator.username, username);
    I.fillField(loginLocator.password, password);
    I.click(loginLocator.loginButton);
    I.waitForElement(homeLocator.menu, timeout.loading);
  },
};
