# Research Phase: Review and Add New Translations

## Relevant Files
- `src/i18n/locales/*.json`: Existing translation files (cs, en, ru, sk, uk). `en.json` has the most keys but is still missing several hardcoded strings.
- `src/components/system/LanguagePicker/LanguagePickerExample.tsx`: Hardcoded "Changing..." string.
- `src/components/features/forms/NumericAnswer/NumericAnswer.tsx`: Hardcoded accessibility labels and empty option text.
- `src/components/features/clock/ClockShowcase/ClockShowcase.tsx`: Hardcoded accessibility labels and "AM/PM" markers.
- `src/components/containers/GameResults/GameResults.tsx`: Hardcoded title and accessibility label.
- `src/components/containers/Game/Game.skeleton.tsx`: Hardcoded accessibility label.
- `src/pages/Settings.tsx`: Hardcoded accessibility label.
- `src/components/containers/Topics/TopicsHeader.tsx`: Hardcoded user name and greeting.
- `src/components/containers/Topics/ContinueLearning.tsx`: Hardcoded lesson name, progress text, and button label.
- `src/components/containers/Topics/LearningTopics.tsx`: Hardcoded section title, "See All" button, and topic titles.
- `src/components/features/clock/AnalogClock.tsx`: Hardcoded accessibility strings for the clock face and hands description.
- `src/components/containers/Game/Game.tsx`: Hardcoded "points" string in screen reader announcement.
- `src/utils/gameGenerator/gameGenerator.ts`: Hardcoded question text "Look at the clock! What time is it?".
- `src/utils/timeToHumanText.ts`: Logic and strings are entirely hardcoded in Slovak.
- `public/api/game/*.json`: Game content (title, description, questions) is hardcoded in English.

## Architecture
- The project uses `react-i18next` for translations.
- Translation files are located in `src/i18n/locales/`.
- `i18next` is initialized in `src/i18n/index.ts`.
- Most components use the `useTranslation` hook, but many strings were missed or left as defaults/placeholders during development.
- `timeToHumanText.ts` is a utility that generates human-readable time strings but currently only supports Slovak grammar and vocabulary.

## Complexity
- **Moderate**: Adding simple keys to JSON and replacing them in `.tsx` files is straightforward.
- **Moderate to High**: Refactoring `timeToHumanText.ts` to be multi-language will require defining a structure for time-telling rules per language (since they differ significantly between English and Slovak).
- **Moderate**: Handling API content (JSON files) may require either duplicating JSONs per language or introducing translation keys into the JSONs.

## Open Questions
- Should the `timeToHumanText.ts` utility be fully localized for all 5 languages? (English, Slovak, Czech, Russian, Ukrainian)
- How should the game content in `public/api/game/*.json` be handled? Should we create `public/api/game/en/1.json`, `public/api/game/sk/1.json`, etc.?
- Are there specific branding terms (like "Clock Mind Fun") that should remain untranslated or translated consistently?

Research complete. Findings written to .agtx/research.md.
