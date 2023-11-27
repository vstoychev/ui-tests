# UI testing framework using Playwright

## Main commands

### Install npm dependencies

```bash
npm i
```

### Run the UI tests

```bash
npx playwright test
```

### Run the tests in a specific file

```bash
npx playwright test example
```

or

```bash
npx playwright test example.spec.ts
```

### Run a set of test files

```bash
npx playwright test tests/todo-page/ tests/landing-page/
```

### Run files that have specific words in the file name

Example for running the files that have landing or login in the file name:

```bash
npx playwright test landing login
```

### Run a test with given title

```bash
npx playwright test -g "Playwright home page has title that contains Playwright"
```

### Running tests in headed mode

```bash
npx playwright test example.spec.ts --headed
```

### Run the tests only on specific browser

#### The project chromium is for Desktop Chrome

```bash
npx playwright test --project=chromium
```

#### The project firefox is for Desktop Firefox

```bash
npx playwright test --project=firefox
```

#### The project webkit is for Desktop Safari

```bash
npx playwright test --project=webkit
```

## Run the tests in debug mode  (opening Playwright Inspector)

### Debugging all tests

```bash
npx playwright test --debug
```

### Debugging tests from specific file

```bash
npx playwright test example --debug
```

### Debugging a test from the line number where the test is defined

```bash
npx playwright test example.spec.ts:3 --debug
```

### Debugging by setting PWDEBUG environment variable

This configures Playwright for debugging and opens the inspector.

#### PWDEBUG=1

Additional useful defaults are configured when PWDEBUG=1 is set:

- Browsers launch in the headed mode
- Default timeout is set to 0 (= no timeout)

#### PWDEBUG=console

This will configure the browser for debugging in Developer tools console:

- Runs headed: Browsers always launch in headed mode
- Disables timeout: Sets default timeout to 0 (= no timeout)
- Console helper: Configures a playwright object in the browser to generate and highlight Playwright locators. This can be used to verify locators.

#### Call page.pause() method when running in headed browser

```TypeScript
// Pause on the following line.
await page.pause();
```

## Auto generate tests with Codegen

```bash
npx playwright codegen wikipedia.org
```

## View traces (if such are configured to be saved)

You can use the Playwright Trace Viewer Web App https://trace.playwright.dev/
<br> Notes: 
- It is a Progressive Web App, it does not send your trace anywhere, it opens it locally.
- The traces can be found in the outputDir set in the playwright config file (the default is [test-results](./test-results/))

## Files

- [example.spec.ts](./tests-examples/example.spec.ts) - Example end-to-end test
- [demo-todo-app.spec.ts](./tests-examples/demo-todo-app.spec.ts) - Demo Todo App end-to-end tests
- [playwright.config.ts](./playwright.config.ts) - Playwright Test configuration

## Resources

For more information visit <https://playwright.dev/docs/intro>
