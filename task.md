# Translation Tasks for Clock Mind Fun Time Learning Components

This document contains all translatable strings found in the src/components directory that need to be internationalized.

## High Priority Translation Tasks

### Header Component (Header.tsx)
- [ ] **Line 34**: Translate `'Progress: {currentQuestionIdx} of {totalQuestions} questions completed'` aria-label
- [ ] **Line 44**: Translate `'Question {currentQuestionIdx} of {totalQuestions}'` text
- [ ] **Line 51**: Translate `'Score: {score} points'` aria-label

### CheckAnswer Component (CheckAnswer.tsx)
- [ ] **Line 18**: Translate `'CHECK ANSWER'` button text

### ContinueButton Component (ContinueButton.tsx)
- [ ] **Line 13**: Translate `'Next question'` button text

### ResultNotification Component (ResultNotification.tsx)
- [ ] **Line 30**: Translate `'Amazing Job!'` success message
- [ ] **Line 30**: Translate `'Not Quite Right'` error message
- [ ] **Line 34**: Translate `'You earned +{earnedStars} stars!'` success feedback
- [ ] **Line 35**: Translate `'The correct answer was {correctAnswer}'` error feedback

### Game Component (Game.tsx)
- [ ] **Line 37**: Translate `'Look at the clock! What time is it?'` question title
- [ ] **Line 131**: Translate `'Practice complete! Great job!'` game over alert
- [ ] **Line 148**: Translate `'Look at the clock! What time is it?'` question text

## Medium Priority Translation Tasks

### BottomNav Component (BottomNav.tsx)
- [ ] **Line 8**: Translate `'LEARN'` navigation label
- [ ] **Line 13**: Translate `'PLAY'` navigation label
- [ ] **Line 19**: Translate `'AWARDS'` navigation label
- [ ] **Line 24**: Translate `'PROFILE'` navigation label

### SingleChoice Component (SingleChoice.tsx)
- [ ] **Line 30**: Translate `'Time options'` aria-label
- [ ] **Line 44**: Translate `'Select {timeString}'` aria-label for buttons

### Game Component (Game.tsx) - Continued
- [ ] **Line 191**: Translate `'Game content'` aria-label
- [ ] **Line 215**: Translate `'Question {currentQuestionIdx} of {totalQuestions}, Score: {score} points'` screen reader announcement

## Low Priority Translation Tasks

### MascotBubble Component (MascotBubble.tsx)
- [ ] **Line 26**: Translate `'Friendly redhead cat mascot'` alt text

## Summary

**Total Components Analyzed**: 9
**Total Translatable Strings**: 20
- High Priority: 10
- Medium Priority: 8
- Low Priority: 2

## Implementation Notes

1. **Dynamic Content**: Many strings contain placeholders (e.g., `{currentQuestionIdx}`, `{score}`, `{earnedStars}`) that should be preserved in translations
2. **Accessibility**: Several strings are aria-labels and should be translated with screen reader accessibility in mind
3. **Context**: Some strings appear multiple times (e.g., the question text appears in both the title and text properties)
4. **Component Reusability**: Consider creating a translation hook or context to make components more maintainable

## Recommended Next Steps

1. Set up an i18n framework (react-i18next, format.js, etc.)
2. Create translation keys for each string
3. Replace hardcoded strings with translation function calls
4. Create translation files for target languages
5. Test with different locales and RTL languages if applicable
