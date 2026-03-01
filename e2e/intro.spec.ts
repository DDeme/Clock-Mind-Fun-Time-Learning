import { test, expect } from '@playwright/test';

test.describe('Intro Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('displays main elements', async ({ page }) => {
    // Check title
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('h1')).toContainText('Clock Mind Fun');
    
    // Check description
    const description = page.locator('p');
    await expect(description).toBeVisible();
    await expect(description).toContainText('Learn to tell time');
    
    // Check enter button
    const enterButton = page.locator('button');
    await expect(enterButton).toBeVisible();
    await expect(enterButton).toContainText('Enter Game');
  });

  test('animations are working', async ({ page }) => {
    // Wait for animations to complete
    await page.waitForTimeout(1000);
    
    // Check that elements are visible after animations
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('p')).toBeVisible();
    await expect(page.locator('button')).toBeVisible();
  });

  test('button is clickable and navigates', async ({ page }) => {
    // Click the enter button
    await page.click('button:has-text("Enter Game")');
    
    // Should navigate to game page
    await expect(page).toHaveURL(/\/game/);
  });

  test('accessibility', async ({ page }) => {
    // Check for proper heading structure
    const h1 = page.locator('h1');
    await expect(h1).toBeVisible();
    
    // Check button accessibility
    const button = page.locator('button');
    await expect(button).toBeVisible();
    await expect(button).toHaveAttribute('type', 'button');
  });

  test('responsive layout', async ({ page }) => {
    // Test mobile
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('button')).toBeVisible();
    
    // Test tablet
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('button')).toBeVisible();
    
    // Test desktop
    await page.setViewportSize({ width: 1200, height: 800 });
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('button')).toBeVisible();
  });
});
