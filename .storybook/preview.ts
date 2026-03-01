import type { Preview } from '@storybook/react-vite'
import '../src/index.css'

const preview: Preview = {
    parameters: {
        a11y: {
            // 'todo' - show a11y violations in the test UI only
            // 'error' - fail CI on a11y violations
            // 'off' - skip a11y checks entirely
            config: {
                rules: [
                    // Configure specific accessibility rules using axe-core rule IDs
                    { enabled: true, id: 'aria-valid-attr-value' },
                    { enabled: true, id: 'button-name' },
                    { enabled: true, id: 'color-contrast' },
                    { enabled: true, id: 'focus-trap' },
                    { enabled: true, id: 'keyboard-navigation' },
                ],
            },
            test: 'error',
        },

        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
}

export default preview
