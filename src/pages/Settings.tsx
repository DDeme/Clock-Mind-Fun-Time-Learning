import { useTranslation } from 'react-i18next'

import { LanguagePicker } from '../components/LanguagePicker'
import { Layout } from '../components/Layout'
import { Typography } from '../components/Typography'
import i18n from '../i18n'

const SettingsPage = () => {
    const { t } = useTranslation()

    return (
        <Layout>
            <div className="flex flex-1 flex-col p-6 pt-10">
                <div className="w-full max-w-md space-y-8">
                    <header className="mb-2">
                        <Typography
                            variant="h1"
                            className="text-blue-600"
                        >
                            {t('settings.title', 'Settings')}
                        </Typography>
                        <Typography
                            variant="body"
                            color="muted"
                            className="mt-1"
                        >
                            Customize your learning experience
                        </Typography>
                    </header>

                    <section className="space-y-4">
                        <div>
                            <Typography
                                variant="h3"
                                as="h2"
                            >
                                {t('settings.language', 'Language')}
                            </Typography>
                            <Typography
                                variant="caption"
                                color="muted"
                            >
                                {t(
                                    'settings.languageDescription',
                                    'Choose your preferred language',
                                )}
                            </Typography>
                        </div>
                        <LanguagePicker
                            selectedLanguage={i18n.language}
                            onLanguageChange={(lang) =>
                                i18n.changeLanguage(lang)
                            }
                            ariaLabel="Select application language"
                        />
                    </section>
                </div>
            </div>
        </Layout>
    )
}

export default SettingsPage
