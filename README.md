[![Stand With Ukraine](https://raw.githubusercontent.com/vshymanskyy/StandWithUkraine/main/banner-direct-single.svg)](https://stand-with-ukraine.pp.ua)

[<img src="https://img.shields.io/badge/slack-@codeceptjs-purple.svg?logo=slack">](https://join.slack.com/t/codeceptjs/shared_invite/enQtMzA5OTM4NDM2MzA4LWE4MThhN2NmYTgxNTU5MTc4YzAyYWMwY2JkMmZlYWI5MWQ2MDM5MmRmYzZmYmNiNmY5NTAzM2EwMGIwOTNhOGQ) [<img src="https://img.shields.io/badge/discourse-codeceptjs-purple">](https://codecept.discourse.group) [![NPM version][npm-image]][npm-url] [<img src="https://img.shields.io/badge/dockerhub-images-blue.svg?logo=codeceptjs">](https://hub.docker.com/r/codeceptjs/codeceptjs)
[![AI features](https://img.shields.io/badge/AI-features?logo=openai&logoColor=white)](https://github.com/codeceptjs/CodeceptJS/edit/3.x/docs/ai.md) [![StandWithUkraine](https://raw.githubusercontent.com/vshymanskyy/StandWithUkraine/main/badges/StandWithUkraine.svg)](https://github.com/vshymanskyy/StandWithUkraine/blob/main/docs/README.md)

Build Status:

[![Playwright Tests](https://github.com/codeceptjs/CodeceptJS/actions/workflows/playwright.yml/badge.svg)](https://github.com/codeceptjs/CodeceptJS/actions/workflows/playwright.yml)
[![Puppeteer Tests](https://github.com/codeceptjs/CodeceptJS/actions/workflows/puppeteer.yml/badge.svg)](https://github.com/codeceptjs/CodeceptJS/actions/workflows/puppeteer.yml)
[![WebDriver Tests](https://github.com/codeceptjs/CodeceptJS/actions/workflows/webdriver.yml/badge.svg)](https://github.com/codeceptjs/CodeceptJS/actions/workflows/webdriver.yml)
[![Appium Tests](https://github.com/codeceptjs/CodeceptJS/actions/workflows/appium.yml/badge.svg)](https://github.com/codeceptjs/CodeceptJS/actions/workflows/appium.yml)
[![TestCafe Tests](https://github.com/codeceptjs/CodeceptJS/actions/workflows/testcafe.yml/badge.svg)](https://github.com/codeceptjs/CodeceptJS/actions/workflows/testcafe.yml)

# CodeceptJS [![Made in Ukraine](https://img.shields.io/badge/made_in-ukraine-ffd700.svg?labelColor=0057b7)](https://stand-with-ukraine.pp.ua)

Reference: [Helpers API](https://github.com/codeceptjs/CodeceptJS/tree/master/docs/helpers)

## Supercharged E2E Testing

CodeceptJS is a new testing framework for end-to-end testing with WebDriver (or others).
It abstracts browser interaction to simple steps that are written from a user perspective.
A simple test that verifies the "Welcome" text is present on a main page of a site will look like:

```js
Feature("CodeceptJS demo");

Scenario("check Welcome page on site", ({ I }) => {
  I.amOnPage("/");
  I.see("Welcome");
});
```

CodeceptJS tests are:

- **Synchronous**. You don't need to care about callbacks or promises or test scenarios which are linear. But, your tests should be linear.
- Written from **user's perspective**. Every action is a method of `I`. That makes test easy to read, write and maintain even for non-tech persons.
- Backend **API agnostic**. We don't know which WebDriver implementation is running this test.

CodeceptJS uses **Helper** modules to provide actions to `I` object. Currently, CodeceptJS has these helpers:

- [**Playwright**](https://github.com/codeceptjs/CodeceptJS/blob/master/docs/helpers/Playwright.md) - is a Node library to automate the Chromium, WebKit and Firefox browsers with a single API.
- [**Puppeteer**](https://github.com/codeceptjs/CodeceptJS/blob/master/docs/helpers/Puppeteer.md) - uses Google Chrome's Puppeteer for fast headless testing.
- [**WebDriver**](https://github.com/codeceptjs/CodeceptJS/blob/master/docs/helpers/WebDriver.md) - uses [webdriverio](http://webdriver.io/) to run tests via WebDriver protocol.
- [**TestCafe**](https://github.com/codeceptjs/CodeceptJS/blob/master/docs/helpers/TestCafe.md) - cheap and fast cross-browser test automation.
- [**Appium**](https://github.com/codeceptjs/CodeceptJS/blob/master/docs/helpers/Appium.md) - for **mobile testing** with Appium
- [**Detox**](https://github.com/codeceptjs/CodeceptJS/blob/master/docs/helpers/Detox.md) - This is a wrapper on top of Detox library, aimed to unify testing experience for CodeceptJS framework. Detox provides a grey box testing for mobile applications, playing especially well for React Native apps.

And more to come...

## Why CodeceptJS?

CodeceptJS is a successor of [Codeception](http://codeception.com), a popular full-stack testing framework for PHP.
With CodeceptJS your scenario-driven functional and acceptance tests will be as simple and clean as they can be.
You don't need to worry about asynchronous nature of NodeJS or about various APIs of Selenium, Puppeteer, TestCafe, etc. as CodeceptJS unifies them and makes them work as they are synchronous.

## Features

- 🪄 **AI-powered** with GPT features to assist and heal failing tests
- Based on [Mocha](https://mochajs.org/) testing framework.
- Designed for scenario driven acceptance testing in BDD-style
- Uses ES6 natively without transpiler.
- Also plays nice with TypeScript.
- Smart locators: use names, labels, matching text, CSS or XPath to locate elements.
- Interactive debugging shell: pause test at any point and try different commands in a browser.
- Easily create tests, pageobjects, stepobjects with CLI generators.

## Install

```sh
npm i codeceptjs --save
```

Move to directory where you'd like to have your tests (and codeceptjs config) stored, and execute

```sh
npx codeceptjs init
```

to create and configure test environment. It is recommended to select WebDriver from the list of helpers, if you need to write Selenium WebDriver tests.

After that create your first test by executing:

```sh
npx codeceptjs generate:test
```

Now test is created and can be executed with

```sh
npx codeceptjs run
```

If you want to write your tests using TypeScript just generate standard Type Definitions by executing:

```sh
npx codeceptjs def .
```

Later you can even automagically update Type Definitions to include your own custom [helpers methods](docs/helpers.md).

Note:

- CodeceptJS requires Node.js version `12+` or later.

## Usage

Learn CodeceptJS by examples. Let's assume we have CodeceptJS installed and WebDriver helper enabled.

# Tutorial: Writing Tests for Checkout Page

**[CodeceptJS](https://codecept.io) is a popular open-source testing framework** for JavaScript. It is designed to simplify writing and maintain end-to-end tests for web applications, using a readable and intuitive syntax. To run tests in browser it uses **[Playwright](https://playwright.dev)** by default but ca execute tests via WebDriver, Puppeteer or Appium.

## Let's get CodeceptJS installed!

To install CodeceptJS, you will need to have Node.js and npm (the Node.js package manager) installed on your system. You can check if you already have these tools installed by running the following commands in a terminal:

```bash
node --version
npm --version
```

If either of these commands return an error, you will need to install Node.js and npm before you can install CodeceptJS. You can download and install the latest version of Node.js from the official website, which includes npm.

To install CodeceptJS create a new folder and run command form terminal:

```
npx create-codeceptjs .
```

If you run the npx create-codeceptjs . command, it will install CodeceptJS with Playwright in the current directory.

> The `npx` command is a tool that comes with npm (the Node.js package manager) and it allows you to run npm packages without having to install them globally on your system.

It may take some time as it downloads browsers: Chrome, Firefox and Safari and creates a demo project.

But we are here to write a checkout test, right?

Let's initialize a new project for that!

Run

```
npx codeceptjs init
```

Agree on defaults (press Enter for every question asked). When asked for base site URL, provide a URL of a ecommerce website you are testing. For instance, it could be: `https://myshop.com` if you test already published website or `http://localhost` if you run the website locally.

When asked for a test name and suite name write "Checkout". It will create the following dirctory structure:

```
.
├── codecept.conf.js
├── package.json
└── Checkout_test.js
```

The `codecept.conf.js` file in the root of the project directory contains the global configuration settings for CodeceptJS.

Now open a test:

```js
Feature("Checkout");

Scenario("test something", ({ I }) => {});
```

Inside the Scenario block you write a test.

Add `I.amOnPage('/')` into it. It will open the browser on a URL you specified as a base.

```js
Feature("Checkout");

Scenario("test something", ({ I }) => {
  I.amOnPage("/");
});
```

But you may want to ask...

## What is I?

Glad you asked!

In CodeceptJS, the `I` object is used to represent the user performing actions in a test scenario. It provides a number of methods (also known as actions) that can be used to simulate user interactions with the application under test.

Some of the most popular actions of the I object are:

- `I.amOnPage(url)`: This action navigates the user to the specified URL.
- `I.click(locator)`: This action simulates a click on the element identified by the given locator.
- `I.fillField(field, value)`: This action fills the specified field with the given value.
- `I.see(text, context)`: This action checks that the given text is visible on the page (or in the specified context).
- `I.selectOption(select, option)`: This action selects the specified option from the given select dropdown.
- `I.waitForElement(locator, timeout)`: This action waits for the specified element to appear on the page, up to the given timeout.
- `I.waitForText(text, timeout, context)`: This action waits for the given text to appear on the page (or in the specified context), up to the given timeout.

We will need to use them to navigate into Checkout process. How do we navigate web? Sure by clicking on links!

Let's use `I.click()` for that.

But how we can access elements on a webpage?

CodeceptJS is smart enough to locate clickable elements by their visible text. For instance, if on your ecommerce website you have a product 'Coffee Cup' with that exact name you can use

```js
I.click("Coffee Cup");
```

But sometimes elements are not as easy to locate, so you can use CSS or XPath locators to locate them.

For instance, locating Coffee Cup via CSS can take into accont HTML structure of a page and element attributes. For instance, it can be like this:

```js
I.click('div.products a.product-name[title="Coffee Cup"]');
```

In this example, the `div.products` part of the selector specifies a div element with the `products` class, and the `a.product-name[title="Coffee Cup"]` part specifies an a element with `the product-name` class and the `title` attribute set to Coffee Cup.

You can read more about HTML and CSS locators, and basically that's all what you need to know to start writing a checkout test!

## Get back to Checkout

Let's see how a regular checkout script may look in CodeceptJS:

```js
Scenario("test the checkout form", async ({ I }) => {
  // we select one product and switched to checkout project
  I.amOnPage("/");
  I.click("Coffee Cup");
  I.click("Purchase");
  I.click("Checkout");

  // fill in the shipping address
  I.fillField("First Name", "John");
  I.fillField("Last Name", "Doe");
  I.fillField("Address", "123 Main St.");
  I.fillField("City", "New York");
  I.selectOption("State", "New York");
  I.fillField("Zip Code", "10001");

  // select a payment method
  I.click("#credit-card-option");
  I.fillField("Card Number", "1234-5678-9012-3456");
  I.fillField("Expiration Date", "12/22");
  I.fillField("Security Code", "123");

  // click the checkout button
  I.click("Checkout");

  // verify that the checkout was successful
  I.see("Your order has been placed successfully!");
});
```

Sure, in relaity your script might be more complicated. As you have noticed, we used CSS locator `'#credit-card-option'` to get select a payment option. However, the test is simple and you can follow user steps through it.

Please note, that you shouldn't use a real credit card number here. Good news, you don't need to. Payment providers like Strip provide dummy card numbers for testing purposes.

Run the test with next command:

```
npx codeceptjs run --debug -p pauseOnFail
```

What are special options here?

- `--debug` flag is used to output additional information to the console, such as the details of each step in the test, the values of variables, and the results of test assertions. This can help you to identify and fix any issues in your tests.
- `-p pauseOnFail` option is also used to keep the browser opened even if a test fails. It will help us to identify to which point test was executed and what can be improved.

Add more test steps if needed, update locators, and notify business owners that all that purchases are made by you so your collegues won't call you in the night asking when you want to get a coffee cup 😀 Also the good idea is to run tests on staging website, to not interfere with business process.

What a test is complete you can run it with:

```
npx codeceptjs run
```

If you are annoyed to see a browser window you can use `HEADLESS` environment variable:

```
HEADLESS=true codeceptjs run
```

for Windows users HEADLESS should be set in a different manner:

```
set HEADLESS=true&& codeceptjs run
```

The tests will pass but no browser is shown, so you can watch YouTube videos while it goes!

## Refactoring

What if you need to check more purchases? Should you copy paste your code for that?

No! You can use Page Object pattern to put repeating interactions into the reusable functions.

You can create a page object via next command:

```
npx codeceptjs gpo
```

Sure, we will call it `Checkout`. It will be created in `./pages/Checkout.js` file. You should enable it in `codecept.conf.js` inside `include` section:

```js
    include: {
    ...
      checkoutPage: './pages/Checkout.js',
    },

```

Now open this file:

```js
const { I } = inject();

module.exports = {
  // insert your locators and methods here
};
```

Feels really empty. What should we do about it? Should we write more code? No, we already have it. Let's copy code blocks from a test we have it and place them under a corredponnding function names:

```js
const { I } = inject();

module.exports = {
  fillShippingAddress(name, address, city, state, zip) {
    I.fillField("Name", name);
    I.fillField("Address", address);
    I.fillField("City", city);
    I.fillField("State", state);
    I.fillField("Zip", zip);
  },

  fillValidCreditCard() {
    I.click("#credit-card-option");
    I.fillField("Card Number", "1234-5678-9012-3456");
    I.fillField("Expiration Date", "12/22");
    I.fillField("Security Code", "123");
  },

  checkout() {
    I.click("Checkout");
  },
};
```

After that we can update our test to use the created page object. Note, that we import Checkout PageObject by its name `checkoutPage` we previously defined in a config.

```js
Scenario("test the checkout form", async ({ I, checkoutPage }) => {
  I.amOnPage("/");
  I.click("Coffee Cup");
  I.click("Purchase");
  I.click("Checkout");

  // fill in the shipping address using the page object
  checkoutPage.fillShippingAddress(
    "John",
    "Doe",
    "123 Main St.",
    "New York",
    "New York",
    "10001"
  );
  checkoutPage.fillValidCreditCard();
  checkoutPage.checkout();

  // verify that the checkout was successful
  I.see("Your order has been placed successfully!");
});
```

As you see the code of a test was reduced. And we can write the similar tests on the same manner.

By applying more and more cases you can test a website to all behaviors.

## Summary

If you think on just starting test automation, CodeceptJS is the best choice for you as it uses native language to pass commands to browser.

If you already skilled in JavaScript, with CodeceptJS you can focus on business level of your test, instead of writing code for browser. This way you can keep your tests stable and maintainable.

## License

MIT © [CodeceptJS Team](http://codecept.io)

[npm-image]: https://badge.fury.io/js/codeceptjs.svg
[npm-url]: https://npmjs.org/package/codeceptjs
[travis-image]: https://travis-ci.org/Codeception/codeceptjs.svg?branch=master
[travis-url]: https://travis-ci.org/Codeception/codeceptjs
[daviddm-image]: https://david-dm.org/Codeception/codeceptjs.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/Codeception/codeceptjs
[coveralls-image]: https://coveralls.io/repos/Codeception/codeceptjs/badge.svg
[coveralls-url]: https://coveralls.io/r/Codeception/codeceptjs
