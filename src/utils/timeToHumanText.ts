const numbers = [
    'nula',
    'jedna',
    'dve',
    'tri',
    'štyri',
    'päť',
    'šesť',
    'sedem',
    'osem',
    'deväť',
    'desať',
    'jedenásť',
    'dvanásť',
    'trinásť',
    'štrnásť',
    'pätnásť',
    'šestnásť',
    'sedemnásť',
    'osemnásť',
    'devätnásť',
    'dvadsať',
    'dvadsaťjeden',
    'dvadsaťdva',
    'dvadsaťtri',
    'dvadsaťštyri',
    'dvadsaťpäť',
    'dvadsaťšesť',
    'dvadsaťsedem',
    'dvadsaťosem',
    'dvadsaťdeväť',
    'tridsať',
    'tridsaťjeden',
    'tridsaťdva',
    'tridsaťtri',
    'tridsaťštyri',
    'tridsaťpäť',
    'tridsaťšesť',
    'tridsaťsedem',
    'tridsaťosem',
    'tridsaťdeväť',
    'štyridsať',
    'štyridsaťjeden',
    'štyridsaťdva',
    'štyridsaťtri',
    'štyridsaťštyri',
    'štyridsaťpäť',
    'štyridsaťšesť',
    'štyridsaťsedem',
    'štyridsaťosem',
    'štyridsaťdeväť',
    'päťdesiat',
    'päťdesiatjeden',
    'päťdesiatdva',
    'päťdesiattri',
    'päťdesiatštyri',
    'päťdesiatpäť',
    'päťdesiatšesť',
    'päťdesiatsedem',
    'päťdesiatosem',
    'päťdesiatdeväť',
    'šesťdesiat',
]
const ordinalGenitive = [
    'nultej',
    'jednej',
    'druhej',
    'tretej',
    'štvrtej',
    'piatej',
    'šiestej',
    'siedmej',
    'ôsmej',
    'deviatej',
    'desiatej',
    'jedenástej',
    'dvanástej',
    'trinástej',
    'štrnástj',
    'pätnástej',
    'šestnástj',
    'sedemnástej',
    'osemnástej',
    'devätnástej',
    'dvadsiatej',
    'dvadsaťjednej',
    'dvadsaťdruhej',
    'dvadsaťtretej',
    'dvadsaťštvrtej',
    'dvadsaťpiatej',
    'dvadsaťšiestej',
    'dvadsaťsiedmej',
    'dvadsaťôsmej',
    'dvadsaťdeviatej',
    'tridsiatej',
    'tridsaťjednej',
    'tridsaťdruhej',
    'tridsaťtretej',
    'tridsaťštvrtej',
    'tridsaťpiatej',
    'tridsaťšiestej',
    'tridsaťsiedmej',
    'tridsaťôsmej',
    'tridsaťdeviatej',
    'štyridsiatej',
    'štyridsaťjednej',
    'štyridsaťdruhej',
    'štyridsaťtretej',
    'štyridsaťštvrtej',
    'štyridsaťpiatej',
    'štyridsaťšiestej',
    'štyridsaťsiedmej',
    'štyridsaťôsmej',
    'štyridsaťdeviatej',
    'päťdesiatej',
    'päťdesiatjednej',
    'päťdesiatdruhej',
    'päťdesiatreti',
    'päťdesiatštvrtj',
    'päťdesiatpiatej',
    'päťdesiatšiestej',
    'päťdesiatsiedmej',
    'päťdesiatôsmej',
    'päťdesiatdeviatej',
    'šesťdesiatej',
]

const specialCasesMinutes = {
    15: 'štvrť na',
    30: 'pol',
    45: 'trištvrte na',
}

const specialCases: Record<string, string> = {
    '12:00': 'poludnie',
    '00:00': 'polnoc',
}

const isPlural = (number: number): boolean => {
    return number > 1
}

const getExtension = (number: number, type: 'min' | 'hour') => {
    if (type === 'min') {
        return isPlural(number)
            ? number > 4
                ? ' minút'
                : ' minúty'
            : ' minúta'
    }

    return isPlural(number) ? (number > 4 ? ' hodín' : ' hodiny') : ' hodina'
}

const getMinutesText = (minutes: number) => {
    if (minutes === 0) {
        return ''
    }
    return ` a ${numbers[minutes]}${getExtension(minutes, 'min')}`
}

const getHourText = (hours: number) => {
    return `${numbers[hours]}${getExtension(hours, 'hour')}`
}

const getSpecialCaseMinutesText = (hours: number, minutes: number) => {
    if (!Object.prototype.hasOwnProperty.call(specialCasesMinutes, minutes)) {
        return ''
    }
    if (minutes === 30) {
        return `${specialCasesMinutes[minutes]} ${ordinalGenitive[hours + 1]}`
    }

    return `${specialCasesMinutes[minutes]} ${numbers[hours + 1]}`
}

export const timeToHumanText = (hours: number, minutes: number): string => {
    const specialCaseMinutesText = getSpecialCaseMinutesText(hours, minutes)
    const hourText = getHourText(hours)
    const minutesText = getMinutesText(minutes)

    const key = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`
    const isSpecialCase = Object.prototype.hasOwnProperty.call(
        specialCases,
        key,
    )

    if (isSpecialCase) {
        return specialCases[key]
    }

    if (specialCaseMinutesText !== '') {
        return specialCaseMinutesText
    }

    return `${hourText}${minutesText}`
}
