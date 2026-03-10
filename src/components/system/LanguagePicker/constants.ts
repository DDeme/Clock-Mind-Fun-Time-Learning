import type { LanguageOption } from './types'

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
    {
        code: 'en',
        flag: '🇬🇧',
        name: 'English',
        nativeName: 'English',
    },
    {
        code: 'sk',
        flag: '🇸🇰',
        name: 'Slovak',
        nativeName: 'Slovenčina',
    },
    {
        code: 'cs',
        flag: '🇨🇿',
        name: 'Czech',
        nativeName: 'Čeština',
    },
    {
        code: 'ru',
        flag: '🇷🇺',
        name: 'Russian',
        nativeName: 'Русский',
    },
    {
        code: 'uk',
        flag: '🇺🇦',
        name: 'Ukrainian',
        nativeName: 'Українська',
    },
]

export const DEFAULT_LANGUAGE = 'en'

export const LANGUAGE_STORAGE_KEY = 'clock-mind-language'
