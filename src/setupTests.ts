import '@testing-library/jest-dom'
import { jest } from '@jest/globals'

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
    value: jest.fn().mockImplementation((query: string) => ({
        // deprecated
addEventListener: jest.fn(),
        
addListener: jest.fn(),
        
dispatchEvent: jest.fn(),
        
matches: false, 
        
media: query, 
        
onchange: null,
        
removeEventListener: jest.fn(),
        // deprecated
removeListener: jest.fn(),
    })),
    writable: true,
})

// Mock ResizeObserver
global.ResizeObserver = jest.fn().mockImplementation(() => ({
    disconnect: jest.fn(),
    observe: jest.fn(),
    unobserve: jest.fn(),
}))

// Mock IntersectionObserver
global.IntersectionObserver = jest.fn().mockImplementation(() => ({
    disconnect: jest.fn(),
    observe: jest.fn(),
    unobserve: jest.fn(),
}))

// Mock motion/framer-motion
jest.mock('motion/react', () => ({
    AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
    motion: {
        a: 'a',
        article: 'article',
        aside: 'aside',
        button: 'button',
        div: 'div',
        figcaption: 'figcaption',
        figure: 'figure',
        footer: 'footer',
        form: 'form',
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        h5: 'h5',
        h6: 'h6',
        header: 'header',
        img: 'img',
        input: 'input',
        label: 'label',
        li: 'li',
        main: 'main',
        nav: 'nav',
        ol: 'ol',
        option: 'option',
        p: 'p',
        section: 'section',
        select: 'select',
        span: 'span',
        table: 'table',
        tbody: 'tbody',
        td: 'td',
        textarea: 'textarea',
        th: 'th',
        thead: 'thead',
        tr: 'tr',
        ul: 'ul',
    },
}))

// Mock CSS variables and neumorphic styles
const mockStyle = {
    getPropertyValue: jest.fn(() => ''),
    setProperty: jest.fn(),
}

Object.defineProperty(window, 'getComputedStyle', {
    value: jest.fn(() => mockStyle),
})
