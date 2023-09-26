const { setHeadlessWhen, setCommonPlugins } = require("@codeceptjs/configure");
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: "./todomvc-test/*_test.js",
  output: "./output",
  helpers: {
    Playwright: {
      browser: "chromium",
      url: "http://localhost",
      show: true,
    },
  },
  // gherkin: {
  //   features: "./todomvc-tests/features/*.feature",
  //   steps: ["./todomvc-tests/step-definitions/create-todos.steps.js"],
  // },
  include: {
    I: "./steps_file.js",
    TodosPage: "./pages/todos.page.js",
  },
  name: "BMAS Automate",
};
