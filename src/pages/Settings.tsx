import { useTranslation } from 'react-i18next'

import { LanguagePicker } from '../components/LanguagePicker'
import { Layout } from '../components/Layout'
import i18n from '../i18n'

const SettingsPage = () => {
    const { t } = useTranslation()

    return (
        <Layout>
            <div className="flex flex-1 flex-col items-center justify-center p-6">
                <div className="w-full max-w-md space-y-6">
                    <h1 className="text-2xl font-bold text-slate-800">
                        {t('settings.title', 'Settings')}
                    </h1>
                    <LanguagePicker
                        selectedLanguage={i18n.language}
                        onLanguageChange={(lang) => i18n.changeLanguage(lang)}
                        ariaLabel="Select application language"
                    />
                </div>
            </div>
        </Layout>
    )
}

export default SettingsPage
