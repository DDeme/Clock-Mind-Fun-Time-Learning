<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1A3loaeQMJh6W4KorM6XnVLL2PjNzdap9

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Development

This project uses several tools to maintain code quality and consistency:

### Linting and Formatting

- **ESLint**: Code linting with TypeScript and React rules
- **Prettier**: Code formatting
- **ls-lint**: File and directory structure linting

### Available Scripts

- `yarn lint` - Run ESLint
- `yarn lint:fix` - Fix ESLint issues automatically
- `yarn lint:structure` - Run ls-lint to check file/directory naming conventions
- `yarn lint:all` - Run both ESLint and ls-lint
- `yarn format` - Format code with Prettier
- `yarn format:check` - Check code formatting

### File Naming Conventions

This project enforces consistent file and directory naming using ls-lint:

- **Components**: PascalCase (e.g., `Button.tsx`, `DatePicker.tsx`)
- **Pages**: PascalCase (e.g., `Home.tsx`, `Settings.tsx`)
- **Hooks**: camelCase with `use` prefix (e.g., `useUserData.ts`, `useAuth.ts`)
- **Utilities**: camelCase (e.g., `formatDate.ts`, `apiClient.ts`)
- **Constants/Types**: `constants.ts`, `types.ts` (or PascalCase)
- **Tests**: camelCase with `.test` or `.spec` suffix
- **Directories**: kebab-case (e.g., `user-profile/`, `date-picker/`)
- **Config files**: kebab-case (e.g., `vite.config.ts`, `eslint.config.js`)

### Pre-commit Hooks

The project uses Husky for pre-commit hooks that automatically run:

1. Structure linting (`ls-lint`)
2. Code linting and fixing (`eslint --fix`)
3. Code formatting (`prettier`)
4. Type checking (`tsc --noEmit`)
5. Tests (`jest`)

This ensures code quality before any commit is made.
