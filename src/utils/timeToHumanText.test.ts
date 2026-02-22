import { describe, it, expect } from '@jest/globals'
import { timeToHumanText } from './timeToHumanText'

describe('timeToHumanText', () => {
    const cases: [number, number][] = [
        // special cases (exact time strings)
        [0, 0],
        [12, 0],

        // special minutes: :15 (štvrť na + numbers[h+1])
        [2, 15],
        [11, 15],

        // special minutes: :30 (pol + ordinalGenitive[h+1])
        [5, 30],
        [10, 30],

        // special minutes: :45 (trištvrte na + numbers[h+1])
        [8, 45],
        [3, 45],

        // hour singular (1 → hodina), 0 minutes
        [1, 0],

        // hour plural 2-4 (hodiny), 0 minutes
        [2, 0],
        [4, 0],

        // hour plural 5+ (hodín), 0 minutes
        [5, 0],
        [11, 0],

        // minute singular (1 → minúta)
        [1, 1],

        // minute plural 2-4 (minúty)
        [3, 2],
        [4, 4],

        // minute plural 5+ (minút)
        [6, 10],
        [9, 59],

        // edge: hour 0 with regular minutes
        [0, 7],

        // edge: high values
        [11, 29],
    ]

    it.each(cases)('%i:%i', (hours, minutes) => {
        expect(timeToHumanText(hours, minutes)).toMatchSnapshot()
    })
})
