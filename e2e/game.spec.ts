import { test, expect } from '@playwright/test';

test.describe('Game Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/game/1');
  });

  test('game page loads', async ({ page }) => {
    // Should be on game page
    await expect(page).toHaveURL(/\/game\/1/);
    
    // Game component should be present
    await expect(page.locator('[data-testid="game-container"]')).toBeVisible();
  });

  test('game page is accessible from intro', async ({ page }) => {
    await page.goto('/');
    
    // Navigate to game page
    await page.click('button:has-text("Enter Game")');
    
    // Verify game page loaded
    await expect(page).toHaveURL(/\/timeline/);
  });

  test('game page responsive design', async ({ page }) => {
    // Test mobile viewport
    await page.setViewportSize({ height: 667, width: 375 });
    await expect(page.locator('[data-testid="game-container"]')).toBeVisible();
    
    // Test tablet viewport
    await page.setViewportSize({ height: 1024, width: 768 });
    await expect(page.locator('[data-testid="game-container"]')).toBeVisible();
    
    // Test desktop viewport
    await page.setViewportSize({ height: 800, width: 1200 });
    await expect(page.locator('[data-testid="game-container"]')).toBeVisible();
  });

  test('game page accessibility', async ({ page }) => {
    // Check for proper heading structure
    const headings = page.locator('h1, h2, h3, h4, h5, h6');
    await expect(headings.first()).toBeVisible();
    
    // Check for focus management
    await page.keyboard.press('Tab');
    // Should focus on interactive elements
  });
});
