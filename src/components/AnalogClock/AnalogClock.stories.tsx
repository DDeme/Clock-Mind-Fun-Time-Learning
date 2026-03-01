import type { Meta, StoryObj } from '@storybook/react-vite'
import { AnalogClock } from './AnalogClock'
import { useEffect, useState } from 'react'

const meta = {
    argTypes: {
        hours: {
            control: { max: 12, min: 1, type: 'number' },
            description: 'Hour value (1–12)',
        },
        minutes: {
            control: { max: 59, min: 0, type: 'number' },
            description: 'Minute value (0–59)',
        },
        seconds: {
            control: { max: 59, min: 0, type: 'number' },
            description: 'Minute value (0–59)',
        },
        size: {
            control: { max: 500, min: 100, type: 'number' },
            description: 'Clock diameter in pixels',
        },
    },
    component: AnalogClock,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    title: 'Components/AnalogClock',
} satisfies Meta<typeof AnalogClock>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        hours: 10,
        minutes: 10,
        seconds: 30,
    },
}

export const ThreeOClock: Story = {
    args: {
        hours: 3,
        minutes: 0,
        seconds: 0,
    },
}

export const SixThirty: Story = {
    args: {
        hours: 6,
        minutes: 30,
    },
}

export const TwelveOClock: Story = {
    args: {
        hours: 12,
        minutes: 0,
    },
}

export const QuarterPastNine: Story = {
    args: {
        hours: 9,
        minutes: 15,
    },
}

export const SmallSize: Story = {
    args: {
        hours: 3,
        minutes: 45,
        size: 150,
    },
}

export const LargeSize: Story = {
    args: {
        hours: 7,
        minutes: 20,
        size: 400,
    },
}

export const LiveClock: Story = {
    render: () => {
        const [time, setTime] = useState({
            hours: new Date().getHours(),
            minutes: new Date().getMinutes(),
            seconds: new Date().getSeconds(),
        })
        useEffect(() => {
            const i = setInterval(() => {
                setTime({
                    hours: new Date().getHours(),
                    minutes: new Date().getMinutes(),
                    seconds: new Date().getSeconds(),
                })
                console.log(time)
            }, 1000)
            return () => clearInterval(i)
        })

        return (
            <AnalogClock
                hours={time.hours}
                minutes={time.minutes}
                seconds={time.seconds}
                hideSeconds={false}
            />
        )
    },
}
