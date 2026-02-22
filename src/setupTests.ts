import '@testing-library/jest-dom'
import { jest } from '@jest/globals'

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    })),
})

// Mock ResizeObserver
global.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
}))

// Mock IntersectionObserver
global.IntersectionObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
}))

// Mock motion/framer-motion
jest.mock('motion/react', () => ({
    motion: {
        div: 'div',
        span: 'span',
        button: 'button',
        section: 'section',
        main: 'main',
        header: 'header',
        footer: 'footer',
        nav: 'nav',
        article: 'article',
        aside: 'aside',
        figure: 'figure',
        figcaption: 'figcaption',
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        h5: 'h5',
        h6: 'h6',
        p: 'p',
        a: 'a',
        img: 'img',
        ul: 'ul',
        ol: 'ol',
        li: 'li',
        form: 'form',
        input: 'input',
        textarea: 'textarea',
        select: 'select',
        option: 'option',
        label: 'label',
        table: 'table',
        thead: 'thead',
        tbody: 'tbody',
        tr: 'tr',
        th: 'th',
        td: 'td',
    },
    AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
}))

// Mock CSS variables and neumorphic styles
const mockStyle = {
    getPropertyValue: jest.fn(() => ''),
    setProperty: jest.fn(),
}

Object.defineProperty(window, 'getComputedStyle', {
    value: jest.fn(() => mockStyle),
})
