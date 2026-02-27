import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@chromatic-com/storybook',
        '@storybook/addon-vitest',
        '@storybook/addon-a11y',
        '@storybook/addon-docs',
        // "@storybook/addon-onboarding"
        {
            name: '@storybook/addon-mcp',
            options: {
                toolsets: {
                    dev: true, // Tools for story URL retrieval and UI building instructions (default: true)
                    docs: true, // Tools for component manifest and documentation (default: true, requires experimental feature flag below 👇)
                },
                experimentalFormat: 'markdown', // Output format: 'markdown' (default) or 'xml'
            },
        },
    ],
    features: {
        experimentalComponentsManifest: true, // Enable manifest generation for the docs toolset, only supported in React-based setups.
    },
    framework: '@storybook/react-vite',
}
export default config
