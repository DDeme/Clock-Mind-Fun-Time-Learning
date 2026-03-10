import { test, expect } from '@playwright/test'

test.describe('Intro Page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/')
    })

    test('displays main elements', async ({ page }) => {
        // Check title
        await expect(page.locator('[data-testid="intro-title"]')).toBeVisible()
        await expect(page.locator('[data-testid="intro-title"]')).toContainText(
            'Clock Mind Fun',
        )

        // Check description
        const description = page.locator('[data-testid="intro-description"]')
        await expect(description).toBeVisible()
        await expect(description).toContainText('Learn to tell time')

        // Check enter button
        const enterButton = page.locator('[data-testid="enter-game-button"]')
        await expect(enterButton).toBeVisible()
        await expect(enterButton).toContainText('Enter Game')
    })

    test('animations are working', async ({ page }) => {
        // Wait for animations to complete
        await page.waitForTimeout(1000)

        // Check that elements are visible after animations
        await expect(page.locator('[data-testid="intro-title"]')).toBeVisible()
        await expect(
            page.locator('[data-testid="intro-description"]'),
        ).toBeVisible()
        await expect(
            page.locator('[data-testid="enter-game-button"]'),
        ).toBeVisible()
    })

    test('button is clickable and navigates', async ({ page }) => {
        // Click the enter button
        await page.click('[data-testid="enter-game-button"]')

        // Should navigate to lesson page
        await expect(page).toHaveURL(/\/lesson/)
    })

    test('accessibility', async ({ page }) => {
        // Check for proper heading structure
        const h1 = page.locator('[data-testid="intro-title"]')
        await expect(h1).toBeVisible()

        // Check button accessibility
        const button = page.locator('[data-testid="enter-game-button"]')
        await expect(button).toBeVisible()
        await expect(button).toHaveAttribute('type', 'button')
    })

    test('responsive layout', async ({ page }) => {
        // Test mobile
        await page.setViewportSize({ height: 667, width: 375 })
        await expect(page.locator('[data-testid="intro-title"]')).toBeVisible()
        await expect(
            page.locator('[data-testid="enter-game-button"]'),
        ).toBeVisible()

        // Test tablet
        await page.setViewportSize({ height: 1024, width: 768 })
        await expect(page.locator('[data-testid="intro-title"]')).toBeVisible()
        await expect(
            page.locator('[data-testid="enter-game-button"]'),
        ).toBeVisible()

        // Test desktop
        await page.setViewportSize({ height: 800, width: 1200 })
        await expect(page.locator('[data-testid="intro-title"]')).toBeVisible()
        await expect(
            page.locator('[data-testid="enter-game-button"]'),
        ).toBeVisible()
    })
})
