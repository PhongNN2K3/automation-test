const { I } = inject();
const loginLocator = require("./locator");

module.exports = {
  goto() {
    I.amOnPage(loginLocator.url);
  },
  login(username, password) {
    I.fillField(loginLocator.username, username);
    I.fillField(loginLocator.password, password);
    I.click(loginLocator.loginButton);
  },
};
