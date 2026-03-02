import { Game } from './Game'
import { GameSkeleton } from './Game.skeleton'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof GameSkeleton> = {
    component: GameSkeleton,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    title: 'Components/Game/GameSkeleton',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithGameOverlay: Story = {
    render: () => (
        <div>
            <GameSkeleton />
            <div className="absolute inset-0 opacity-20">
                <Game
                    id="id"
                    questions={[
                        {
                            answer: {
                                options: [
                                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                                    [
                                        0, 5, 10, 15, 20, 25, 30, 35, 40, 45,
                                        50, 55,
                                    ],
                                ],
                                type: 'numeric-answer',
                            },
                            id: '1',
                            question: {
                                questionType: 'analog-clock',
                                text: 'Look at the clock! What time is it?',
                                value: {
                                    hours: 4,
                                    minutes: 35,
                                },
                            },
                            scoreValue: {
                                negativeScore: 0,
                                positiveScore: 30,
                            },
                        },
                    ]}
                    onComplete={() => {}}
                />
            </div>
        </div>
    ),
}

export const WithCustomAnimation: Story = {
    render: () => (
        <div className="space-y-4">
            <div className="text-center text-sm text-gray-600">
                Game Skeleton with loading animation
            </div>
            <GameSkeleton />
        </div>
    ),
}
