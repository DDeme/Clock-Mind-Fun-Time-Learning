# Clock Mind Fun Time Learning

A React-based educational application designed to help children learn how to tell time through interactive games and feedback.

## Tech Stack
- **Framework**: React 19 (TypeScript)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS (Utility-first CSS)
- **Icons**: Material Symbols Outlined
- **State Management**: React Hooks (useState, useEffect, useCallback)

## Project Structure
- `App.tsx`: Main application entry point and game logic.
- `components/`: Contains reusable UI components.
  - `AnalogClock.tsx`: Visual representation of an analog clock with moving hands.
  - `MascotBubble.tsx`: Interactive mascot providing feedback to the user.
- `types.ts`: Centralized TypeScript interfaces and types.
- `index.html` & `index.tsx`: Application mounting and global setup.

## Coding Standards & Conventions
- **Naming**: Use PascalCase for components and camelCase for functions and variables.
- **Component Pattern**: Prefer functional components with hooks.
- **Styling**: Use Tailwind CSS for all styling. Ensure responsiveness and support for both light and dark modes.
- **Type Safety**: Maintain strict TypeScript typing. Avoid using `any`.
- **Logic**: Keep game logic (e.g., time generation, answer checking) modular and easily testable.

## Development Commands
- `npm run dev`: Starts the Vite development server.
- `npm run build`: Builds the application for production.
- `npm run preview`: Previews the production build locally.

## Design Principles
- **Kid-Friendly**: Use bright colors (primary brand color), large buttons, and clear typography.
- **Interactive**: Provide immediate visual and haptic-like feedback for user actions.
- **Progressive**: Support different game modes (multiple-choice vs. direct input) to challenge learners.
