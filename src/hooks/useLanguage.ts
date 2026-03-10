import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import {
    DEFAULT_LANGUAGE,
    LANGUAGE_STORAGE_KEY,
} from '../components/system/LanguagePicker'

export const useLanguage = () => {
    const { i18n } = useTranslation()

    useEffect(() => {
        // Load saved language from localStorage on mount
        const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY)
        if (savedLanguage && savedLanguage !== i18n.language) {
            i18n.changeLanguage(savedLanguage)
        } else if (!savedLanguage && i18n.language !== DEFAULT_LANGUAGE) {
            i18n.changeLanguage(DEFAULT_LANGUAGE)
        }
    }, [i18n])

    const changeLanguage = (languageCode: string) => {
        i18n.changeLanguage(languageCode)
        localStorage.setItem(LANGUAGE_STORAGE_KEY, languageCode)
    }

    return {
        changeLanguage,
        currentLanguage: i18n.language || DEFAULT_LANGUAGE,
        isChanging: false,
    }
}
