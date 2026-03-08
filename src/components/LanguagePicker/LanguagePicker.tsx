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
                className="flex w-full items-center justify-between gap-2 rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-base font-bold text-slate-700 shadow-sm transition-all hover:bg-slate-50 focus:ring-4 focus:ring-blue-500/20 focus:outline-none"
            >
                <div className="flex items-center gap-3">
                    <span
                        className="text-xl"
                        aria-hidden="true"
                    >
                        {currentLanguage.flag}
                    </span>
                    <span className="inline">
                        {currentLanguage.nativeName}
                    </span>
                </div>
                <ChevronDown
                    className={`h-5 w-5 text-slate-400 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                />
            </button>

            {isOpen && (
                <ul
                    role="listbox"
                    aria-label="Language options"
                    className="absolute left-0 z-50 mt-2 max-h-64 w-full overflow-auto rounded-xl border-2 border-slate-100 bg-white p-1 shadow-2xl animate-slide-up focus:outline-none"
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
                                className={`flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-base transition-colors focus:bg-blue-50 focus:outline-none ${
                                    language.code === selectedLanguage
                                        ? 'bg-blue-50 font-bold text-blue-600'
                                        : 'text-slate-700 hover:bg-slate-50'
                                }`}
                                aria-selected={
                                    language.code === selectedLanguage
                                }
                            >
                                <span
                                    className="text-2xl"
                                    aria-hidden="true"
                                >
                                    {language.flag}
                                </span>
                                <div className="flex-1">
                                    <div className="font-bold leading-none">
                                        {language.nativeName}
                                    </div>
                                    <div className="mt-1 text-xs font-medium text-slate-400">
                                        {language.name}
                                    </div>
                                </div>
                                {language.code === selectedLanguage && (
                                    <div
                                        className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"
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
