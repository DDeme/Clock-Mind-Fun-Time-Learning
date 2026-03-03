#!/usr/bin/env node

const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

// Clean previous coverage reports
console.log('🧹 Cleaning previous coverage reports...')
if (fs.existsSync('./coverage')) {
    fs.rmSync('./coverage', { recursive: true, force: true })
}

// Run Jest tests with coverage
console.log('🧪 Running Jest tests with coverage...')
try {
    execSync('npm run test:coverage', { stdio: 'inherit' })
} catch (error) {
    console.error('❌ Jest tests failed')
    process.exit(1)
}

// Run Vitest Storybook tests with coverage
console.log('📚 Running Storybook tests with coverage...')
try {
    execSync('yarn vitest --project=storybook --coverage', { stdio: 'inherit' })
} catch (error) {
    console.error('❌ Storybook tests failed')
    process.exit(1)
}

// Create NYC configuration for merging coverage
const nycConfig = {
    reporter: ['text', 'json', 'html'],
    reportDir: './coverage/merged',
    exclude: [
        'node_modules/**',
        '**/*.stories.{ts,tsx}',
        '**/*.d.ts',
        'src/main.tsx',
        'src/vite-env.d.ts',
        '.storybook/**',
    ],
}

// Write NYC config
fs.writeFileSync('./.nycrc.json', JSON.stringify(nycConfig, null, 2))

// Merge coverage reports
console.log('🔀 Merging coverage reports...')
try {
    // Create merged directory if it doesn't exist
    if (!fs.existsSync('./coverage/merged')) {
        fs.mkdirSync('./coverage/merged', { recursive: true })
    }

    // Copy coverage files to a temporary directory for merging
    const tempDir = './.nyc_output'
    if (!fs.existsSync(tempDir)) {
        fs.mkdirSync(tempDir, { recursive: true })
    }

    // Copy Jest coverage
    if (fs.existsSync('./coverage/jest/coverage-final.json')) {
        fs.copyFileSync(
            './coverage/jest/coverage-final.json',
            `${tempDir}/jest-coverage.json`,
        )
    }

    // Copy Vitest coverage
    if (fs.existsSync('./coverage/vitest/coverage-final.json')) {
        fs.copyFileSync(
            './coverage/vitest/coverage-final.json',
            `${tempDir}/vitest-coverage.json`,
        )
    }

    // Merge coverage reports
    execSync(
        'npx nyc merge .nyc_output ./coverage/merged/coverage-merged.json',
        { stdio: 'inherit' },
    )

    // Generate final report
    execSync('npx nyc report --reporter=text --reporter=html --reporter=json', {
        stdio: 'inherit',
    })

    console.log('✅ Coverage reports merged successfully!')
    console.log('📊 View the merged report at: ./coverage/merged/index.html')
} catch (error) {
    console.error('❌ Failed to merge coverage reports')
    process.exit(1)
}

// Clean up temp files
fs.unlinkSync('./.nycrc.json')
if (fs.existsSync('./.nyc_output')) {
    fs.rmSync('./.nyc_output', { recursive: true, force: true })
}
