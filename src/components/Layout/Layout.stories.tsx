import type { Meta, StoryObj } from '@storybook/react-vite'
import { Layout } from './Layout'

const meta = {
    component: Layout,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    title: 'Components/Layout',
} satisfies Meta<typeof Layout>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        children: (
            <div className="flex flex-1 items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-slate-800">
                        Content Area
                    </h1>
                    <p className="mt-2 text-slate-600">
                        This is where your main content goes.
                    </p>
                </div>
            </div>
        ),
    },
}

export const WithNavigation: Story = {
    args: {
        children: (
            <div className="flex flex-1 items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-slate-800">
                        With Navigation
                    </h1>
                    <p className="mt-2 text-slate-600">
                        This layout includes bottom navigation.
                    </p>
                </div>
            </div>
        ),
        hideNavigation: false,
    },
}

export const WithoutNavigation: Story = {
    args: {
        children: (
            <div className="flex flex-1 items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-slate-800">
                        Without Navigation
                    </h1>
                    <p className="mt-2 text-slate-600">
                        This layout hides the bottom navigation.
                    </p>
                </div>
            </div>
        ),
        hideNavigation: true,
    },
}

export const WithComplexContent: Story = {
    args: {
        children: (
            <div className="space-y-6 p-4">
                <header className="text-center">
                    <h1 className="text-3xl font-bold text-blue-600">
                        Clock Learning App
                    </h1>
                    <p className="mt-2 text-slate-600">
                        Master the art of telling time
                    </p>
                </header>

                <main className="space-y-4">
                    <section className="rounded-lg bg-white p-6 shadow-sm">
                        <h2 className="text-xl font-semibold text-slate-800">
                            Today's Lesson
                        </h2>
                        <p className="mt-2 text-slate-600">
                            Learn to read the hour hand on analog clocks
                        </p>
                        <button className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
                            Start Lesson
                        </button>
                    </section>

                    <section className="rounded-lg bg-white p-6 shadow-sm">
                        <h2 className="text-xl font-semibold text-slate-800">
                            Progress
                        </h2>
                        <div className="mt-2">
                            <div className="h-2 w-full rounded-full bg-slate-200">
                                <div className="h-2 w-3/4 rounded-full bg-blue-500"></div>
                            </div>
                            <p className="mt-1 text-sm text-slate-600">
                                75% Complete
                            </p>
                        </div>
                    </section>
                </main>
            </div>
        ),
    },
}
