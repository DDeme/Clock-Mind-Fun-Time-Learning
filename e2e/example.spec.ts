import { test, expect } from '@playwright/test'

test('has title', async ({ page }) => {
    await page.goto('/')

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Clock Mind Fun/)
})

test('intro page loads correctly', async ({ page }) => {
    await page.goto('/')

    // Check main heading
    await expect(page.locator('[data-testid="intro-title"]')).toContainText(
        'Clock Mind Fun',
    )

    // Check description
    await expect(
        page.locator('[data-testid="intro-description"]'),
    ).toContainText('Learn to tell time')

    // Check enter button
    await expect(
        page.locator('[data-testid="enter-game-button"]'),
    ).toContainText('Enter Game')
})

test('navigation to lesson page', async ({ page }) => {
    await page.goto('/')

    // Click the enter button
    await page.click('[data-testid="enter-game-button"]')

    // Should navigate to lesson page
    await expect(page).toHaveURL(/\/lesson/)
})

test('responsive design', async ({ page }) => {
    await page.goto('/')

    // Test mobile viewport
    await page.setViewportSize({ height: 667, width: 375 })
    await expect(page.locator('[data-testid="intro-title"]')).toBeVisible()

    // Test tablet viewport
    await page.setViewportSize({ height: 1024, width: 768 })
    await expect(page.locator('[data-testid="intro-title"]')).toBeVisible()

    // Test desktop viewport
    await page.setViewportSize({ height: 800, width: 1200 })
    await expect(page.locator('[data-testid="intro-title"]')).toBeVisible()
})
