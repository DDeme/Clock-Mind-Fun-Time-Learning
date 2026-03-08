import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Import language resources
import cs from './locales/cs.json'
import en from './locales/en.json'
import ru from './locales/ru.json'
import sk from './locales/sk.json'
import uk from './locales/uk.json'

const resources = {
    cs: { translation: cs },
    en: { translation: en },
    ru: { translation: ru },
    sk: { translation: sk },
    uk: { translation: uk },
}

i18n.use(initReactI18next).init({
    // default language
    fallbackLng: 'en',

    interpolation: {
        escapeValue: false, // React already escapes
    },
    lng: 'en',
    react: {
        useSuspense: false, // Disable suspense mode
    },
    resources,
})

export default i18n
