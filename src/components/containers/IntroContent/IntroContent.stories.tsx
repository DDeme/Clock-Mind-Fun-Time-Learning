import { IntroContent } from './IntroContent'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
    component: IntroContent,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    title: 'Components/IntroContent',
} satisfies Meta<typeof IntroContent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithCustomTranslations: Story = {
    parameters: {
        i18n: {
            locale: 'cs',
            locales: {
                cs: {
                    intro: {
                        description:
                            'Naučte se číst čas zábavnou a interaktivní formou! Procvičujte čtení analogových a digitálních hodin se zajímavými hrami a výzvami.',
                        enterButton: 'Vstoupit do hry',
                        title: 'Hodiny Mysl Zábava',
                    },
                },
            },
        },
    },
}

export const WithSlovakTranslations: Story = {
    parameters: {
        i18n: {
            locale: 'sk',
            locales: {
                sk: {
                    intro: {
                        description:
                            'Naučte sa čítať čas zábavnou a interaktívnou formou! Cvičte čítanie analógových a digitálnych hodín so zaujímavými hrami a výzvami.',
                        enterButton: 'Vstúpiť do hry',
                        title: 'Hodiny Mysl Zábava',
                    },
                },
            },
        },
    },
}

export const WithRussianTranslations: Story = {
    parameters: {
        i18n: {
            locale: 'ru',
            locales: {
                ru: {
                    intro: {
                        description:
                            'Научитесь определять время веселым и интерактивным способом! Практикуйте чтение аналоговых и цифровых часов с увлекательными играми и вызовами.',
                        enterButton: 'Войти в игру',
                        title: 'Часы Ум Веселье',
                    },
                },
            },
        },
    },
}

export const WithUkrainianTranslations: Story = {
    parameters: {
        i18n: {
            locale: 'uk',
            locales: {
                uk: {
                    intro: {
                        description:
                            'Навчіться визначати час веселим та інтерактивним способом! Практикуйте читання аналогових та цифрових годинників із захоплюючими іграми та викликами.',
                        enterButton: 'Увійти в гру',
                        title: 'Години Думки Розваги',
                    },
                },
            },
        },
    },
}
