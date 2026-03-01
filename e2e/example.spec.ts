import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Clock Mind Fun/);
});

test('intro page loads correctly', async ({ page }) => {
  await page.goto('/');

  // Check main heading
  await expect(page.locator('h1')).toContainText('Clock Mind Fun');
  
  // Check description
  await expect(page.locator('p')).toContainText('Learn to tell time');
  
  // Check enter button
  await expect(page.locator('button')).toContainText('Enter Game');
});

test('navigation to game page', async ({ page }) => {
  await page.goto('/');

  // Click the enter button
  await page.click('button:has-text("Enter Game")');

  // Should navigate to game page
  await expect(page).toHaveURL(/\/game/);
});

test('responsive design', async ({ page }) => {
  await page.goto('/');

  // Test mobile viewport
  await page.setViewportSize({ width: 375, height: 667 });
  await expect(page.locator('h1')).toBeVisible();
  
  // Test tablet viewport
  await page.setViewportSize({ width: 768, height: 1024 });
  await expect(page.locator('h1')).toBeVisible();
  
  // Test desktop viewport
  await page.setViewportSize({ width: 1200, height: 800 });
  await expect(page.locator('h1')).toBeVisible();
});
