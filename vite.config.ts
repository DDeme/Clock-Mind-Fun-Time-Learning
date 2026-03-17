/// <reference types="vitest/config" />

// https://vite.dev/config/
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        process.env.NODE_ENV === 'production' &&
            !process.env.STORYBOOK &&
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
                            purpose: 'any maskable',
                            sizes: '512x512',
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
                    maximumFileSizeToCacheInBytes: 5000000, // 5MB
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
                            urlPattern:
                                /^https:\/\/fonts\.googleapis\.com\/.*/i,
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
    ].filter(Boolean),
})
