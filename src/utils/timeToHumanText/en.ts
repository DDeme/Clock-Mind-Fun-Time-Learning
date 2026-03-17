const numbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
    'twenty',
    'twenty-one',
    'twenty-two',
    'twenty-three',
    'twenty-four',
    'twenty-five',
    'twenty-six',
    'twenty-seven',
    'twenty-eight',
    'twenty-nine',
    'thirty',
]

const specialCases: Record<string, string> = {
    '00:00': 'midnight',
    '12:00': 'noon',
}

const getPeriod = (hours: number) => {
    if (hours < 12) return 'in the morning'
    if (hours < 17) return 'in the afternoon'
    if (hours < 21) return 'in the evening'
    return 'at night'
}

export const timeToHumanTextEn = (hours: number, minutes: number): string => {
    const key = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`
    if (specialCases[key]) return specialCases[key]

    const displayHours = hours % 12 || 12
    const period = getPeriod(hours)

    if (minutes === 0) {
        return `${numbers[displayHours]} o'clock ${period}`
    }

    if (minutes === 15) {
        return `quarter past ${numbers[displayHours]} ${period}`
    }

    if (minutes === 30) {
        return `half past ${numbers[displayHours]} ${period}`
    }

    if (minutes === 45) {
        const nextHour = (hours + 1) % 12 || 12
        return `quarter to ${numbers[nextHour]} ${period}`
    }

    if (minutes < 30) {
        return `${numbers[minutes]} minutes past ${numbers[displayHours]} ${period}`
    }

    const nextHour = (hours + 1) % 12 || 12
    const minutesTo = 60 - minutes
    return `${numbers[minutesTo]} minutes to ${numbers[nextHour]} ${period}`
}
