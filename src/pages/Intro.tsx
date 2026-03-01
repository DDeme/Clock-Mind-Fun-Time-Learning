import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'

import { Button } from '../components/Button/Button'
import { LanguagePicker } from '../components/LanguagePicker'
import { Layout } from '../components/Layout'
import i18n from '../i18n'

export const IntroPage = () => {
    const navigate = useNavigate()
    const { t } = useTranslation()

    const handleEnter = () => {
        navigate('/timeline')
    }

    return (
        <Layout hideNavigation>
            <div className="relative flex min-h-screen flex-col items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex max-w-md flex-col items-center space-y-8 text-center"
                >
                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-4xl font-extrabold text-blue-600"
                    >
                        {t('intro.title')}
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-lg leading-relaxed text-slate-600"
                    >
                        {t('intro.description')}
                    </motion.p>

                    {/* Language Selector */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="flex w-full max-w-xs justify-center"
                    >
                        <LanguagePicker
                            selectedLanguage={i18n.language}
                            onLanguageChange={(lang) =>
                                i18n.changeLanguage(lang)
                            }
                            ariaLabel="Select application language"
                        />
                    </motion.div>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="flex w-full max-w-xs flex-col gap-4"
                    >
                        <Button
                            onClick={handleEnter}
                            variant="primary"
                        >
                            {t('intro.enterButton')}
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </Layout>
    )
}
