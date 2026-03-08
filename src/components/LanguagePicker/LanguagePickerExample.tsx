import React from 'react'

import { useLanguage } from '../../hooks/useLanguage'

import { LanguagePicker } from './LanguagePicker'

export const LanguagePickerExample: React.FC = () => {
    const { currentLanguage, changeLanguage, isChanging } = useLanguage()

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-slate-900">
                    Language Settings
                </h3>
                {isChanging && (
                    <span className="text-sm text-slate-500">Changing...</span>
                )}
            </div>

            <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700">
                    Select Language
                </label>
                <LanguagePicker
                    selectedLanguage={currentLanguage}
                    onLanguageChange={changeLanguage}
                    ariaLabel="Select application language"
                />
            </div>

            <div className="text-sm text-slate-600">
                Current language: <strong>{currentLanguage}</strong>
            </div>
        </div>
    )
}
