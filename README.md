# jest-fixed-happy-dom
A superset of the [happy-dom](https://github.com/capricorn86/happy-dom) environment for Jest that respects Node.js globals.

<!-- prettier-ignore-start -->
> [!WARNING]
> **This package is never meant as a solution to anything**. This is a workaround. Please consider testing browser code in the actual browser. You can do so both in [Vitest](https://vitest.dev/guide/browser/) and in [Playwright](https://playwright.dev/docs/test-components) at the moment.   
<!-- prettier-ignore-end -->

This is a fork of the https://github.com/mswjs/jest-fixed-jsdom package and does the same thing but for happy-dom instead of JSDOM. Please read their [README](https://github.com/mswjs/jest-fixed-jsdom/blob/main/README.md) for details.

## Getting started

### Install

```sh
npm i jest-fixed-happy-dom --save-dev
```

### Configure Jest

In your `jest.config.js`, set the `testEnvironment` option to `jest-fixed-happy-dom`:

```js
// jest.config.js
module.exports = {
  testEnvironment: 'jest-fixed-happy-dom',
}
```

> You can use any other `testEnvironmentOptions` you need. Those will be forwarded to the underlying `jest-environment-happy-dom`.
