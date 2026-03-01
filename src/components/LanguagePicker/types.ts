export interface LanguageOption {
    code: string
    name: string
    nativeName: string
    flag: string
}

export interface LanguagePickerProps {
    selectedLanguage: string
    onLanguageChange: (languageCode: string) => void
    className?: string
    ariaLabel?: string
}