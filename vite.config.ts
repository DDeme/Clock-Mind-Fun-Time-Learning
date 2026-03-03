/// <reference types="vitest/config" />

// https://vite.dev/config/
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
import { playwright } from '@vitest/browser-playwright'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

const dirname =
    typeof __dirname !== 'undefined'
        ? __dirname
        : path.dirname(fileURLToPath(import.meta.url))

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        VitePWA({
            includeAssets: [
                'favicon.ico',
                'apple-touch-icon.png',
                'masked-icon.svg',
            ],
            manifest: {
                background_color: '#ffffff',
                description:
                    'An interactive learning app for time and clock concepts',
                display: 'standalone',
                icons: [
                    {
                        sizes: '192x192',
                        src: 'pwa-192x192.png',
                        type: 'image/png',
                    },
                    {
                        sizes: '512x512',
                        src: 'pwa-512x512.png',
                        type: 'image/png',
                    },
                    {
                        sizes: '512x512',
                        purpose: 'any maskable',
                        src: 'pwa-512x512.png',
                        type: 'image/png',
                    },
                ],
                name: 'Clock Mind Fun Time Learning',
                orientation: 'portrait',
                scope: '/',
                short_name: 'ClockMind',
                start_url: '/',
                theme_color: '#6366f1',
            },
            registerType: 'autoUpdate',
            workbox: {
                globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
                runtimeCaching: [
                    {
                        handler: 'CacheFirst',
                        options: {
                            cacheName: 'google-fonts-cache',
                            expiration: {
                                maxAgeSeconds: 60 * 60 * 24 * 365,
                                maxEntries: 10, // 1 year
                            },
                        },
                        urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
                    },
                    {
                        handler: 'CacheFirst',
                        options: {
                            cacheName: 'images-cache',
                            expiration: {
                                maxAgeSeconds: 60 * 60 * 24 * 30,
                                maxEntries: 100, // 30 days
                            },
                        },
                        urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
                    },
                ],
            },
        }),
    ],
    test: {
        coverage: {
            exclude: [
                'node_modules/**',
                '**/*.stories.{ts,tsx}',
                '**/*.d.ts',
                'src/main.tsx',
                'src/vite-env.d.ts',
                '.storybook/**',
            ],
            provider: 'v8',
            reporter: ['text', 'json', 'html'],
            reportsDirectory: './coverage/vitest',
        },
        projects: [
            {
                extends: true,
                plugins: [
                    // The plugin will run tests for the stories defined in your Storybook config
                    // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
                    storybookTest({
                        configDir: path.join(dirname, '.storybook'),
                    }),
                ],
                test: {
                    browser: {
                        enabled: true,
                        headless: true,
                        instances: [
                            {
                                browser: 'chromium',
                            },
                        ],
                        provider: playwright({}),
                    },
                    name: 'storybook',
                    setupFiles: ['.storybook/vitest.setup.ts'],
                },
            },
        ],
    },
})
