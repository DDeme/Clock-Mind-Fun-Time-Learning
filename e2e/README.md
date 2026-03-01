# E2E Tests with Playwright

This directory contains end-to-end tests for the Clock Mind Fun application using Playwright.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Install Playwright browsers:
```bash
npx playwright install
```

## Running Tests

### Run all tests
```bash
npm run test:e2e
```

### Run tests with UI (watch mode)
```bash
npm run test:e2e:ui
```

### Run tests in headed mode (visible browser)
```bash
npm run test:e2e:headed
```

### Run specific test file
```bash
npx playwright test intro.spec.ts
```

### Run tests on specific browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

## Test Structure

- `example.spec.ts` - Basic example tests
- `intro.spec.ts` - Tests for the intro page
- `navigation.spec.ts` - Tests for navigation between pages
- `game.spec.ts` - Tests for the game page
- `fixtures/` - Custom test fixtures
- `utils/` - Test helper utilities

## Configuration

The Playwright configuration is in `playwright.config.ts` and includes:
- Multiple browser support (Chrome, Firefox, Safari)
- Mobile viewport testing
- Local dev server integration
- HTML reporter
- Trace collection on retry

## Best Practices

1. **Use data-testid attributes** for stable selectors
2. **Wait for elements** before interacting with them
3. **Test responsive design** across different viewports
4. **Include accessibility checks**
5. **Use fixtures** for common setup/teardown
6. **Keep tests independent** and focused

## Adding New Tests

1. Create a new `.spec.ts` file in this directory
2. Import test utilities from `utils/test-helpers.ts`
3. Use the existing test patterns as examples
4. Run tests to verify they work

## Debugging

- Use `--headed` flag to see the browser
- Use `--debug` flag to pause execution
- Check the HTML report at `playwright-report/index.html`
- Use trace viewer for detailed execution traces
