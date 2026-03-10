import { Main } from './Main'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof Main> = {
    argTypes: {
        ariaLabel: {
            control: 'text',
        },
    },
    component: Main,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    title: 'Components/Main',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        ariaLabel: 'Main content area',
    },
    render: (args) => (
        <div className="min-h-screen bg-slate-50">
            <Main {...args}>
                <div className="w-full max-w-md space-y-6">
                    <header className="text-center">
                        <h1 className="text-2xl font-bold text-slate-800">
                            Main Content Area
                        </h1>
                        <p className="text-slate-600">
                            This is the main content wrapper component
                        </p>
                    </header>
                    
                    <main className="space-y-4">
                        <section className="rounded-lg bg-white p-6 shadow-sm">
                            <h2 className="text-lg font-semibold text-slate-800">
                                Content Section
                            </h2>
                            <p className="text-slate-600">
                                This content is wrapped in the Main component with
                                proper semantic markup and accessibility.
                            </p>
                        </section>
                        
                        <section className="rounded-lg bg-white p-6 shadow-sm">
                            <h2 className="text-lg font-semibold text-slate-800">
                                Another Section
                            </h2>
                            <p className="text-slate-600">
                                The Main component provides a flexible container
                                for your application content.
                            </p>
                        </section>
                    </main>
                </div>
            </Main>
        </div>
    ),
}

export const WithLongContent: Story = {
    args: {
        ariaLabel: 'Long content example',
    },
    render: (args) => (
        <div className="min-h-screen bg-slate-50">
            <Main {...args}>
                <div className="w-full max-w-md space-y-6">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                        <section
                            key={i}
                            className="rounded-lg bg-white p-6 shadow-sm"
                        >
                            <h2 className="text-lg font-semibold text-slate-800">
                                Section {i}
                            </h2>
                            <p className="text-slate-600">
                                This demonstrates the scrollable nature of the Main
                                component when content exceeds the viewport height.
                            </p>
                        </section>
                    ))}
                </div>
            </Main>
        </div>
    ),
}