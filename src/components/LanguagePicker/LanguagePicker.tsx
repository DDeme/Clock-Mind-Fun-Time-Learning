import { ChevronDown } from 'lucide-react'
import React, { useState, useRef, useEffect } from 'react'

import { SUPPORTED_LANGUAGES } from './constants'

import type { LanguagePickerProps } from './types'

export const LanguagePicker: React.FC<LanguagePickerProps> = ({
    selectedLanguage,
    onLanguageChange,
    className = '',
    ariaLabel = 'Language selector',
}) => {
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    const currentLanguage =
        SUPPORTED_LANGUAGES.find((lang) => lang.code === selectedLanguage) ||
        SUPPORTED_LANGUAGES[0]

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false)
            }
        }

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        document.addEventListener('keydown', handleEscape)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
            document.removeEventListener('keydown', handleEscape)
        }
    }, [])

    const handleLanguageSelect = (languageCode: string) => {
        onLanguageChange(languageCode)
        setIsOpen(false)
    }

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault()
            setIsOpen(!isOpen)
        } else if (event.key === 'ArrowDown' && !isOpen) {
            event.preventDefault()
            setIsOpen(true)
        }
    }

    return (
        <div
            className={`relative ${className}`}
            ref={dropdownRef}
        >
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                onKeyDown={handleKeyDown}
                aria-label={ariaLabel}
                aria-expanded={isOpen}
                aria-haspopup="listbox"
                className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all hover:bg-slate-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 focus:outline-none"
            >
                <span
                    className="text-lg"
                    aria-hidden="true"
                >
                    {currentLanguage.flag}
                </span>
                <span className="hidden sm:inline">
                    {currentLanguage.nativeName}
                </span>
                <span className="sm:hidden">
                    {currentLanguage.code.toUpperCase()}
                </span>
                <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                />
            </button>

            {isOpen && (
                <ul
                    role="listbox"
                    aria-label="Language options"
                    className="absolute right-0 z-50 mt-1 max-h-60 w-48 overflow-auto rounded-lg border border-slate-200 bg-white shadow-lg focus:outline-none"
                >
                    {SUPPORTED_LANGUAGES.map((language) => (
                        <li
                            key={language.code}
                            role="option"
                        >
                            <button
                                type="button"
                                onClick={() =>
                                    handleLanguageSelect(language.code)
                                }
                                className={`flex w-full items-center gap-3 px-3 py-2 text-left text-sm transition-colors focus:bg-blue-50 focus:outline-none ${
                                    language.code === selectedLanguage
                                        ? 'bg-blue-100 font-medium text-blue-700'
                                        : 'text-slate-700 hover:bg-slate-100'
                                }`}
                                aria-selected={
                                    language.code === selectedLanguage
                                }
                            >
                                <span
                                    className="text-lg"
                                    aria-hidden="true"
                                >
                                    {language.flag}
                                </span>
                                <div className="flex-1">
                                    <div className="font-medium">
                                        {language.nativeName}
                                    </div>
                                    <div className="text-xs text-slate-500">
                                        {language.name}
                                    </div>
                                </div>
                                {language.code === selectedLanguage && (
                                    <div
                                        className="h-2 w-2 rounded-full bg-blue-600"
                                        aria-hidden="true"
                                    />
                                )}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
