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

const specialCasesMinutes: Record<number, string> = {
    15: 'štvrť na',
    30: 'pol',
    45: 'trištvrte na',
}

const specialCases: Record<string, string> = {
    '00:00': 'polnoc',
    '12:00': 'poludnie',
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

const getSpecialCaseMinutesText = (hours: number, minutes: number): string => {
    const specialCase = specialCasesMinutes[minutes]
    if (!specialCase) {
        return ''
    }
    if (minutes === 30) {
        return `${specialCase} ${ordinalGenitive[hours + 1]}`
    }

    return `${specialCase} ${numbers[hours + 1]}`
}

const periodsOfTheDay = [
    {
        end: 9,
        name: 'ráno',
        start: 5,
    },
    {
        end: 12,
        name: 'dopoludnia',
        start: 9,
    },
    {
        end: 18,
        name: 'popoludní',
        start: 12,
    },
    {
        end: 22,
        name: 'popoludní',
        start: 18,
    },
    {
        end: 24,
        name: 'v noci',
        start: 22,
    },
    {
        end: 5,
        name: 'v noci',
        start: 0,
    },
]
// information source https://ucimesaslovencinu.sk/clanok/kolko-je-hodin-po-slovensky/#stvrt-pol-tristvrte
export const timeToHumanText = (hours: number, minutes: number): string => {
    const key = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`
    const specialCase = specialCases[key]

    if (specialCase) {
        return specialCase
    }

    const specialCaseMinutesText = getSpecialCaseMinutesText(hours, minutes)
    const period = periodsOfTheDay.find(
        (period) => period.start <= hours && period.end > hours,
    )?.name

    if (specialCaseMinutesText) {
        return `${specialCaseMinutesText} ${period}`
    }

    const hourText = getHourText(hours)
    const minutesText = getMinutesText(minutes)

    return `${hourText}${minutesText} ${period}`
}
