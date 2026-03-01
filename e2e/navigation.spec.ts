import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('intro page to game page navigation', async ({ page }) => {
    await page.goto('/');
    
    // Verify we're on intro page
    await expect(page).toHaveURL('/');
    await expect(page.locator('h1')).toContainText('Clock Mind Fun');
    
    // Click enter button
    await page.click('button:has-text("Enter Game")');
    
    // Verify navigation to game page
    await expect(page).toHaveURL(/\/game/);
  });

  test('browser back button works', async ({ page }) => {
    await page.goto('/');
    
    // Navigate to game page
    await page.click('button:has-text("Enter Game")');
    await expect(page).toHaveURL(/\/game/);
    
    // Use browser back button
    await page.goBack();
    
    // Should return to intro page
    await expect(page).toHaveURL('/');
    await expect(page.locator('h1')).toContainText('Clock Mind Fun');
  });

  test('direct game page access', async ({ page }) => {
    // Go directly to game page
    await page.goto('/game');
    
    // Should load game page
    await expect(page).toHaveURL(/\/game/);
  });

  test('URL changes correctly on navigation', async ({ page }) => {
    await page.goto('/');
    
    // Initial URL should be root
    await expect(page).toHaveURL('/');
    
    // After clicking enter button, URL should change
    await page.click('button:has-text("Enter Game")');
    await expect(page).toHaveURL(/\/game/);
  });

  test('page reload maintains state', async ({ page }) => {
    await page.goto('/');
    
    // Reload the page
    await page.reload();
    
    // Should still show intro page
    await expect(page).toHaveURL('/');
    await expect(page.locator('h1')).toContainText('Clock Mind Fun');
  });
});
