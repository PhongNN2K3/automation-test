/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: "./*_test.js",
  output: "./output",
  helpers: {
    WebDriver: {
      url: "http://localhost",
      browser: "chrome",
      port: 4444,
      restart: false,
      windowSize: "1920x1680",
      waitForTimeout: 5000,
      desiredCapabilities: {
        chromeOptions: {
          args: [/*"--headless",*/ "--disable-gpu", "--no-sandbox"],
        },
      },
    },
  },
  include: {
    I: "./steps_file.js",
  },
  name: "second-demo",
};
