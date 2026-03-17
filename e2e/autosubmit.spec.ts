import { test, expect } from '@playwright/test'

test.describe('Game Auto-submit', () => {
    test('automatically submits single-choice answers when autoSubmit is true', async ({ page }) => {
        // Game 1 has autoSubmit: true in our modified public/api/game/1.json
        await page.goto('/game/1')

        // Wait for game to load
        await expect(page.locator('[data-testid="game-container"]')).toBeVisible()

        // Find a single-choice option and click it
        const option = page.locator('[role="radio"]').first()
        await expect(option).toBeVisible()
        
        // Before clicking, the check answer button should be visible (if it's not autosubmitted)
        // Wait, if it's NOT autosubmitted, we need to click "Check".
        // But since it IS autosubmitted, clicking the option should immediately show the result.
        
        await option.click()

        // Result notification should appear immediately
        await expect(page.locator('[role="alert"]')).toBeVisible()
    })
})
