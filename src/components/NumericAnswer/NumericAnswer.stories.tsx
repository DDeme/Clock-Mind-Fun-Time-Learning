import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { within, userEvent, expect } from "storybook/test";
import { NumericAnswer } from "./NumericAnswer";

const meta = {
    title: "Components/NumericAnswer",
    component: NumericAnswer,
    tags: ["autodocs"],
    args: {
        onHoursChange: fn(),
        onMinutesChange: fn(),
    },
    parameters: {
        layout: "centered",
    },
    decorators: [
        (Story) => (
            <div style={{ width: 400 }}>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof NumericAnswer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        hoursValue: 0,
        minutesValue: 0,
    },
};

export const WithValues: Story = {
    args: {
        hoursValue: 3,
        minutesValue: 45,
    },
};

export const Empty: Story = {
    args: {
        hoursValue: 0,
        minutesValue: 0,
    },
};

export const SelectHour: Story = {
    args: {
        hoursValue: 0,
        minutesValue: 0,
    },
    play: async ({ canvasElement, args }) => {
        const canvas = within(canvasElement);
        const hourSelect = canvas.getByLabelText("Hours");
        await userEvent.selectOptions(hourSelect, "6");
        await expect(args.onHoursChange).toHaveBeenCalledWith("6");
        await expect(args.onMinutesChange).not.toHaveBeenCalled();
    },
};

export const SelectMinute: Story = {
    args: {
        hoursValue: 0,
        minutesValue: 0,
    },
    play: async ({ canvasElement, args }) => {
        const canvas = within(canvasElement);
        const minuteSelect = canvas.getByLabelText("Minutes");
        await userEvent.selectOptions(minuteSelect, "30");
        await expect(args.onMinutesChange).toHaveBeenCalledWith("30");
        await expect(args.onHoursChange).not.toHaveBeenCalled();
    },
};

export const FullTime: Story = {
    args: {
        hoursValue: 12,
        minutesValue: 55,
    },
};
