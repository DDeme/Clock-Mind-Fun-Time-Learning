import { test as base, expect } from '@playwright/test'

// Define custom fixtures
export const test = base.extend({
    // Custom page fixture with common setup
    //     authenticatedPage: async ({ page }, use) => {
    //         // Add any authentication setup here if needed
    //         // eslint-disable-next-line react-hooks/rules-of-hooks
    //         await use(page)
    //     },
})

export { expect }
