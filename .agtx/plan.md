# Implementation Plan - Review and Add New Translations

## Analysis
The project has a basic i18n setup using `react-i18next`, but many strings are still hardcoded in English or Slovak across `.tsx` files, utility functions (`timeToHumanText.ts`), and API JSON files. The goal is to fully localize the application for all 5 supported languages: English, Slovak, Czech, Russian, and Ukrainian.

### Key findings:
- **Hardcoded Strings**: Found in accessibility labels, UI components, and game logic.
- **Language-specific Logic**: `timeToHumanText.ts` is hardcoded with Slovak grammar.
- **API Content**: `public/api/game/*.json` files are in English only.
- **Missing Translations**: Many keys present in `en.json` are missing in other locales, and new keys need to be added.

## Plan

### 1. Translation Keys Preparation
- Audit all `.tsx` files and extract all hardcoded strings.
- Standardize keys in `src/i18n/locales/en.json`.
- Propagate these keys (with translated values where possible, or placeholders) to `cs.json`, `ru.json`, `sk.json`, and `uk.json`.

### 2. UI Component Localization
Update the following components to use the `useTranslation` hook:
- `NumericAnswer.tsx`: Labels and accessibility.
- `ClockShowcase.tsx`: Header, modes, format toggles, and "Did you know?" section.
- `GameResults.tsx` & `GameResultsHeader.tsx`: Strengths, titles, and buttons.
- `Topics` components (`TopicsHeader.tsx`, `ContinueLearning.tsx`, `LearningTopics.tsx`): Greetings, section titles, and topic names.
- `AnalogClock.tsx`: Accessibility descriptions.
- `LanguagePicker.tsx` & `LanguagePickerExample.tsx`: Accessibility and "Changing..." string.
- `Game.tsx`: Screen reader announcements.

### 3. Refactor `timeToHumanText.ts`
- Create a modular rule system in `src/utils/timeToHumanText/` or similar.
- Implement rules for English (standard 12h/24h) and Slovak (re-using existing logic).
- (Optional but recommended) Add stub/basic implementations for Czech, Russian, and Ukrainian.
- Update `TimeToHuman.tsx` to pass the current language to the utility.

### 4. Game Generator & API Localization
- Update `questionsGenerator` in `gameGenerator.ts` to use `i18next.t()` for generating question text.
- Reorganize `public/api/game/` to have language subdirectories:
  - `public/api/game/en/*.json`
  - `public/api/game/sk/*.json`
  - (Copy existing English content to other languages as a starting point)
- Update `useGameData.ts` to fetch from the language-specific path using `i18n.language`.

### 5. Verification
- Run the app and switch between languages.
- Verify that all UI elements, game questions, and human-readable time strings change correctly.
- Check accessibility labels using a screen reader or by inspecting the DOM.

## Risks
- **Grammar Complexity**: Time-telling in Slavic languages (SK, CS, RU, UK) has complex declensions (e.g., "1 minúta", "2 minúty", "5 minút"). The refactored utility must handle these correctly.
- **API Breaking Change**: Moving JSON files to subdirectories might break existing links if not updated everywhere.
- **Missing Translations**: I might not have perfect translations for all 5 languages, so I will prioritize accuracy for EN/SK and use reasonable defaults or machine translation for others where needed (with a disclaimer).

Plan written to `.agtx/plan.md`. Waiting for approval.
