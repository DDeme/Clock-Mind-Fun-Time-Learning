import * as fs from 'fs'
import * as path from 'path'

import { describe, it, expect } from '@jest/globals'

import { GameDataResponseSchema, TimeClockSchema } from './timeClockSchema'

describe('TimeClockSchema Validation', () => {
    it('should validate the actual public/api/game/1.json file', () => {
        // Use relative path from the current file's directory
        const filePath = path.join(process.cwd(), 'public/api/game/1.json')
        const fileContent = fs.readFileSync(filePath, 'utf-8')
        const jsonData = JSON.parse(fileContent)

        const result = GameDataResponseSchema.safeParse(jsonData)
        // console.log(
        //     JSON.stringify(GameDataResponseSchema.toJSONSchema(), null, 2),
        // )
        if (!result.success) {
            console.error(
                'Validation errors:',
                JSON.stringify(result.error.format(), null, 2),
            )
        }

        expect(result.success).toBe(true)
    })

    it('should validate the actual public/api/game/2.json file', () => {
        // Use relative path from the current file's directory
        const filePath = path.join(process.cwd(), 'public/api/game/2.json')
        const fileContent = fs.readFileSync(filePath, 'utf-8')
        const jsonData = JSON.parse(fileContent)

        const result = GameDataResponseSchema.safeParse(jsonData)
        if (!result.success) {
            console.error(
                'Validation errors:',
                JSON.stringify(result.error.format(), null, 2),
            )
        }

        expect(result.success).toBe(true)
    })

    it('should fail on invalid data', () => {
        const invalidData = [
            {
                examples: [],
                explanation: 'Explanation',

                id: 'invalid-id',

                position: 'invalid-position',

                quiz: [],

                // should be left or right
                status: 'active',

                // should be number
                title: 'Invalid Lesson',
            },
        ]

        const result = TimeClockSchema.safeParse(invalidData)
        expect(result.success).toBe(false)
    })
})
