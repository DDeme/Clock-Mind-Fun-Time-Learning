import { Page } from '@playwright/test';

export class TestHelpers {
  constructor(private page: Page) {}

  async waitForAnimations(timeout = 1000) {
    await this.page.waitForTimeout(timeout);
  }

  async takeScreenshot(name: string) {
    await this.page.screenshot({ path: `screenshots/${name}.png` });
  }

  async checkAccessibility() {
    // Add accessibility checks here
    // This could integrate with axe-playwright or similar
  }

  async checkResponsive(viewports: Array<{ width: number; height: number }>) {
    for (const viewport of viewports) {
      await this.page.setViewportSize(viewport);
      await this.waitForAnimations();
    }
  }

  async waitForElement(selector: string, timeout = 5000) {
    await this.page.waitForSelector(selector, { timeout });
  }
}
