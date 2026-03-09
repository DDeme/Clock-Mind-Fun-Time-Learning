import { readFileSync } from 'fs'
import { join } from 'path'

import { describe, expect, it } from '@jest/globals'

import { safeValidateGame } from './gameSchema'

// Read the JSON file directly
const gameDataPath = join(__dirname, '../../../public/api/game/1.json')
const gameData = JSON.parse(readFileSync(gameDataPath, 'utf8'))

describe('GameSchema Validation', () => {
    it('should safely validate game data', () => {
        const result = safeValidateGame(gameData)
        expect(result.success).toBeTruthy()
    })
})
