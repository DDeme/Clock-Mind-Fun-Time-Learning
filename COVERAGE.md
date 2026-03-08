# Coverage Reports

This project generates comprehensive coverage reports that combine multiple test runners.

## Test Coverage Sources

The merged coverage report combines coverage from:

1. **Jest** - Unit tests (`src/**/*.test.{ts,tsx}`)
2. **Vitest** - Storybook component tests (`src/**/*.stories.{ts,tsx}`)

## Running Coverage Reports

### Individual Coverage Reports

```bash
# Jest unit tests only
npm run test:coverage

# Storybook component tests only
yarn vitest --project=storybook --coverage
```

### Merged Coverage Report

```bash
# Generate combined coverage report from all test runners
npm run test:coverage:all
```

This will:

1. Run Jest tests with coverage
2. Run Vitest Storybook tests with coverage
3. Merge all coverage reports into a single unified report
4. Generate HTML, JSON, and text reports

## GitHub Actions

### Coverage Workflow

The project includes a GitHub Actions workflow that automatically runs coverage tests on:

- **Push** to `main` or `develop` branches
- **Pull Requests** to `main` or `develop` branches

The coverage workflow:

1. Runs type checking (`npm run tsc:check`)
2. Runs linting (`npm run lint`)
3. Generates merged coverage report (`npm run test:coverage:all`)
4. Uploads coverage to Codecov (if `CODECOV_TOKEN` is configured)
5. Uploads coverage artifacts for download
6. Comments coverage summary on pull requests

### Other Workflows

- **Tests**: Fast unit and Storybook tests without coverage
- **E2E**: Playwright end-to-end tests

### Setting up Codecov

To enable Codecov integration:

1. Create an account at [codecov.io](https://codecov.io)
2. Connect your GitHub repository
3. Add `CODECOV_TOKEN` as a repository secret in GitHub Settings

## Viewing Coverage Reports

### Local Development

After running `npm run test:coverage:all`, the merged report is available at:

- **HTML Report**: `./coverage/merged/index.html`
- **JSON Report**: `./coverage/merged/coverage-merged.json`

### CI/CD

Coverage reports are automatically uploaded to Codecov and available in:

- GitHub Actions artifacts (downloadable)
- Codecov dashboard (if configured)
- Pull request comments (coverage summary)

## Coverage Configuration

Coverage reports exclude:

- `node_modules/**`
- `**/*.stories.{ts,tsx}` (story files themselves)
- `**/*.d.ts` (type definitions)
- `src/main.tsx`
- `src/vite-env.d.ts`
- `.storybook/**`

## Individual Coverage Directories

- Jest coverage: `./coverage/jest/`
- Vitest coverage: `./coverage/vitest/`
- Merged coverage: `./coverage/merged/`
