import i18n from 'i18next'
import React from 'react'
import { I18nextProvider, initReactI18next } from 'react-i18next'

// Import language resources
import cs from '../src/i18n/locales/cs.json'
import en from '../src/i18n/locales/en.json'
import ru from '../src/i18n/locales/ru.json'
import sk from '../src/i18n/locales/sk.json'
import uk from '../src/i18n/locales/uk.json'

import type { DecoratorFunction } from '@storybook/react'

const defaultResources = {
    cs: { translation: cs },
    en: { translation: en },
    ru: { translation: ru },
    sk: { translation: sk },
    uk: { translation: uk },
}

// Create a new i18n instance for Storybook
const createStorybookI18n = (
    locale: string,
    customLocales?: Record<string, Record<string, Record<string, string>>>,
) => {
    let resources = defaultResources

    // Handle custom locales from story parameters
    if (customLocales) {
        resources = {}
        Object.keys(customLocales).forEach((lang) => {
            resources[lang] = {
                translation: customLocales[lang],
            }
        })
    }

    const instance = i18n.createInstance()

    instance.use(initReactI18next).init({
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        lng: locale,
        react: {
            useSuspense: false,
        },
        resources,
    })

    return instance
}

export const withI18n: DecoratorFunction = (Story, context) => {
    const { parameters } = context
    const i18nConfig = parameters?.i18n || {}
    const locale = i18nConfig.locale || 'en'
    const customLocales = i18nConfig.locales

    const i18nInstance = createStorybookI18n(locale, customLocales)

    return (
        <I18nextProvider i18n={i18nInstance}>
            <Story />
        </I18nextProvider>
    )
}
