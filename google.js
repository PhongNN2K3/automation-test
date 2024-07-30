Feature("Google Search");

Scenario("search something", ({ I }) => {
  I.amOnPage("https://www.google.com");
  I.fillField("q", "CodeceptJS");
  I.pressKey("Enter");
  I.see("CodeceptJS");
});
