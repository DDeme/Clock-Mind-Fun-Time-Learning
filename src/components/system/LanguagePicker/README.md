# LanguagePicker Component

A dropdown component for selecting application language with support for English, Slovak, Czech, Russian, and Ukrainian.

## Features

- **5 Language Support**: English, Slovak, Czech, Russian, Ukrainian
- **Accessible**: Full keyboard navigation and screen reader support
- **Responsive**: Mobile-friendly design with adaptive display
- **i18n Integration**: Built-in support for react-i18next
- **Persistent**: Saves language preference to localStorage
- **TypeScript**: Full type safety
- **Styled**: Consistent with existing design system using TailwindCSS

## Usage

### Basic Usage

```tsx
import { LanguagePicker } from './components/LanguagePicker'

function MyComponent() {
  const [selectedLanguage, setSelectedLanguage] = useState('en')

  return (
    <LanguagePicker
      selectedLanguage={selectedLanguage}
      onLanguageChange={setSelectedLanguage}
    />
  )
}
```

### With i18n Integration

```tsx
import { LanguagePickerExample } from './components/LanguagePicker'
// or
import { LanguagePicker } from './components/LanguagePicker'
import { useLanguage } from './hooks/useLanguage'

function MyComponent() {
  const { currentLanguage, changeLanguage } = useLanguage()

  return (
    <LanguagePicker
      selectedLanguage={currentLanguage}
      onLanguageChange={changeLanguage}
    />
  )
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `selectedLanguage` | `string` | Required | Current selected language code |
| `onLanguageChange` | `(code: string) => void` | Required | Callback when language changes |
| `className` | `string` | `''` | Additional CSS classes |
| `ariaLabel` | `string` | `'Language selector'` | Accessibility label |

## Language Codes

- `en` - English
- `sk` - Slovak  
- `cs` - Czech
- `ru` - Russian
- `uk` - Ukrainian

## Accessibility

- Supports keyboard navigation (Tab, Enter, Space, Escape, Arrow keys)
- Proper ARIA attributes and roles
- Screen reader friendly
- Focus management
- High contrast support

## Styling

The component uses TailwindCSS classes and follows the existing design system:

- Consistent with Button component styling
- Hover and focus states
- Smooth transitions
- Mobile-responsive breakpoints

## Testing

The component includes comprehensive tests covering:

- Rendering and display
- User interactions
- Keyboard navigation
- Accessibility features
- Language selection
- Dropdown behavior

Run tests with:
```bash
npm test -- LanguagePicker
```