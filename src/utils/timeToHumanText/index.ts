import { timeToHumanTextEn } from './en'
import { timeToHumanTextSk } from './sk'

type TimeToHumanText = (hours: number, minutes: number) => string

const languageMap: Record<string, TimeToHumanText> = {
    en: timeToHumanTextEn,
    sk: timeToHumanTextSk,
    // Add other languages here
}

export const timeToHumanText = (
    hours: number,
    minutes: number,
    lang: string,
): string => {
    const fn = languageMap[lang] || timeToHumanTextEn
    return fn(hours, minutes)
}
