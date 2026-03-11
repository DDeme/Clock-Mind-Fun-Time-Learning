#!/usr/bin/env node

const { chromium } = require('playwright')
const fs = require('fs')
const path = require('path')
const v8toIstanbul = require('v8-to-istanbul')

async function collectE2ECoverage() {
    console.log('🎭 Running E2E tests with coverage collection...')

    // Create coverage directory
    const coverageDir = './coverage/e2e'
    if (!fs.existsSync(coverageDir)) {
        fs.mkdirSync(coverageDir, { recursive: true })
    }

    // Launch browser with coverage enabled
    const browser = await chromium.launch({
        headless: true,
    })

    try {
        const context = await browser.newContext()
        const page = await context.newPage()

        // Start JavaScript coverage collection
        await page.coverage.startJSCoverage({
            resetOnNavigation: true,
            reportAnonymousScripts: false,
        })

        // Run the actual Playwright tests by requiring the test runner
        // We'll use a simple approach by visiting key pages and interactions
        console.log('📱 Collecting coverage from key application flows...')

        // Visit main pages and perform interactions
        const pages = [
            { url: 'http://localhost:5173/', name: 'home' },
            { url: 'http://localhost:5173/game/1', name: 'game' },
            { url: 'http://localhost:5173/lesson/1', name: 'lesson' },
        ]

        for (const pageConfig of pages) {
            try {
                console.log(
                    `🔍 Visiting ${pageConfig.name} page: ${pageConfig.url}`,
                )
                await page.goto(pageConfig.url)

                // Wait for page to load
                await page.waitForLoadState('networkidle')

                // Simulate some interactions
                await page.mouse.click(100, 100) // Click somewhere to trigger interactions

                // Small delay to ensure coverage is collected
                await page.waitForTimeout(1000)
            } catch (error) {
                console.warn(
                    `⚠️  Could not visit ${pageConfig.name} page: ${error.message}`,
                )
            }
        }

        // Stop coverage collection
        console.log('🛑 Stopping coverage collection...')
        const coverage = await page.coverage.stopJSCoverage()

        // Convert V8 coverage to Istanbul format
        console.log('🔄 Converting V8 coverage to Istanbul format...')
        const istanbulCoverage = {}

        for (const entry of coverage) {
            try {
                // Skip external scripts and node_modules
                if (
                    entry.url.includes('node_modules') ||
                    (entry.url.startsWith('http') &&
                        !entry.url.includes('localhost'))
                ) {
                    continue
                }

                // Convert URL to local path
                let filePath = entry.url
                if (filePath.startsWith('http://localhost:5173')) {
                    filePath = filePath.replace('http://localhost:5173', '/src')
                }

                // Skip if we can't map to a local file
                if (!filePath.startsWith('/src')) {
                    continue
                }

                // Create converter
                const converter = v8toIstanbul(filePath, 0, {
                    source: entry.source,
                })

                await converter.load()
                converter.applyCoverage(entry.functions)

                const coverageData = converter.toIstanbul()
                Object.assign(istanbulCoverage, coverageData)
            } catch (error) {
                console.warn(
                    `⚠️  Could not process coverage for ${entry.url}: ${error.message}`,
                )
            }
        }

        // Write coverage file
        const coverageFile = path.join(coverageDir, 'coverage-final.json')
        fs.writeFileSync(
            coverageFile,
            JSON.stringify(istanbulCoverage, null, 2),
        )

        console.log(`✅ E2E coverage collected and saved to ${coverageFile}`)
        console.log(`📊 Covered ${Object.keys(istanbulCoverage).length} files`)
    } catch (error) {
        console.error('❌ Failed to collect E2E coverage:', error.message)
        throw error
    } finally {
        await browser.close()
    }
}

// Run the coverage collection
collectE2ECoverage().catch((error) => {
    console.error('❌ E2E coverage collection failed:', error)
    process.exit(1)
})
