import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'

import i18n from '../../i18n'
import { Button } from '../Button/Button'
import { LanguagePicker } from '../LanguagePicker'
import { Layout } from '../Layout'
import { PixelCatDiorama } from '../PixelCatDiorama'

export const IntroContent = () => {
    const navigate = useNavigate()
    const { t } = useTranslation()

    return (
        <Layout hideNavigation>
            <div className="relative flex min-h-screen flex-col items-center justify-center p-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex max-w-md flex-col items-center space-y-8 text-center"
                >
                    {/* Title */}
                    <motion.h1
                        data-testid="intro-title"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-4xl font-extrabold text-blue-600"
                    >
                        {t('intro.title')}
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        data-testid="intro-description"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-lg leading-relaxed text-slate-600"
                    >
                        {t('intro.description')}
                    </motion.p>

                    {/* Pixel Cat Diorama */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="flex justify-center"
                    >
                        <PixelCatDiorama className="max-w-50" />
                    </motion.div>

                    {/* Language Selector */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="w-full max-w-xs"
                    >
                        <LanguagePicker
                            data-testid="language-picker"
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
                        transition={{ delay: 0.8, duration: 0.6 }}
                        className="flex w-full max-w-xs flex-col gap-4"
                    >
                        <Button
                            data-testid="enter-game-button"
                            onClick={() => navigate('/lesson')}
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
