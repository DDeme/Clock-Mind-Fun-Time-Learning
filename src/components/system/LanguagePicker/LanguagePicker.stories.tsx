import React from 'react'

import { SUPPORTED_LANGUAGES } from './constants'
import { LanguagePicker } from './LanguagePicker'
import { LanguagePickerExample } from './LanguagePickerExample'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof LanguagePicker> = {
    argTypes: {
        ariaLabel: {
            control: 'text',
            description: 'Accessibility label for the button',
        },
        className: {
            control: 'text',
            description: 'Additional CSS classes',
        },
        onLanguageChange: {
            action: 'languageChanged',
            description: 'Callback function when language is changed',
        },
        selectedLanguage: {
            control: 'select',
            description: 'Currently selected language code',
            options: SUPPORTED_LANGUAGES.map((lang) => lang.code),
        },
    },
    args: {
        ariaLabel: 'Language selector',
        selectedLanguage: 'en',
    },
    component: LanguagePicker,
    parameters: {
        docs: {
            description: {
                component:
                    'A dropdown component for selecting application language with support for English, Slovak, Czech, Russian, and Ukrainian.',
            },
        },
        layout: 'centered',
    },
    title: 'System/LanguagePicker',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        selectedLanguage: 'en',
    },
}

export const SlovakSelected: Story = {
    args: {
        selectedLanguage: 'sk',
    },
}

export const CzechSelected: Story = {
    args: {
        selectedLanguage: 'cs',
    },
}

export const RussianSelected: Story = {
    args: {
        selectedLanguage: 'ru',
    },
}

export const UkrainianSelected: Story = {
    args: {
        selectedLanguage: 'uk',
    },
}

export const CustomAriaLabel: Story = {
    args: {
        ariaLabel: 'Select your preferred language',
        selectedLanguage: 'en',
    },
}

export const WithCustomClass: Story = {
    args: {
        className: 'w-64',
        selectedLanguage: 'en',
    },
}

export const Interactive: Story = {
    render: () => {
        const [selectedLanguage, setSelectedLanguage] = React.useState('en')

        return (
            <div className="space-y-4">
                <LanguagePicker
                    selectedLanguage={selectedLanguage}
                    onLanguageChange={setSelectedLanguage}
                />
                <p className="text-sm text-slate-600">
                    Selected language: <strong>{selectedLanguage}</strong>
                </p>
            </div>
        )
    },
}

export const WithI18nIntegration: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Example showing integration with the useLanguage hook for i18n and localStorage persistence.',
            },
        },
    },
    render: () => <LanguagePickerExample />,
}
